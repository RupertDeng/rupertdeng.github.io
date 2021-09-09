(this["webpackJsonpportfolio-website"]=this["webpackJsonpportfolio-website"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),r=n(10),a=n.n(r),i=n(3),s=(n(17),[{projectId:"project-1",projectName:"Responsive Portfolio Website",projectCoverImage:"/images/project-images/project-1-cover.png",projectShowcase:"/images/project-images/project-1-showcase.gif",projectLink:"",projectRepo:"https://github.com/RupertDeng/portfolio-website",projectDescription:"I always wanted a portfolio website since I started learning coding. Did some attempt before with plain javascript but the process is nowhere near smooth. React.js is here to the rescue. Resuable function components and delegation by passing props greatly simplified and streamlined the workflow.\n\nI was shooting for a notebook vibe so thousands of cell components are employed to mimic the notebook grid. It might not be the most efficient way but hey, it works like a charm. With the help of React hooks, the grid can also respond to screen size change (similar to CSS mediaquery but with JS) and perform some really cool animations at events.\n\nThings can be improved: 1) React re-rendering upon state change is expensive in my case so I still relied on some document query, a truly-React way may be more appreciable. 2) probably need to add a backend when I get many projects in store. 3) nudging vanilla CSS is exhausting, time to learn some friendly CSS library."}]),l=n(0),d=o.a.memo((function(e){var t=e.resolutionTier,n=e.navHeight,o=e.navWidth,r=e.sizeUnit,a={height:"".concat(n,"px"),width:"".concat(o,"px"),transform:"translateY(".concat(r/4,"px)")},d={width:"".concat("S"===t?o:o*="M"===t?.5:.4,"px")},u=function(){return window.scrollTo({top:0,behavior:"smooth"})},j=Object(c.useState)(!1),m=Object(i.a)(j,2),p=m[0],h=m[1];return Object(l.jsxs)("nav",{className:p?"nav-container expand":"nav-container",style:a,children:[Object(l.jsxs)("div",{className:"brand-container",children:[Object(l.jsx)("img",{className:"app-logo",src:"/images/logo-sketch.png",alt:"logo-sketch",onKeyPress:function(e){"Enter"===e.key&&u()},onClick:u}),Object(l.jsxs)("p",{className:"app-name",children:["Ruopeng's ",Object(l.jsx)("br",{})," Code Journal"]})]}),Object(l.jsxs)("div",{className:"menu-container",children:[Object(l.jsx)("button",{className:p?"project-nav opened":"project-nav",onClick:function(){return h(!p)},onBlur:function(){return h(!1)},tabIndex:"-1",children:"Project"}),Object(l.jsx)("button",{className:"about-nav",onClick:function(){return document.getElementById("about").scrollIntoView({behavior:"smooth"})},children:"About"}),Object(l.jsx)("ul",{className:p?"project-menu active":"project-menu",style:d,children:function(e){var t=[];return e.forEach((function(e){t.push(Object(l.jsx)("li",{className:"project-item",onMouseDown:function(){return function(e){var t=document.getElementById(e);t.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),setTimeout((function(){return t.classList.toggle("focused")}),500),setTimeout((function(){return t.classList.toggle("focused")}),1200),h(!1)}(e.projectId)},children:Object(l.jsx)("u",{children:e.projectName})},e.projectId+"-menu"))})),t}(s)})]})]})})),u=(n(19),o.a.memo((function(e){var t=e.cellId,n=e.cellSize,c=e.cellBorder,o=e.cellRow,r=e.cellCol,a=e.cellType,i=e.numOfRows,s=e.numOfCols,d={width:n,height:n,borderWidth:c,gridArea:"".concat(o," / ").concat(r," / ").concat(o+1," / ").concat(r+1),animation:"cell-banner"===a?"".concat(1.5+2*Math.random(),"s steps(4, end) 0s 5 alternate none running fadein"):"none"},u=[[o-1,r],[o+1,r],[o,r+1],[o,r-1]];u=u.filter((function(e){return e[0]>0&&e[0]<=i&&e[1]>0&&e[1]<=s})).map((function(e){return(e[0]-1)*s+e[1]}));var j=function(){document.getElementById(t).classList.toggle("active-0"),u.forEach((function(e){return document.getElementById(e).classList.toggle("active-1")}))};return Object(l.jsx)("div",{id:t,className:a,style:d,onClick:"cell-banner"===a?function(){document.getElementById("grid-view").classList.toggle("animate")}:null,onMouseOver:j,onMouseOut:j,children:" "})}))),j=(n(20),o.a.memo((function(e){var t,n,c,o,r;switch(e.resolutionTier){case"S":t=24,n=3,c=26,o=23,r=.8;break;case"M":t=23,n=7,c=25,o=25,r=1;break;case"L":t=23,n=10,c=25,o=28,r=1.2;break;default:t=23,n=10,c=26,o=28,r=1.2}var a={gridArea:"".concat(t," / ").concat(n," / ").concat(c," / ").concat(o),fontSize:"".concat(r,"rem")},i={gridArea:"".concat(t+2," / ").concat(n," / ").concat(t+3," / ").concat(o),backgroundImage:"url(".concat("/images/separate-line.svg",")")};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"welcome-text",style:a,children:Object(l.jsxs)("i",{children:["Welcome to my Code Journal! ",Object(l.jsx)("br",{}),"Here I note down things I made and am learning. "]})}),Object(l.jsx)("div",{className:"separate-line",style:i})]})}))),m=n(11),p=(n(21),n(22),o.a.memo((function(e){var t=e.cardRow,n=e.cardCol,c=e.cardWidth,o=e.cardHeight,r=e.cardId,a=e.cardImage,i=e.cardLabel,s=e.cardClick,d={gridArea:"".concat(t," / ").concat(n," / ").concat(t+o," / ").concat(n+c)};return Object(l.jsxs)("div",{id:r,className:"project-card",style:d,onClick:function(){s(parseInt(r.split("-").slice(-1)))},children:[Object(l.jsx)("div",{className:"card-image",style:{backgroundImage:"url(".concat(a,")")}}),Object(l.jsx)("p",{className:"card-label",children:Object(l.jsx)("b",{children:i})})]})}))),h=o.a.memo((function(e){var t,n,c,r,a,d,u=e.resolutionTier,j=(e.numOfRows,e.numOfCols);switch(u){case"S":t=30,n=5,c=16,r=16,a=2,d=70;break;case"M":t=29,n=3,c=12,r=12,a=2,d=2;break;case"L":t=29,n=3,c=10,r=10,a=1,d=1;break;default:t=29,n=4,c=14,r=14,a=2,d=2}var h=o.a.useState(0),b=Object(i.a)(h,2),f=b[0],g=b[1],x=0===f?null:s[f-1];return Object(l.jsxs)(l.Fragment,{children:[function(e){var o,i=[],s=t,u=n,h=Object(m.a)(e);try{for(h.s();!(o=h.n()).done;){var b=o.value;i.push(Object(l.jsx)(p,{cardRow:s,cardCol:u,cardWidth:c,cardHeight:r,cardId:b.projectId,cardImage:b.projectCoverImage,cardLabel:b.projectName,cardClick:g},b.projectId)),u+2*c+d<=j?u=u+c+d:(s=s+r+a,u=n)}}catch(f){h.e(f)}finally{h.f()}return i}(s),0!==f&&Object(l.jsx)("div",{className:"popup-container",onClick:function(){return g(0)},children:Object(l.jsxs)("div",{className:"popup-box",onClick:function(e){return e.stopPropagation()},children:[Object(l.jsx)("img",{className:"project-showcase",src:x.projectShowcase,alt:x.projectId+"showcase"}),Object(l.jsxs)("div",{className:"project-detail",children:[Object(l.jsx)("p",{className:"project-title",children:Object(l.jsx)("b",{children:x.projectName})}),Object(l.jsx)("p",{className:"project-desc",children:x.projectDescription}),(""!==x.projectLink||""!==x.projectRepo)&&Object(l.jsxs)("div",{className:"project-links",children:[""!==x.projectLink&&Object(l.jsx)("a",{className:"pjtlink",href:x.projectLink,target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("u",{children:"Link to App"})}),""!==x.projectRepo&&Object(l.jsx)("a",{className:"pjtlink",href:x.projectRepo,target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("u",{children:"Link to Github"})})]})]})]})})]})})),b=(n(23),o.a.memo((function(e){var t=e.resolutionTier,n=e.numOfRows,c=e.numOfCols,o=e.cellSize,r=e.cellBorder,a={gridTemplateRows:"repeat(".concat(n,", ").concat(o,"px))"),gridTemplateColumns:"repeat(".concat(c,", ").concat(o,"px))")};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"grid-container",children:Object(l.jsxs)("div",{id:"grid-view",className:"grid",style:a,children:[function(e,t,n,c,o){for(var r,a,i=[],s=function(e,t){var n,c;switch(e){case"S":n=8,c=3;break;case"M":n=7,c=6;break;case"L":n=7,c=9;break;default:n=7,c=9}return new Set([[0,0],[0,2],[0,4],[0,5],[0,6],[0,8],[0,12],[0,16],[0,17],[0,18],[0,19],[1,0],[1,2],[1,4],[1,8],[1,12],[1,16],[1,19],[2,0],[2,1],[2,2],[2,4],[2,5],[2,8],[2,12],[2,16],[2,19],[3,0],[3,2],[3,4],[3,8],[3,12],[3,16],[3,19],[4,0],[4,2],[4,4],[4,5],[4,6],[4,8],[4,9],[4,10],[4,12],[4,13],[4,14],[4,16],[4,17],[4,18],[4,19],[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],[6,15],[6,16],[6,17],[6,18],[6,19],[8,0],[8,4],[8,6],[8,7],[8,8],[8,10],[8,11],[8,12],[8,14],[8,17],[8,18],[9,0],[9,4],[9,6],[9,8],[9,10],[9,12],[9,14],[9,17],[9,19],[10,0],[10,2],[10,4],[10,6],[10,8],[10,10],[10,11],[10,14],[10,17],[10,19],[11,0],[11,2],[11,4],[11,6],[11,8],[11,10],[11,12],[11,14],[11,17],[11,19],[12,1],[12,3],[12,6],[12,7],[12,8],[12,10],[12,12],[12,14],[12,15],[12,17],[12,18]].map((function(e){return(e[0]+n-1)*t+e[1]+c})))}(e,o),d=1;d<=c;d++)for(var j=1;j<=o;j++)a=(d-1)*o+j,r=s.has(a)?"cell-banner":"cell-default",i.push(Object(l.jsx)(u,{cellId:a,cellSize:t,cellBorder:n,cellRow:d,cellCol:j,cellType:r,numOfRows:c,numOfCols:o},a));return i}(t,o,r,n,c),Object(l.jsx)(j,{resolutionTier:t}),Object(l.jsx)(h,{resolutionTier:t,numOfRows:n,numOfCols:c})]})})})}))),f=(n(24),n(6)),g=n(9),x=n(12),O=o.a.memo((function(e){var t=e.resolutionTier,n=e.aboutWidth,c="S"===t?"column":"row",o={width:"".concat(n,"px"),flexDirection:"".concat(c)},r={fontSize:"".concat("L"===t?.95:.85,"rem")},a={justifyContent:"S"===t?"center":"flex-end",marginTop:"S"===t?"20px":"5px"};return Object(l.jsxs)("div",{id:"about",className:"about-container",style:o,children:[Object(l.jsx)("img",{className:"picture-self",src:"/images/picture-self.png",alt:"me"}),Object(l.jsxs)("div",{className:"text-container",children:[Object(l.jsxs)("p",{className:"self-intro",style:r,children:["The name is ",Object(l.jsx)("b",{children:"Ruopeng (Rupert) Deng"}),". Majored in Physics and Ph.D. in Materials Science.",Object(l.jsx)("br",{}),"After dedicating myself over a decade to studying our physical world, specifically semiconductor processing, I started to wonder how the virtual world works under the hood.",Object(l.jsx)("br",{}),"The thought pulled me deeply in, and I began to teach myself, from simple python 'Hello World' to data structure and algorithm, to advanced topics like distributed system. The more I learned, the more I appreciate the underlying intricacy and wisdom. It is truly fascinating!",Object(l.jsx)("br",{}),'The undertaking of learning and trying new things has never been so thrilling. I do hope that I could keep up this journey of exploration, "to infinity and beyond" ...']}),Object(l.jsxs)("div",{className:"contact-icon-container",style:a,children:[Object(l.jsx)("a",{href:"https://github.com/RupertDeng",target:"_blank",rel:"noopener noreferrer",className:"contact-icon",children:Object(l.jsx)(f.a,{icon:g.a})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/ruopeng-deng-2980244b/",target:"_blank",rel:"noopener noreferrer",className:"contact-icon",children:Object(l.jsx)(f.a,{icon:g.b})}),Object(l.jsx)("a",{href:"mailto:rupert.deng@gmail.com",className:"contact-icon",children:Object(l.jsx)(f.a,{icon:x.a})})]})]})]})})),v=(n(30),o.a.memo((function(e){var t=e.footerWidth,n={width:"".concat(t,"px")};return Object(l.jsx)("div",{className:"footer",style:n,children:Object(l.jsx)("p",{className:"footer-text",children:"Copyright @ Ruopeng Deng 2021"})})})));n(31);var w=function(){var e=Object(c.useState)(window.innerWidth),t=Object(i.a)(e,2),n=t[0],o=t[1];Object(c.useEffect)((function(){var e="undefined"!==typeof window.orientation||-1!==navigator.userAgent.indexOf("IEMobile"),t=window.devicePixelRatio,n=function(){e&&window.devicePixelRatio!==t||o(window.innerWidth)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]);var r=function(e){var t,n,c,o;return e<=576?(t="S",n=15,c=100,o=24):e<=992?(t="M",n=20,c=67,o=30):(t="L",n=25,c=65,o=36),[t,c,o,n]}(n),a=Object(i.a)(r,4),s=a[0],u=a[1],j=a[2],m=a[3],p=m*j,h=m,f=h*("S"===s?3.5:2.5),g=p-h;return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(d,{resolutionTier:s,navHeight:f,navWidth:g,sizeUnit:h}),Object(l.jsx)(b,{resolutionTier:s,numOfRows:u,numOfCols:j,cellSize:m,cellBorder:1}),Object(l.jsx)(O,{resolutionTier:s,aboutWidth:p}),Object(l.jsx)(v,{footerWidth:p})]})};a.a.render(Object(l.jsx)(w,{}),document.getElementById("root"))}],[[32,1,2]]]);
//# sourceMappingURL=main.09955a5b.chunk.js.map