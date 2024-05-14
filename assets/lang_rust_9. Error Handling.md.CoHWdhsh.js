import{_ as a,c as e,o as r,a4 as t}from"./chunks/framework.s8d9Ue88.js";const l=JSON.parse('{"title":"错误处理","description":"","frontmatter":{},"headers":[],"relativePath":"lang/rust/9. Error Handling.md","filePath":"lang/rust/9. Error Handling.md","lastUpdated":1715180821000}'),n={name:"lang/rust/9. Error Handling.md"},i=[t('<h1 id="错误处理" tabindex="-1">错误处理 <a class="header-anchor" href="#错误处理" aria-label="Permalink to &quot;错误处理&quot;">​</a></h1><p>分类：</p><ul><li>可恢复的错误<code>recoverable</code>，对应<code>Result&lt;T, E&gt;</code>类型</li><li>不可恢复的错误<code>unrecoverable</code>，对应<code>panic!</code>宏</li></ul><h2 id="panic-与不可恢复的错误" tabindex="-1"><strong>panic!</strong> 与不可恢复的错误 <a class="header-anchor" href="#panic-与不可恢复的错误" aria-label="Permalink to &quot;**panic!** 与不可恢复的错误&quot;">​</a></h2><h2 id="result-与可恢复的错误" tabindex="-1"><strong>Result</strong> 与可恢复的错误 <a class="header-anchor" href="#result-与可恢复的错误" aria-label="Permalink to &quot;**Result** 与可恢复的错误&quot;">​</a></h2><h3 id="匹配不同的错误" tabindex="-1">匹配不同的错误 <a class="header-anchor" href="#匹配不同的错误" aria-label="Permalink to &quot;匹配不同的错误&quot;">​</a></h3><h3 id="失败时-panic-的简写-unwrap-和-expect" tabindex="-1">失败时 <strong>panic</strong> 的简写: <strong>unwrap</strong> 和 <strong>expect</strong> <a class="header-anchor" href="#失败时-panic-的简写-unwrap-和-expect" aria-label="Permalink to &quot;失败时 **panic** 的简写: **unwrap** 和 **expect**&quot;">​</a></h3><p>unwrap:如果 Result 值是成员 Ok ， unwrap 会返回 Ok 中的值。如果Result 是成员 Err ， unwrap 会为我们调用 panic!</p><p>expect 与 unwrap 的使用方式一样:返回Ok或调用 panic! 宏。 expect 用来调用panic! 的错误信息将会作为参数传递给 expect</p><h3 id="传播错误" tabindex="-1">传播错误 <a class="header-anchor" href="#传播错误" aria-label="Permalink to &quot;传播错误&quot;">​</a></h3><p>谁来处理错误的问题:调用都来处理还是在调用中去处理</p><h3 id="传播错误的简写-运算符" tabindex="-1">传播错误的简写: <code>?</code> 运算符 <a class="header-anchor" href="#传播错误的简写-运算符" aria-label="Permalink to &quot;传播错误的简写: `?` 运算符&quot;">​</a></h3><ul><li>如果Result的值是Ok，这个表达式将会返回Ok中的值而程序将继续执行。</li><li>如果值是 Err，Err中的值将作为整个函数的返回值，就好像使用了<code>return</code>关键字一样，这样错误值就被传播给了调用者。</li></ul><p>一个函数中可能有多个不同的错误，如何转换？</p><p>问号运算符：<code>?</code> 运算符所使用的错误值被传递给了from函数，它定义于标准库的<code>From</code> trait 中，其用来将错误从一种类型转换为另 一种类型。当 ? 运算符调用from函数时，收到的错误类型被转换为定义为当前函数返回的错误类型。</p><p>这在当一个函数返回一个错误类型来代表所有可能失败的方式时很有用，即使其可能会因很多种原因失败。只要每一个错误类型都实现了 from 函数来定义如将其转换为返回的错误类型， ? 运算符会自动处理这些转换</p><h3 id="运算符可被用于返回-result-的函数" tabindex="-1"><strong>?</strong> 运算符可被用于返回 <strong>Result</strong> 的函数 <a class="header-anchor" href="#运算符可被用于返回-result-的函数" aria-label="Permalink to &quot;**?** 运算符可被用于返回 **Result** 的函数&quot;">​</a></h3><p>main特殊性,有两种返回值类型:</p><ul><li>()</li><li>Result&lt;T,E&gt;</li></ul><h3 id="panic-还是不-panic" tabindex="-1"><strong>panic!</strong> 还是不 <strong>panic!</strong> <a class="header-anchor" href="#panic-还是不-panic" aria-label="Permalink to &quot;**panic!** 还是不 **panic!**&quot;">​</a></h3><ul><li><p>示例、代码原型和测试都非常适合 <strong>panic</strong></p></li><li><p>当我们比编译器知道更多的情况</p></li><li><p>错误处理指导原则</p><ul><li>有害状态并不包含 预期 会偶尔发生的错误</li><li>之后的代码的运行依赖于处于这种有害状态</li><li>当没有可行的手段来将有害状态信息编码进所使用的类型中的情况</li></ul></li><li><p>创建自定义类型进行有效性验证 guessing_game2</p></li></ul>',21)];const o=a(n,[["render",function(a,t,l,n,o,c){return r(),e("div",null,i)}]]);export{l as __pageData,o as default};
