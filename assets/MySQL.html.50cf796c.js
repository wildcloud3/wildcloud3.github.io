import{_ as e,e as i}from"./app.6f02f33f.js";const a={},l=i(`<h2 id="_5-7\u65B0\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#_5-7\u65B0\u529F\u80FD" aria-hidden="true">#</a> 5.7\u65B0\u529F\u80FD</h2><ul><li>Json \u7C7B\u578B\u5B57\u6BB5 <ul><li>\u53E6\u5916\u7684\u5B57\u6BB5\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u7531\u67D0\u4E2A Json \u5B57\u6BB5\u62BD\u53D6\u7684\u503C\uFF0CVirtual \u7C7B\u578B</li></ul></li></ul><h2 id="\u8FD0\u7EF4\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7EF4\u529F\u80FD" aria-hidden="true">#</a> \u8FD0\u7EF4\u529F\u80FD</h2><ul><li>Binlog \u7684\u4E00\u70B9\u5C0F\u77E5\u8BC6 <ul><li><code>binlog_format = ROW</code>\uFF0C\u5BF9\u4E8E\u540C\u6837\u6570\u636E\u7684\u66F4\u65B0\u4E0D\u4F1A\u6267\u884C\uFF1B<code>binlog_format = STATEMENT</code>\uFF0C\u5BF9\u6240\u6709\u8BED\u53E5\u90FD\u597D\u597D\u6267\u884C row \u7684 binlog \u5173\u6CE8\u70B9\u5728\u8BB0\u5F55\u4E0A\uFF0Cstatement \u7684 binlog \u5173\u6CE8\u70B9\u5728\u8BED\u53E5\u4E0A</li></ul></li></ul><h2 id="\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15" aria-hidden="true">#</a> \u7D22\u5F15</h2><ul><li>Unique Index \u7684\u4E00\u4E2A\u4E0D\u7B97\u5751\u7684\u5751 \u4E0D\u8981\u4F7F\u7528 Null \u503C\uFF0C\u770B\u8D77\u6765 null \u503C\u7684\u5904\u7406\u4F18\u5148\u7EA7\u9AD8\u4E8E\u552F\u4E00\u6027\uFF0C\u4F1A\u4E0D\u7BA1\u7528\uFF0C\u591A\u4E2A null \u53EF\u4EE5\u5E76\u5B58\u4E8E unique index \u4E2D</li></ul><h3 id="\u805A\u7C07\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#\u805A\u7C07\u7D22\u5F15" aria-hidden="true">#</a> \u805A\u7C07\u7D22\u5F15</h3><p>\u6BD4\u8F83\u4E24\u4E2A\u67E5\u8BE2\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>select * from test where val=4 limit 300000,5;
select * from test a inner join (select id from test where val=4 limit 300000,5) b on a.id=b.id;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E24\u4E2A\u8BED\u53E5\u7684\u67E5\u8BE2\u7ED3\u679C\u662F\u4E00\u6837\u7684\uFF0C\u4F46\u662F\u524D\u4E00\u53E5\u7684\u6548\u7387\u5F88\u5E95\uFF0C\u540E\u4E00\u53E5\u5FEB\u5F88\u591A\uFF0C\u539F\u56E0\u662F\uFF1A</p><ol><li>1 \u4E2D\u67E5\u8BE2\u65F6\uFF0C\u76F4\u63A5\u8D70\u4E86\u805A\u7C07\u7D22\u5F15\uFF08\u56E0\u4E3A\u8981\u8FD4\u56DE*\uFF09\uFF0C\u5BFC\u81F4\u6240\u6709\u524D\u7EED 30w \u8BB0\u5F55\u90FD\u767D\u67E5\uFF0C\u6D6A\u8D39\u65F6\u95F4\u5728 IO \u4E0A</li><li>2 \u4E2D\uFF0C\u5B50\u67E5\u8BE2\u53EA\u4F7F\u7528\u4E86\u7D22\u5F15\uFF0CIO \u65B9\u9762\u53EF\u4EE5\u8BA4\u4E3A\u662F O\uFF081\uFF09\uFF0C\u5982\u679C\u5728\u5185\u5B58\u4E2D\uFF1B\u518D join \u65F6\u624D\u4F7F\u7528\u805A\u7C07\u7D22\u5F15\uFF0C\u6240\u4EE5\u5FEB</li></ol><h2 id="\u5B57\u6BB5\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5B57\u6BB5\u7C7B\u578B" aria-hidden="true">#</a> \u5B57\u6BB5\u7C7B\u578B</h2><ul><li>\u5BF9\u4E8E Date \u7C7B\u578B\u7684\u5B57\u6BB5\uFF0CMySQL \u5141\u8BB8\u4E00\u4E2A &quot;zero&quot; value\uFF080000-00-00 \u8FD9\u6837\u7684\uFF09\uFF0C\u4F5C\u4E3A\u4E00\u4E2A dummy date <ul><li>\u597D\u5904\u662F\uFF0Cin some cases convenient than NULL\uFF1B\u4F7F\u7528 less data \u548C index space</li><li>\u574F\u5904\u662F\uFF0CJava \u90A3\u8FB9\uFF0C\u5982\u679C DO \u76F4\u63A5\u5199 Date \u7C7B\u578B\uFF0C\u53C8\u6CA1\u6307\u5B9A\u8FD9\u4E2A zeroDateTimeBehavior\uFF0C\u5C31\u4F1A\u629B\u9519</li></ul></li></ul><h2 id="\u4E3B\u952E\u4E0A\u9650" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u952E\u4E0A\u9650" aria-hidden="true">#</a> \u4E3B\u952E\u4E0A\u9650</h2><ul><li>\u5BF9\u4E8E\u663E\u5F0F\u58F0\u660E\u4E3B\u952E\u7684\u8868\uFF0C\u5982\u679C id \u4E3A uint\uFF0C\u53EF\u80FD\u5728(2^32)\u6700\u5927\u540E\uFF0C\u5199\u5165\u4E0D\u4E86\uFF0C\u6B64\u65F6\u5904\u5883 id \u4E3A <code>2^32-1</code>\uFF0C\u5982\u679C\u4E3A bigint unsigned\uFF0C\u4E00\u822C\u6765\u8BF4\u4E0D\u4F1A\u6709\u95EE\u9898\u4E86</li><li>\u4F46\u5BF9\u4E8E\u65E0\u4E3B\u952E\u58F0\u660E\u7684\u8868 <ul><li>innoDB \u4F1A\u81EA\u52A8\u521B\u5EFA\u4E00\u4E2A\u957F\u5EA6\u4E3A 6 \u5B57\u8282\u7684 row_id</li><li>\u5E76\u4E14\u8FD9\u4E2A row_id \u662F\u5168\u5C40\u5171\u7528\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u591A\u4E2A\u8868\u5168\u5C40\u5171\u7528\u8FD9\u4E00\u4E2A</li><li>\u5982\u679C\u6761\u76EE\u591A\u5230 2^48-1 \u540E\uFF0C\u4E0B\u4E00\u4E2A row_id \u662F\u4F4E 48 \u4F4D\u4E3A 0\uFF0C\u53EF\u80FD\u5C31\u51B2\u7A81\u4E86</li></ul></li></ul>`,15);function n(r,d){return l}var o=e(a,[["render",n],["__file","MySQL.html.vue"]]);export{o as default};
