---
title: Yarn Plug'n'Play
date: 2018-1-12 12:00:00
coffee: 1
spoiler: Next generation of npm pakcages' manager
time: 4 min
author: linrz
---

## 前言
yarn@1.11 版本中引入了 -pnp 参数，宣告彻底抛弃 node_modules 的一种解决方案 :sunglasses: ，pnp = Plug'n'Play = Plug and Play，意为可插拔的意思，是 yarn 在18年11月份时接受的[101号 RFC 提案](https://github.com/yarnpkg/rfcs/pull/101)，目的在于解决安装依赖的耗时瓶颈，系统的 I/O 时间，我们知道无论是 npm 还是 yarn 亦或是其他的包管理工具，都具备缓存的功能，大多数情况下安装依赖时，其实是将缓存中的相关包复制到项目目录中 node_modules 里。 yarn -pnp 的本质就是为了优化这关键的一步操作，在详细介绍之前，先了解下社区其他的解决方案。

## pnpm
[pnpm](https://pnpm.js.org/) 通过 Hard links（硬链接） 和 symlinks（符号链接） 确保每个不同的包在你的电脑上只会有一个，不会占用额外的存储空间。 Hard links 相当于源文件的副本，但不占用任何空间，sysmlink 可以理解为快捷方式。但这种方式仍然有一些问题，改变硬链接的文件，相当于对源文件进行改变，可能会影响到其他使用这个源文件缓存的项目，另外 Node.js 也无法知道依赖是否通过其他方式比如 yarn link 创建了符号链接。对跨不同文件系统，如 NTFS 与 FAT32 互相操作，无法创建硬链接。最重要的，pnpm 并未减少系统 I/O 操作带来的时间。

## tink
[tink](https://github.com/npm/tink) 和 pnp 差不多同时推出的解决方案，号称下一代包管理器，新增了 package-map.json 映射依赖对应的全局缓存中的路径，但如 README 所说，目前仍然处于开发阶段，不建议大家使用。粗略的看下源码，其思想是对 Node.js 的一些系统层面的 API 如 fs, child_process, module 等模块进行了 override 的操作，这样再寻找依赖时会遵循 tink 制定的规范。

## pnp
pnp 出现的原因主要有两点，第一，当我们 require 一个依赖时，Node.js 只是简单的递归去寻找 node_modules 中对应的包，直到找到匹配的包，如果未找到也不会立刻抛出异常，只在运行时才会发现。第二，是开篇一直提到的，从缓存中复制依赖到项目中的 node_modules 的 I/O 耗时难以优化。pnp的解决方案是彻底抛弃了node_modules，通过一个特殊的模块解析 resolver，将 require 的依赖，指向全局缓存中对应的包，这样可以直接略过 I/O 操作，减少安装依赖的耗时。

深入学习下 pnp 详细的做法，在执行 yarn -pnp 时，会生成 .pnp.js 的文件，举个栗子，我们依赖 lodash ，.pnp.js 里会生成关于 lodash 的映射关系，如下图，将依赖路径映射到全局的目录下。
![pnp-map](http://pmwi2c40m.bkt.clouddn.com/pnp-map.png)

但在实际使用时需要 preload .pnp.js 文件 。
```javascript
// test.js
const lodash = require('lodash');
```

```shell
node -r ./.pnp.js test.js
```
因为这个文件对 Node.js 的 Module 模块做了 monkey patch，修改了如 _load, _resolve , _findPath 等方法等来实现它特殊的依赖 resolver，想了解更多的话，直接 yarn -pnp 到生成的文件里看看究竟，但目前这个机制还是有些可以再改进的细节，比如映射关系是不是用类似 webpack 的 manifest 文件来表示更好，在 yarnrfc 里已有这个提案，希望不久的将来可以实现。

在满缓存的情况下对普通的 yarn 和 yarn -pnp 做一次 benchmark。

![yarn-normarl](http://pmwi2c40m.bkt.clouddn.com/yarn-normal.png)
![pnp](http://pmwi2c40m.bkt.clouddn.com/yarn-pnp.png)

我们可以看到，显著的安装时间减少，除此之外，在未安装一些依赖时也无需等到运行时才会发现，预加载 .pnp.js 时会直接抛错提示开发者。虽然去年11月 Facebook 内部已经开始使用了 pnp 并且没有任何问题，但仍然不推荐在生产环境使用。CI 系统上可以先行试用，可以极大的减少安装依赖的时间。

Yarn Plug'n'Play is future. Let's wait and see ! :beer:
