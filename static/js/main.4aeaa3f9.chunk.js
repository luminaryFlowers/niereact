(this.webpackJsonpniereact=this.webpackJsonpniereact||[]).push([[0],[,,,,function(e,t,i){},function(e,t,i){},,,,,,function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){var a={"./placeholder-klaus.jpg":17,"./userFiles.png":18};function c(e){var t=n(e);return i(t)}function n(e){if(!i.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=n,e.exports=c,c.id=16},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/placeholder-klaus.050391a4.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/userFiles.6b01aeb8.png"},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(1),c=i.n(a),n=i(6),r=i.n(n),s=i(2),o=(i(11),i(0));var l=function(){return Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsx)("div",{id:"grid-area"}),Object(o.jsx)("div",{id:"left-shadow"}),Object(o.jsx)("div",{id:"right-shadow"})]})};i(13),i(14);var d=function(){return Object(o.jsxs)("div",{id:"background-shapes",children:[Object(o.jsx)("div",{className:"bottom-right-circle",id:"circle1"}),Object(o.jsx)("div",{className:"bottom-right-circle",id:"circle2"}),Object(o.jsx)("div",{className:"top-left-circle",id:"circle3"}),Object(o.jsx)("div",{className:"top-left-circle",id:"circle4"}),Object(o.jsx)("div",{id:"line1"}),Object(o.jsx)("div",{id:"line2"}),Object(o.jsx)("div",{id:"line3"}),Object(o.jsx)("div",{id:"line4"}),Object(o.jsx)("div",{id:"line5"}),Object(o.jsx)("div",{id:"line6"})]})};i(5);var b=function(e){return Object(o.jsx)("span",{className:"navbar-option-extension",onClick:function(){return e.updateCurrentPage(e.page)},children:Object(o.jsxs)("div",{className:"navbar-option "+e.active,children:[Object(o.jsx)("img",{className:"button-cursor",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAYCAYAAAB0kZQKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACsSURBVEhL7dbPDUAwFMDh1i5OxuAosQxTsBFjcGGY+teK1quGtvoOfpeSSN4XSlDGGPm6Ik+loRFfg/YjREH2hJoWMQ1duSz1fnapipOs4cfWgQgDAMoKJSFeDId6DDoQjgBQRtSG8AhQA0F07NvbDchXr3doReje0eMi33cKx8cKxeNAsTHRvKIiRxDjUDUJIXqBeTz4HIhYM0CshqppEV8WBPH/Y+pCgCBkBlypdBKRY53NAAAAAElFTkSuQmCC",alt:"Cursor"}),Object(o.jsxs)("button",{className:"navbar-button",children:[Object(o.jsx)("i",{className:"bi-"+e.icon+" button-icon"}),Object(o.jsx)("span",{className:"button-text",children:e.page.toUpperCase()})]})]})})};var u=function(){return Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsx)("div",{className:"navbar-below-line"}),Object(o.jsx)("div",{className:"navbar-below-line-decoration"})]})};var j=function(e){var t=Object(a.useState)(!1),i=Object(s.a)(t,2),n=i[0],r=i[1];function l(t){return t===e.currentPage?"active-button":""}var d=Object.keys(e.userData.pageData);return Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsx)("div",{id:"mobile-navbar-button",children:Object(o.jsx)("i",{className:"bi-chevron-expand",onClick:function(){r(!n)}})}),Object(o.jsxs)("div",{id:n?"navbar":"mobile-hidden-navbar",children:[Object(o.jsx)("div",{id:"navbar-side-flourish1"}),Object(o.jsx)("div",{id:"navbar-side-flourish2"}),d.map((function(t){return Object(o.jsx)(b,{icon:e.userData.pageData[t].icon,page:t,active:l(t),updateCurrentPage:e.updateCurrentPage},t)}))]}),Object(o.jsx)(u,{})]})},h={title:"NieReact",pageData:{Home:{icon:"house-fill",tabs:{NieReact:{icon:"house-fill",left:{header:"Welcome",text:"This is a sample website for NieReact! This website contains a guide on how to get your own NieR:Automata themed website up and running."},right:{header:"Sample Image",text:"idk what to put here lol",image:"placeholder-klaus.jpg"}},"What is NieReact?":{icon:"question-circle-fill",left:{header:"What is it?",text:"NieReact is a NieR:Automata themed website template that was created using React."},right:{header:"Why is it?",text:"I made a website just like this in December of 2020, but I didn't really bother making the code good at all. I wanted to make it better, and figured I'd do it in React as a learning experience sort of deal."}},"Who made it?":{icon:"question-circle-fill",left:{header:"Me",text:Object(o.jsxs)("p",{children:["You can find me on Twitter ",Object(o.jsx)("a",{href:"https://twitter.com/_lumens",children:"@_lumens"}),", or on GitHub at ",Object(o.jsx)("a",{href:"https://github.com/tortoisetea",children:"tortoisetea"}),".",Object(o.jsx)("br",{})]})},right:{header:"hi",text:"hello"}}}},Features:{icon:"tools",tabs:{"General Overview":{icon:"house-fill",left:{header:"Overview",text:"The "},right:{header:"e",text:"e"}},test2:{icon:"house-fill",left:{header:"e",text:"e"},right:{header:"e",text:"e"}}}},Tutorial:{icon:"book-fill",tabs:{Preface:{icon:"book-fill",left:{header:"Preface",text:"This tutorial will mostly focus on how to use NieReact, and will not go into much depth on things such as GitHub repository cloning, or installing Node, Git and the like. There are a great amount of resources on these topics already, so I figured it would be a little bit redundant."},right:{header:"Preface",text:"I probably won't be able to help with installing things (it's been a while since I had to), but if you encounter any issues/bugs with NieReact itself, feel free to contact me!"}},Requirements:{icon:"file-earmark-arrow-down-fill",left:{header:"App Requirements",text:Object(o.jsxs)("p",{children:["- Git ",Object(o.jsx)("br",{}),"- Node ",Object(o.jsx)("br",{}),"- A text editor (Notepad works but Notepad++ is nicer)"]})},right:{header:"Other Requirements",text:Object(o.jsxs)("p",{children:["- A GitHub account ",Object(o.jsx)("br",{}),"- Time ",Object(o.jsx)("br",{}),"- (Optional) HTML knowledge"]})}},"Fork Repository":{icon:"star-fill",left:{header:"Fork Repository",text:Object(o.jsxs)("p",{children:["Once you've met the requirements, you can fork the ",Object(o.jsx)("a",{href:"https://github.com/tortoisetea/niereact",children:"NieReact repository"}),", and then rename the repository to whatever you'd like. I'd recommend naming it (your GitHub username).github.io, as that will make that the link to your website."]})},right:{header:"Note",text:"If the repository isn't (your GitHub username).github.io, then the link to your website will be (your GitHub username).github.io/(repository name)."}},"Clone Repository":{icon:"star-fill",left:{header:"Clone Repository",text:""},right:{header:"Note",text:"If the repository isn't (your GitHub username).github.io, then the link to your website will be (your GitHub username).github.io/(repository name)."}},"User Files":{icon:"star-fill",left:{header:"User Files",text:'Inside of the "src" folder of the newly forked'},right:{header:"Other Requirements",text:""}}}},Contact:{icon:"person-fill",tabs:{Testt:{icon:"archive",left:{header:"left header",text:"left texte"},right:{header:"right header",text:"right texte"}},"Other One":{icon:"archive",left:{header:"left header",text:"left textr"},right:{header:"right header",text:"right textr"}}}}}};i(4);var x=function(e){return Object(o.jsx)("div",{className:"thirds-block",children:Object(o.jsx)("div",{className:"thirds-block-content",children:Object(o.jsx)("div",{className:"content-block"+(e.shadow?" content-block-shadow":""),children:e.children})})})};var O=function(){return Object(o.jsx)("div",{className:"clearfix"})};var f=function(e){return Object(o.jsxs)("div",{id:"flourish-and-blocks-area",children:[Object(o.jsxs)("div",{id:"content-flourish-area",children:[Object(o.jsx)("div",{id:"content-side-flourish1"}),Object(o.jsx)("div",{id:"content-side-flourish2"})]}),Object(o.jsx)("div",{id:"blocks-area",children:e.children}),Object(o.jsx)(O,{})]})};i(15);var p=function(e){function t(){return{opacity:e.contentOpacity}}return Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsx)("div",{className:"content-block-header",children:Object(o.jsx)("p",{className:"content-block-text",style:t(),children:e.data.header})}),function(){if(e.data.image){var a=i(16)("./".concat(e.data.image));return Object(o.jsxs)("div",{className:"content-block-image-block",style:t(),children:[Object(o.jsx)("img",{className:"content-block-image",src:a.default,alt:"Pic from user data"}),Object(o.jsx)("hr",{className:"content-block-image-divider"})]})}return null}(),Object(o.jsx)("p",{className:"content-block-text",style:t(),children:e.data.text})]})};var m=function(){return Object(o.jsx)("hr",{className:"mobile-content-block-divider"})};i(19);var g=function(){return Object(o.jsxs)("div",{className:"list-flourish",children:[Object(o.jsx)("hr",{className:"list-flourish-border"}),Object(o.jsx)("div",{className:"list-flourish-dot"}),Object(o.jsx)(O,{})]})};var v=function(e){return Object(o.jsxs)("div",{className:"list-block-option"+e.selected,onClick:e.updateCurrentTab,children:[Object(o.jsx)("hr",{className:"list-selection-top"}),Object(o.jsxs)("p",{className:"list-block-text",children:[Object(o.jsx)("i",{className:"bi-"+e.icon+" list-block-option-icon"}),e.tab]}),Object(o.jsx)("hr",{className:"list-selection-bottom"})]})};var k=function(e){function t(t){return t===e.currentTab?" list-block-option-selected":""}return Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsx)(g,{}),Object(o.jsx)("div",{id:"content-block-list-contents",children:Object.keys(e.pageContent).map((function(i){return Object(o.jsx)(v,{tab:i,icon:e.pageContent[i].icon,updateCurrentTab:function(){return e.updateCurrentTab(i)},selected:t(i)},i)}))}),Object(o.jsx)(g,{})]})};var A=function(e){var t=Object(a.useState)(1),i=Object(s.a)(t,2),n=i[0],r=i[1];return Object(o.jsx)(c.a.Fragment,{children:Object(o.jsxs)("div",{id:"page-area",style:{opacity:e.pageOpacity},children:[Object(o.jsx)("h1",{id:"page-header",children:e.currentPage.toUpperCase()}),Object(o.jsxs)(f,{children:[Object(o.jsx)(x,{shadow:!0,children:Object(o.jsx)(k,{pageContent:e.pageContent,currentTab:e.offsetTab,updateCurrentTab:function(t){r(0),e.updateOffsetTab(t),setTimeout((function(){e.updateCurrentTab(t),r(1)}),150)}})}),Object(o.jsx)(m,{}),Object(o.jsx)(x,{children:e.pageContent[e.currentTab]?Object(o.jsx)(p,{data:e.pageContent[e.currentTab].left,contentOpacity:n}):null}),Object(o.jsx)(m,{}),Object(o.jsx)(x,{children:e.pageContent[e.currentTab]?Object(o.jsx)(p,{data:e.pageContent[e.currentTab].right,contentOpacity:n}):null})]}),Object(o.jsx)(O,{}),Object(o.jsx)("hr",{style:{height:40,visibility:"hidden"}})]})})};function N(e){return Object.keys(h.pageData[e].tabs)[0]}var y=function(){document.title=h.title;var e=Object.keys(h.pageData),t=Object(a.useState)(e[0]),i=Object(s.a)(t,2),c=i[0],n=i[1],r=Object(a.useState)(e[0]),b=Object(s.a)(r,2),x=b[0],O=b[1],f=Object(a.useState)(null),p=Object(s.a)(f,2),m=p[0],g=p[1],v=Object(a.useState)(N(c)),k=Object(s.a)(v,2),y=k[0],w=k[1],C=Object(a.useState)(N(c)),T=Object(s.a)(C,2),R=T[0],D=T[1],F=Object(a.useState)(1),S=Object(s.a)(F,2),G=S[0],I=S[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(d,{}),Object(o.jsx)(j,{userData:h,currentPage:x,updateCurrentPage:function(e){m&&clearTimeout(m),I(0),O(e),g(setTimeout((function(){n(e),w(N(e)),D(N(e)),I(1),g(null)}),230))}}),Object(o.jsx)(A,{currentPage:c,currentTab:y,updateCurrentTab:w,offsetTab:R,updateOffsetTab:D,pageOpacity:G,pageContent:h.pageData[c].tabs}),Object(o.jsx)(u,{}),Object(o.jsx)(l,{})]})};i(20),i(21);r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.4aeaa3f9.chunk.js.map