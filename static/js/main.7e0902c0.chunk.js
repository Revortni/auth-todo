(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{22:function(e,t,a){},25:function(e,t,a){},34:function(e,t,a){},44:function(e,t,a){e.exports=a(81)},49:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var r,n=a(0),i=a.n(n),s=a(38),o=a.n(s),l=(a(49),a(13)),c=a(14),d=a(1),m=a(3),u=a(4),h=a(6),g=a(5),p=a(7),f=a(16),v=a(15),b=(a(22),function(e){return i.a.createElement("div",{className:"form-input-wrapper"},i.a.createElement("label",{htmlFor:e.name},i.a.createElement("b",null,e.title),i.a.createElement("input",{type:e.type,placeholder:e.placeholder,name:e.name,required:e.required,onChange:e.onChange,disabled:e.disabled,id:e.name}),e.error?i.a.createElement("span",{className:"form-input-error"},e.error):null))}),E=function(e){return e.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i)},N=function(e){return e.match(/^[a-z ,.'-]+$/i)},w=function(e){var t=e.fieldName,a=e.data,r=e.validation,n={error:{},valid:!0};switch(t){case"firstName":a.firstName?a.firstName.length<3?(n.error.firstName="First name must have atleast 3 characters",n.valid=!1):N(a.firstName)?n.error.firstName=null:(n.error.firstName="First name is invalid",n.valid=!1):(n.error.firstName="First name is required",n.valid=!1);break;case"lastName":a.lastName?a.lastName.length<3?(n.error.lastName="Last name must have atleast 3 characters",n.valid=!1):N(a.lastName)?n.error.lastName=null:(n.error.lastName="Last name is invalid",n.valid=!1):(n.error.lastName="Last name is required",n.valid=!1);break;case"email":a.email?E(a.email)?n.error.email=null:(n.error.email="Please enter a valid email address",n.valid=!1):(n.error.email="Email is required",n.valid=!1);break;case"password":a.password?a.password.length<8?(n.error.password="Your password needs to be between 8 and 30 characters long",n.valid=!1):(n.error.password=null,n.error.confirmPassword=null,r.confirmPassword=!0):(n.error.password="Password is required",n.valid=!1);break;case"confirmPassword":a.confirmPassword?a.password!==a.confirmPassword?(n.error.password="Password must match with confirm password",n.valid=!1):(n.error.password=null,n.error.confirmPassword=null,r.password=!0):(n.error.confirmPassword="Confirm password is required",n.valid=!1)}r[t]=n.valid,console.log(r);var i=Object.keys(r).reduce((function(e,t){return e&&r[t]}),!0);return console.log(i),Object(d.a)({},n,{validation:r,valid:i})},O=function(e){var t=e.fieldName,a=e.data,r=e.validation,n={error:{},valid:!0};switch(t){case"email":a.email?E(a.email)?n.error.email=null:(n.valid=!1,n.error.email="Please enter a valid email address",n.valid=!1):(n.error.email="Email is required",n.valid=!1);break;case"password":a.password?n.error.password=null:(n.error.password="Password is required",n.valid=!1)}r[t]=n.valid;var i=Object.keys(r).reduce((function(e,t){return e&&r[t]}),!0);return Object(d.a)({},n,{validation:r,valid:i})},k=function(e){var t=e.onSubmit,a=e.text,r=e.disabled,n=e.submitting;return i.a.createElement("button",{type:"submit",className:"form-submit-btn",disabled:r},n?t:a)},j=(a(23),a(25),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).handleChange=function(e){e.preventDefault();var t=Object(d.a)({},a.state.data,Object(v.a)({},e.target.name,e.target.value)),r=e.target.name,n=O({data:t,fieldName:r,validation:a.state.validation}),i=n.error,s=n.valid,o=n.validation;a.setState((function(e){return{data:Object(d.a)({},e.data,{},t),error:Object(d.a)({},e.error,{},i),validation:o,valid:s}}))},a.handleSubmit=function(e){e.preventDefault();var t=Object(d.a)({},a.state).data;a.props.requestLogin(t)},a.state={data:{email:"",password:""},loggingIn:!1,error:{},validation:{email:!1,password:!1},valid:!1,status:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e){e.loggingIn!==this.props.loggingIn&&this.setState({loggingIn:this.props.loggingIn})}},{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("div",{className:"input-form"},i.a.createElement("div",{className:"input-form-title"},i.a.createElement("h1",null,"Login")),i.a.createElement("div",{className:"form-wrapper"},i.a.createElement(b,{name:"email",type:"text",title:"Email",placeholder:"Enter Email",onChange:this.handleChange,value:this.state.data.email,required:!0,disabled:this.state.loggingIn,error:this.state.error.email}),i.a.createElement(b,{name:"password",type:"password",title:"Password",placeholder:"Enter Password",onChange:this.handleChange,value:this.state.data.password,required:!0,disabled:this.state.loggingIn,error:this.state.error.password}),i.a.createElement(k,{onSubmit:"Logging in...",text:"Login",disabled:this.state.loggingIn||!this.state.valid,submitting:this.state.loggingIn}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.loggingIn!==t.loggingIn?{loggingIn:e.loggingIn}:null}}]),t}(n.Component)),I=a(39),S=a.n(I),C=function(e){return S()(e)},y="/login",L="/register",P="".concat("https://rev-todo-server.herokuapp.com/","app"),q="/verify",x="/todo",R=(a(34),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).handleError=function(e){var t=e.err;if(t.response){var r=(t.response.data||{msg:"Error"}).msg;a.setState({loggingIn:!1,error:r})}else a.setState({loggingIn:!1,error:t.message||"Error"})},a.saveToken=function(e){var t=e.token,r=Object(f.a)(e,["token"]);localStorage.setItem("token",t),a.setState({loggingIn:!1,redirectToReferrer:!0}),a.props.setAuth({auth:!0,params:Object(d.a)({},r,{token:t})})},a.requestLogin=function(e){a.setState({loggingIn:!0}),C({baseURL:P,url:y,method:"post",data:e}).then((function(e){a.saveToken(e.data)})).catch((function(e){a.handleError({err:e})}))},a.state={loggedIn:!1,loggingIn:!1,redirectToReferrer:!1,error:null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.error||this.state.error,t=(this.props.location.state||{from:{pathname:"/"}}).from;return this.state.redirectToReferrer?i.a.createElement(c.a,{to:t}):i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"login-wrapper"},i.a.createElement(j,{requestLogin:this.requestLogin,loggingIn:this.state.loggingIn}),i.a.createElement("div",{className:"form-bottom-info-redirect"},"Create an account?",i.a.createElement("span",null,i.a.createElement(l.b,{to:"/register"},"Register"))),e?i.a.createElement("div",{className:"form-error-message"},e):null))}}]),t}(n.Component)),D=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).handleChange=function(e){e.preventDefault();var t=Object(d.a)({},a.state.data,Object(v.a)({},e.target.name,e.target.value)),r=e.target.name,n=w({data:t,fieldName:r,validation:a.state.validation}),i=n.error,s=n.valid,o=n.validation;a.setState((function(e){return{data:Object(d.a)({},e.data,{},t),error:Object(d.a)({},e.error,{},i),validation:o,valid:s}}))},a.handleSubmit=function(e){if(e.preventDefault(),a.checkIfValid()){var t=Object(d.a)({},a.state).data;a.props.requestRegister(t)}},a.state={data:{firstName:"",lastName:"",email:"",password:"",confirmPassword:""},validation:{firstName:!1,lastName:!1,email:!1,password:!1,confirmPassword:!1},registering:!1,error:{},valid:!1,status:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.registering!==this.props.registering&&this.setState({registering:this.props.registering})}},{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("div",{className:"input-form"},i.a.createElement("div",{className:"input-form-title"},i.a.createElement("h1",null,"Register"),i.a.createElement("p",null,"Please fill up this form to create an account.")),i.a.createElement("div",{className:"form-wrapper"},i.a.createElement("div",{className:"name-input-wrapper clearfix"},i.a.createElement("div",{className:"name-input"},i.a.createElement(b,{name:"firstName",type:"text",title:"First Name",placeholder:"Enter First Name",onChange:this.handleChange,value:this.state.data.firstName,required:!0,disabled:this.state.registering,error:this.state.error.firstName})),i.a.createElement("div",{className:"name-input"},i.a.createElement(b,{name:"lastName",type:"text",title:"Last Name",placeholder:"Enter Last Name",onChange:this.handleChange,value:this.state.data.lastName,required:!0,disabled:this.state.registering,error:this.state.error.lastName}))),i.a.createElement(b,{name:"email",type:"text",title:"Email",placeholder:"Enter Email",onChange:this.handleChange,value:this.state.data.email,required:!0,disabled:this.state.registering,error:this.state.error.email}),i.a.createElement(b,{name:"password",type:"password",title:"Password",placeholder:"Enter Password",onChange:this.handleChange,value:this.state.data.password,required:!0,disabled:this.state.registering,error:this.state.error.password}),i.a.createElement(b,{name:"confirmPassword",type:"password",title:"Repeat Password",placeholder:"Enter Repeat Password",onChange:this.handleChange,value:this.state.data.confirmPassword,required:!0,disabled:this.state.registering,error:this.state.error.confirmPassword}),i.a.createElement(k,{onSubmit:"Registering...",text:"Register",submitting:this.state.registering,disabled:this.state.registering||!this.state.valid}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.registering!==t.registering?{registering:e.registering}:null}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).requestRegister=function(e){a.setState({registering:!0}),C({baseURL:P,url:L,method:"post",data:e}).then((function(e){a.setState({registered:!0}),console.log(e)})).catch((function(e){if(e.response){var t=(e.response.data||{msg:"Error"}).msg;a.setState({registered:!1,error:t})}else a.setState({registered:!1,error:e.message||"Error"})}))},a.state={registered:!1,registering:!1,error:null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.error||this.state.error;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"register-wrapper"},i.a.createElement(D,{requestRegister:this.requestRegister,loggingIn:this.state.loggingIn}),i.a.createElement("div",{className:"form-bottom-info-redirect"},i.a.createElement("span",null,"Already have an account? ",i.a.createElement(l.b,{to:"/login"},"Login"))),e?i.a.createElement("div",{className:"form-error-message"},e):null))}}]),t}(n.Component),_=function(e){var t=e.isAuthenticated,a=e.children,r=Object(f.a)(e,["isAuthenticated","children"]);return i.a.createElement(c.b,Object.assign({},r,{render:function(e){return t?a:i.a.createElement(c.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},A=a(43),T=function(e){return i.a.createElement("div",{className:"todo-item clearfix"},i.a.createElement("div",{className:"todo-item-left"},i.a.createElement("input",{type:"checkbox",checked:e.item.completed,onChange:function(){return e.checkItem(e.item.id)}}),i.a.createElement("span",{className:e.item.completed?"completedTask":""},e.item.text)),i.a.createElement("div",{className:"removeTask",onClick:function(){return e.removeItem(e.item.id)}},"x"))},U=(a(73),function(e){var t=e.searchOn;return e.loading?i.a.createElement("div",{className:"no_data"},"Your list is being loaded..."):i.a.createElement("div",{className:"no_data"},"You don't have any ",t?"matching ":null,"tasks.")}),Y=function(e){var t=e.list.map((function(t){return i.a.createElement(T,{key:t.id,item:t,checkItem:function(){return e.checkItem(t.id)},removeItem:function(){return e.removeItem(t.id)}})}));return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"todo-list"},e.list.length?t:i.a.createElement(U,{loading:e.loading,searchOn:!!e.filter.length})))},J=(a(74),function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(h.a)(this,Object(g.a)(t).call(this))).handleChange=function(t){t.preventDefault(),e.setState({content:t.target.value})},e.handleSubmit=function(t){13!==t.keyCode&&"click"!==t.type||e.state.content.length>0&&(e.props.handleSubmit(e.state.content),e.setState({content:""}))},e.state={content:""},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"add_item clearfix"},i.a.createElement("input",{type:"text",name:"item",value:this.state.content,onChange:this.handleChange,onKeyDown:this.handleSubmit,placeholder:"Add a task"}),i.a.createElement("div",{className:"add_item_button",onClick:this.handleSubmit},"+")))}}]),t}(n.Component)),M=(a(75),function(e){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"search_item"},i.a.createElement("input",{type:"text",name:"item",onChange:function(t){var a=t.target.value;e.handleSearchItem(a)},placeholder:"Search"})))}),$=(a(76),function(e){var t=e.active?" activeOption":"";return i.a.createElement("div",{className:"header_option_wrapper"},i.a.createElement("div",{className:"header_option"+t,onClick:e.onClick},e.name))}),z={home:{name:"Home",filter:"all",active:!0},completed:{name:"Completed",filter:!0,active:!1},remaining:{name:"Remaining",filter:!1,active:!1}},B=function(e){var t=e.firstName,a=e.lastName;return i.a.createElement("div",{className:"header-profile-info"},i.a.createElement("div",{className:"header-profile-info-img-wrapper"},i.a.createElement("img",{src:"https://i.picsum.photos/id/904/600/400.jpg",alt:"profile-img"})),i.a.createElement("span",null,t,a))},H=(r=function(e){var t=e.setFilter;return i.a.createElement("div",{className:"header_options_container"},Object.keys(z).map((function(e){var a=z[e];return i.a.createElement($,{name:a.name,onClick:function(){return a=e,r=t,Object.keys(z).forEach((function(e){z[e].active=e===a})),void r(z[a].filter);var a,r},key:a.name,active:a.active})})))},function(e){var t=e.authenticated,a=e.handleLogout,n=e.data,s=Object(f.a)(e,["authenticated","handleLogout","data"]);return t?i.a.createElement("div",{className:"header_right clearfix"},i.a.createElement(r,s),i.a.createElement("div",{className:"header-profile-options"},i.a.createElement(B,n),i.a.createElement("div",{className:"signout-button",onClick:a},"Logout"))):null}),K=function(e){return i.a.createElement("header",null,i.a.createElement("div",{className:"container clearfix"},i.a.createElement("div",{className:"header_title"},"Todo List"),i.a.createElement(H,e)))},V=(a(77),a(42)),G=a.n(V),Q=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).updateDatabase=function(e){var t=e.data,r=e.method,n=e.id;return new Promise((function(e,i){var s={token:a.props.data.token};return C({baseURL:P,url:x+(n?"/"+n:""),method:r,data:t,headers:s}).then((function(a){if(a)return e({data:t,response:a})})).catch((function(e){var t=(e.response?e.response.data:{msg:"Error"}).msg;return i(t)}))}))},a.checkItem=function(e){var t={},r=a.state.list.map((function(a){return a.id===e&&(a.completed=!a.completed,t=a),a}));a.updateDatabase({method:"patch",id:e,data:{completed:t.completed}}).then((function(){a.setState({list:r},a.filterItems)})).catch((function(e){console.log(e)}))},a.removeItem=function(e){a.updateDatabase({method:"delete",id:e}).then((function(){var t=a.state.list.filter((function(t){return e!==t.id}));a.setState({list:t},a.filterItems)})).catch((function(e){console.log(e)}))},a.setCompletedFilter=function(e){a.setState({completedFilter:e,completedFilterActive:"all"!==e},a.filterItems)},a.filterItems=function(e){var t=a.state.list;e=e||a.state.filter,a.state.completedFilterActive&&(t=a.state.list.filter((function(e){return!!e.completed===a.state.completedFilter})));var r=t.filter((function(t){return t.text.toLowerCase().includes(e.toLowerCase())}));a.setState({filtered:r,filter:e})},a.handleAddItem=function(e){var t={id:G.a.v4(),text:e,completed:!1};a.updateDatabase({data:t,method:"post"}).then((function(e){var t=e.data,r=[].concat(Object(A.a)(a.state.list),[t]);a.setState({list:r},a.filterItems)})).catch((function(e){console.log(e)}))},a.state={list:[],filtered:[],filter:"",data:e.data,loading:!0},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.updateDatabase({method:"get"}).then((function(t){var a=t.response,r=Object.values(a.data);e.setState({list:r,filtered:r,loading:!1})})).catch((function(t){e.setState({loading:!1}),console.log(t)}))}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(K,{authenticated:!0,handleLogout:this.props.handleLogout,setFilter:this.setCompletedFilter,data:this.state.data}),i.a.createElement(J,{handleSubmit:this.handleAddItem}),i.a.createElement(M,{handleSearchItem:this.filterItems}),i.a.createElement(Y,{list:this.state.filtered,checkItem:this.checkItem,removeItem:this.removeItem,filter:this.state.filter,loading:this.state.loading}))}}]),t}(i.a.Component),W=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).handleChange=function(e){},a.handleSubmit=function(e){},a.state=Object(d.a)({email:"",token:""},e.data),console.log(a.state),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},"Profile for ",this.state.email)}}]),t}(n.Component),X=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).verifyToken=function(e){var t=e.token;C({baseURL:P,url:q,method:"get",headers:{token:t}}).then((function(e){var r=e.data;a.setState({authenticated:!0,token:t,loaded:!0,data:Object(d.a)({},r,{token:t})})})).catch((function(e){e.response&&401===e.response.status&&localStorage.setItem("token",""),a.setState({loaded:!0,error:e.response?e.response.data.msg:e.message})}))},a.setTokenOnLogin=function(e){var t=e.auth,r=e.params,n=(a.props.location.state||{from:{pathname:"/"}}).from;a.setState({authenticated:t,loaded:!0,data:r}),a.props.history.push(n)},a.handleLogout=function(){localStorage.setItem("token",""),a.setState({authenticated:!1,token:null,data:{},error:null})},a.state={authenticated:!1,token:null,loaded:!1,data:{},error:null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("token");e?this.verifyToken({token:e}):this.setState({loaded:!0,authenticated:!1})}},{key:"render",value:function(){var e=this,t={authenticated:this.state.authenticated,data:Object(d.a)({},this.state.data),handleLogout:this.handleLogout};return i.a.createElement("div",null,this.state.loaded?i.a.createElement(c.d,null,i.a.createElement(c.b,{path:"/public"},i.a.createElement("div",null,"public")),i.a.createElement(c.b,{path:"/login",render:function(t){return i.a.createElement(R,Object.assign({},t,{setAuth:e.setTokenOnLogin,error:e.state.error}))}}),i.a.createElement(c.b,{path:"/register",render:function(t){return i.a.createElement(F,Object.assign({},t,{error:e.state.error}))}}),i.a.createElement(_,{path:"/dashboard",isAuthenticated:this.state.authenticated},i.a.createElement(W,t)),i.a.createElement(_,{path:"/app",isAuthenticated:this.state.authenticated},i.a.createElement(Q,t)),i.a.createElement(c.b,{path:"/"},i.a.createElement(c.a,{to:"/app"}))):"Loading...")}}]),t}(i.a.PureComponent);a(80);var Z=function(){return i.a.createElement("div",{className:"app"},i.a.createElement(l.a,null,i.a.createElement(c.b,{path:"/",component:X})))};o.a.render(i.a.createElement(Z,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.7e0902c0.chunk.js.map