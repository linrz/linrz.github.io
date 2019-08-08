---
title: 为什么我不喜欢 styled-components
date: 2018-5-14 20:00:00
coffee: 1
spoiler: 几个小吐槽的点
time: 2 min
author: linrz
---

## 样式覆盖

使用 styled-components 后渲染成 HTML 的结果如下图：
![](http://img.lastwhisper.cn/styled-components-render.png)  

一个通用的组件大多是不需要进行样式覆盖的，即使需要覆盖也会支持 props className 的，但是使用 styled-compoents 就烦心了，产品可能会找到我说，哎呀，这个地方能不能调宽点，对着代码随机生成，每次刷新会变化的，只能使用 `div[class^=sc-]`这种选择器将就一下，样式覆盖由于 `inline-style` 的优先级和styled-components 无规律的命名方式变得难以操作

## 可读性
随便拿团队里使用的一个栗子，一眼望过去，你觉得哪些是 styled-compoents 哪些是自定义的 components 呢？
![styled-components-example](http://img.lastwhisper.cn/styled-components-example.png)

实际上图中的的所有组件都是 styled-components，可以约定以 <Styledxxx /> 开头，但总觉得有点烦恼呀

## 性能
styled-compoents 无法分离静态css文件，所有的样式需要等待浏览器解析完styled-compoents后才开始渲染。
导致渲染瓶颈卡在这个点上，我做了一个实验，相同的情况下，使用css和styled-compoents渲染进行性能比较。可能你会觉得css天生比styled-compoents渲染占优势，所以这里贴近业务，挑选一个常见的筛选表单加表格的页面来做实验，统计了下这种页面的节点数有 1824 个，我们取 1000 数量级，通过 Chrome Devtools 进行渲染性能比较，如下图
![use-sc](http://img.lastwhisper.cn/use-styled-components.png)
![use-sass](http://img.lastwhisper.cn/use-sass.png)

简单的统计了十次人肉结果，采用 css 的方案时间在 300-400 区间，采用 styled-compoents 时间在 600-700 左右。

## 不支持一些工具
不支持 stylelint 和 postcss 类似的插件完善，有点难受。