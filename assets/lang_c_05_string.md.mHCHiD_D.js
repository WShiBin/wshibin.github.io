import{_ as t,c as r,o as i,a4 as l}from"./chunks/framework.BcC1I4jP.js";const a=JSON.parse('{"title":"glibc实现","description":"","frontmatter":{},"headers":[],"relativePath":"lang/c/05_string.md","filePath":"lang/c/05_string.md","lastUpdated":1715179189000}'),e={name:"lang/c/05_string.md"},s=[l('<h1 id="glibc实现" tabindex="-1">glibc实现 <a class="header-anchor" href="#glibc实现" aria-label="Permalink to &quot;glibc实现&quot;">​</a></h1><p>代码:<a href="https://www.gnu.org/software/libc/sources.html" target="_blank" rel="noreferrer">https://www.gnu.org/software/libc/sources.html</a></p><h2 id="string-h" tabindex="-1">string.h <a class="header-anchor" href="#string-h" aria-label="Permalink to &quot;string.h&quot;">​</a></h2><h3 id="字符串操作" tabindex="-1">字符串操作 <a class="header-anchor" href="#字符串操作" aria-label="Permalink to &quot;字符串操作&quot;">​</a></h3><ul><li>strcpy 复制一个字符串给另一个</li><li>strncpy 从一个字符串复制一定数量的字符到另一个</li><li>strcat 连接两个字符串</li><li>strncat 连接两个字符串的一定数量字符</li><li>strxfrm transform a string so that strcmp would produce the same result as strcoll</li></ul><h3 id="字符串检验" tabindex="-1">字符串检验 <a class="header-anchor" href="#字符串检验" aria-label="Permalink to &quot;字符串检验&quot;">​</a></h3><ul><li>strlen 返回给定字符串的长度</li><li>strcmp 比较两个字符串</li><li>strncmp 比较两个字符串的一定数量字符</li><li>strcoll compares two strings in accordance to the current locale</li><li>strchr 查找字符的首次出现</li><li>strrchr 查找字符的最后一次出现</li><li>strspn returns the length of the maximum initial segment that consists of only the characters found in another byte string</li><li>strcspn returns the length of the maximum initial segment that consists of only the characters not found in another byte string</li><li>strpbrk finds the first location of any character in one string, in another string</li><li>strstr 查找子串字符的首次出现</li><li>strtok 查找字节字符串中的下一个记号</li></ul><h3 id="字符数组操作" tabindex="-1">字符数组操作 <a class="header-anchor" href="#字符数组操作" aria-label="Permalink to &quot;字符数组操作&quot;">​</a></h3><ul><li>memchr 在数组中搜索字符的首次出现</li><li>memcmp 比较两块缓冲区</li><li>memset 以字符填充缓冲区</li><li>memcpy 将一个缓冲区复制到另一个</li><li>memmove 将一个缓冲区移动到另一个</li></ul>',9)];const n=t(e,[["render",function(t,l,a,e,n,o){return i(),r("div",null,s)}]]);export{a as __pageData,n as default};