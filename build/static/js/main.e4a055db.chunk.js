(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2OgXN",SearchForm:"Searchbar_SearchForm__3ZCxY",SearchFormButton:"Searchbar_SearchFormButton__z_YKR",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2qbGu",SearchFormInput:"Searchbar_SearchFormInput__2lKSJ"}},17:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2Iimr",Modal:"Modal_Modal__2hYhO"}},28:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1NmcE",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1dGhj"}},29:function(e,t,a){e.exports={Button:"Button_Button__1k7IL"}},31:function(e,t,a){e.exports={loaderPosition:"Loader_loaderPosition__h28Tl"}},36:function(e,t,a){},37:function(e,t,a){},8:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1zmgh",errorSpan:"ImageGallery_errorSpan__1YM7j",title:"ImageGallery_title__2xbNM"}},80:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(9),c=a.n(o),s=(a(36),a(4)),l=a(5),i=a(7),u=a(6),m=(a(37),a(13)),h=(a(38),a(18)),d=a(8),g=a.n(d),b=a(16),j=a.n(b),p=a(27),f=a(14),y=a.n(f);y.a.defaults.baseURL="https://pixabay.com/api/",y.a.defaults.params={key:"23145866-da154062db79be09da281bc6e",image_type:"photo"};var v=function(){var e=Object(p.a)(j.a.mark((function e(t){var a,r,n=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>1&&void 0!==n[1]?n[1]:1,e.next=3,y.a.get("?q=".concat(t,"&orientation=horizontal&safesearch=true&page=").concat(a,"&per_page=12"));case 3:return r=e.sent,e.abrupt("return",r.data.hits);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=a(28),S=a.n(O),I=a(1);var _=function(e){var t=e.webformatURL,a=e.largeImageURL,r=e.tags,n=e.onClick,o=e.id;return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)("img",{className:S.a.ImageGalleryItemImage,id:o,src:t,"data-source":a,alt:r,onClick:n})})},x=a(29),N=a.n(x);var w=function(e){var t=e.onClick;return Object(I.jsx)("button",{className:N.a.Button,type:"button",onClick:t,children:"Load more"})},k=a(30),C=a.n(k),M=(a(79),a(31)),L=a.n(M);var B=function(){return Object(I.jsx)("div",{className:L.a.loaderPosition,children:Object(I.jsx)(C.a,{type:"Bars",color:"#00BFFF",height:80,width:80})})},F=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={images:null,error:null,status:"idle",currentPage:1,loading:!1},e.scrollSmooth=function(){return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.handleLoadMore=function(){e.setState((function(e){return{currentPage:e.currentPage+1}}))},e.handleClick=function(t){if("IMG"===t.target.nodeName){var a=t.target.dataset.source;e.props.handleBigImg(a)}},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,r=e.queryName,n=this.props.queryName,o=this.state.currentPage;r!==n&&(this.setState({status:"pending"}),setTimeout((function(){v(n,1).then((function(e){return a.setState({images:e,currentPage:1,status:"resolved"})})).catch((function(e){return a.setState({error:e,status:"rejected"})}))}),1e3)),t.currentPage!==o&&1!==o&&v(this.props.queryName,o).then((function(e){a.setState((function(t){return{images:[].concat(Object(h.a)(t.images),Object(h.a)(e)),status:"resolved"}})),t.images!==e&&a.scrollSmooth()})).catch((function(e){a.setState({status:"rejected"})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.images,r=t.status;return"idle"===r?Object(I.jsx)("h1",{className:g.a.title,children:"Input name image"}):"pending"===r?Object(I.jsx)("div",{children:Object(I.jsx)(B,{})}):"rejected"===r?Object(I.jsx)("div",{className:g.a.title,children:"Oops"}):"resolved"===r?0===a.length?Object(I.jsxs)("h2",{className:g.a.title,children:[" Don't have images with name ",Object(I.jsxs)("span",{className:g.a.errorSpan,children:[" ",this.props.queryName]}),"! Input another name"]}):Object(I.jsxs)("div",{children:[Object(I.jsx)("ul",{className:g.a.ImageGallery,children:a.length>0&&a.map((function(t){var a=t.webformatURL,r=t.largeImageURL,n=t.tags,o=t.id;return Object(I.jsx)("li",{className:g.a.ImageGalleryItem,children:Object(I.jsx)(_,{webformatURL:a,largeImageURL:r,tags:n,onClick:e.handleClick},{id:o})},o)}))}),a.length>11&&Object(I.jsx)(w,{onClick:this.handleLoadMore})]}):void 0}}]),a}(r.Component),q=F,G=a(10),U=a.n(G),P=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={queryName:""},e.handleNameChange=function(t){e.setState({queryName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.queryName.trim()?(e.props.onSubmit(e.state.queryName),e.setState({queryName:""})):m.b.info("Input name images!")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(I.jsx)("header",{className:U.a.Searchbar,children:Object(I.jsxs)("form",{className:U.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(I.jsx)("button",{type:"submit",className:U.a.SearchFormButton,children:Object(I.jsx)("span",{className:U.a.SearchFormButtonLabel,children:"Search"})}),Object(I.jsx)("input",{value:this.state.queryName,onChange:this.handleNameChange,className:U.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(r.Component),R=P,D=a(17),E=a.n(D),K=document.querySelector("#modal-root"),T=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.toggleModal()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.toggleModal()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.largeImgURL;return Object(o.createPortal)(Object(I.jsx)("div",{className:E.a.Overlay,onClick:this.handleBackdropClick,children:Object(I.jsxs)("div",{className:E.a.Modal,children:[Object(I.jsx)("img",{src:a,alt:"big img",width:"1200"}),t]})}),K)}}]),a}(r.Component),A=T,Y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={queryName:"",page:1,images:[],showModal:!1,largeImg:""},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleFormSubmit=function(t){e.setState({queryName:t})},e.handleBigImg=function(t){e.setState({largeImg:t}),e.toggleModal()},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.showModal,a=e.queryName,r=e.largeImg;return Object(I.jsxs)("div",{children:[Object(I.jsx)(R,{onSubmit:this.handleFormSubmit}),Object(I.jsx)(q,{queryName:a,handleBigImg:this.handleBigImg}),t&&Object(I.jsx)(A,{toggleModal:this.toggleModal,largeImgURL:r}),Object(I.jsx)(m.a,{autoClose:2e3})]})}}]),a}(r.Component),z=Y;c.a.render(Object(I.jsx)(n.a.StrictMode,{children:Object(I.jsx)(z,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.e4a055db.chunk.js.map