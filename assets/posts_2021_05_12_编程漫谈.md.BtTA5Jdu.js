import{_ as a,c as e,o as r,a4 as t}from"./chunks/framework.s8d9Ue88.js";const o=JSON.parse('{"title":"【Personal】编程漫谈","description":"","frontmatter":{"title":"【Personal】编程漫谈","categories":"Personal","next":false,"tags":null,"sidebar":false,"prev":false,"comments":true,"date":"2021-05-12T22:12:10.000Z"},"headers":[],"relativePath":"posts/2021/05_12_编程漫谈.md","filePath":"posts/2021/05_12_编程漫谈.md","lastUpdated":1713284123000}'),l={name:"posts/2021/05_12_编程漫谈.md"},h=[t('<h1 id="编程漫谈" tabindex="-1">编程漫谈 <a class="header-anchor" href="#编程漫谈" aria-label="Permalink to &quot;编程漫谈&quot;">​</a></h1><h2 id="插件化" tabindex="-1">插件化 <a class="header-anchor" href="#插件化" aria-label="Permalink to &quot;插件化&quot;">​</a></h2><p>在接触计算机的时候,使用的都是特定功能的软件,定制化的软件;后来用了Google Chrome / Android studio,可以装很多的插件,使得功能得到了拓展,插件化才tm是软件原本应该有的样子; 后来用使用VSCode,它不提供相应功能(语法检查,智能提示,补全功能,转跳,格式化...)的实现,让插件来实现.把自己做成了一个插件化的平台,把标准和规范写好.回头想想,操作系统也是一个插件化的平台,上面跑着用户各自的程序(插件)</p><h2 id="程序执行流程" tabindex="-1">程序执行流程 <a class="header-anchor" href="#程序执行流程" aria-label="Permalink to &quot;程序执行流程&quot;">​</a></h2><p>循序/选择/循环,能解决所有程序的流程问题</p><h2 id="函数重载" tabindex="-1">函数重载 <a class="header-anchor" href="#函数重载" aria-label="Permalink to &quot;函数重载&quot;">​</a></h2><p>函数重载在表象上是两个同名的函数,在程序内部,根本不会存在两个同名的函数,编译器会在编译里对相应的函数做处理(转换),转换成两个不同名的函数</p><h2 id="面向对象" tabindex="-1">面向对象 <a class="header-anchor" href="#面向对象" aria-label="Permalink to &quot;面向对象&quot;">​</a></h2><p>编程本质上是为了给一个问题建模: 如何去解决问题?</p><p>可能一开始关注的问题是,做那些步骤能解决问题,</p><h2 id="泛型" tabindex="-1">泛型 <a class="header-anchor" href="#泛型" aria-label="Permalink to &quot;泛型&quot;">​</a></h2><p>程序员偷懒的范例:为了减少程序员编写的代码量;实质会去给你生成不同类型对应的代码</p><h2 id="多态" tabindex="-1">多态 <a class="header-anchor" href="#多态" aria-label="Permalink to &quot;多态&quot;">​</a></h2><p>对函数指针的一个包装,屏蔽了直接去使用函数指针的弊端</p><h2 id="闭包" tabindex="-1">闭包 <a class="header-anchor" href="#闭包" aria-label="Permalink to &quot;闭包&quot;">​</a></h2><p>如果不太理解这东西,可以尝试用匿名对象去理解,匿名对象包含一个函数,而捕获的这些变量会有对应的 匿名类成员,捕获后会将这些值赋值给类成员</p><h2 id="channel" tabindex="-1">Channel <a class="header-anchor" href="#channel" aria-label="Permalink to &quot;Channel&quot;">​</a></h2><p>现在很多新的语言里面都有了channel; 这是需求推动语言改进的一个体现,生产者-消费者模型的大量使用</p>',18)];const n=a(l,[["render",function(a,t,o,l,n,i){return r(),e("div",null,h)}]]);export{o as __pageData,n as default};
