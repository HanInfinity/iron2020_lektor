(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{264:function(t,e,a){t.exports=a.p+"assets/img/img-20191013115928.c0b156d1.png"},265:function(t,e,a){t.exports=a.p+"assets/img/image-20191014000509170.c38d24ba.png"},266:function(t,e,a){t.exports=a.p+"assets/img/image-20191013235635208.baf48fac.png"},267:function(t,e,a){t.exports=a.p+"assets/img/20191014120835.f8ed661b.png"},268:function(t,e,a){t.exports=a.p+"assets/img/image-20191014001339904.044b7b6b.png"},269:function(t,e,a){t.exports=a.p+"assets/img/20191014121752.c4e9a72b.png"},270:function(t,e,a){t.exports=a.p+"assets/img/image-20191014001931377.c4c8963a.png"},271:function(t,e,a){t.exports=a.p+"assets/img/image-20191014002012135.9b801792.png"},320:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"他，是github的好夥伴"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#他，是github的好夥伴","aria-hidden":"true"}},[t._v("#")]),t._v(" 他，是Github的好夥伴")]),t._v(" "),r("p",[t._v("說的其實就是"),r("code",[t._v("Travis-CI")]),t._v("，提供github持續整合專案的平台。設定Travis-CI部署的方式共分4個步驟：")]),t._v(" "),r("ol",[r("li",[r("code",[t._v(".travis.yml")])]),t._v(" "),r("li",[r("code",[t._v(".lektorprotject")])]),t._v(" "),r("li",[r("code",[t._v("Travis-CI")]),t._v("參數")]),t._v(" "),r("li",[t._v("Git push")])]),t._v(" "),r("h2",{attrs:{id:"travis-yml"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#travis-yml","aria-hidden":"true"}},[t._v("#")]),t._v(" .travis.yml")]),t._v(" "),r("p",[t._v("使用方法與前面提到的GitLab設定類似，需要先建立一個檔案，以便推進度到Github時，讓Travis-CI知道他應該要怎麼做，檔案名稱為"),r("code",[t._v(".travis.yml")]),t._v("，以下為檔案內容：")]),t._v(" "),r("div",{staticClass:"language-yml extra-class"},[r("pre",{pre:!0,attrs:{class:"language-yml"}},[r("code",[r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("language")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" python\n"),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("python")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.6")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("directories")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" $HOME/.cache/pip\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" $HOME/.cache/lektor/builds\n"),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("install")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pip install Lektor"')]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lektor build"')]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" script\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lektor deploy ghpages"')]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n")])])]),r("p",[t._v("跟GitLab不同的是，Travis-CI與Github在不同的平台。GitLab本身就有CI功能，所以可以直接設定輸出資料夾位置，但是Travis-CI在設定的時候需另外提供帳號及訪問憑證資訊，讓他可以將專案生成靜態資料後部署到Github中。")]),t._v(" "),r("p",[t._v("上面的程式碼中，除了設定Travis-CI安裝python及Lektor，並使用"),r("code",[t._v("lektor build")]),t._v("生成靜態網頁，最後透過"),r("code",[t._v("lektor deploy ghpages")]),t._v("將靜態網頁部署到Github Pages預設分支"),r("code",[t._v("ghpages")]),t._v("，並限定在master分支更新時才進行。除此之外，檔案中也建立了"),r("code",[t._v("cache")]),t._v("，可減少之後更新網頁時生成的時間。")]),t._v(" "),r("h2",{attrs:{id:"lektorprotject"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lektorprotject","aria-hidden":"true"}},[t._v("#")]),t._v(" .lektorprotject")]),t._v(" "),r("p",[t._v("與上一篇的GitHub設定格式一樣：")]),t._v(" "),r("div",{staticClass:"language-ini extra-class"},[r("pre",{pre:!0,attrs:{class:"language-ini"}},[r("code",[r("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[servers.ghpages]")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("target")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" ghpages+https://username/repository")]),t._v("\n")])])]),r("h2",{attrs:{id:"travis-ci-參數"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#travis-ci-參數","aria-hidden":"true"}},[t._v("#")]),t._v(" Travis-CI 參數")]),t._v(" "),r("p",[t._v("首先在GitHub建立空資源庫(我建立的名稱為"),r("code",[t._v("Lektor-Travis-CI-Deploy")]),t._v(")，然後進入帳號設定（網頁右上角點擊頭像，選擇"),r("code",[t._v("Settings")]),t._v("），進入"),r("code",[t._v("Developer settings")]),t._v("。")]),t._v(" "),r("p",[r("img",{attrs:{src:a(264),alt:"Developer settings"}})]),t._v(" "),r("p",[t._v("點擊"),r("code",[t._v("Generate new token")]),t._v("，設定名稱並指勾選"),r("code",[t._v("repo")]),t._v("選項，然後拉到最下面按"),r("code",[t._v("Genrate token")]),t._v("：")]),t._v(" "),r("p",[r("img",{attrs:{src:a(265),alt:"image-20191014000509170"}})]),t._v(" "),r("p",[t._v("接著網頁中會出現生成的憑證，等一下會用到，因為重新整理後就無法再看到憑證，所以先複製到空白記事本或其他地方。如果真的忘記了，那就只能重新生成憑證了。")]),t._v(" "),r("p",[t._v("接著進入"),r("a",{attrs:{href:"https://travis-ci.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Travis-CI"),r("OutboundLink")],1),t._v("，設定與GitHub帳號連動，並選擇指定的資源庫，若在Travis-CI網頁中有顯示該資源庫，就代表成功啟動了。")]),t._v(" "),r("p",[r("img",{attrs:{src:a(266),alt:"image-20191013235635208"}})]),t._v(" "),r("p",[t._v("點擊資源庫名稱右邊的"),r("code",[t._v("Settings")]),t._v("，找到"),r("code",[t._v("Environment Variables")]),t._v("的區塊設定參數：")]),t._v(" "),r("p",[r("img",{attrs:{src:a(267),alt:"Environment Variables"}})]),t._v(" "),r("p",[t._v("設定"),r("code",[t._v("LEKTOR_DEPLOY_USERNAME")]),t._v(" 及 "),r("code",[t._v("LEKTOR_DEPLOY_PASSWORD")]),t._v("，"),r("code",[t._v("LEKTOR_DEPLOY_USERNAME")]),t._v("為你的GitHub使用者名稱，"),r("code",[t._v("LEKTOR_DEPLOY_PASSWORD")]),t._v("為剛剛在GitHub中取得的憑證，注意設定憑證資訊時不要開啟"),r("code",[t._v("Display value in build log")]),t._v("。完成後應該會看到類似下圖的畫面。")]),t._v(" "),r("p",[r("img",{attrs:{src:a(268),alt:"image-20191014001339904"}})]),t._v(" "),r("h2",{attrs:{id:"git-push"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git-push","aria-hidden":"true"}},[t._v("#")]),t._v(" Git push")]),t._v(" "),r("p",[t._v("接下來就將專案推上GitHub上吧！！推上去之後直接開啟Travis-CI網頁，你就會看到開始執行靜態網頁生成了！！")]),t._v(" "),r("p",[r("img",{attrs:{src:a(269),alt:"螢幕快照 2019-10-14 上午12.17.52"}})]),t._v(" "),r("p",[t._v("成功後就會變成綠色，接下來就可以看成果～")]),t._v(" "),r("p",[r("img",{attrs:{src:a(270),alt:"image-20191014001931377"}})]),t._v(" "),r("p",[r("a",{attrs:{href:"https://haninfinity.github.io/Lektor-Travis-CI-Deploy/",target:"_blank",rel:"noopener noreferrer"}},[t._v("成果網頁"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("img",{attrs:{src:a(271),alt:"image-20191014002012135"}})]),t._v(" "),r("p",[t._v("寫完這一篇，就算已經成功寫完此次鐵人文的目標！！明天將進行總結！！")]),t._v(" "),r("h1",{attrs:{id:"團隊系列文"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#團隊系列文","aria-hidden":"true"}},[t._v("#")]),t._v(" 團隊系列文")]),t._v(" "),r("p",[t._v("CSScoke - "),r("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20112550/ironman/2623",target:"_blank",rel:"noopener noreferrer"}},[t._v("金魚都能懂的這個網頁畫面怎麼切 - 金魚都能懂了你還怕學不會嗎"),r("OutboundLink")],1),t._v("\nKing Tzeng - "),r("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20103130/ironman/2125",target:"_blank",rel:"noopener noreferrer"}},[t._v("IoT沒那麼難！新手用JavaScript入門做自己的玩具～"),r("OutboundLink")],1),t._v("\nHina Hina - "),r("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20120000/ironman/2256",target:"_blank",rel:"noopener noreferrer"}},[t._v("陣列大亂鬥"),r("OutboundLink")],1),t._v("\n阿斬 - "),r("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20120536/ironman/2571",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python 程式交易 30 天新手入門"),r("OutboundLink")],1),t._v("\nClarence - "),r("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20117701/ironman/2634",target:"_blank",rel:"noopener noreferrer"}},[t._v("LINE bot 好好玩 30 天玩轉 LINE API"),r("OutboundLink")],1),t._v("\n塔塔默 - "),r("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20112552/ironman/2735",target:"_blank",rel:"noopener noreferrer"}},[t._v("用Python開發的網頁不能放到Github上？Lektor說可以！！"),r("OutboundLink")],1),t._v("\nVita Ora - "),r("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20112656/ironman/2782",target:"_blank",rel:"noopener noreferrer"}},[t._v("好 Js 不學嗎 !? JavaScript 入門中的入門。"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);