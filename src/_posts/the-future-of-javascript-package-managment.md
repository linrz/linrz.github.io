---
title: The future of JavaScript package managment
date: 2019-11-10 17:00:00
coffee: 2
spoiler: Yarn pnp/Tink/Entropic
time: 10 min
author: linrz
---


## The future of JavaScript package managment

想简单聊一聊 JavaScript 社区的包管理未来，用了两年多的工作电脑屡次告诉我 256G 的磁盘快满了，每次只好用下 [npkill](https://www.npmjs.com/package/npkill) 清理下不常用项目的 node_modules。一清理就是 20 多个G，不同项目均持有相同的依赖，各自持有复本，占用空间是众所周知很恶心的事情。

![npkil](https://img.lastwhisper.cn/WechatIMG101.png)


某些情况依赖提升也是件恶心的事情，举个栗子，我的项目依赖 a b c，a 和 b 依赖 react@15，c 依赖 react@16，项目里 react@15 会被提升到 node_modules 第一层级，react@16 在 c 的 node_modules 里，但是如果项目本身依赖 react@16，16则会被提升到 node_modules 第一层级，15 则分别在 a 和 b 的 node_modules 里各持有一份，重复占用了空间。归根结底还是 Node.js resolve 策略的问题，曾有人提出是否可以支持自定义 [自定义 resolve 策略 ](https://github.com/nodejs/node/issues/4584)，比如像 Java 的 Maven 一样，全局共用依赖，意图减少空间和 resolve 的查找复杂度，遗憾的是 sindresorhus 回复 module resolutio 提案已进入 lock 阶段。无法在 Node.js 支持掉，各大前端基础工具经过这几年的发展都开发了自己的 resolve 工具，比如 webpack 的 enhanced-resolve，Babel/Jest/Prettier 使用的 resolve 等等，想规避掉层层查找 node_module 带来的复杂度和问题。

令人振奋的是 Yarn/NPM 都提出了下一代包管理器，在前几篇博文中有提到过，Yarn 提出了 pnp，NPM 提出了 Tink，他们都解决了上文所说的重复依赖占用空间和 resolve 查找过于复杂的问题。顺便提一下 PNPM，PNPM 基于 Symbolic link 和 Hard link 解决了这些 99% 的问题，但也带了 1% 的隐患问题，这里不再赘述， arcanis 在 Yarn 的 [RFC](https://github.com/yarnpkg/rfcs/pull/101) 中提到过。

首先我们看 Yarn 的做法，Yarn 在1.12 后加入了对 pnp 的支持，并在不久后发布了 Next 版本 [berry](https://github.com/yarnpkg/berry/)，加入了更多特性，如多 registry 等。但就目前写下这段文字时，已在 pnp 被提出后的一年后。这段时间依然是 arcanis 一个人在孤军奋战。

我们用一句话梗概 pnp 的本质：Reimplementing existing tools' module resolver。使用 pnp 时需要前置加载 .pnp.js 到内存中，覆盖掉 Node.js 的 Module._load/_findPath/_resolveFilename 等方法，使整个项目的依赖查找按照 pnp 的策略执行，实际上就是给 Node.js 打了个热补丁。但大部分前端工具内置了自定义的 resolver，怎么办呢。arcanis 只能一个个兼容掉，我们循着他的 PR 足迹看下前辈的 contribution。

> 2018-10-01  [pnp-webpack-plugin](https://github.com/arcanis/pnp-webpack-plugin) 促使 webpack 支持了 pnp
>
> 2018-11-09 arcanis 意图推动 TypeScript 增加新的 moduleResolution，失败。(这里笔者也赞同 TS 的决定)
>
> 2018-11-16 resolve 支持更方便的 monkey patch https://github.com/browserify/resolve/pull/174
>
> 2018-12-07 arcanis 意图推动 resolve 根据 process.versions.pnp 决定是否内置开启 pnp，失败。https://github.com/browserify/resolve/pull/170
>
> 2019-01-19 ts-loader 支持 resolveModuleNames option
>
> 2019-01-26 husky 支持 pnp(令人开心的是在 arcanis 提 PR 的时候已经有其他前辈提了 PR 支持了 pnp，arcanis 完善了下)
>
> 2019-05-02 create-react-app 支持创建 pnp 项目
>
> 2019-08-01 [rollup-plugin-pnp-resolve](https://github.com/arcanis/rollup-plugin-pnp-resolve) 促使 rollup 支持了 pnp
>
> …..



看完这些，不禁让人怀疑四处打补丁的 pnp 是否能成为下一代包管理器的正统？还有无穷无尽的对 JavaScript 生态自实现了 resolve 的兼容性的 PR。



我们看看 NPM 提出的 [Tink](https://github.com/npm/tink)，它更为大胆提出了 runtime virtual node_modules 的概念，甚至内置了支持编译 .jsx/.esm/.ts 。但翻阅源码发现目前的支持程度对大型项目比起来犹如婴儿蹒跚学步，实质是上 Module._compile 相关方法打了补丁，内置支持不暴露给开发者构建反而更加麻烦。在 2019 年 JSCONF EU 上提出会被集成到 NPM@8，是亲儿子的待遇没错了。但你打开 tink 仓库会发现最后一次提交的代码时间还在 三月份。

![tink-commit](https://img.lastwhisper.cn/WechatIMG102.png)
![tink-issue](https://img.lastwhisper.cn/WechatIMG103.png)

另外更重要的是 zkat 从 NPM 离职跑路了，目前来看并没人接手她的工作。zkat 在 JSCONF EU 上演讲完离职后转头在 Twitter 上发表了她认为 Entropic 才是包管理器未来的看法，当时我就震惊了。


![zkat-twitter](https://img.lastwhisper.cn/WechatIMG104.png)

我们看看 [Entropic](https://github.com/entropic-dev/entropic) 是何方神圣，能让 NPM 的首席开发工程师放弃自己的产品支持它。NPM 一开始是个开源组织后面变成了商业公司，Entropic 的开发人员担心 NPM 会对流量控制，毕竟维护服务器也是一笔不小的开销，担心演变成某网盘开会员才不限制下载速度这种。所有 Entropic 提出了去中心化的思想，访问在其他节点的包需要对应自己账号的秘钥，具体大家可以自己本地跑起来尝试下。



然后 Entropic 担心只是个噱头项目，距离最后一次代码提交已是八月份。论坛上讨论，issues等也没人处理。

![entropic-commit](https://img.lastwhisper.cn/WechatIMG105.png)



目前来看，Yarn pnp/Tink/Entropic 都只是个暂时的方案，下一代包管理器究竟咋样还需要社区的发展和演进。理想的方案是 Node.js 支持自定义模块解析策略，这样方便包管理器直接告诉 Node.js 去哪儿去寻找项目的依赖，但这个不太可能，是幻想。如果可以成为正统，何须 pnp 和 Tink 在 fs/module/… 模块打补丁，或许也是影响力未到，目前 Node.js 这方面的需求太少。不管怎么说还是致敬 arcanis，感谢他一直在推动包管理的发展。