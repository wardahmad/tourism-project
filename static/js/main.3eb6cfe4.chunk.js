(window["webpackJsonptourism-project"]=window["webpackJsonptourism-project"]||[]).push([[0],{123:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(17),o=a.n(i),c=a(4),l=a(5),s=a(7),u=a(6),m=a(8),h=(a(14),a(60)),p=a(16),f=a(23),d=a(3),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).toggle=a.toggle.bind(Object(f.a)(a)),a.state={isOpen:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.j,{color:"faded",dark:!0,expand:"md",fixed:"top",className:"navDark"},r.a.createElement(d.i,null,r.a.createElement(d.k,{href:"/"},"Tourism"))))}}]),t}(r.a.Component),v=["https://www.sauditourism.sa/ar/aboutKSA/Regions/Riyadh/PublishingImages/Riyadh.jpg","https://www.sauditourism.sa/ar/aboutKSA/Regions/Jeddah/PublishingImages/JeddahBanner.jpg"],E=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={img:["https://www.sauditourism.sa/ar/aboutKSA/Regions/Riyadh/PublishingImages/Riyadh.jpg","https://www.sauditourism.sa/ar/aboutKSA/Regions/Jeddah/PublishingImages/JeddahBanner.jpg","https://www.sauditourism.sa/ar/aboutKSA/Regions/Tabuk/PublishingImages/TaboukBG.jpg","https://www.sauditourism.sa/ar/aboutKSA/Regions/Jouf/PublishingImages/JoufBG.jpg","https://www.sauditourism.sa/ar/ExploreKSA/AttractionSites/AlAhsaOasis/PublishingImages/AlahsaOases.jpg"],i:""},a.time=function(){if(4===a.state.i)a.setState({i:0}),console.log("is zero "+a.state.i);else{var e=Number(a.state.i)+1;a.setState({i:e}),console.log("is one "+a.state.i)}return v[e]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){setInterval(this.time,2e3)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("main",{style:{backgroundImage:"url(".concat(this.state.img[this.state.i],")")},className:"cover-page",id:"hero"},r.a.createElement("section",{className:"wrapped-page"},r.a.createElement("div",{className:"item-center"},r.a.createElement("h1",null,"Tourism in Saudi Arabia"),r.a.createElement("br",null),r.a.createElement("h3",null,"Tours | Travel | Guide"),r.a.createElement("br",null),r.a.createElement("div",{className:"active-pink-3 active-pink-4 mb-4"},r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Where To (:","aria-label":"Search"}))))))}}]),t}(n.Component),b=function(e){var t=e.tourcard,a=t.picture,n=t.name,i=t.id;return r.a.createElement(d.c,null,r.a.createElement(d.f,{top:!0,width:"100%",height:"100%",src:a}),r.a.createElement(d.d,null,r.a.createElement(d.b,{outline:!0,color:"secondary",className:"float-right",href:"/tourism-project/tour/".concat(i,"/")},"Read more"),r.a.createElement(d.g,null,n)))},y=a(19),O=a.n(y),j=["All","Sea","Mountain","Desert",""],w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={cards:[],category:"All"},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=(t.cards,t.category);return r.a.createElement("div",{className:"subComponent-lg",id:"packageBody"},r.a.createElement(d.i,null,r.a.createElement("header",{className:"headerTitle text-center"},r.a.createElement("h1",null,"A BETTER WAY TO VISIT SAUDI ARABIA"),r.a.createElement("p",null,"CHOOSE YOUR ADVENTURE FROM OUR CATEGORY")),r.a.createElement("section",{className:"packageBody text-center"},j.map(function(t,n){return r.a.createElement(d.a,{key:n,href:"",color:t===a?"dark":"light",onClick:function(){return e.setState({category:t})}},t)}),r.a.createElement(d.l,{className:"text-left"},r.a.createElement(d.e,null,"All"!==a?this.props.nameCity.map(function(e){return e.category===a?r.a.createElement(b,{key:e.id,tourcard:e}):null}):this.props.nameCity.map(function(e){return r.a.createElement(b,{key:e.id,tourcard:e})}))))))}}]),t}(n.Component);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var N=r.a.createElement("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}),x=function(e){var t=e.svgRef,a=e.title,n=C(e,["svgRef","title"]);return r.a.createElement("svg",k({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-facebook",ref:t},n),r.a.createElement("title",null,a),N)},A=r.a.forwardRef(function(e,t){return r.a.createElement(x,k({svgRef:t},e))});a.p;function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var I=r.a.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}),T=function(e){var t=e.svgRef,a=e.title,n=R(e,["svgRef","title"]);return r.a.createElement("svg",S({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-twitter",ref:t},n),r.a.createElement("title",null,a),I)},P=r.a.forwardRef(function(e,t){return r.a.createElement(T,S({svgRef:t},e))});a.p;function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var B=r.a.createElement("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),D=r.a.createElement("rect",{x:2,y:9,width:4,height:12}),G=r.a.createElement("circle",{cx:4,cy:4,r:2}),V=function(e){var t=e.svgRef,a=e.title,n=W(e,["svgRef","title"]);return r.a.createElement("svg",L({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-linkedin",ref:t},n),r.a.createElement("title",null,a),B,D,G)},K=r.a.forwardRef(function(e,t){return r.a.createElement(V,L({svgRef:t},e))});a.p;function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var z=r.a.createElement("rect",{x:2,y:2,width:20,height:20,rx:5,ry:5}),H=r.a.createElement("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),U=r.a.createElement("line",{x1:17.5,y1:6.5,x2:17.5,y2:6.5}),Y=function(e){var t=e.svgRef,a=e.title,n=J(e,["svgRef","title"]);return r.a.createElement("svg",M({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-instagram",ref:t},n),r.a.createElement("title",null,a),z,H,U)},q=r.a.forwardRef(function(e,t){return r.a.createElement(Y,M({svgRef:t},e))}),F=(a.p,function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"subComponent-lg",id:"footerBody"},r.a.createElement(d.i,null,r.a.createElement("header",{className:"headerTitle text-center"},r.a.createElement("p",null,r.a.createElement("b",null,"CAN'T WAIT TO GET INVOLVED")),r.a.createElement("p",null,r.a.createElement("b",null,"CONNECT WITH US NOW"))),r.a.createElement("footer",{className:"svg-group text-center"},r.a.createElement(d.l,null,r.a.createElement(d.h,{md:"3",xs:"6"},r.a.createElement("div",{className:"svg-card-3"},r.a.createElement("a",{href:"#"},r.a.createElement(A,{width:"50",height:"55",strokeWidth:"1"})))),r.a.createElement(d.h,{md:"3",xs:"6"},r.a.createElement("div",{className:"svg-card-3"},r.a.createElement("a",{href:"#"},r.a.createElement(P,{width:"55",height:"55",strokeWidth:"1"})))),r.a.createElement(d.h,{md:"3",xs:"6"},r.a.createElement("div",{className:"svg-card-3"},r.a.createElement("a",{href:"#"},r.a.createElement(K,{width:"55",height:"55",strokeWidth:"1"})))),r.a.createElement(d.h,{md:"3",xs:"6"},r.a.createElement("div",{className:"svg-card-3"},r.a.createElement("a",{href:"#"},r.a.createElement(q,{width:"55",height:"55",strokeWidth:"1"}))))),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("p",null,"copyright 2019 | DeCoders Team"))))}}]),t}(n.Component)),_=a(55),Q=(a(26),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).video=function(){a.props.video(a.props.i)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{backgroundImage:"url(".concat(this.props.vid,")")},class:"video",id:this.props.i,onClick:this.video},r.a.createElement("h4",{class:"names",style:{color:"white"}}," ",this.props.name[this.props.i]),r.a.createElement("div",{style:{color:"white"}}," ",r.a.createElement("h1",null," ",this.props.ele," ")))}}]),t}(n.Component)),X=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"frame"},r.a.createElement("iframe",{onClick:this.props.getVideo,width:"600",height:"300",src:this.props.link}))}}]),t}(n.Component),Z=a(56),$=a.n(Z);function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var te=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ids:["B38SHiCHCgI","g2Na82FqROo","lihLRwa5ZLw","LuKzTODYOgE","OEJ8suXoGhU","g3KTlbrAdyI","bt7vNryFGIw"],name:[],fullVidLink:[],thumpnails:[],currentLink:"https://www.youtube.com/embed/B38SHiCHCgI"},a.getVideo=function(e){console.log("stop"),a.setState({currentLink:a.state.fullVidLink[e]})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){for(var e=this,t=function(t){O()({method:"GET",url:"https://www.googleapis.com/youtube/v3/videos?id=".concat(e.state.ids[t],"&key=AIzaSyBXeIljl7VKhnQnr1qTkGWfY-cmjbta_78&part=snippet,statistics")}).then(function(a){var n=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(a,!0).forEach(function(t){Object(_.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e.state);n.name.push(a.data.items[0].snippet.title),n.thumpnails.push({image:a.data.items[0].snippet.thumbnails.medium.url,id:e.state.ids[t]}),n.fullVidLink.push("https://www.youtube.com/embed/"+e.state.ids[t]),e.setState(n)})},a=0;a<this.state.ids.length;a++)t(a)}},{key:"render",value:function(){var e=this,t=this.state.thumpnails.map(function(t,a){return r.a.createElement(Q,{video:e.getVideo,vid:t.image,i:a,name:e.state.name})});return r.a.createElement("div",{className:"videoTitle"},r.a.createElement("h2",null,"Explore More"),r.a.createElement(X,{link:this.state.currentLink}),r.a.createElement("div",{className:"container "},r.a.createElement("div",{style:{padding:"0 60px",maxWidth:1e3,margin:"0 auto"}},r.a.createElement($.a,{placeholderItem:r.a.createElement("div",{style:{height:200,background:"#EEE"}}),enablePlaceholder:!0,numberOfPlaceholderItems:3,numberOfCars:3,gutter:12,slidesToScroll:2,chevronWidth:100,outsideChevron:!0,showSlither:!1,firstAndLastGutter:!1,activeItemIndex:this.state.activeItemIndex,requestToChangeActive:function(t){return e.setState({activeItemIndex:t})},rightChevron:">",leftChevron:"<"},t)),r.a.createElement("br",null)," ",r.a.createElement("br",null)))}}]),t}(n.Component),ae=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(w,{nameCity:this.props.nameCity}),r.a.createElement(te,null),r.a.createElement(F,null))}}]),t}(n.Component),ne=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.nameCity.filter(function(t){return t.id==e.props.match.params.id}).map(function(t){var a=e.props.images.filter(function(e){return e.city==t.name}).map(function(e){return r.a.createElement("a",{href:e.image_url},r.a.createElement("img",{src:e.image_url,alt:""}))});return r.a.createElement(d.i,null,r.a.createElement("section",{className:"tour-cover item-center"},r.a.createElement("h1",null,t.name),r.a.createElement("img",{src:t.picture,width:"720",height:"480"}),r.a.createElement("p",null,t.category),r.a.createElement("p",null," ",t.description)),r.a.createElement("section",{className:"tour-info"},r.a.createElement(d.l,null,r.a.createElement(d.h,{sm:"8"},r.a.createElement("div",{className:"tour-desc"},r.a.createElement("h6",null," Population: ",t.population),r.a.createElement("h6",null," Weather: ",t.weather," "),r.a.createElement("h6",null," Location: ",r.a.createElement("a",{href:t.location},t.location)," "),r.a.createElement("h5",null,"Activities:"),r.a.createElement("br",null),r.a.createElement("p",null,t.activities))),r.a.createElement(d.h,{sm:"4"},r.a.createElement("div",{className:"tour-gallery"},a)))))});return r.a.createElement("div",{className:"subComponent"},t)}}]),t}(n.Component),re=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={nameCity:[],images:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;O()({method:"GET",url:"https://cors-anywhere.herokuapp.com/https://tourism-project-sei.herokuapp.com/cities.json"}).then(function(t){e.setState({nameCity:t.data})}).catch(function(e){console.log(e)}),O()({method:"GET",url:"https://cors-anywhere.herokuapp.com/https://tourism-project-sei.herokuapp.com/images.json"}).then(function(t){e.setState({images:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(h.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",exact:!0,render:function(t){return r.a.createElement(ae,Object.assign({},t,{nameCity:e.state.nameCity}))}}),r.a.createElement(p.a,{path:"/tourism-project/tour/:id",render:function(t){return r.a.createElement(ne,Object.assign({},t,{images:e.state.images,nameCity:e.state.nameCity}))}}))))}}]),t}(n.Component),ie=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function oe(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(122);o.a.render(r.a.createElement(re,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/tourism-project",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/tourism-project","/service-worker.js");ie?(!function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):oe(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):oe(e)})}}()},14:function(e,t,a){},26:function(e,t,a){},65:function(e,t,a){e.exports=a(123)}},[[65,1,2]]]);
//# sourceMappingURL=main.3eb6cfe4.chunk.js.map