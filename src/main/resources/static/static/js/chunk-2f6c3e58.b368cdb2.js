(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f6c3e58"],{7632:function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return n}));var i=s("b775");function a(t){return Object(i["a"])({url:"/column/all",method:"get",params:{page:t.current,size:t.size}})}function n(t){return Object(i["a"])({url:"/column/all/".concat(t.title),method:"get",params:{page:t.current,size:t.size}})}},a242:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns is-multiline"},[t._m(0),t._l(t.list,(function(e,i){return s("div",{key:i,staticClass:"column is-one-quarter"},[s("el-card",{staticClass:"has-text-centered has-text-grey my-3",attrs:{shadow:"hover"}},[s("el-image",{staticStyle:{width:"100px",height:"100px","border-radius":"6px"},attrs:{src:e.thumbnail,fit:"fill"}}),s("div",{staticClass:"my-3"},[s("p",{staticClass:"subtitle"},[t._v(t._s(e.title))]),s("small",[t._v(t._s(e.topics)+"文章")])]),s("p",{staticClass:"my-3"},[t._v(t._s(e.description))]),s("router-link",{attrs:{to:{name:"column-detail",params:{title:e.title}}}},[s("button",{staticClass:"button button-center is-link is-light has-text-weight-bold"},[t._v(" 进入专栏 ")])])],1)],1)}))],2)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column is-full"},[s("section",{staticClass:"box hero is-small is-info"},[s("div",{staticClass:"hero-body"},[s("p",{staticClass:"is-size-5"},[t._v(" 用户主题专栏 ")])])])])}],n=s("7632"),r={name:"index",data:function(){return{list:[{thumbnail:""}],query:{column:{},current:1,size:10,total:""}}},created:function(){this.fetchList()},methods:{fetchList:function(){var t=this;Object(n["a"])(this.query).then((function(e){var s=e.data;t.list=s.records,t.query.current=s.current,t.query.total=s.total,t.query.size=s.size}))},view:function(t){this.$router.push({name:"column-detail",params:{column:t}})}}},c=r,l=s("2877"),u=Object(l["a"])(c,i,a,!1,null,"1ec6d39b",null);e["default"]=u.exports}}]);