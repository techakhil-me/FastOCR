(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(6),s=n.n(i),r=n(21),o=n(22),l=n(27),d=n(26),j=n(11),h=n.n(j),b=n(7),u=(n(52),n(53),n(12)),x=n(4),m=n(23),O=n(3),g=function(){};function p(e){var t=e.imgText,n=e.imgUrl,c=Object(a.useState)(""),i=Object(u.a)(c,2),s=(i[0],i[1],Object(a.useState)(!1)),r=Object(u.a)(s,2);r[0],r[1];return Object(O.jsxs)(x.b,{children:[Object(O.jsxs)(x.c,{children:[Object(O.jsx)(x.e,{children:Object(O.jsx)("h2",{children:"Image Text"})}),Object(O.jsx)("hr",{}),"\xa0\xa0\xa0",Object(O.jsx)(x.a,{className:"mx-2",onClick:function(){return function(e){var t=window.open(e,"_blank","noopener,noreferrer");t&&(t.opener=null)}(n)},children:"Open In an New Tab"}),Object(O.jsx)(m.CopyToClipboard,{text:t,onCopy:g,children:Object(O.jsx)(x.a,{children:"Copy Text To Clipboard"})}),Object(O.jsx)("hr",{}),Object(O.jsx)(x.g,{children:t})]}),Object(O.jsx)(x.f,{variant:"bottom",src:n}),Object(O.jsx)(x.d,{children:"Hello"})]})}function f(e){var t=e.onChangeHandler,n=e.onClickHandler,a=e.loaded;return Object(O.jsxs)(x.b,{children:[Object(O.jsx)(x.e,{children:Object(O.jsx)("h2",{children:"Upload An Image"})}),Object(O.jsxs)(x.c,{children:[Object(O.jsx)(x.g,{children:"Fast and Free OCR service. Extract text from any image with in few seconds. Simple Optical Character Recognition service. Maximum File upload size is 8MB."}),Object(O.jsx)(x.j,{children:Object(O.jsx)("input",{type:"file",className:"form-control",onChange:t})}),Object(O.jsx)(x.a,{variant:"primary",onClick:n,children:"Upload"}),Object(O.jsx)(b.a,{}),Object(O.jsx)("br",{}),Object(O.jsxs)(x.k,{max:"100",color:"success",value:a,children:[Math.round(a,2),"%"]})]})]})}var C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).host=window.location.protocol+"//"+window.location.host,a.imgQuery=!1,a.onChangeHandler=function(e){a.setState({selectedFile:e.target.files[0],loaded:0})},a.onClickHandler=function(){var e=new FormData;e.append("file",a.state.selectedFile),h.a.post(a.host+"/api/image",e,{onUploadProgress:function(e){a.setState({loaded:e.loaded/e.total*100})}}).then((function(e){b.b.success("upload success"),a.setState({imgUrl:e.data.url,imgText:e.data.text})})).catch((function(e){b.b.error("upload fail")}))},a.getImgData=function(e){var t=a.host+"/api/get_images/"+e;h.a.get(t).then((function(e){a.setState({imgUrl:"/uploads/"+e.data.uuid+"."+e.data.file_ext,imgText:e.data.text}),window.iii=e.data})).catch((function(e){b.b.error("Can't get the image!")}))},a.state={selectedFile:null,imgUrl:"",imgText:""},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){if(!this.imgQuery){var e=window.location.hash.replace("#","");32==e.length&&(this.imgQuery=!0,this.getImgData(e))}}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(x.i,{children:[Object(O.jsx)("br",{}),Object(O.jsx)(x.l,{className:"justify-content-md-center",children:Object(O.jsx)(x.h,{md:"auto",children:this.imgQuery?Object(O.jsx)("div",{children:" "}):Object(O.jsx)(f,{onChangeHandler:this.onChangeHandler,onClickHandler:this.onClickHandler,loaded:this.state.loaded})})}),Object(O.jsx)("br",{}),Object(O.jsx)(x.l,{className:"justify-content-md-center",children:Object(O.jsxs)(x.h,{md:"auto",children:[Object(O.jsx)(p,{imgUrl:this.state.imgUrl,imgText:"helloiasdasdasdasdasd "}),this.state.imgUrl?Object(O.jsx)(p,{imgUrl:this.state.imgUrl,imgText:this.state.imgText}):Object(O.jsx)("div",{})]})})]})})}}]),n}(a.Component);n(60);s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.075a8959.chunk.js.map