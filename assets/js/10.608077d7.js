(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{439:function(t,a,r){"use strict";r.r(a);var e=r(49),s=Object(e.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("最近遇到了工作以来最难推动的事儿，前端各个应用开始补齐单测，开年回来开始做这件事儿，到现在约一个半月，十个应用代码的行覆盖率平均才到了30%，采取的模式是 Jest + Enzyme，写过的同学应该都知道只是渲染一下，覆盖率已经可以达到一小半了。尽管在行动前已经沟通过需要按核心用例去写，但这一个半月的补齐单测的行动大多数都是判断渲染是否成功的单测，运行起来味如嚼蜡，毫无意义。")]),t._v(" "),r("p",[t._v("\b回过头来思考一下为什么大家不喜欢写页面的单测呢 🤔，笔者从自身出发列了下面几点：")]),t._v(" "),r("h5",{attrs:{id:"缺少专门的写单测时间，相当于压缩业余时间干更多的事情"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缺少专门的写单测时间，相当于压缩业余时间干更多的事情","aria-hidden":"true"}},[t._v("#")]),t._v(" 缺少专门的写单测时间，相当于压缩业余时间干更多的事情")]),t._v(" "),r("p",[t._v("当你在承受较高的需求吞吐率的时，假设是瀑布流的开发模式，一个项目刚进入提测阶段，可能另一个项目的评审已经开始了，没有硬性要求覆盖率达到阈值才允许发布的情况下，鲜有开发同学会挤时间去些单测，有这时间，为什么不闭目养神歇一会儿呢。")]),t._v(" "),r("h5",{attrs:{id:"没有得到开发同学发自心底的认可，看不见短期的回报"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#没有得到开发同学发自心底的认可，看不见短期的回报","aria-hidden":"true"}},[t._v("#")]),t._v(" 没有得到开发同学发自心底的认可，看不见短期的回报")]),t._v(" "),r("p",[t._v("由于一直是零单元测试的生态，改动了什么地方，会不会影响到其他地方，纯粹靠人的经验。大部分开发同学没有尝到依赖单元测试避免线上问题的甜头，与其为可能屎一样的老代码写单测，还不如学点其他东西，看下业界最新动态呢。")]),t._v(" "),r("h5",{attrs:{id:"页面改动频繁，增加维护成本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#页面改动频繁，增加维护成本","aria-hidden":"true"}},[t._v("#")]),t._v(" 页面改动频繁，增加维护成本")]),t._v(" "),r("p",[t._v("没有单测前，改个需求，修个 bug，超起键盘一把梭子验证好就上线，有了后可能导致单测挂掉，需要同步修改，还需要等待 Jenkins 的 CI 执行报告，拖沓了节奏。")]),t._v(" "),r("h5",{attrs:{id:"大团队的自驱力不够，期望和重视程度没有高度对齐"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#大团队的自驱力不够，期望和重视程度没有高度对齐","aria-hidden":"true"}},[t._v("#")]),t._v(" 大团队的自驱力不够，期望和重视程度没有高度对齐")]),t._v(" "),r("p",[t._v("一个优秀的技术产品，大多数是六七个人的小团队做出来的，自驱力和执行力极高。人多会导致需要规范各种流程甚至编码风格，需要增加交流沟通成本等等。做事情很难只是靠一句话一个通知就可以达到预期的效果，甚至需要一些手段去催促去检验结果。如果将补齐单测这件事情和绩效挂钩，大家加班补齐也会完成目标，但无疑会破坏团队的氛围，是极其不可取的。")]),t._v(" "),r("p",[t._v("所以，为了拿到补齐单测的结果，如何去解决上面的问题呢 🤔")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("和 PM 团队沟通，项目开发需要加上前端单测的估时，排期时不要忽略这部分工作量的时间，倒排及特殊情况再商议。")])]),t._v(" "),r("li",[r("p",[t._v("和测试团队沟通，各种日常发布，项目发布把关下是否补齐了单测，发出测试也在注重这件事情的信号，具体的阈值等观察一段时间后再定下来。")])]),t._v(" "),r("li",[r("p",[t._v("集成单测相关的动作到 pre-commit, pre-push 的 hooks 中，包括发布单时标注此次的 CI 报告。流程又臭又长是为了保证规范和减少犯错，这是无可避免的，培养开发同学去习惯去适应。")])]),t._v(" "),r("li",[r("p",[t._v("\b提高团队自驱力和执行力较难，是个长期的过程，目前可行方案还是先带动一小批个人自我驱动较强的同学，再慢慢辐射影响到周边。")])])])])},[],!1,null,null,null);a.default=s.exports}}]);