import{_ as a,c as t,a2 as e,o as l}from"./chunks/framework.DRc6tsBz.js";const r="/assets/image-20220323231930688.DR_cjuji.webp",i=JSON.parse('{"title":"【Design Principles】LVGL中的一些设计原则","description":"","frontmatter":{"title":"【Design Principles】LVGL中的一些设计原则","categories":"Software","tags":["Design Principles"],"sidebar":false,"prev":false,"next":false,"comments":true,"date":"2022-03-21T20:25:53.000Z"},"headers":[],"relativePath":"posts/2022/03_21_LVGL中的一些设计原则.md","filePath":"posts/2022/03_21_LVGL中的一些设计原则.md","lastUpdated":1713886889000}');const o=a({name:"posts/2022/03_21_LVGL中的一些设计原则.md"},[["render",function(a,i,o,s,n,d){return l(),t("div",null,i[0]||(i[0]=[e('<h1 id="lvgl中的一些设计原则" tabindex="-1">LVGL中的一些设计原则 <a class="header-anchor" href="#lvgl中的一些设计原则" aria-label="Permalink to &quot;LVGL中的一些设计原则&quot;">​</a></h1><blockquote><p>上上周在改一个框架，当然，是基于别人的框架来改，改了两天之后发现有点不太对劲，把原有框架的拓展性改没了。然后就去重新刷了下设计原则。当然，我们的框架不需要太多的拓展性，因为太多的拓展性意会让使用的难度变大，这些就是满大街的大而全的通用框架，面向的是能用的场景；我们框架的目标可能就是对特殊场景的优化，然后让人简单的设置就能用起来。</p></blockquote><h2 id="软件设计七大原则" tabindex="-1">软件设计七大原则 <a class="header-anchor" href="#软件设计七大原则" aria-label="Permalink to &quot;软件设计七大原则&quot;">​</a></h2><table tabindex="0"><thead><tr><th>设计原则</th><th>定义</th><th>目的</th></tr></thead><tbody><tr><td><strong>开闭原则</strong></td><td>对扩展开放，对修改关闭</td><td>降低维护带来的新风险</td></tr><tr><td><strong>依赖倒置原则</strong></td><td>高层不应该依赖低层，要依赖于抽象，不要依赖于具体实现（面向接口编程）</td><td>更利于代码结构的升级扩展</td></tr><tr><td><strong>单一职责原则</strong></td><td>一个类只干一件事，实现类要单一</td><td>便于理解，提高代码的可读性</td></tr><tr><td><strong>接口隔离原则</strong></td><td>一个接口只干一件事，接口要精简单一</td><td>功能解耦，高聚合、低耦合</td></tr><tr><td><strong>迪米特法则</strong></td><td>最少知识原则，不该知道的不要知道，一个类应该保持对其它对象最少的了解，降低耦合度</td><td>只和朋友交流，不和陌生人说话，减少代码臃肿</td></tr><tr><td><strong>里氏替换原则</strong></td><td>不要破坏继承体系，子类重写方法功能发生改变，不应该影响父类方法的含义</td><td>防止继承泛滥</td></tr><tr><td><strong>合成复用原则</strong></td><td>尽量使用组合或者聚合关系实现代码复用，少使用继承</td><td>降低代码耦合</td></tr></tbody></table><h2 id="设计原则和设计模式的关系" tabindex="-1">设计原则和设计模式的关系 <a class="header-anchor" href="#设计原则和设计模式的关系" aria-label="Permalink to &quot;设计原则和设计模式的关系&quot;">​</a></h2><h3 id="设计模式分类" tabindex="-1">设计模式分类： <a class="header-anchor" href="#设计模式分类" aria-label="Permalink to &quot;设计模式分类：&quot;">​</a></h3><ul><li><strong>创建型模式</strong>：工厂模式、抽象工厂模式、单例模式、建造者模式、原型模式</li><li><strong>结构型模式</strong>：适配器模式、桥接模式、过滤器模式、组合模式、装饰器模式、外观模式、享元模式、代理模式</li><li><strong>行为型模式</strong>：责任链模式、命令模式、解释器模式、迭代器模式、中介者模式、备忘录模式、观察者模式、状态模式、空对象模式、策略模式、模板模式、访问者模式</li></ul><h3 id="关系" tabindex="-1">关系： <a class="header-anchor" href="#关系" aria-label="Permalink to &quot;关系：&quot;">​</a></h3><p>设计模式是设计原则的应用、实现。设计原则是底层原则、是根本；设计模式里面的套路用了设计原则。简单的讲，你写的代码可以没有使用设计模式，但一定不能没有设计原则</p><h2 id="c语言和面向对象" tabindex="-1">C语言和面向对象 <a class="header-anchor" href="#c语言和面向对象" aria-label="Permalink to &quot;C语言和面向对象&quot;">​</a></h2><h3 id="先讨论下c" tabindex="-1">先讨论下C++ <a class="header-anchor" href="#先讨论下c" aria-label="Permalink to &quot;先讨论下C++&quot;">​</a></h3><p>C++作者：Bjarne Stroustrup</p><img src="/assets/image-20220321164258684.D8VHQc8O.webp" style="zoom:20%;"><p>C++是一个多范式的语言；包括支持面向对象，也被有人称为“C with Classes”；</p><p><strong>CFront</strong>：C++原始的编译器，作用把C++代码转成C代码；为啥叫CFront？在C的编译器前面加了一个编译器，把C++代码通过CFront转成C代码，然后用C编译器去编译生成程序</p><img src="/assets/image-20220321165435232.CGEw2PkZ.webp" style="zoom:40%;"><h3 id="面向对象" tabindex="-1">面向对象： <a class="header-anchor" href="#面向对象" aria-label="Permalink to &quot;面向对象：&quot;">​</a></h3><h3 id="问题-c-中的高级特性如何在c中表示" tabindex="-1">问题：C++中的高级特性如何在C中表示？ <a class="header-anchor" href="#问题-c-中的高级特性如何在c中表示" aria-label="Permalink to &quot;问题：C++中的高级特性如何在C中表示？&quot;">​</a></h3><ul><li>类里面的函数真的属于这个Class吗？<code>sizeof()</code></li><li>类中的<code>this</code>怎么来的？语法糖而已；有些语言会显示写<code>self</code>（Python、Rust）</li><li>类调用成员函数是怎么回事？语法糖，和调用普通全局函数并没有什么区别</li></ul><img src="/assets/image-20220322004626246.D9Bd5Ygo.webp" style="zoom:540%;"><h3 id="c-的虚函数、java的interface-rust的trait" tabindex="-1">C++的虚函数、Java的Interface，Rust的Trait <a class="header-anchor" href="#c-的虚函数、java的interface-rust的trait" aria-label="Permalink to &quot;C++的虚函数、Java的Interface，Rust的Trait&quot;">​</a></h3><p>父类定义接口，然后子类有不同的实现，在实际运行的时候会调用不同的子类实现， 下图中的接口函数本质上是一个函数指针变量，在使用时指定了不同的子类的实现的函数</p><img src="/assets/image-20220323232530466.DWbIXFYv.webp" style="zoom:50%;"><h2 id="设计原则和lvgl" tabindex="-1">设计原则和LVGL <a class="header-anchor" href="#设计原则和lvgl" aria-label="Permalink to &quot;设计原则和LVGL&quot;">​</a></h2><h3 id="s单一职责" tabindex="-1">S单一职责： <a class="header-anchor" href="#s单一职责" aria-label="Permalink to &quot;S单一职责：&quot;">​</a></h3><p><strong>一个类只负责完成一个职责或者功能</strong></p><ul><li>目录的命名</li><li>源代码文件的命名</li></ul><h3 id="依赖倒置原则" tabindex="-1"><strong>依赖倒置原则</strong>： <a class="header-anchor" href="#依赖倒置原则" aria-label="Permalink to &quot;**依赖倒置原则**：&quot;">​</a></h3><p><strong>定义</strong>：高层不应该依赖低层，要依赖于抽象，不要依赖于具体实现（面向接口编程）</p><p><strong>目的</strong>：更利于代码结构的<strong>升级扩展</strong></p><blockquote><p>问题：依赖于<strong>抽象</strong>？这里的<strong>抽象</strong>指的是什么？</p></blockquote><h4 id="lvgl中扩展使用" tabindex="-1">LVGL中扩展使用： <a class="header-anchor" href="#lvgl中扩展使用" aria-label="Permalink to &quot;LVGL中扩展使用：&quot;">​</a></h4><ul><li>lvgl如何显示到不同的屏幕？</li><li>lvgl如何获取不同屏幕的点击坐标？</li><li>lvgl如何显示不同格式的图片？</li></ul><h4 id="lvgl如何显示到不同的屏幕" tabindex="-1">lvgl如何显示到不同的屏幕? <a class="header-anchor" href="#lvgl如何显示到不同的屏幕" aria-label="Permalink to &quot;lvgl如何显示到不同的屏幕?&quot;">​</a></h4><h5 id="框架怎么写" tabindex="-1">框架怎么写？ <a class="header-anchor" href="#框架怎么写" aria-label="Permalink to &quot;框架怎么写？&quot;">​</a></h5><ol><li>xxx</li><li>xxx</li><li>显示到屏幕（估计就会写死）</li><li>xxx</li></ol><img src="'+r+'" style="zoom:40%;"><h5 id="改完后" tabindex="-1">改完后？ <a class="header-anchor" href="#改完后" aria-label="Permalink to &quot;改完后？&quot;">​</a></h5><ol><li>LVGL框架定义接口：<code>void (*flush_cb)(struct _disp_drv_t * disp_drv, const lv_area_t * area, lv_color_t * color_p);</code><ul><li>我框架内部会在需要的时候去调这个函数</li><li>把对应的数据给你：哪块区域的屏幕要刷新<code>area</code>，以及这块区域对应的数据值<code>color_p</code></li></ul></li><li>对应的拓展自己去处理数据：通过SDL刷到屏幕；通过Framebuffer刷到屏幕：和不同平台，实现相关</li></ol><h4 id="lvgl如何获取不同屏幕的点击坐标" tabindex="-1">lvgl如何获取不同屏幕的点击坐标？ <a class="header-anchor" href="#lvgl如何获取不同屏幕的点击坐标" aria-label="Permalink to &quot;lvgl如何获取不同屏幕的点击坐标？&quot;">​</a></h4><h5 id="框架怎么写-1" tabindex="-1">框架怎么写？ <a class="header-anchor" href="#框架怎么写-1" aria-label="Permalink to &quot;框架怎么写？&quot;">​</a></h5><ol><li>xxx</li><li>xxx</li><li>获取屏幕点击的坐标（估计就又会写死）</li><li>xxx</li></ol><img src="'+r+'" style="zoom:40%;"><h5 id="改完后-1" tabindex="-1">改完后？ <a class="header-anchor" href="#改完后-1" aria-label="Permalink to &quot;改完后？&quot;">​</a></h5><ol><li>LVGL框架定义接口：<code>bool (*read_cb)(struct _lv_indev_drv_t * indev_drv, lv_indev_data_t * data);</code><ul><li>我框架内部会在需要的时候去调这个函数</li><li>我框架把这个结构体指针<code>data</code>给你：你负责把对应点击的坐标填进去，然后我框架内部要用（传递到对应控件的点击回调函数）</li></ul></li><li>具体的实现如何去填充数据</li></ol><p>上面两者的区别：</p><ul><li>显示：一个是把数据给你，实现负责去使用这些数据</li><li>点击：我把结构休指针给你，实现负责把数据填充进去</li></ul><h4 id="lvgl如何显示不同格式的图片" tabindex="-1">lvgl如何显示不同格式的图片？ <a class="header-anchor" href="#lvgl如何显示不同格式的图片" aria-label="Permalink to &quot;lvgl如何显示不同格式的图片？&quot;">​</a></h4><p>通过实现图片解码器，实现对应函数回调。步骤同上......</p><h4 id="现实生活-公司做项目的例子" tabindex="-1">现实生活：公司做项目的例子 <a class="header-anchor" href="#现实生活-公司做项目的例子" aria-label="Permalink to &quot;现实生活：公司做项目的例子&quot;">​</a></h4><ul><li>依赖反转前：我领导依赖于我，我的任务完成了，他的项目才能算完成</li><li>依赖反转后：我领导提出标准，提供对应的资源；我拿到标准和资源，然后去实现</li></ul><img src="/assets/image-20220324000531092.DPrOQNJy.webp" style="zoom:40%;"><p>一开始领导依赖于我的工作，他的任务就算完成；我依赖于我领导给的标准和资源去完成这个任务；另外的一个变化是：对于前者，你的领导可能会控制你的细节（不能用这个，得用那个；不能这样搞，要那样搞）；对于后者，我领导就成了标准的制定者</p><h4 id="抽象的定义" tabindex="-1">抽象的定义： <a class="header-anchor" href="#抽象的定义" aria-label="Permalink to &quot;抽象的定义：&quot;">​</a></h4><ul><li>需要对业务有足够的了解，对问题抽象 <ul><li>回调中的参数：能够实现拓展；不要出现冗余的参数</li></ul></li><li>抽象标准的要求 <ul><li>Android的UI线程：死循环不停的去调回调，用户写的ui代码，用户写的事件代码；这些代码得满足一定的要求，比如说：不能卡太久；你卡住了，我内部的死循环就被这个卡死</li></ul></li></ul><h2 id="references" tabindex="-1">References: <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References:&quot;">​</a></h2><ul><li>SOLID：<a href="https://en.wikipedia.org/wiki/SOLID" target="_blank" rel="noreferrer">https://en.wikipedia.org/wiki/SOLID</a></li><li>SOLID 设计原则文章：<a href="https://segmentfault.com/a/1190000023114300" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000023114300</a></li><li>CFront：<a href="https://en.wikipedia.org/wiki/Cfront" target="_blank" rel="noreferrer">https://en.wikipedia.org/wiki/Cfront</a></li><li>Modern C：<a href="https://www.manning.com/books/modern-c" target="_blank" rel="noreferrer">https://www.manning.com/books/modern-c</a></li><li><a href="https://segmentfault.com/a/1190000039013794" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000039013794</a></li></ul>',57)]))}]]);export{i as __pageData,o as default};
