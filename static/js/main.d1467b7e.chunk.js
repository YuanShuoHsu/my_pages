(this.webpackJsonpmy_pages=this.webpackJsonpmy_pages||[]).push([[0],{42:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),u=n.n(a),i=n(19),l=n.n(i),r=(n(42),n(24)),c=n(25),s=n(37),h=n(35),o=(n(43),n(49)),d=n(8),p=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={inputValue:"",handleinputValue:""},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)(a.Fragment,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{placeholder:"\u7559\u8a00",value:this.state.inputValue,onChange:function(t){return e.handleInputChange(t)},onKeyPress:function(t){return e.handleKeypress(t)}}),Object(d.jsx)(o.a,{type:"primary",onClick:function(t){return e.handleBtnClick(t)},children:"\u63d0\u4ea4"})]}),Object(d.jsx)("p",{onClick:function(t){return e.handleItemDelete(t)},dangerouslySetInnerHTML:{__html:this.state.handleinputValue}})]})}},{key:"handleInputChange",value:function(e){var t=e.target.value;t.length>20||this.setState((function(){return{inputValue:t}}))}},{key:"handleKeypress",value:function(e){13===e.charCode&&this.handleBtnClick()}},{key:"handleBtnClick",value:function(){this.setState((function(e){return{handleinputValue:e.inputValue,inputValue:""}}))}},{key:"handleItemDelete",value:function(){this.setState((function(){return{handleinputValue:""}}))}}]),n}(a.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,u=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),a(e),u(e),i(e),l(e)}))};l.a.render(Object(d.jsx)(u.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),f()}},[[46,1,2]]]);
//# sourceMappingURL=main.d1467b7e.chunk.js.map