(this["webpackJsonpportfolio-website"]=this["webpackJsonpportfolio-website"]||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),c=n(10),a=n.n(c),i=n(3),s=(n(18),[{projectId:"project-1",projectName:"Responsive Portfolio Website",projectCoverImage:"/images/project-images/project-1-cover.jfif",projectShowcase:"/images/project-images/project-1-showcase.gif",projectLink:"",projectRepo:"https://github.com/RupertDeng/portfolio-website",projectDescription:"I always wanted a portfolio website since I started learning coding. Did some attempt before with plain javascript but the process is nowhere near smooth. React.js is here to the rescue. Resuable function components and delegation by passing props greatly simplified and streamlined the workflow.\n\nI was shooting for a notebook vibe so thousands of cell components are employed to mimic the notebook grid. It might not be the most efficient way but hey, it works like a charm. With the help of React hooks, the grid can also respond to screen size change (similar to CSS mediaquery but with JS) and perform some really cool animations at events."},{projectId:"project-2",projectName:"Hands-free Cursor",projectCoverImage:"/images/project-images/project-2-cover.jpg",projectShowcase:"/images/project-images/project-2-showcase.gif",projectLink:"",projectRepo:"https://github.com/RupertDeng/handsfree-cursor",projectDescription:"The idea actually came out when I was coding my first project. There were many times that I need to pause and search online for some info. So my hands were on and off the keyboard frequently till it gets annoying. I wish something else could help move mouse cursor while keeping my hands always ready to type. The initial thought was to track eyeball movement, but it turns out that the implmementation might not be reliable since eyeball movement is rather tiny. \n\nI ended up with tracking face movement. As a concept, the app uses OpenCV and trained dlib ML model to detect key face landmark points, and drives mouse cursor via pyautogui library in a parallel process. I also added speed control, and mouse-click function, by mouth opening/closing. As you can see from the demo, it definitely works albeit some practice might be needed to tame it :-)"},{projectId:"project-3",projectName:"Youtube Air-gesture",projectCoverImage:"/images/project-images/project-3-cover.jpg",projectShowcase:"/images/project-images/project-3-showcase.gif",projectLink:"",projectRepo:"https://github.com/RupertDeng/youtube-airgesture",projectDescription:"This is another camera-based gadget. As the name implies, the app simply uses hand gestures to control browser youtube video playback. Hey, you'd admit that there were occasions your hands are too clumsy or messy to touch mouse/keyboard, where this gadget can be useful. \n\nThis time, I used the trained ML model from Mediapipe instead to get more robust landmark detection, and custom-made the hand gesture identification class. pyautogui library then activates key-press on browser based on the gesture identified to control youtube video, such as pause/resume, turn on/off caption, full screen, seek forward/backward, speed up/down."},{projectId:"project-4",projectName:"Odd-Number Web App",projectCoverImage:"/images/project-images/project-4-cover.jpg",projectShowcase:"/images/project-images/project-4-showcase.gif",projectLink:"https://odd-number.netlify.app/",projectRepo:"https://github.com/RupertDeng/odd-number.frontend",projectDescription:"I guess everyone gets random unknown phone calls. And I seldom found useful information online when that happens to me. So why not build a website where the good people on the internet can share info to help each other? It is also a perfect project to learn all the key essentials in Full Stack Web App development. \n\nHere user can search for any phone number, and one who knows some info on the number can post messages to alert others. The messages can be up-voted or down-voted just like any internet posts. As you can see in the end of the demo above, I also implemented a simple ip-address rate-limiter so the system won't get abused too much. \n\nTechnical side, user-input data are stored in MongoDB Atlas, with phone number as primary key. Frontend of the app is created with React.js, and styled in Bootstrap which gives me much better experience than vanilla CSS. Backend server is enabled by Flask in a RESTful implmentation. Both frontend and backend are auto-deployed from Github repo, onto Netlify and Heroku platforms respectively."}]),l=n(0),d=r.a.memo((function(e){var t=e.resolutionTier,n=e.navHeight,c=e.navWidth,a=e.sizeUnit,d={height:"".concat(n,"px"),width:"".concat(c,"px"),transform:"translateY(".concat(a/4,"px)")},u={width:"".concat("S"===t?c:c*="M"===t?.5:.4,"px")},m=Object(o.useState)(!1),p=Object(i.a)(m,2),h=p[0],j=p[1],f=r.a.useRef();return Object(l.jsxs)("nav",{className:h?"nav-container expand":"nav-container",style:d,children:[Object(l.jsxs)("div",{className:"brand-container",children:[Object(l.jsx)("img",{className:"app-logo",src:"/images/logo-sketch.png",alt:"logo-sketch",onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})}}),Object(l.jsxs)("p",{className:"app-name",children:["Ruopeng's ",Object(l.jsx)("br",{})," Code Journal"]})]}),Object(l.jsxs)("div",{className:"menu-container",children:[Object(l.jsx)("button",{ref:f,className:h?"project-nav opened":"project-nav",onClick:function(){h?j(!1):(j(!0),f.current.focus())},onBlur:function(){return j(!1)},children:"Project"}),Object(l.jsx)("button",{className:"about-nav",onClick:function(){return document.getElementById("about").scrollIntoView({behavior:"smooth"})},children:"About"}),Object(l.jsx)("ul",{className:h?"project-menu active":"project-menu",style:u,children:function(e){var t=[];return e.slice().reverse().forEach((function(e){t.push(Object(l.jsx)("li",{className:"project-item",onMouseDown:function(){return function(e){var t=document.getElementById(e),n=t.getBoundingClientRect(),o=window.pageYOffset||document.documentElement.scrollTop;window.scrollTo({top:(n.top+n.bottom)/2+o-window.innerHeight/2,behavior:"smooth"}),setTimeout((function(){return t.classList.toggle("focused")}),600),setTimeout((function(){return t.classList.toggle("focused")}),1300),j(!1)}(e.projectId)},children:Object(l.jsx)("u",{children:e.projectName})},e.projectId+"-menu"))})),t}(s)})]})]})})),u=(n(20),r.a.memo((function(e){var t=e.isMobile,n=e.cellId,o=e.cellSize,r=e.cellBorder,c=e.cellRow,a=e.cellCol,i=e.cellType,s=e.numOfRows,d=e.numOfCols,u={width:o,height:o,borderWidth:r,gridArea:"".concat(c," / ").concat(a," / ").concat(c+1," / ").concat(a+1),animation:"cell-banner"===i?"".concat(1.5+2*Math.random(),"s steps(4, end) 0s 3 alternate none running fadein"):"none"},m=[[c-1,a],[c+1,a],[c,a+1],[c,a-1]];m=m.filter((function(e){return e[0]>0&&e[0]<=s&&e[1]>0&&e[1]<=d})).map((function(e){return(e[0]-1)*d+e[1]}));var p=function(){t||(document.getElementById(n).classList.toggle("active-0"),m.forEach((function(e){return document.getElementById(e).classList.toggle("active-1")})))};return Object(l.jsx)("div",{id:n,className:i,style:u,onClick:"cell-banner"===i?function(){if(t){document.querySelectorAll(".cell-banner").forEach((function(e){e.classList.add("shrink"),setTimeout((function(){return e.classList.remove("shrink")}),1e3)}))}else{var e=document.getElementById("grid-view");e.classList.add("animate"),setTimeout((function(){return e.classList.remove("animate")}),1e3)}}:function(){t&&(document.getElementById(n).classList.add("active-0"),m.forEach((function(e){return document.getElementById(e).classList.add("active-1")})),setTimeout((function(){document.getElementById(n).classList.remove("active-0"),m.forEach((function(e){return document.getElementById(e).classList.remove("active-1")}))}),500))},onMouseOver:p,onMouseOut:p,children:" "})}))),m=(n(21),r.a.memo((function(e){var t,n,o,r,c;switch(e.resolutionTier){case"S":t=24,n=3,o=26,r=23,c=.75;break;case"M":t=23,n=7,o=25,r=25,c=.95;break;case"L":t=23,n=10,o=25,r=28,c=1.2;break;default:t=23,n=10,o=26,r=28,c=1.2}var a={gridArea:"".concat(t," / ").concat(n," / ").concat(o," / ").concat(r),fontSize:"".concat(c,"rem")},i={gridArea:"".concat(t+2," / ").concat(n," / ").concat(t+3," / ").concat(r),backgroundImage:"url(".concat("/images/separate-line.svg",")")};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"welcome-text",style:a,children:Object(l.jsxs)("i",{children:["Welcome to my Code Journal! ",Object(l.jsx)("br",{}),"Here I note down things I made and am learning. "]})}),Object(l.jsx)("div",{className:"separate-line",style:i})]})}))),p=n(11),h=(n(22),n(23),r.a.memo((function(e){var t=e.cardRow,n=e.cardCol,o=e.cardWidth,r=e.cardHeight,c=e.cardId,a=e.cardImage,i=e.cardLabel,s=e.cardClick,d={gridArea:"".concat(t," / ").concat(n," / ").concat(t+r," / ").concat(n+o)};return Object(l.jsxs)("div",{id:c,className:"project-card",style:d,onClick:function(){s(parseInt(c.split("-").slice(-1)))},children:[Object(l.jsx)("div",{className:"card-image",style:{backgroundImage:"url(".concat(a,")")}}),Object(l.jsx)("p",{className:"card-label",children:Object(l.jsx)("b",{children:i})})]})}))),j=r.a.memo((function(e){var t,n,o,c,a,d,u=e.resolutionTier,m=(e.numOfRows,e.numOfCols);switch(u){case"S":t=30,n=5,o=16,c=16,a=2,d=70;break;case"M":t=29,n=3,o=12,c=12,a=2,d=2;break;case"L":t=29,n=3,o=10,c=10,a=1,d=1;break;default:t=29,n=4,o=14,c=14,a=2,d=2}var j=r.a.useState(0),f=Object(i.a)(j,2),b=f[0],g=f[1],v=0===b?null:s[b-1];r.a.useEffect((function(){var e=function(e){return e.preventDefault()};return 0!==b?(document.body.style.overflowY="hidden",document.addEventListener("touchmove",e,{passive:!1})):document.body.style.overflowY="overlay",function(){return document.removeEventListener("touchmove",e)}}),[b]);var w=r.a.useRef();return Object(l.jsxs)(l.Fragment,{children:[function(e){var r,i=[],s=t,u=n,j=e.slice().reverse(),f=Object(p.a)(j);try{for(f.s();!(r=f.n()).done;){var b=r.value;i.push(Object(l.jsx)(h,{cardRow:s,cardCol:u,cardWidth:o,cardHeight:c,cardId:b.projectId,cardImage:b.projectCoverImage,cardLabel:b.projectName,cardClick:g},b.projectId)),u+2*o+d<=m?u=u+o+d:(s=s+c+a,u=n)}}catch(v){f.e(v)}finally{f.f()}return i}(s),0!==b&&Object(l.jsx)("div",{className:"popup-container",onClick:function(){return g(0)},children:Object(l.jsxs)("div",{className:"popup-box",children:[Object(l.jsx)("img",{className:"project-showcase",src:v.projectShowcase,alt:v.projectId+"showcase",onClick:function(e){return e.stopPropagation()}}),Object(l.jsxs)("div",{className:"project-detail",onClick:function(e){return e.stopPropagation()},children:[Object(l.jsx)("p",{className:"project-title",children:Object(l.jsx)("b",{children:v.projectName})}),Object(l.jsx)("p",{className:"project-desc",ref:w,onTouchMove:function(e){w.current.scrollHeight>w.current.clientHeight?e.stopPropagation():e.preventDefault()},children:v.projectDescription}),(""!==v.projectLink||""!==v.projectRepo)&&Object(l.jsxs)("div",{className:"project-links",children:[""!==v.projectLink&&Object(l.jsx)("a",{className:"pjtlink",href:v.projectLink,target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("u",{children:"Link to App"})}),""!==v.projectRepo&&Object(l.jsx)("a",{className:"pjtlink",href:v.projectRepo,target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("u",{children:"Link to Github"})})]})]})]})})]})})),f=(n(24),r.a.memo((function(e){var t=e.isMobile,n=e.resolutionTier,o=e.numOfRows,r=e.numOfCols,c=e.cellSize,a=e.cellBorder,i={gridTemplateRows:"repeat(".concat(o,", ").concat(c,"px))"),gridTemplateColumns:"repeat(".concat(r,", ").concat(c,"px))")};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"grid-container",children:Object(l.jsxs)("div",{id:"grid-view",className:"grid",style:i,children:[function(e,t,n,o,r,c){for(var a,i,s=[],d=function(e,t){var n,o;switch(e){case"S":n=8,o=3;break;case"M":n=7,o=6;break;case"L":n=7,o=9;break;default:n=7,o=9}return new Set([[0,0],[0,2],[0,4],[0,5],[0,6],[0,8],[0,12],[0,16],[0,17],[0,18],[0,19],[1,0],[1,2],[1,4],[1,8],[1,12],[1,16],[1,19],[2,0],[2,1],[2,2],[2,4],[2,5],[2,8],[2,12],[2,16],[2,19],[3,0],[3,2],[3,4],[3,8],[3,12],[3,16],[3,19],[4,0],[4,2],[4,4],[4,5],[4,6],[4,8],[4,9],[4,10],[4,12],[4,13],[4,14],[4,16],[4,17],[4,18],[4,19],[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],[6,15],[6,16],[6,17],[6,18],[6,19],[8,0],[8,4],[8,6],[8,7],[8,8],[8,10],[8,11],[8,12],[8,14],[8,17],[8,18],[9,0],[9,4],[9,6],[9,8],[9,10],[9,12],[9,14],[9,17],[9,19],[10,0],[10,2],[10,4],[10,6],[10,8],[10,10],[10,11],[10,14],[10,17],[10,19],[11,0],[11,2],[11,4],[11,6],[11,8],[11,10],[11,12],[11,14],[11,17],[11,19],[12,1],[12,3],[12,6],[12,7],[12,8],[12,10],[12,12],[12,14],[12,15],[12,17],[12,18]].map((function(e){return(e[0]+n-1)*t+e[1]+o})))}(t,c),m=1;m<=r;m++)for(var p=1;p<=c;p++)i=(m-1)*c+p,a=d.has(i)?"cell-banner":"cell-default",s.push(Object(l.jsx)(u,{isMobile:e,cellId:i,cellSize:n,cellBorder:o,cellRow:m,cellCol:p,cellType:a,numOfRows:r,numOfCols:c},i));return s}(t,n,c,a,o,r),Object(l.jsx)(m,{resolutionTier:n}),Object(l.jsx)(j,{resolutionTier:n,numOfRows:o,numOfCols:r})]})})})}))),b=(n(25),n(6)),g=n(9),v=n(12),w=r.a.memo((function(e){var t=e.resolutionTier,n=e.aboutWidth,o="S"===t?"column":"row",r={width:"".concat(n,"px"),flexDirection:"".concat(o)},c={fontSize:"".concat("L"===t?1:.9,"rem")},a={justifyContent:"S"===t?"center":"flex-end",marginTop:"S"===t?"10px":"5px"};return Object(l.jsxs)("div",{id:"about",className:"about-container",style:r,children:[Object(l.jsx)("img",{className:"picture-self",src:"/images/picture-self.png",alt:"me"}),Object(l.jsxs)("div",{className:"text-container",children:[Object(l.jsxs)("p",{className:"self-intro",style:c,children:["The name is ",Object(l.jsx)("b",{children:"Ruopeng (Rupert) Deng"}),". Majored in Physics and Ph.D. in Materials Science.",Object(l.jsx)("br",{}),"After dedicating myself over a decade to studying physical world, specifically semiconductor processing, I started to wonder how the virtual world works under the hood.",Object(l.jsx)("br",{}),"The thought pulled me deeply in, and I began to teach myself, from simple python 'Hello World' to data structure and algorithm, to advanced topics like distributed system. The more I learned, the more I appreciate the underlying intricacy and wisdom. It is truly fascinating!",Object(l.jsx)("br",{}),'The undertaking of learning and trying new things has never been so thrilling. I do hope that I could keep up this journey of exploration, "to infinity and beyond" ...']}),Object(l.jsxs)("div",{className:"contact-icon-container",style:a,children:[Object(l.jsx)("a",{href:"https://github.com/RupertDeng",target:"_blank",rel:"noopener noreferrer",className:"contact-icon",children:Object(l.jsx)(b.a,{icon:g.a})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/ruopeng-deng-2980244b/",target:"_blank",rel:"noopener noreferrer",className:"contact-icon",children:Object(l.jsx)(b.a,{icon:g.b})}),Object(l.jsx)("a",{href:"mailto:rupert.deng@gmail.com",className:"contact-icon",children:Object(l.jsx)(b.a,{icon:v.a})})]})]})]})})),y=(n(31),r.a.memo((function(e){var t=e.footerWidth,n={width:"".concat(t,"px")};return Object(l.jsx)("div",{className:"footer",style:n,children:Object(l.jsx)("p",{className:"footer-text",children:"Copyright @ Ruopeng Deng 2021"})})}))),O=(n(32),n(13)),x=n.n(O);var k=function(){var e="undefined"!==typeof window.orientation||-1!==navigator.userAgent.indexOf("IEMobile");x.a.polyfill();var t=function(e){return e<=576?"S":e<=992?"M":"L"},n=Object(o.useState)(t(window.innerWidth)),r=Object(i.a)(n,2),c=r[0],a=r[1];Object(o.useEffect)((function(){var e="undefined"!==typeof window.orientation||-1!==navigator.userAgent.indexOf("IEMobile"),n=function(n){e?"orientationchange"===n&&setTimeout((function(){a(t(window.outerWidth))}),100):"resize"===n&&a(t(window.innerWidth))},o=function(){return n("orientationchange")},r=function(){return n("resize")};return window.addEventListener("orientationchange",o),window.addEventListener("resize",r),function(){window.removeEventListener("resize",r),window.removeEventListener("orientationchange",o)}}),[]);var s=function(e){var t,n,o;return"S"===e?(t=15,n=116,o=24):"M"===e?(t=20,n=72,o=30):(t=25,n=55,o=36),[n,o,t]}(c),u=Object(i.a)(s,3),m=u[0],p=u[1],h=u[2],j=h*p,b=h,g=b*("S"===c?3.5:2.5),v=j-b;return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(d,{resolutionTier:c,navHeight:g,navWidth:v,sizeUnit:b}),Object(l.jsx)(f,{isMobile:e,resolutionTier:c,numOfRows:m,numOfCols:p,cellSize:h,cellBorder:1}),Object(l.jsx)(w,{resolutionTier:c,aboutWidth:j}),Object(l.jsx)(y,{footerWidth:j})]})};a.a.render(Object(l.jsx)(k,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.c30b206d.chunk.js.map