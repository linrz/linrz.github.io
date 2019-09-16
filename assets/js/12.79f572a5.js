(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{437:function(s,t,e){"use strict";e.r(t);var a=e(40),n=Object(a.a)({},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"样式覆盖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#样式覆盖","aria-hidden":"true"}},[s._v("#")]),s._v(" 样式覆盖")]),s._v(" "),e("p",[s._v("使用 styled-components 后渲染成 HTML 的结果如下图：\n"),e("img",{attrs:{src:"http://img.lastwhisper.cn/styled-components-render.png",alt:""}})]),s._v(" "),e("p",[s._v("一个通用的组件大多是不需要进行样式覆盖的，即使需要覆盖也会支持 props className 的，但是使用 styled-compoents 就烦心了，产品可能会找到我说，哎呀，这个地方能不能调宽点，对着代码随机生成，每次刷新会\b变化的，只能使用 "),e("code",[s._v("div[class^=sc-]")]),s._v("\b这种选择器将就一下，样式覆盖由于 "),e("code",[s._v("inline-style")]),s._v(" 的优先级和styled-components 无规律的命名方式变得难以操作")]),s._v(" "),e("h2",{attrs:{id:"可读性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可读性","aria-hidden":"true"}},[s._v("#")]),s._v(" 可读性")]),s._v(" "),e("p",[s._v("随便拿团队里使用的一个栗子，一眼望过去，你觉得哪些是 styled-compoents 哪些是自定义的 components 呢？\n"),e("img",{attrs:{src:"http://img.lastwhisper.cn/styled-components-example.png",alt:"styled-components-example"}})]),s._v(" "),e("p",[s._v("实际上图中的的\b所有组件都是 styled-components，可以约定以 "),e("Styledxxx"),s._v(" 开头，但总觉得有点烦恼呀")],1),s._v(" "),e("h2",{attrs:{id:"性能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能","aria-hidden":"true"}},[s._v("#")]),s._v(" 性能")]),s._v(" "),e("p",[s._v("styled-compoents 无法分离静态css文件，所有的样式需要等待浏览器解析完styled-compoents后才开始渲染。\n导致渲染瓶颈卡在这个点上，我做了一个实验，相同的情况下，使用css和styled-compoents渲染进行性能比较。可能你会觉得css天生比styled-compoents渲染占优势，所以这里贴近业务，挑选一个常见的筛选表单加表格的页面来做实验，统计了下这种页面的节点数有 1824 个，我们取 1000 数量级，通过 Chrome Devtools 进行渲染性能比较，如下图\n"),e("img",{attrs:{src:"http://img.lastwhisper.cn/use-styled-components.png",alt:"use-sc"}}),s._v(" "),e("img",{attrs:{src:"http://img.lastwhisper.cn/use-sass.png",alt:"use-sass"}})]),s._v(" "),e("p",[s._v("简单的\b统计了十次人肉结果，采用 css 的方案时间在 300-400 区间，采用 styled-compoents 时间在 600-700 左右。")]),s._v(" "),e("h2",{attrs:{id:"不支持一些工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不支持一些工具","aria-hidden":"true"}},[s._v("#")]),s._v(" 不支持一些工具")]),s._v(" "),e("p",[s._v("不支持 stylelint 和 postcss 类似的插件\b完善，有点\b难受。")])])},[],!1,null,null,null);t.default=n.exports}}]);