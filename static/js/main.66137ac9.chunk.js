(this["webpackJsonpfetch-users-from-api"]=this["webpackJsonpfetch-users-from-api"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(1),c=n.n(r),i=n(3),a=n.n(i),u=(n(14),n(4)),l=n(5),h=n(8),o=n(6),d=(n(15),n(16),n.p+"static/media/loader.6489e7fb.gif"),j=function(e){var t=e.clickAdd,n=e.clickReset,r=e.isArrEmpty,c=e.isFetchRunning,i=Object(s.jsxs)("div",{className:"btnWraper",children:[c?Object(s.jsx)("div",{className:"btnLoader",children:Object(s.jsx)("img",{src:d,alt:"loader"})}):null,Object(s.jsx)("button",{className:"btn",onClick:t,children:"Add"})]}),a=Object(s.jsx)("button",{className:"btn "+(r?"hide":""),onClick:n,children:"Reset"});return Object(s.jsxs)("div",{className:"wraper",children:[i,a]})},b=n(7),m=(n(17),function(e){var t=e.userArr.map((function(e){return Object(s.jsxs)("div",{className:"eachUser",children:[Object(s.jsx)("img",{src:e.picture.large,alt:""}),Object(s.jsx)("div",{className:"eachUserNames",children:e.name.first+" "+e.name.last})]},e.login.uuid)}));return Object(s.jsx)(s.Fragment,{children:t})}),f=function(e){var t=Object(b.a)(e.usersArr);return e.isArrEmpty?Object(s.jsx)("div",{className:"mainWrapper",children:Object(s.jsx)("h2",{children:"there is nothing to show, click ADD button"})}):Object(s.jsx)("div",{className:"mainUserWrapper",children:Object(s.jsx)(m,{userArr:t})})},p=function(e){Object(h.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={usersArr:[],isArrEmpty:!0,isFetchRunning:!1},e.handleClickAdd=function(t){e.fetchUsers()},e.handleClickReset=function(t){e.setState({usersArr:[],isArrEmpty:!0})},e.fetchUsers=function(){e.setState({isFetchRunning:!0}),fetch("https://randomuser.me/api/?results=1").then((function(e){return e.json()})).then((function(t){e.setState({usersArr:e.state.usersArr.concat(t.results),isArrEmpty:!1,isFetchRunning:!1})})).catch((function(t){window.alert("Wyst\u0105pi\u0142 b\u0142\u0105d"),e.setState({isFetchRunning:!1})}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(j,{clickAdd:this.handleClickAdd,clickReset:this.handleClickReset,isArrEmpty:this.state.isArrEmpty,isFetchRunning:this.state.isFetchRunning}),Object(s.jsx)(f,{usersArr:this.state.usersArr,isArrEmpty:this.state.isArrEmpty})]})}}]),n}(r.Component),A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),r(e),c(e),i(e)}))};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root")),A()}],[[18,1,2]]]);
//# sourceMappingURL=main.66137ac9.chunk.js.map