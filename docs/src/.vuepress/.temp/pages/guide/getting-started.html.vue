<template><h1 id="get-started-quickly" tabindex="-1"><a class="header-anchor" href="#get-started-quickly" aria-hidden="true">#</a> Get started quickly</h1>
<h2 id="register-to-use" tabindex="-1"><a class="header-anchor" href="#register-to-use" aria-hidden="true">#</a> Register to use</h2>
<p><strong>main.js</strong></p>
<CodeGroup>
  <CodeGroupItem title="Vue2.x" active>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">Vue</span><span style="color: #D4D4D4"> </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;vue&#39;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">withKeepAlive</span><span style="color: #D4D4D4"> </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;vue-with-keep-alive&#39;</span></span>
<span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">App</span><span style="color: #D4D4D4"> </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;./App.vue&#39;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">router</span><span style="color: #D4D4D4"> </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;./router&#39;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #9CDCFE">Vue</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">use</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">withKeepAlive</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">router</span><span style="color: #D4D4D4">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #569CD6">new</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">Vue</span><span style="color: #D4D4D4">({</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE">router</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #DCDCAA">render</span><span style="color: #9CDCFE">:</span><span style="color: #D4D4D4"> (</span><span style="color: #9CDCFE">h</span><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">h</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">App</span><span style="color: #D4D4D4">)</span></span>
<span class="line"><span style="color: #D4D4D4">}).</span><span style="color: #DCDCAA">$mount</span><span style="color: #D4D4D4">(</span><span style="color: #CE9178">&#39;#app&#39;</span><span style="color: #D4D4D4">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="Vue3.x">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> { </span><span style="color: #9CDCFE">createApp</span><span style="color: #D4D4D4"> } </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;vue&#39;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">withKeepAlive</span><span style="color: #D4D4D4"> </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;vue-with-keep-alive&#39;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">router</span><span style="color: #D4D4D4"> </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;./router/index&#39;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">App</span><span style="color: #D4D4D4"> </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;./App.vue&#39;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">app</span><span style="color: #D4D4D4"> = </span><span style="color: #DCDCAA">createApp</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">App</span><span style="color: #D4D4D4">);</span></span>
<span class="line"><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">use</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">router</span><span style="color: #D4D4D4">);</span></span>
<span class="line"><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">use</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">withKeepAlive</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">router</span><span style="color: #D4D4D4">);</span></span>
<span class="line"><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">mount</span><span style="color: #D4D4D4">(</span><span style="color: #CE9178">&#39;#app&#39;</span><span style="color: #D4D4D4">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<p><strong>App.vue</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #808080">&lt;</span><span style="color: #569CD6">template</span><span style="color: #808080">&gt;</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #808080">&lt;</span><span style="color: #569CD6">keep-router-riew</span><span style="color: #D4D4D4"> /</span><span style="color: #808080">&gt;</span></span>
<span class="line"><span style="color: #808080">&lt;/</span><span style="color: #569CD6">template</span><span style="color: #808080">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="component-properties" tabindex="-1"><a class="header-anchor" href="#component-properties" aria-hidden="true">#</a> Component properties</h2>
<table class="table table-bordered table-striped table-condensed">
  <tr>
    <td>mode (String)</td>
	  <td>Mode: all caches (default) allKeepAlive, custom cache component customizeKeepAlive needs to be set in the route settings meta: { keepAlive: true }</td>
  </tr>
  <tr>
    <td>max (Number)</td>
	  <td>Maximum number of pages to cache (default: 5)</td>
  </tr>
  <tr>
    <td>exclude  (Array | String)</td>
	  <td>String or regular expression. Any component whose name matches will not be cached</td>
  </tr>
  <tr>
    <td>matchClearList (Array)</td>
	  <td>When a name is matched, except the name of the current page, clear other page names</td>
  </tr>
  <tr>
    <td>matchClearBehindList (Array)</td>
	  <td>If it is backward, when a name is matched, all subsequent names will be removed</td>
  </tr>
</table>
<h2 id="router-object" tabindex="-1"><a class="header-anchor" href="#router-object" aria-hidden="true">#</a> router Object</h2>
<ul>
<li>
<p><code>push/replace/forward</code>: Cache jump page component</p>
</li>
<li>
<p><code>replace</code>: Similar to push, the only difference is that it does not add new records to history</p>
</li>
<li>
<p><code>reLaunch</code>: Clear all cached components when jumping, and then cache the page component again</p>
</li>
<li>
<p>Others (including system return) are all backwards, and the page component will be destroyed when the route changes.</p>
</li>
<li>
<p>In the above router object, add the <code>destroy</code> property (String|Array) to customize the page component that has been destroyed by the cache.</p>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><code>reLaunch</code>: Jump is the same as <code>replace</code>, it will not add new records to history, if you need to use other jump methods, you can use the above methods, such as</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #569CD6">this</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">$router</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">push</span><span style="color: #D4D4D4">({</span><span style="color: #9CDCFE">name:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;Home&#39;</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">destroy:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;ALL&#39;</span><span style="color: #D4D4D4">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></div>
<p><strong><RouterLink to="/guide/destroy.html">About destroy</RouterLink></strong></p>
</template>
