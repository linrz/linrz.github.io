---
title: yarn@berry
date: 2019-03-20 19:30:00
coffee: 1
spoiler: Yarn's future and beyond
time: 4 min
author: linrz
---

Node.js 生态中，最喜欢的包管理器还是 yarn 了，yarn 的核心开发者 arcanis 在一月份时提出了对 yarn 文来的展望，有一些很有意思的 Feature，可以窥见 yarn 的野心。

## Plugin system
yarn 会提供插件化的系统支持，在 resolution/fetch/link 等步骤中可以运行插件的业务逻辑，举个栗子，`yarn@berry` 内置的 [plugin-github](https://github.com/yarnpkg/berry/tree/master/packages/plugin-github) 支持 github 的地址，类似 `https://github.com/${username}/${reponame}/archive/${branch}.tar.gz` 作为依赖，当然也支持任意的 url，plugin-http 会帮我们完成依赖的下载安装解析等步骤。

## CLI
由于上文提到的插件化，yarn 不在是一个单纯的包管理器，不需要解析 package.json，可以引用 yarn 中相关的 api 完成一些操作，笔者暂未做过实验，这里暂不讨论具体用法。

## Lockfile
yarn.lock 的格式会改成 YAML 格式的子集，并且会把 resolved 原来的绝对路径替换成相对的，这对开发者切换 registry 更加友好。
```
wrappy@1:
  version "1.0.2"
  resolved "https://registry.yarnpkg.com/wrappy/-/wrappy-1.0.2.tgz#b5243d8f3ec1aa35f1364605bc0d1036e30ab69f"

wrappy@1:
  version "1.0.2"
  resolved "/wrappy/-/wrappy-1.0.2.tgz#b5243d8f3ec1aa35f1364605bc0d1036e30ab69f"
```

## Flow => TypeScript
Flow 再次惨遭亲爹抛弃，`yarn@berry` 用 typecript 进行了重写，这会对第三方的维护者更加友好。

## Scripts underlying system
不需要在 package.json 的 scripts 中使用类似 cross_env 的命令了，yarn 会默认使用一个轻量级的支持 POSIX 标准的 shell。

## Tar => Zip
缓存文件的格式从 tar 切换成 zip，zip 的随机访问速度会更快，另外笔者猜测可能是减少下缓存文件大小的体积，毕竟用 tar 打出来的文件是比原来大小要大的，zip 会有 toc 更方便，随机访问 zip 包中的某个文件夹只需要在 toc 中找到存放的文字，直接跳过去即可。

## Better for monorepo
run / add 相关的命令不再不需 cd 到一个个子 package 目录下执行。

## More

可以戳[这里](https://github.com/yarnpkg/yarn/issues/6953)阅读 arcanis 在 issue 区讨论的原文。

## How to try yarn@berry
1. 升级 yarn@1.15，这个版本加入了 berry 的 policy
2. 打开你的一个项目
3. `yarn policies set-version nightly`
4. `yarn policies set-version berry`  🛬

如果想恢复到 yarn v1，把项目根目录下生成的 .yarnrc 文件删除即可。 
Let's try berry ! :sunglasses:
