import{_ as e,c as a,o as i,a4 as t}from"./chunks/framework.modO5lJZ.js";const r=JSON.parse('{"title":"【Rust】CS 110L: Safety in Systems Programming记录","description":"","frontmatter":{"title":"【Rust】CS 110L: Safety in Systems Programming记录","categories":"Rust","tags":["Rust"],"sidebar":false,"prev":false,"next":false,"comments":true,"date":"2022-02-28T23:01:59.000Z"},"headers":[],"relativePath":"posts/2022/02_28_CS-110L-Safety-in-Systems-Programming.md","filePath":"posts/2022/02_28_CS-110L-Safety-in-Systems-Programming.md","lastUpdated":1713284123000}'),l={name:"posts/2022/02_28_CS-110L-Safety-in-Systems-Programming.md"},s=[t('<h1 id="cs-110l-safety-in-systems-programming记录" tabindex="-1">CS 110L: Safety in Systems Programming记录 <a class="header-anchor" href="#cs-110l-safety-in-systems-programming记录" aria-label="Permalink to &quot;CS 110L: Safety in Systems Programming记录&quot;">​</a></h1><blockquote><p>前两周刷了下斯坦福公开课：CS 110L: Safety in Systems Programming，笔记记录下</p></blockquote><p><strong>课程地址：</strong></p><ul><li>2020 B站搬运：<a href="https://www.bilibili.com/video/BV1Ra411A7kN" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1Ra411A7kN</a></li><li>2020：<a href="https://reberhardt.com/cs110l/spring-2020/" target="_blank" rel="noreferrer">https://reberhardt.com/cs110l/spring-2020/</a></li><li>2021：<a href="https://reberhardt.com/cs110l/spring-2021/" target="_blank" rel="noreferrer">https://reberhardt.com/cs110l/spring-2021/</a></li><li>2022：<a href="https://web.stanford.edu/class/cs110l/" target="_blank" rel="noreferrer">https://web.stanford.edu/class/cs110l/</a></li></ul><h2 id="program-analysis程序分析" tabindex="-1">Program Analysis程序分析 <a class="header-anchor" href="#program-analysis程序分析" aria-label="Permalink to &quot;Program Analysis程序分析&quot;">​</a></h2><p>How can we find bugs in a program?</p><ul><li>Dynamic Analysis</li><li>Fuzzing test</li><li>Static Analysis</li></ul><h3 id="dynamic-analysis动态分析" tabindex="-1">Dynamic Analysis动态分析 <a class="header-anchor" href="#dynamic-analysis动态分析" aria-label="Permalink to &quot;Dynamic Analysis动态分析&quot;">​</a></h3><ul><li>Valgrind</li><li>LLVM Sanitizers <ul><li>AddressSanitizer：out of bounds memory accesses, double free, use after free</li><li>LeakSanitizer：memory leaks</li><li>MemorySanitizer：use of uninitialized memory</li><li>UndefinedBehaviorSanitizer：usage of null pointers, integer/float overflow, etc</li><li>ThreadSanitizer：improper usage of threads</li></ul></li></ul><h3 id="fuzzing-test模糊测试" tabindex="-1">Fuzzing test模糊测试 <a class="header-anchor" href="#fuzzing-test模糊测试" aria-label="Permalink to &quot;Fuzzing test模糊测试&quot;">​</a></h3><ul><li>Most common fuzzers: <a href="https://github.com/google/AFL" target="_blank" rel="noreferrer">AFL</a> and <a href="https://llvm.org/docs/LibFuzzer.html" target="_blank" rel="noreferrer">libfuzzer</a></li><li>Google <a href="https://github.com/google/oss-fuzz" target="_blank" rel="noreferrer">OSS-Fuzz</a></li></ul><h3 id="static-analysis静态分析" tabindex="-1">Static Analysis静态分析 <a class="header-anchor" href="#static-analysis静态分析" aria-label="Permalink to &quot;Static Analysis静态分析&quot;">​</a></h3><ul><li>Common C/C++ linter: <a href="https://clang.llvm.org/extra/clang-tidy/" target="_blank" rel="noreferrer">clang-tidy</a></li><li>Dataflow analysis</li></ul><h2 id="memory-safety-in-rust" tabindex="-1">Memory Safety in Rust <a class="header-anchor" href="#memory-safety-in-rust" aria-label="Permalink to &quot;Memory Safety in Rust&quot;">​</a></h2><h3 id="题外话-语言和编译器" tabindex="-1">题外话：语言和编译器 <a class="header-anchor" href="#题外话-语言和编译器" aria-label="Permalink to &quot;题外话：语言和编译器&quot;">​</a></h3><ul><li>在C和C++中，我们通过推理和测试来知道内存错误</li><li>语言和编译器没有帮助我们太多</li><li>为了更容易地推理程序，Rust 对您可以编写的程序进行了一些限制 <ul><li>这可能很烦。。。</li><li>但它也给了我们一些很好的保证！</li></ul></li></ul><blockquote><p>Note：这个“很烦”，是对于那边不理解内部（内存）发生了什么的人而言的。会让不知道自己在干什么的程序员不出能运行的代码</p></blockquote><h3 id="常见内存问题" tabindex="-1">常见内存问题： <a class="header-anchor" href="#常见内存问题" aria-label="Permalink to &quot;常见内存问题：&quot;">​</a></h3><ul><li>Memory Leaks</li><li>Double Frees</li><li>Dangling Pointers</li><li>Iterator Invalidation</li></ul><h3 id="什么是良好的代码" tabindex="-1">什么是良好的代码？ <a class="header-anchor" href="#什么是良好的代码" aria-label="Permalink to &quot;什么是良好的代码？&quot;">​</a></h3><ul><li>前置/后置条件对于将代码分解为具有明确定义的接口的小块至关重要</li><li>开发者的职责则是维护好这些前置/后置条件</li></ul><h3 id="良好的内存管理" tabindex="-1">良好的内存管理 <a class="header-anchor" href="#良好的内存管理" aria-label="Permalink to &quot;良好的内存管理&quot;">​</a></h3><ul><li>在任何复杂的程序中，内存应该释放在哪里？ <ul><li>释放得太早，代码的其他部分可能仍在使用指向该内存的指针，会有Dangling Pointers</li><li>如果没有在任何地方释放，会有Memory Leaks</li></ul></li><li>良好的C/C++代码将清楚地定义内存是如何传递的，以及&quot;谁&quot;负责清理内存</li><li>如果您阅读C/C++代码，您将在注释中看到“所有权”的概念，其中“所有者”负责内存</li></ul><h3 id="type-systems类型系统" tabindex="-1">Type systems类型系统 <a class="header-anchor" href="#type-systems类型系统" aria-label="Permalink to &quot;Type systems类型系统&quot;">​</a></h3><h3 id="ownership所有权" tabindex="-1">Ownership所有权 <a class="header-anchor" href="#ownership所有权" aria-label="Permalink to &quot;Ownership所有权&quot;">​</a></h3><h3 id="borrowing借用" tabindex="-1">Borrowing借用 <a class="header-anchor" href="#borrowing借用" aria-label="Permalink to &quot;Borrowing借用&quot;">​</a></h3><h3 id="ownership-rules所有权规则" tabindex="-1"><a href="https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#ownership-rules" target="_blank" rel="noreferrer">Ownership Rules</a>所有权规则 <a class="header-anchor" href="#ownership-rules所有权规则" aria-label="Permalink to &quot;[Ownership Rules](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#ownership-rules)所有权规则&quot;">​</a></h3><p>First, let’s take a look at the ownership rules. Keep these rules in mind as we work through the examples that illustrate them:</p><ul><li>Each value in Rust has a variable that’s called its <em>owner</em>.</li><li>There can only be one owner at a time.</li><li>When the owner goes out of scope, the value will be dropped.</li></ul><blockquote><p>The ownership and borrowing rules are enforced at compile time!</p></blockquote><h3 id="takeaways" tabindex="-1">Takeaways <a class="header-anchor" href="#takeaways" aria-label="Permalink to &quot;Takeaways&quot;">​</a></h3><ul><li>在rust里面，每一块内存都由一个变量/函数&quot;拥有&quot; <ul><li>所有权在代码中都是“显示的”（对比C/C++，“所有权”的描述在函数描述中）</li><li>当所有者出了scope范围，编译器会插入代码去释放内存</li></ul></li><li>因为有了所有权模型，你就不会犯如下错误： <ul><li>Memory leaks</li><li>Double frees</li><li>Use-after-frees</li><li>Other memory errors — next class!</li></ul></li></ul><h2 id="ownership-continued" tabindex="-1">Ownership Continued <a class="header-anchor" href="#ownership-continued" aria-label="Permalink to &quot;Ownership Continued&quot;">​</a></h2><h3 id="ownership" tabindex="-1">Ownership <a class="header-anchor" href="#ownership" aria-label="Permalink to &quot;Ownership&quot;">​</a></h3><h3 id="ownership-in-memory" tabindex="-1">Ownership in Memory <a class="header-anchor" href="#ownership-in-memory" aria-label="Permalink to &quot;Ownership in Memory&quot;">​</a></h3><ul><li>当我们到达范围的末尾（由大括号指定）时，将调用<code>Drop</code>函数。</li><li>可以认为这是一个特殊函数，可以正确释放整个对象</li><li>类似于C++中的析构函数</li><li>具有 Rust Drop 特征的类型，有要调用的 Drop 函数</li></ul><h3 id="clone-function" tabindex="-1">Clone function <a class="header-anchor" href="#clone-function" aria-label="Permalink to &quot;Clone function&quot;">​</a></h3><ul><li><p>在rust中，有些值不会使用堆上的内存，他们直接存放在栈上（整型，布尔型，其他...）</p></li><li><p>对于这些类型，赋值拷贝是全拷贝</p></li><li><p>当赋值时，那些只需要栈上存储的对象，默认一般会被拷贝</p></li><li><p>Types with this property have the <strong>Copy</strong> trait.</p></li><li><p>Instead of transferring ownership, ‘=‘ operator for assignment (e.g., <code>let ryan = julio</code>) will create a copy</p></li><li><p>如果类型实现了 <strong>Copy</strong> trait, Rust不会让它实现 <strong>Drop</strong> trait</p></li></ul><h3 id="borrowing" tabindex="-1">Borrowing <a class="header-anchor" href="#borrowing" aria-label="Permalink to &quot;Borrowing&quot;">​</a></h3><h3 id="variables-rules-in-rust" tabindex="-1">Variables Rules in Rust <a class="header-anchor" href="#variables-rules-in-rust" aria-label="Permalink to &quot;Variables Rules in Rust&quot;">​</a></h3><ul><li>在Rust，所有数据片段（变量）默认都是不可变的</li><li>相当于每个变量都隐式的加了<code>cosnt</code>（只给数据所需要的权限）</li><li>这<code>mut</code> 关键字用来指定这个数据的变量能改变，和<code>const</code>相反</li><li>如果变量没有<code>mut</code>关键字，并且你修改了这个数据，Rust的编译器不会让你编译通过</li></ul><h3 id="borrowing-type-references" tabindex="-1">&quot;Borrowing Type&quot; == References <a class="header-anchor" href="#borrowing-type-references" aria-label="Permalink to &quot;&quot;Borrowing Type&quot; == References&quot;">​</a></h3><h3 id="code-immutable-mutable-references" tabindex="-1">Code: Immutable + Mutable References <a class="header-anchor" href="#code-immutable-mutable-references" aria-label="Permalink to &quot;Code: Immutable + Mutable References&quot;">​</a></h3><h3 id="references-rules" tabindex="-1">References Rules <a class="header-anchor" href="#references-rules" aria-label="Permalink to &quot;References Rules&quot;">​</a></h3><ul><li>对于不可变引用：在scope内，可以同时有多个不可变引用</li><li>对于可变引用：在scope内，同时只能有一个可变引用</li></ul><blockquote><p>Note: 如果你创建了一个reference, 这个原始的变量是：</p><ul><li>如果这个引用是可变的：原始变量会暂时不可用</li><li>如果这个引用是不可变的：原始变量会暂时不可变？？？怎么理解，不是本来就不能变吗？也还有其它情况：内部可变</li></ul></blockquote><h3 id="回顾" tabindex="-1">回顾： <a class="header-anchor" href="#回顾" aria-label="Permalink to &quot;回顾：&quot;">​</a></h3><ul><li>使用所有权和借用规则，可以避免很多内存错误</li><li>编译器对代码会有很多限制，对程序员的要求高，写程序时会与编译器做斗争</li></ul><h2 id="error-handling" tabindex="-1">Error Handling <a class="header-anchor" href="#error-handling" aria-label="Permalink to &quot;Error Handling&quot;">​</a></h2><h3 id="issues" tabindex="-1">Issues <a class="header-anchor" href="#issues" aria-label="Permalink to &quot;Issues&quot;">​</a></h3><ul><li>缺乏适当的错误处理</li><li>使用 NULL 代替实际值</li></ul><h3 id="error-handling-in-c" tabindex="-1">Error handling in C <a class="header-anchor" href="#error-handling-in-c" aria-label="Permalink to &quot;Error handling in C&quot;">​</a></h3><ul><li>如果函数可能遇到错误，则其返回类型为 int（有时为 void*）</li><li>如果函数成功，则返回 0。否则，如果遇到错误，则返回 -1</li><li>遇到错误的函数将全局变量 errno 设置为指示出错之处的整数。如果调用方看到函数返回 -1 或 NULL，它可以检查 errno 以查看遇到什么错误</li></ul><h3 id="关键点" tabindex="-1">关键点： <a class="header-anchor" href="#关键点" aria-label="Permalink to &quot;关键点：&quot;">​</a></h3><ul><li>不同的返回值可能性表示成功+不同类型的错误</li><li>错误都记录在文档页面和/或标题注释中</li><li>所有这些都只是整数</li><li>调用者必须记得处理所有情况</li></ul><h3 id="error-handling-in-c-and-many-other-languages" tabindex="-1">Error-handling in C++(and many other languages) <a class="header-anchor" href="#error-handling-in-c-and-many-other-languages" aria-label="Permalink to &quot;Error-handling in C++(and many other languages)&quot;">​</a></h3><h4 id="exceptions" tabindex="-1">Exceptions <a class="header-anchor" href="#exceptions" aria-label="Permalink to &quot;Exceptions&quot;">​</a></h4><p><strong>对 C 样式错误处理的重大改进：</strong></p><ul><li>不必在调用可能产生错误的函数时每次编写错误传播代码</li><li>错误不会被忽视或遗漏</li></ul><h3 id="error-handling-in-rust-enums" tabindex="-1">Error handling in Rust: Enums <a class="header-anchor" href="#error-handling-in-rust-enums" aria-label="Permalink to &quot;Error handling in Rust: Enums&quot;">​</a></h3><p>更好的错误处理: Enums</p><ul><li>枚举(enumeration) 是一种可以包含多个<em>变体</em>之一的类型</li><li>Rust：<em>match</em> 表达式就像 C/C++/Java 中的 switch 语句，除了必须涵盖所有可能的变体</li><li>如果您只对少数几种错误情况感兴趣，可以使用默认绑定来捕获所有其他情况</li><li>与大多数常见语言中的枚举不同，Rust 枚举可以存储任意数据!</li><li>You can extract data from variants using a <strong>match</strong> expression:</li></ul><h3 id="error-handling-in-rust-result" tabindex="-1">Error handling in Rust：Result <a class="header-anchor" href="#error-handling-in-rust-result" aria-label="Permalink to &quot;Error handling in Rust：Result&quot;">​</a></h3><ul><li>如果我们使用枚举来清楚地表示成功的返回/错误会怎样？ <ul><li>如果这个函数运行成功，返回OK(value)</li><li>如果有错误发生，返回Err(some error object)</li></ul></li></ul><h3 id="comparison-to-c-errors" tabindex="-1">Comparison to C errors <a class="header-anchor" href="#comparison-to-c-errors" aria-label="Permalink to &quot;Comparison to C errors&quot;">​</a></h3><ul><li>在C错误处理方面遇到了两个主要问题: <ul><li>太容易遗漏错误</li><li>正确的错误处理过于冗长</li></ul></li><li>这解决了第一个问题：现在从函数签名中可以明显看出哪些函数可以返回错误，并且（由于枚举规则）编译器将验证您是否对返回的错误执行了某些操作</li><li>第二个问题仍然是一个问题</li></ul><h3 id="meet-the-operator" tabindex="-1">Meet the ? operator <a class="header-anchor" href="#meet-the-operator" aria-label="Permalink to &quot;Meet the ? operator&quot;">​</a></h3><ul><li>假设我们有个函数：<code>helper_function() -&gt; Result&lt;T, E&gt;</code></li><li><code>let val: T = helper_function()?</code>是什么意思: <ul><li>如果<code>helper_function</code> 返回成功Ok(some value)，提取这个值设置给<code>val</code></li><li>如果<code>helper_function</code> 返回失败Err(some error), 停止并返回/传播该错误</li></ul></li></ul><h3 id="panics" tabindex="-1">Panics <a class="header-anchor" href="#panics" aria-label="Permalink to &quot;Panics&quot;">​</a></h3><ul><li>什么样的错误，我们不希望去传递或处理？ <ul><li>严重的、无法恢复的错误</li><li>们预计不会发生的错误，并且不想将精力投入到处理中</li></ul></li><li><code>panic</code>宏会使程序立马崩溃，同时携带一些信息</li><li>当返回成功时，<code>Result::unwrap()</code> 和 <code>Result::expect()</code> 允许我们去提取Ok中的值，如果返回Err，则会panic</li></ul><h3 id="unwrap-and-expect" tabindex="-1"><code>unwrap()</code> and <code>expect()</code> <a class="header-anchor" href="#unwrap-and-expect" aria-label="Permalink to &quot;`unwrap()` and `expect()`&quot;">​</a></h3><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// File::open returns Result: Ok(file) or Err(error)</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Unwrap means:</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// - “if result is Ok: store value inside enum in `file`</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// - “if result is Err (opening file failed): panic (crash program)” // Panic if opening a file fails:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> mut</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> file </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> File</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(filename)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unwrap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// `expect` is the same as `unwrap`, but allows you to print a</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// more descriptive error message when panicking.</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> mut</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> file </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> File</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(filename)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Failed to open file&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// One more example with `expect` — panic with a helpful error message</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// if reading from standard input fails. (Nothing to return here.)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> mut</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> input </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> String</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">io</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stdin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">read_to_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;mut</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> input)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Failed to read from stdin”);</span></span></code></pre></div><h3 id="handling-nulls" tabindex="-1">Handling nulls <a class="header-anchor" href="#handling-nulls" aria-label="Permalink to &quot;Handling nulls&quot;">​</a></h3><p>NULL：十亿美元的错误</p><blockquote><p><strong>I call it my billion-dollar mistake.</strong> <em>It was</em> <strong>the invention of the null reference</strong> in 1965. At that time, I was designing the first comprehensive type system for references in an object oriented language (ALGOL W). My goal was to ensure that all use of references should be absolutely safe, with checking performed automatically by the compiler. But I couldn&#39;t resist the temptation to put in a null reference, simply because it was so easy to implement. This has led to innumerable errors, vulnerabilities, and system crashes, which have probably caused a billion dollars of pain and damage in the last forty years.</p><p>- Tony Hoare</p></blockquote><h2 id="custom-types" tabindex="-1">Custom Types <a class="header-anchor" href="#custom-types" aria-label="Permalink to &quot;Custom Types&quot;">​</a></h2><h3 id="box-in-rust" tabindex="-1">Box in Rust <a class="header-anchor" href="#box-in-rust" aria-label="Permalink to &quot;Box in Rust&quot;">​</a></h3><ul><li>Create a Box</li><li>Box goes on the heap</li><li>Anything can go in the box</li><li>Box <em>owns</em> whatever is in the box. When box goes out of scope -&gt; value in box destroyed</li><li><em>Same thing as</em> <em><a href="https://en.cppreference.com/w/cpp/memory/unique_ptr" target="_blank" rel="noreferrer">unique_ptr</a></em> <em>in C++:</em></li></ul><h3 id="throwback-to-options" tabindex="-1">Throwback to Options <a class="header-anchor" href="#throwback-to-options" aria-label="Permalink to &quot;Throwback to Options&quot;">​</a></h3><h3 id="chain-of-ownership" tabindex="-1">Chain of ownership <a class="header-anchor" href="#chain-of-ownership" aria-label="Permalink to &quot;Chain of ownership&quot;">​</a></h3><h3 id="introducing-as-ref" tabindex="-1">Introducing <code>as_ref()</code> <a class="header-anchor" href="#introducing-as-ref" aria-label="Permalink to &quot;Introducing `as_ref()`&quot;">​</a></h3><ul><li>转换 <code>&amp;Option&lt;T&gt;</code> 成 <code>Option&lt;&amp;T&gt;</code></li><li>如果<code>Option</code>内部是<code>None</code>，则返回<code>None</code></li></ul><h3 id="notes-on-writing-rust-code" tabindex="-1">Notes on writing Rust Code <a class="header-anchor" href="#notes-on-writing-rust-code" aria-label="Permalink to &quot;Notes on writing Rust Code&quot;">​</a></h3><ul><li>阅读编译器错误信息，它们通常非常有用</li><li><code>rustc --explain</code>能获取到更多详细信息</li><li>推荐使用<code>rust-analyzer</code>插件</li></ul><h3 id="box" tabindex="-1">Box <a class="header-anchor" href="#box" aria-label="Permalink to &quot;Box&quot;">​</a></h3><ul><li>Box类型存储一个指向heap内存的指针</li><li>能放任何东西在Box里面</li><li><code>Box::new(...)</code>分配内存并初始化</li><li>Box <strong>drop</strong>函数释放heap上的内存 <ul><li>这个drop函数是自动的被编译器插入</li></ul></li></ul><h3 id="struct" tabindex="-1">Struct <a class="header-anchor" href="#struct" aria-label="Permalink to &quot;Struct&quot;">​</a></h3><ul><li>Create a new struct</li><li>Creating methods for a struct</li><li>Let’s make a constructor</li><li>Let’s make a function</li></ul><h2 id="garbage-collection" tabindex="-1">Garbage collection <a class="header-anchor" href="#garbage-collection" aria-label="Permalink to &quot;Garbage collection&quot;">​</a></h2><h3 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h3><ul><li>C/C++有个问题：什么时候释放内存</li><li>Rust: 使用类型系统来表示谁来释放内存，并让编译器检查一切是否正确</li><li>更古老的方法：Garbage collection <ul><li>写程序时，不用但心内存释放的问题</li><li>程序运行时，runtime将观察内存何时不再使用，并为您释放内存</li><li>不用手动的去管理内存</li></ul></li></ul><h3 id="tracing-garbage-collection" tabindex="-1">Tracing garbage collection <a class="header-anchor" href="#tracing-garbage-collection" aria-label="Permalink to &quot;Tracing garbage collection&quot;">​</a></h3><h3 id="downsides-of-garbage-collection垃圾收集的缺点" tabindex="-1">Downsides of garbage collection垃圾收集的缺点 <a class="header-anchor" href="#downsides-of-garbage-collection垃圾收集的缺点" aria-label="Permalink to &quot;Downsides of garbage collection垃圾收集的缺点&quot;">​</a></h3><ul><li>Expensive</li><li>Disruptive：会打断正在做的事情，去做GC</li><li>Non-deterministic：什么时候发生GC？不确定，取决于使用了多少内存</li><li>Precludes manual optimization</li></ul><h3 id="latency-matters延迟问题" tabindex="-1">Latency matters延迟问题 <a class="header-anchor" href="#latency-matters延迟问题" aria-label="Permalink to &quot;Latency matters延迟问题&quot;">​</a></h3><ul><li>User interfaces界面开发</li><li>Games游戏</li><li>Self-driving cars自动驾驶汽车</li><li>Payment processing支付处理</li><li>High frequency trading高频交易</li></ul><h3 id="takeaways-1" tabindex="-1">Takeaways <a class="header-anchor" href="#takeaways-1" aria-label="Permalink to &quot;Takeaways&quot;">​</a></h3><ul><li>当有意义的时候使用GC语言，但要知道它们的限制 <ul><li>如果花了很长时间来开发应用程序而没有人使用它，那么您节省了多少内存并不重要</li><li>如果效率成为问题，您可以随时用其他语言重写某些组件</li><li>GC 语言仍可能导致资源泄漏 — 文件描述符、数据库句柄、多线程代码中的争用条件等。</li></ul></li><li>在资源受限或延迟敏感的环境中，GC可能不是一个可行的选择</li></ul><h3 id="where-is-rust-used" tabindex="-1">Where is Rust used? <a class="header-anchor" href="#where-is-rust-used" aria-label="Permalink to &quot;Where is Rust used?&quot;">​</a></h3><ul><li><p>内存安全：在手动管理内存方面，C和C++通常很烂</p></li><li><p>GC通常会消耗很多资源，还有延迟问题</p></li><li><p>Rust 仍在进行手动内存管理</p><ul><li><p>编译器为你做了很多工作</p></li><li><p>Rust 的类型系统旨在帮助我们传达我们期望的，以便编译器可以验证它们</p></li></ul></li><li><p>对于同时需要内存安全和资源效率/低延迟的应用程序，会注意到人们转向 Rust</p></li></ul><h2 id="object-oriented-programming-in-rust-traits" tabindex="-1">Object Oriented Programming in Rust: Traits <a class="header-anchor" href="#object-oriented-programming-in-rust-traits" aria-label="Permalink to &quot;Object Oriented Programming in Rust: Traits&quot;">​</a></h2><h3 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-label="Permalink to &quot;Classes&quot;">​</a></h3><h3 id="advantages-to-class-design类设计的优势" tabindex="-1">Advantages to Class Design类设计的优势 <a class="header-anchor" href="#advantages-to-class-design类设计的优势" aria-label="Permalink to &quot;Advantages to Class Design类设计的优势&quot;">​</a></h3><ul><li>模块化：我们可以将大型系统分解为可管理的组件，这些组件提供清晰的接口，并且可以单独进行测试。</li><li>封装：将相关数据和方法组合成一个&quot;对象&quot;。</li><li>代码隐藏：不需要公开用户与类交互不需要的部分。</li><li>代码重用：希望对象根据它所接收的文件而有所不同？将一个参数添加到其构造函数中，突然之间，就有了两个不同的实现，但只有一个类！</li><li><em>Other things? What do you think?</em></li></ul><h3 id="reusing-code-with-inheritance-使用继承复用代码" tabindex="-1">Reusing code with “inheritance”使用继承复用代码 <a class="header-anchor" href="#reusing-code-with-inheritance-使用继承复用代码" aria-label="Permalink to &quot;Reusing code with “inheritance”使用继承复用代码&quot;">​</a></h3><h3 id="inheritance继承" tabindex="-1">Inheritance继承 <a class="header-anchor" href="#inheritance继承" aria-label="Permalink to &quot;Inheritance继承&quot;">​</a></h3><ul><li>通过继承，我们能够在许多不同类型的对象上使用一种方法的相同实现，这些对象通过父子关系组合在一起</li><li>子类继承所有方法和属性，它们能选择去覆写父类的函数</li><li>Big concept in languages like Java</li></ul><h3 id="what-might-be-the-weaknesses-of-inheritance-继承的缺点" tabindex="-1">What might be the weaknesses of Inheritance?继承的缺点 <a class="header-anchor" href="#what-might-be-the-weaknesses-of-inheritance-继承的缺点" aria-label="Permalink to &quot;What might be the weaknesses of Inheritance?继承的缺点&quot;">​</a></h3><ul><li>Inheritance Trees</li></ul><h3 id="traits" tabindex="-1">Traits <a class="header-anchor" href="#traits" aria-label="Permalink to &quot;Traits&quot;">​</a></h3><p>How else can we decompose?</p><h3 id="traits-overview" tabindex="-1">Traits Overview <a class="header-anchor" href="#traits-overview" aria-label="Permalink to &quot;Traits Overview&quot;">​</a></h3><h3 id="big-standard-rust-traits" tabindex="-1">Big Standard Rust Traits <a class="header-anchor" href="#big-standard-rust-traits" aria-label="Permalink to &quot;Big Standard Rust Traits&quot;">​</a></h3><ul><li><strong>Copy</strong>: 当使用<code>=</code>时，会创建一个新的拷贝的实例，而不是转移所有权</li><li><strong>Clone</strong>: 当调用<code>.clone()</code>函数时，会返回一个新的copy实例</li><li><strong>Drop</strong>: 当变量超出了它的作用域，会定义一种释放实例内存的方法</li><li><strong>Display</strong>: 当要显示它（比如使用println时），定义一种格式化的方法</li><li><strong>Debug</strong>: 类似于Display</li><li><strong>Eq</strong>: 确定一个类型的两个实例是否相等</li><li><strong>PartialOrd</strong>: 定义实例比较的方法</li></ul><h3 id="milestone-derive-debug" tabindex="-1">Milestone: derive Debug <a class="header-anchor" href="#milestone-derive-debug" aria-label="Permalink to &quot;Milestone: derive Debug&quot;">​</a></h3><h3 id="milestone-functions-traits" tabindex="-1">Milestone: functions -&gt; traits <a class="header-anchor" href="#milestone-functions-traits" aria-label="Permalink to &quot;Milestone: functions -&gt; traits&quot;">​</a></h3><h2 id="generics-in-rust泛型" tabindex="-1">Generics in Rust泛型 <a class="header-anchor" href="#generics-in-rust泛型" aria-label="Permalink to &quot;Generics in Rust泛型&quot;">​</a></h2><h3 id="consolidating-repetitive-code合并重用代码" tabindex="-1">Consolidating repetitive code合并重用代码 <a class="header-anchor" href="#consolidating-repetitive-code合并重用代码" aria-label="Permalink to &quot;Consolidating repetitive code合并重用代码&quot;">​</a></h3><h3 id="rust-generics-have-no-runtime-overhead没有运行时开销" tabindex="-1">Rust generics have no runtime overhead没有运行时开销 <a class="header-anchor" href="#rust-generics-have-no-runtime-overhead没有运行时开销" aria-label="Permalink to &quot;Rust generics have no runtime overhead没有运行时开销&quot;">​</a></h3><p>编译时生成代码</p><h3 id="trait-bounds" tabindex="-1">Trait bounds <a class="header-anchor" href="#trait-bounds" aria-label="Permalink to &quot;Trait bounds&quot;">​</a></h3><p>限制类型</p><h3 id="generics-and-data-structures" tabindex="-1">Generics and Data Structures <a class="header-anchor" href="#generics-and-data-structures" aria-label="Permalink to &quot;Generics and Data Structures&quot;">​</a></h3><h3 id="storing-different-types-together" tabindex="-1">Storing different types together <a class="header-anchor" href="#storing-different-types-together" aria-label="Permalink to &quot;Storing different types together&quot;">​</a></h3><p><code>Vec&lt;Box&lt;dyn Roar&gt;&gt;</code>：dynamic dispatch</p><h3 id="reflecting-on-traits-vs-inheritance" tabindex="-1">Reflecting on Traits vs. Inheritance <a class="header-anchor" href="#reflecting-on-traits-vs-inheritance" aria-label="Permalink to &quot;Reflecting on Traits vs. Inheritance&quot;">​</a></h3><h3 id="traits-vs-inheritance-thinking-about-tradeoffs权衡" tabindex="-1">Traits vs. Inheritance: thinking about tradeoffs权衡 <a class="header-anchor" href="#traits-vs-inheritance-thinking-about-tradeoffs权衡" aria-label="Permalink to &quot;Traits vs. Inheritance: thinking about tradeoffs权衡&quot;">​</a></h3><p>todo</p>',128)];const n=e(l,[["render",function(e,t,r,l,n,o){return i(),a("div",null,s)}]]);export{r as __pageData,n as default};