(this.webpackJsonpfrontendmentor=this.webpackJsonpfrontendmentor||[]).push([[0],[,function(e,t,n){e.exports={body:"Container_body__QMu7g",container:"Container_container__3x6-A",resetdiv:"Container_resetdiv__2kPT0",language:"Container_language__X4zwK",tool:"Container_tool__33GBA"}},function(e,t,n){e.exports={Job:"Job_Job__IXPI4",image:"Job_image__JIWPI",description:"Job_description__3Up2q",company:"Job_company__R0VFu",new:"Job_new__13yxb",featured:"Job_featured__1WkiK",position:"Job_position__36rwS",requirements:"Job_requirements__4BTqI",role:"Job_role__1fSwI",level:"Job_level__2KxR7"}},,,,,function(e){e.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"./images/photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"./images/manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"./images/account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"./images/myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"./images/loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"Fullstack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"./images/faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"./images/shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"./images/insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"./images/eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"./images/the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')},,,function(e,t,n){e.exports={header:"Header_header__3_qDK"}},function(e,t,n){e.exports=n.p+"static/media/bg-header-desktop.6e2f7196.svg"},function(e,t,n){e.exports={rstbtn:"ResetButton_rstbtn__q9XhS"}},function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),l=n(9),r=n.n(l),i=(n(18),n(19),n(3)),s=n(4),c=n(6),u=n(5),d=n(1),g=n.n(d),p=n(7),m=n(10),f=n.n(m),v=n(11),F=n.n(v),b=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("img",{className:f.a.header,src:F.a,alt:"the pic"}))}}]),n}(o.Component),J=n(2),h=n.n(J),y=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:h.a.Job},a.a.createElement("div",{className:h.a.image},a.a.createElement("img",{src:"."+this.props.image,alt:""})),a.a.createElement("div",{className:h.a.description},a.a.createElement("div",null,a.a.createElement("span",{className:h.a.company},this.props.company," "),a.a.createElement("span",{className:h.a.new},this.props.new?"NEW":"OLD"),a.a.createElement("span",{className:h.a.featured},this.props.featured?"FEATURED":"NON-FEATURED")),a.a.createElement("div",{className:h.a.position},this.props.position),a.a.createElement("div",null,a.a.createElement("span",null,this.props.postedAt),a.a.createElement("span",null," . ",this.props.contract),a.a.createElement("span",null," . ",this.props.location))),a.a.createElement("div",{className:h.a.requirements},a.a.createElement("div",null,a.a.createElement("span",{className:h.a.role,onClick:this.props.RoleFilter},this.props.role),a.a.createElement("span",{className:h.a.level,onClick:this.props.LevelFilter},this.props.level),a.a.createElement("span",null,this.props.languages),a.a.createElement("span",null,this.props.tools))))}}]),n}(o.Component),E=n(12),_=n.n(E),w=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("button",{className:_.a.rstbtn,onClick:this.props.resetAll},"Reset...")}}]),n}(o.Component),H=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,l=new Array(o),r=0;r<o;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={rolefilteredJob:null,levelfilteredJob:null,languagefilteredJob:null,toolfilteredJob:null,reset:!1},e.RoleFilterHandler=function(t){console.log(t.target.innerText),e.setState({levelfilteredJob:null,languagefilteredJob:null,toolfilteredJob:null,rolefilteredJob:p.filter((function(e){return e.role===t.target.innerText.trim()})).map((function(t){return a.a.createElement(y,{key:t.id,image:t.logo,company:t.company,new:t.new,featured:t.featured,position:t.position,postedAt:t.postedAt,contract:t.contract,location:t.location,role:t.role,level:t.level,languages:t.languages.map((function(t){return a.a.createElement("span",{className:g.a.language,onClick:e.LanguageFilterHandler},t)})),tools:t.tools.map((function(t){return a.a.createElement("span",{className:g.a.tool,onClick:e.ToolFilterHandler}," ",t," ")})),RoleFilter:function(t){return e.RoleFilterHandler(t)},LevelFilter:function(t){return e.LevelFilterHandler(t)},LanguageFilter:function(t){return e.LanguageFilterHandler(t)},ToolFilter:function(t){return e.ToolFilterHandler(t)}})})),reset:!0})},e.LevelFilterHandler=function(t){console.log(t.target.innerText),e.setState({rolefilteredJob:null,languagefilteredJob:null,toolfilteredJob:null,levelfilteredJob:p.filter((function(e){return e.level===t.target.innerText.trim()})).map((function(t){return a.a.createElement(y,{key:t.id,image:t.logo,company:t.company,new:t.new,featured:t.featured,position:t.position,postedAt:t.postedAt,contract:t.contract,location:t.location,role:t.role,level:t.level,languages:t.languages.map((function(t){return a.a.createElement("span",{className:g.a.language,onClick:e.LanguageFilterHandler},t)})),tools:t.tools.map((function(t){return a.a.createElement("span",{className:g.a.tool,onClick:e.ToolFilterHandler}," ",t," ")})),RoleFilter:function(t){return e.RoleFilterHandler(t)},LevelFilter:function(t){return e.LevelFilterHandler(t)},LanguageFilter:function(t){return e.LanguageFilterHandler(t)},ToolFilter:function(t){return e.ToolFilterHandler(t)}})})),reset:!0})},e.LanguageFilterHandler=function(t){console.log(t.target.innerText),e.setState({rolefilteredJob:null,levelfilteredJob:null,toolfilteredJob:null,languagefilteredJob:p.filter((function(e){return e.languages.includes(t.target.innerText.trim())})).map((function(t){return a.a.createElement(y,{key:t.id,image:t.logo,company:t.company,new:t.new,featured:t.featured,position:t.position,postedAt:t.postedAt,contract:t.contract,location:t.location,role:t.role,level:t.level,languages:t.languages.map((function(t){return a.a.createElement("span",{className:g.a.language,onClick:e.LanguageFilterHandler},t)})),tools:t.tools.map((function(t){return a.a.createElement("span",{className:g.a.tool,onClick:e.ToolFilterHandler}," ",t," ")})),RoleFilter:function(t){return e.RoleFilterHandler(t)},LevelFilter:function(t){return e.LevelFilterHandler(t)},LanguageFilter:function(t){return e.LanguageFilterHandler(t)},ToolFilter:function(t){return e.ToolFilterHandler(t)}})})),reset:!0})},e.ToolFilterHandler=function(t){console.log(t.target.innerText),e.setState({rolefilteredJob:null,levelfilteredJob:null,languagefilteredJob:null,toolfilteredJob:p.filter((function(e){return e.tools.includes(t.target.innerText.trim())})).map((function(t){return a.a.createElement(y,{key:t.id,image:t.logo,company:t.company,new:t.new,featured:t.featured,position:t.position,postedAt:t.postedAt,contract:t.contract,location:t.location,role:t.role,level:t.level,languages:t.languages.map((function(t){return a.a.createElement("span",{className:g.a.language,onClick:e.LanguageFilterHandler},t)})),tools:t.tools.map((function(t){return a.a.createElement("span",{className:g.a.tool,onClick:e.ToolFilterHandler}," ",t," ")})),RoleFilter:function(t){return e.RoleFilterHandler(t)},LevelFilter:function(t){return e.LevelFilterHandler(t)},LanguageFilter:function(t){return e.LanguageFilterHandler(t)},ToolFilter:function(t){return e.ToolFilterHandler(t)}})})),reset:!0})},e.resetAllHandler=function(){e.setState({rolefilteredJob:null,levelfilteredJob:null,languagefilteredJob:null,toolfilteredJob:null,reset:!1})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=p.map((function(t){return a.a.createElement(y,{key:t.id,image:t.logo,company:t.company,new:t.new,featured:t.featured,position:t.position,postedAt:t.postedAt,contract:t.contract,location:t.location,role:t.role,level:t.level,languages:t.languages.map((function(t){return a.a.createElement("span",{className:g.a.language,onClick:e.LanguageFilterHandler},t)})),tools:t.tools.map((function(t){return a.a.createElement("span",{className:g.a.tool,onClick:e.ToolFilterHandler}," ",t," ")})),RoleFilter:function(t){return e.RoleFilterHandler(t)},LevelFilter:function(t){return e.LevelFilterHandler(t)},LanguageFilter:function(t){return e.LanguageFilterHandler(t)},ToolFilter:function(t){return e.ToolFilterHandler(t)}})})),n=null;return this.state.reset&&(n=a.a.createElement("div",{className:g.a.resetdiv},a.a.createElement(w,{resetAll:this.resetAllHandler}))),this.state.rolefilteredJob&&(t=this.state.rolefilteredJob),this.state.levelfilteredJob&&(t=this.state.levelfilteredJob),this.state.languagefilteredJob&&(t=this.state.languagefilteredJob),this.state.toolfilteredJob&&(t=this.state.toolfilteredJob),a.a.createElement("div",{className:g.a.body},a.a.createElement(b,null),n,a.a.createElement("div",{className:g.a.container},t))}}]),n}(o.Component);var T=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.23d3e065.chunk.js.map