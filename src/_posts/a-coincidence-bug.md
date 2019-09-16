---
title: 一个机缘巧合的 bug
date: 2019-09-16 15:50:00
coffee: 1
spoiler: emm...
time: 4 min
author: linrz
---

中秋节前的最后一个工作日的晚上，同事突然和我说有个 css 文件打包完没传到 cdn 上去，其他 js css 文件都自动传上去了。
有点震惊，第一反应是打包机器上没生成这个文件，细看了下打包日志是有的，登到机器上也是有这个 css 文件的，
一路跟踪到 cdn 的包发现把这个 css 文件识别为了 video/mp2t 类型的文件了，和后缀名不一样阻止了上传。

css 外链在[这里](http://img.lastwhisper.cn/test.css)。

```css
._2PGf0jspAi_j4kPchLai3f{display:flex;justify-content:flex-start;align-items:center;margin-bottom:10px}._2PGf0jspAi_j4kPchLai3f .stage-item{padding-top:5px;line-height:1;text-align:center}._2PGf0jspAi_j4kPchLai3f .stage-item__indicator{display:block;width:20px;height:20px;margin:0 auto;border-radius:50%;text-align:center;line-height:20px;font-size:12px;background-color:#155bd4;color:#fff}._2PGf0jspAi_j4kPchLai3f .stage-item__name{margin-top:10px;font-size:12px}._2PGf0jspAi_j4kPchLai3f .stage__arrow{position:relative;box-sizing:content-box;width:45px;height:2px;margin:14px 17px 0 10px;align-self:flex-start;background-color:#38f}._2PGf0jspAi_j4kPchLai3f .stage__arrow:after{content:"";position:absolute;top:50%;left:100%;width:0;height:0;margin-top:-6px;border:solid transparent;border-left:solid #38f;border-width:6px 0 6px 7px}._1st9tZWOTTVEsG6xGsMBgZ .auto-handle__control{margin-top:10px}._1st9tZWOTTVEsG6xGsMBgZ .auto-handle__input{display:inline-block;margin-right:10px;margin-bottom:0}._1st9tZWOTTVEsG6xGsMBgZ .auto-handle__input .zent-input{width:100%;min-width:0}._1st9tZWOTTVEsG6xGsMBgZ .auto-handle__input .retail-form__controls{width:60px;overflow:visible}._1st9tZWOTTVEsG6xGsMBgZ .auto-handle__input .retail-form__input-normal,._1st9tZWOTTVEsG6xGsMBgZ .auto-handle__input .retail-form__number-input-normal,._1st9tZWOTTVEsG6xGsMBgZ .auto-handle__input .retail-form__select-normal{width:auto}._1st9tZWOTTVEsG6xGsMBgZ .auto-handle__input .retail-form__error-desc{white-space:nowrap}._1st9tZWOTTVEsG6xGsMBgZ .auto-handle__select{margin-bottom:0;margin-right:10px}._1st9tZWOTTVEsG6xGsMBgZ .auto-handle__select .retail-form__controls{width:80px;overflow:visible}._1st9tZWOTTVEsG6xGsMBgZ .auto-handle__select .retail-form__error-desc{white-space:nowrap}._1st9tZWOTTVEsG6xGsMBgZ .auto-handle__list{margin-left:10px}._26IN1KgKwuC-8Ke2AWLQMd{min-width:350px}._26IN1KgKwuC-8Ke2AWLQMd hr{margin:5px 0;border:none;border-bottom:1px solid #d9d9d9}._26IN1KgKwuC-8Ke2AWLQMd .stage-help__desc{font-size:12px;color:#999}._26IN1KgKwuC-8Ke2AWLQMd .retail-form__control-group-label{width:auto}._26IN1KgKwuC-8Ke2AWLQMd .auto-handle{margin-top:10px}._26IN1KgKwuC-8Ke2AWLQMd .auto-handle-switch__control,._26IN1KgKwuC-8Ke2AWLQMd .on-switch__control{margin-bottom:0;vertical-align:middle}._3y7sb0SRH3jy04vT8SwvdB{max-width:300px}._3ay_Klg6rEZWa9QDGWnmKm{display:block}._3ay_Klg6rEZWa9QDGWnmKm .lifecycle-field-row{margin-bottom:30px}._2w74Sl2jmM-ZIs0rGMCXFC{margin-top:10px}._2w74Sl2jmM-ZIs0rGMCXFC .sync-item{display:flex;margin-bottom:20px;line-height:1;font-size:14px}._2w74Sl2jmM-ZIs0rGMCXFC .sync-item:last-child{margin-bottom:0}._2w74Sl2jmM-ZIs0rGMCXFC .sync-item__label{width:45px;border-right:1px solid #e5e5e5;margin-right:20px}._2JD-or1FCe_3hu_6UY1o8d .lifecycle-field-group{margin-bottom:0}._2JD-or1FCe_3hu_6UY1o8d .no-auth-alert{margin:15px}
```

看了下源码是怎么识别文件类型的，一看原来是 sindresorhus 写的 [file-type](https://github.com/sindresorhus/file-type/)，也是读 buffer 根据文件头判断的，目前[最新的提交代码](https://github.com/sindresorhus/file-type/blob/2f696447cdec530223ae0f8db4e871c8312922ee/index.js)第 856 行

```js
check([0x47], {offset: 4}) && (check([0x47], {offset: 192}) || check([0x47], {offset: 196}))
```
当满足这个条件时即被认为是 mp2t 文件，check 函数的功能是校验文件头，符合定义即是对应文件。

我们再看维基百科对 [mp2t](https://zh.wikipedia.org/wiki/MPEG2-TS) 文件的定义:
> 每个TS分组以固定的同步字节起始，这个同步字节的值为0x47，它也是TS分组头的一部分。TS分组的必选头长度为4字节，其后为可选部分，为载荷或适配域。TS分组的头部固定以大端序读写。TS分组长度为188字节。

值为 0x47， 长度为 4 字节，是不是瞬间懂了，写个 demo 验证下

![file-code](http://img.lastwhisper.cn/file-code.png)
![file-result](http://img.lastwhisper.cn/file-result.png)

确实如此，那后面校验第 192 位和 196 位又是为什么呢，192 个人猜测是分组长度加上固定的头长度四字节，用上面的代码改下 index 确实也是 0x47。转成字符后是 `G`，上面的 css 第 4 位即第 5 个字符确实是 G，第 193 个字符也确实 G，经过 css module 混淆过后的 class 名字前后的位置上恰巧都是 G，emmm...

还有个或的条件是 196 位，再看维基百科也是有相关说明：
> MPEG-2 TS原本的设计用途是数字电视广播，不过后来用在数字摄像机、录像机、播放机上。用于非广播类用途时，其TS分组格式有所不同：在分组上增加了4个字节长的时间码（Time Code），使分组长度变为192字节

所以这个判断条件也是没问题的。这个 bug 由于两个位置恰巧都满足了条件被误判为 mp2t 文件实在是巧合，有点啼笑皆非 :sweat_smile: