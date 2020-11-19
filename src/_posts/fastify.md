---
title: Fastify
date: 2017-11-05 12:00:00
coffee: 1
spoiler: One of the fastest web frameworks in Node.js ecosystem.
time: 4 min
author: linrz
---

最近 [Fastify](https://github.com/fastify/fastify) 这个 Node.js 框架忽然出现在大家的视野中，号称处理请求的速度超过老牌框架 Express/Koa/Hapi 等。

研究下 Fastify 的黑科技，两大特性，一个是 JSON 的输出快，另一个是中间件模型做了对象池化处理。

## JSON 处理
在序列化这块，Fastify 使用了 JSON Schema 机制，提前预定义类型，节省类型判断，遍历的开销，虽然生成的 JSON 字符串是 JS 代码，但速度比原生 JSON.stringify 快了两倍多，推测经过 JIT 的优化，比起原生实现也差不了多少。举个雏形的代码实现，并做一次 Benchmark 。

```javascript
function build(schema) {
  let code = `
    let json ='{'
  `
  Object.keys(schema.properties).forEach((key, i, a) => {
    const type = schema.properties[key].type
    code += `
      json += '"${key}":'
    `
    
    switch (type) {
      case 'string':
        code += `
          json += '""' + obj.${key} + '"'
        `
        break;
      case 'integer':
        code += `
          json += '' + obj.${key}
        `
        break;
      default:
        throw new Error(`${type} unsupported`)
    }

    if (i < a.length - 1) {
      code += 'json += \',\''
    }
  })

  code += `
    json+='}'
    return json
  `
  return new Function('obj', code)
}
```
![bencharmk](https://img.lastwhisper.cn/fastify-benchmark.png)

## 对象池化
比较像设计模式中的享元模式，对对象做复用。每次有新的请求进来，Koa 是创建了 Context 对象作为上下文。在请求量较大的时候，Context 频繁被创建和回收。对象池化就是为了尽量避免创建回收的开销，类似线程池。重复使用同一个对象可以降低 GC 的压力，如果生命周期较短，作为年轻代被 GC 回收的情况会大大减少，生命周期长可以避免晋升为老年代。源码的处理如下：
```javascript
function reusify (Constructor) {
  let head = new Constructor()

  function get () {
    let current = head

    if (current.next) {
      head = current.next
    } else {
      head = new Constructor()
    }

    current.next = null

    return current
  }

  function release (obj) {
    head.next = obj
  }

  return {
    get: get,
    release: release
  }
}
```
十几行代码很精简，享元模式的大部分状态都可以外部化，而在 Fastify 中是怎么用的呢，在中间件的使用上，Fastify 传入了一个叫 Holder 的构造函数进去，它包含了 Request, Response, Context等对象，并还有一个 Done 方法，Done 方法里重置了对象的属性。中间件运行的时候会从 reusify(Holder) 即这个对象池中 get 出来当前对象,如果有下一个要运行的中间件，会将当前上下文对象向下走。直到出错或中间件走到尽头将对象release掉。所以每来一个请求，从池中取出对象，初始化，然后调用 Done 方法 Release 掉还原对象。具体中间件运行的源码可以点[这里](https://github.com/fastify/middie/blob/master/middie.js)，至我写下这段文字这里只有20个 star，reusify 也只有43个 star。

除去 Fastify 框架而看，确实两个 Repo 代码并没有惊艳的地方，放在一起加上 JSON Schema 着实提高了它的性能，基于 JSON Schema 的 Stringfiy 的 Repo 的Star 蛮多的有四百多个。按照 Repo 里的 benchmark 测试了一下，模拟高 CPU 负载下的表现，分别循环一亿次斐波那契求值到30，50，然而实际的表现是不池化的代码更快一点。

![reuse](https://img.lastwhisper.cn/reuse-benchmark.png)

还有一个值得一提的是fastify的路由系统基于基数树实现，而 Koa/Express是基于layer将path转成正则进行匹配，这方面也提高了一点性能。