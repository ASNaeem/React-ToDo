(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);a(11);var n=a(0),i=a.n(n),r=a(2),s=a.n(r),c=(a(17),a(3)),l=a(4),o=a(6),u=a(5),m=a(7),p=a(1),d=a(9),h=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).createTasks=a.createTasks.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"createTasks",value:function(e){var t=this;return i.a.createElement("li",{onClick:function(){return t.delete(e.key)},key:e.key,className:"list-group-item d-flex justify-content-between align-items-center"},e.text,i.a.createElement("span",{class:"badge badge-primary badge-pill"},Date()))}},{key:"delete",value:function(e){this.props.delete(e)}},{key:"render",value:function(){var e=this.props.entries.map(this.createTasks);return i.a.createElement("ul",{className:"list-group"},i.a.createElement(d.a,{duration:250,easing:"ease-out"},e))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={items:[]},a.addItem=a.addItem.bind(Object(p.a)(Object(p.a)(a))),a.deleteItem=a.deleteItem.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"addItem",value:function(e){if(""!==this._inputElement.value){var t={text:this._inputElement.value,key:Date.now()};this.setState(function(e){return{items:e.items.concat(t)}}),this._inputElement.value=""}console.log(this.state.items),e.preventDefault()}},{key:"deleteItem",value:function(e){var t=this.state.items.filter(function(t){return t.key!==e});this.setState({items:t})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},"ToDoLiSt"),i.a.createElement("p",null,"Hint: Click on a list item to remove it."),i.a.createElement("form",{onSubmit:this.addItem},i.a.createElement("div",{className:"input-group input-group-sm mb-3"},i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("span",{className:"input-group-text",id:"inputGroup-sizing-sm"},"New List Item")),i.a.createElement("input",{ref:function(t){return e._inputElement=t},type:"text",placeholder:"input your texts here !",className:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-sm"}))),i.a.createElement("div",null,i.a.createElement(h,{entries:this.state.items,delete:this.deleteItem})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.a249ce69.chunk.js.map