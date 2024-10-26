import{_ as e,c as l,a2 as a,o as s}from"./chunks/framework.DRc6tsBz.js";const t=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"lang/rust/13. Functional Language Features: Iterators and Closures.md","filePath":"lang/rust/13. Functional Language Features: Iterators and Closures.md","lastUpdated":1715180821000}');const r=e({name:"lang/rust/13. Functional Language Features: Iterators and Closures.md"},[["render",function(e,t,r,n,i,o){return s(),l("div",null,t[0]||(t[0]=[a('<ul><li>闭包(<em>Closures</em>)，一个可以储存在变量里的类似函数的结构</li><li>迭代器(<em>Iterators</em>)，一种处理元素序列的方式</li><li>如何使用这些功能来改进第十二章的 I/O 项目。</li><li>这两个功能的性能。(剧透警告: 他们的速度超乎你的想象!)</li></ul><h2 id="closures" tabindex="-1">Closures <a class="header-anchor" href="#closures" aria-label="Permalink to &quot;Closures&quot;">​</a></h2><p>一种可以捕获外部变量的的匿名函数</p><p>Rust 根据其如何使用环境中变量来推断我们希望如何引用环境</p><ul><li>所有闭包都能被调用一次，所以所有闭包都实现了FnOnce</li><li>那些并没有移动被捕获变量的所有权到闭包内的闭包也实现了FnMut</li><li>而不需要对被捕获的变量进行可变访问的闭包则也实现了Fn</li><li>显示指定实现FnOnce，在闭包前加上<code>move</code>关键字，比如多线程中</li></ul><p>闭包和函数的区别: 闭包能<code>捕获外部变量</code></p><p>move关键字:值捕获</p><p>闭包的本质:匿名结构休</p><p>Fn/FnMut/FnOnce:指的是匿名结构体中,函数self的类型,对应&amp;self/&amp;mut self/self</p><ul><li>消费适配器(<em>consuming adaptors</em>)</li><li>迭代器适配器(<em>iterator adaptors</em>)</li></ul><p>iter</p><p>sum</p><p>map</p><p>collect</p><p>filter</p><p>zip</p>',16)]))}]]);export{t as __pageData,r as default};
