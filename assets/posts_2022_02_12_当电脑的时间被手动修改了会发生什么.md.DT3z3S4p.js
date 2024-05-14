import{_ as a,c as e,o as t,a4 as r}from"./chunks/framework.s8d9Ue88.js";const o=JSON.parse('{"title":"【Work】当电脑的时间被手动修改了会发生什么？","description":"","frontmatter":{"title":"【Work】当电脑的时间被手动修改了会发生什么？","categories":"Work","tags":["Work"],"sidebar":false,"prev":false,"next":false,"comments":true,"date":"2022-02-12T22:27:10.000Z"},"headers":[],"relativePath":"posts/2022/02_12_当电脑的时间被手动修改了会发生什么.md","filePath":"posts/2022/02_12_当电脑的时间被手动修改了会发生什么.md","lastUpdated":1713886889000}'),s={name:"posts/2022/02_12_当电脑的时间被手动修改了会发生什么.md"},i=[r('<h1 id="当电脑的时间被手动修改了会发生什么" tabindex="-1">当电脑的时间被手动修改了会发生什么？ <a class="header-anchor" href="#当电脑的时间被手动修改了会发生什么" aria-label="Permalink to &quot;当电脑的时间被手动修改了会发生什么？&quot;">​</a></h1><blockquote><p>上周同事遇到了一个bug，程序中使用了一个线程等待函数<code>int pthread_cond_timedwait(pthread_cond_t *restrict cond, pthread_mutex_t *restrict mutex, const struct timespec *restrict abstime);</code>，而其中最后一个参数<code>struct timespec</code>是个时间点。引发bug的原因是另一个程序把系统的时间改了，使得这个线程卡在那里一直等待。</p></blockquote><p><strong>那如果我把电脑上的时间手动改成了一年前，会发生什么？测试记录下</strong></p><h2 id="mail邮箱中的账号需要我重新去登录" tabindex="-1">Mail邮箱中的账号需要我重新去登录 <a class="header-anchor" href="#mail邮箱中的账号需要我重新去登录" aria-label="Permalink to &quot;Mail邮箱中的账号需要我重新去登录&quot;">​</a></h2><img src="/assets/image-20210102080433136.Dl8JiqzU.webp" style="zoom:50%;"><h2 id="calendar日历应用提示" tabindex="-1">Calendar日历应用提示 <a class="header-anchor" href="#calendar日历应用提示" aria-label="Permalink to &quot;Calendar日历应用提示&quot;">​</a></h2><img src="/assets/image-20210102080901798.DF4yfqS4.webp" style="zoom:50%;"><h2 id="safari和google-chrome浏览器禁止我打开网页-并提示我电脑的时间错了" tabindex="-1">Safari和Google Chrome浏览器禁止我打开网页，并提示我电脑的时间错了 <a class="header-anchor" href="#safari和google-chrome浏览器禁止我打开网页-并提示我电脑的时间错了" aria-label="Permalink to &quot;Safari和Google Chrome浏览器禁止我打开网页，并提示我电脑的时间错了&quot;">​</a></h2><p>也能访问，它的提示是让我明白有风险。</p><img src="/assets/image-20210102080215885.DQVqGuz9.webp" style="zoom:50%;"><h2 id="某些付费软件-试用过期现在又能用了" tabindex="-1">某些付费软件，试用过期现在又能用了 <a class="header-anchor" href="#某些付费软件-试用过期现在又能用了" aria-label="Permalink to &quot;某些付费软件，试用过期现在又能用了&quot;">​</a></h2><p>🙀🙀🙀惊喜呀</p><img src="/assets/image-20210102081542447.D3EXOSnq.webp" style="zoom:50%;"><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>上面有些是应该访问网络，同步数据证书的问题；软件试用过期的应该也是记录了时间点，到时间点才过期。 核心问题是：如何去解决这些问题？同事遇到的bug，以及软件试用过期还能用的问题。首先能不能不依赖这个时间点；然后，如果必需依赖的话还可能需要做额外的校验，或者用其它的机制去保证</p>',15)];const l=a(s,[["render",function(a,r,o,s,l,c){return t(),e("div",null,i)}]]);export{o as __pageData,l as default};
