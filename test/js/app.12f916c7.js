(function(e){function t(t){for(var n,s,r=t[0],c=t[1],l=t[2],u=0,p=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],n=!0,r=1;r<i.length;r++){var c=i[r];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=i[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=n,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/test/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=c;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var n=i("85ec"),a=i.n(n);a.a},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("Landing")],1)},o=[],s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-page"},[i("div",{staticClass:"cover-section container"},[i("div",{staticClass:"content-wrapper offset-lg-3 col-lg-6"},[i("h3",{domProps:{innerHTML:e._s(e.content.subtitle)}}),i("h1",{domProps:{innerHTML:e._s(e.content.title)}}),i("img",{attrs:{src:e.publicPath+"img/"+e.content.coverImage+".svg"}})])]),i("div",{staticClass:"nav"},e._l(e.content.nav,(function(t,n){return i("div",{key:n,class:["element",{selected:t===e.currentSection}],on:{click:function(i){return e.scrollTo(t)}}},[i("h3",[e._v(e._s(t))])])})),0),e._l(e.content.sections,(function(t,n){return i("div",{key:n},["background"===t.type?i("div",{staticClass:"background"},e._l(t.sections,(function(t,n){return i("div",{key:n,staticClass:"container"},["paragraph"===t.type?i("div",{staticClass:"section"},[i("h2",{staticClass:"offset-lg-3 col-lg-6",domProps:{innerHTML:e._s(t.title)}}),i("p",{staticClass:"offset-lg-3 col-lg-6",domProps:{innerHTML:e._s(t.text)}})]):e._e(),"image"===t.type&&"jpg"===t.format?i("div",{staticClass:"section offset-lg-2 col-lg-8"},[i("img",{attrs:{src:e.publicPath+"img/"+t.name+"."+t.format}})]):e._e(),"dida"===t.type?i("div",{staticClass:"dida"},[i("h3",{staticClass:"offset-lg-3 col-lg-6",domProps:{innerHTML:e._s(t.content)}})]):e._e()])})),0):e._e(),i("div",{staticClass:"container"},["anchor"===t.type?i("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:function(i,n){return e.visibilityChanged(i,n,t.content)},expression:"\n          (isVisible, entry) =>\n            visibilityChanged(isVisible, entry, section.content)\n        "}],attrs:{id:t.content}}):e._e(),"paragraph"===t.type?i("div",{staticClass:"section"},[i("h2",{staticClass:"offset-lg-3 col-lg-6",domProps:{innerHTML:e._s(t.title)}}),i("p",{staticClass:"offset-lg-3 col-lg-6",domProps:{innerHTML:e._s(t.text)}})]):e._e(),"image"===t.type&&"svg"===t.format?i("div",{staticClass:"section offset-lg-3 col-lg-6"},[i("img",{attrs:{src:e.publicPath+"img/"+t.name+"."+t.format}})]):e._e()])])})),e._m(0)],2)},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("h3",{staticClass:"credits offset-lg-3 col-lg-6"},[e._v(" designed and developed by Giulia Zerbini. Course Description: Zona Kostic. ")])])}],c=i("cb7d"),l={data:function(){return{content:c,publicPath:"/test/",currentSection:"info",show:!0,isVisible:!0,throttle:0,threshold:0}},methods:{scrollTo:function(e){location.hash="#"+e,this.currentSection=e},visibilityChanged:function(e,t,i){this.isVisible=e,e&&(this.currentSection=i)}}},d=l,u=(i("b621"),i("2877")),p=Object(u["a"])(d,s,r,!1,null,"92d36da2",null),f=p.exports,g={components:{Landing:f}},h=g,m=(i("034f"),Object(u["a"])(h,a,o,!1,null,null,null)),v=m.exports,y=i("85fe");n["a"].directive("observe-visibility",y["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(v)}}).$mount("#app")},"85ec":function(e,t,i){},b621:function(e,t,i){"use strict";var n=i("d42b"),a=i.n(n);a.a},cb7d:function(e){e.exports=JSON.parse('{"title":"The Art and Design<br>of Information","subtitle":"CSCI E-79 Spring 2019<br>Harvard Extension School ","coverImage":"e79_00","nav":["info","process","results","staff"],"sections":[{"type":"anchor","content":"info"},{"type":"paragraph","title":"","text":"Complex data has brought into many visual forms in order to facilitate the content understanding. However, not every transformation turned out to be effective. To compose visual message and improve information communication, significant amount of design practice is needed. Information design course introduces the strategies of visual thinking as an efficient method to convey complex data. It covers the fundamentals of visual communication and apply design principles in the context of diverse media. Information design overlaps with another areas such as graphic design, communication design, data visualization, human- computer interaction design, and instructional design. The course combines the best practices from these intersections while focusing on the effectiveness and visual clarity."},{"type":"image","name":"e79_01","format":"svg"},{"type":"paragraph","title":"how is the course structured?","text":"This course includes three major aspects of information visualization: graphics design, interaction design, and visual storytelling. First part of the course introduces students to design techniques as well as to the principles of effective visual communication. Second part of the course focuses on technologies, necessary to transfer designs into data-driven solutions. Before stepping into final projects, third part merges two perviously mentioned components into meaningful data visualization for further analysis and presentation."},{"type":"image","name":"e79_01b","format":"svg"},{"type":"paragraph","text":"Moreover, this course: 1. Introduces the key design and human perception principles 2. Helps students understand the importance of cognition in visualization design 3. Applies structured design process for data exploration, analysis, and storytelling 4. Focuses on tools and available techniques for designing effective visuals 5. Motivates critical evaluation, giving suggestions, and proposing improvements 6. Applies methods for visualization of data from a variety of fields 7. Introduces to a web-based frameworks and libraries for data visualization 8. Emphasizes a constructive work on complex projects as part of the team 9. Motivates creative thinking in challenging scenarios of high-dimensional data 10. Explores different communication spaces (print, phone, desktop, VR, and AR)"},{"type":"image","name":"e79_01c","format":"svg"},{"type":"anchor","content":"process"},{"type":"paragraph","title":"what are the expected learning outcomes?","text":"The main expected learning outcomes are:  effectively use design tools to create attractive visual compositions; create complex and modern infographics and data visualizations; learn and understand the principles of visual comprehension; apply techniques from different design fields; improve creative thinking through design-based learning."},{"type":"image","name":"e79_02","format":"svg"},{"type":"paragraph","title":"","text":"The first part of the course focused on data exploration and visual thinking, as a tool to explore a dataset and understand possible ways to communcate it. The second part focused on the exploration of visual models and applied data sketching to explore visualizations options. The third part of the course focused on the information architecture definition, using tools to visualize data and design techniques to combine the visualizations. The final step of the process consited on the creation of custom visualizations that combined various visual models and encoded multiple visual variables."},{"type":"anchor","content":"results"},{"type":"background","sections":[{"type":"paragraph","title":"what did the students produce?","text":"As final output of the course, students created custom visualizations, combining different visual models and applying design techniques learned throughout the semester. In this section of the website there are just some of the various visualizations produced. Every week the students were asked to analyze a datset and produce a visualizion, applying the techinques learned in that week. The visualizations below were produced in the final weeks of the course."},{"type":"image","name":"e79_03","format":"jpg"},{"type":"dida","content":"<b>jared jessup</b><br>cosmic bombs & meteoritic memory"},{"type":"image","name":"e79_04","format":"jpg"},{"type":"dida","content":"<b>jared jessup</b><br>scars. the marks of terrorism in africa, 1970 - 2017"},{"type":"image","name":"e79_07","format":"jpg"},{"type":"dida","content":"<b>jared jessup</b><br>dc\'s big bang"},{"type":"image","name":"e79_05","format":"jpg"},{"type":"dida","content":"<b>ning chen, zona kostic</b><br>1800- 1966 the peak meteor period"},{"type":"image","name":"e79_08","format":"jpg"},{"type":"dida","content":"<b>ning chen, zona kostic</b><br>1800- 1966 the peak meteor period - preparatory drawing"},{"type":"image","name":"e79_06","format":"jpg"},{"type":"dida","content":"<b>ning chen, Leslie‌ ‌De‌ ‌Leon‌, Maria‌ ‌Flanagan‌ and Rebecca‌ ‌Roach</b><br>water crisis under the surface"}]},{"type":"anchor","content":"staff"},{"type":"paragraph","title":"Zona Kostic — lecturer","text":"Zona Kostic is coming from two backgrounds: graphics design and data science. Her focus is on predictive methods and visual analytics. Upon defending her PhD thesis she obtained an assistant professor position at University of Belgrade. Shortly thereafter, she joined the Faculty of Arts and Sciences at Harvard University for a more empirical focus on data science while employing her visualization skills with Big Data. Zona’s accomplishments have garnered her an invitation to join the Visual Computing Group at Harvard\'s John A. Paulson School of Engineering and Applied Sciences (SEAS), working as a postdoc visiting researcher on information visualization projects in augmented and virtual reality. Her skilled combination of data science and information design has allowed her to actively participate in projects with the Harvard Institute for Applied Computational Science (IACS). Currently, she is teaching two courses at Harvard University and actively participate in research projects that combine information visualization and machine learning into an intelligent Web system. She is a COO and co-founder of ArchSpike, a platform that integrates data science with market modeling allowing users to design buildings that better respond to the future market demands."},{"type":"paragraph","title":"giulia zerbini — teaching fellow","text":"Giulia is a multidisciplinary designer from Italy specialised in data visualization. With a background in graphic design, she is currently focusing on front-end development, always researching on new languages and techniques, willing to merge the two worlds and find new ways to do information design. She is currently working as creative technologist at The Visual Agency in Milan, where she designs and develops interactive projects and visualizations. MA graduate at Politecnico di Milano in communication design, after attending the capstone course organized by DensityDesign Lab. Her thesis was developed during a research period at the Institute of Applied and Computational Sciences at Harvard University, where she worked as visiting researcher in data visualization. Her biggest challenge and goal is to merge design and coding to create effective visualizations. Passionate about using visualizations for discovering patterns in data and communicating information in intuitive terms to a broad audience."},{"type":"image","name":"e79_logo","format":"svg"}]}')},d42b:function(e,t,i){}});
//# sourceMappingURL=app.12f916c7.js.map