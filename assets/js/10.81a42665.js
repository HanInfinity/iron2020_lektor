(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{228:function(t,e,a){t.exports=a.p+"assets/img/image-20190929144031329-9739283.c78e2ec8.png"},229:function(t,e,a){t.exports=a.p+"assets/img/image-20190930005610386.ab00d009.png"},230:function(t,e,a){t.exports=a.p+"assets/img/image-20190930013302833.c65513f6.png"},277:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"想怎麼排，就怎麼排！"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#想怎麼排，就怎麼排！","aria-hidden":"true"}},[t._v("#")]),t._v(" 想怎麼排，就怎麼排！")]),t._v(" "),s("p",[t._v("在這邊你可以自訂文章或子頁面的排序，下方以Blog為例：")]),t._v(" "),s("p",[s("strong",[t._v("blog.ini")])]),t._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[children]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("model")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" blog-post")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("order_by")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" -pub_date, title")]),t._v("\n")])])]),s("p",[t._v("以上設定以日期為主要排序，標題為次要排序。所以我新增2個文章來看一下排序的結果。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(228),alt:"order by -pub_date, title"}})]),t._v(" "),s("p",[t._v("可以看到在日期的設定是"),s("code",[t._v("-pub_date")]),t._v("而不是"),s("code",[t._v("pub_date")]),t._v("，加負號表示日期是以倒序的方式排列。接下來把"),s("code",[t._v("-pub_date")]),t._v("刪掉，只留title排序：")]),t._v(" "),s("p",[s("strong",[t._v("blog.ini")])]),t._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[children]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("model")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" blog-post")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("order_by")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" title")]),t._v("\n")])])]),s("p",[t._v("可以看到排序不一樣了。設定的欄位，只要是blog-post所屬的欄位，都可以設定，像預設的blog-post就有title, author, twitter_handle, pub_date, body可以設定，但也要看他的值是否有可做為排序的內容。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(229),alt:"image-20190930005610386"}})]),t._v(" "),s("h2",{attrs:{id:"sort-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sort-key","aria-hidden":"true"}},[t._v("#")]),t._v(" sort_key")]),t._v(" "),s("p",[t._v("除了用已有的欄位做排序，也可以建立sort_key進行排序。sort_key設定為整數的類型，以下為設定說明。")]),t._v(" "),s("p",[t._v("先在model中建立sort_key欄位：")]),t._v(" "),s("p",[s("strong",[t._v("blog-post.ini")])]),t._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[fields.sort_key]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("label")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" Sort order")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" sort_key")]),t._v("\n")])])]),s("p",[t._v("設定排序為"),s("code",[t._v("sort_key")])]),t._v(" "),s("p",[s("strong",[t._v("blog.ini")])]),t._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[children]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("model")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" doc-page")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("order_by")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" sort_key")]),t._v("\n")])])]),s("p",[t._v("接著在每個文章中設定sort-key")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("title")]),t._v(" "),s("th",[t._v("sort_key")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Hello Website")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("教師節快樂")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("30天鐵人賽加油！")]),t._v(" "),s("td",[t._v("2")])])])]),t._v(" "),s("p",[t._v("以Hello Website為例")]),t._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[t._v("title: Hello Website\n---\npub_date: 2019-09-01\n---\nauthor: Chih-Chieh Chang\n---\nbody:\n\nThis is an example blog post.  Not much here but that's not the point :)\n---\nsort_key:0\n")])])]),s("p",[t._v("完成排序如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(230),alt:"image-20190930013302833"}})]),t._v(" "),s("h1",{attrs:{id:"團隊系列文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#團隊系列文","aria-hidden":"true"}},[t._v("#")]),t._v(" 團隊系列文")]),t._v(" "),s("p",[t._v("CSScoke - "),s("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20112550/ironman/2623",target:"_blank",rel:"noopener noreferrer"}},[t._v("金魚都能懂的這個網頁畫面怎麼切 - 金魚都能懂了你還怕學不會嗎"),s("OutboundLink")],1),t._v("\nKing Tzeng - "),s("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20103130/ironman/2125",target:"_blank",rel:"noopener noreferrer"}},[t._v("IoT沒那麼難！新手用JavaScript入門做自己的玩具～"),s("OutboundLink")],1),t._v("\nHina Hina - "),s("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20120000/ironman/2256",target:"_blank",rel:"noopener noreferrer"}},[t._v("陣列大亂鬥"),s("OutboundLink")],1),t._v("\n阿斬 - "),s("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20120536/ironman/2571",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python 程式交易 30 天新手入門"),s("OutboundLink")],1),t._v("\nClarence - "),s("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20117701/ironman/2634",target:"_blank",rel:"noopener noreferrer"}},[t._v("LINE bot 好好玩 30 天玩轉 LINE API"),s("OutboundLink")],1),t._v("\n塔塔默 - "),s("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20112552/ironman/2735",target:"_blank",rel:"noopener noreferrer"}},[t._v("用Python開發的網頁不能放到Github上？Lektor說可以！！"),s("OutboundLink")],1),t._v("\nVita Ora - "),s("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20112656/ironman/2782",target:"_blank",rel:"noopener noreferrer"}},[t._v("好 Js 不學嗎 !? JavaScript 入門中的入門。"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);