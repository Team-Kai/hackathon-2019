(this["webpackJsonpairbnb-mexico-city"]=this["webpackJsonpairbnb-mexico-city"]||[]).push([[0],{40:function(e,t,a){e.exports=a(87)},45:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(18),s=a.n(c),r=a(1),i=a(2),o=a(4),m=a(3),u=a(5),p=a(12),h=(a(45),a(7)),d=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={page:a.props.page},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"popup modal-home"},l.a.createElement("h1",null,"Book unique places to stay and things to do."),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"exampleInputEmail1",className:"small",style:{"text-transform":"uppercase"}},"Where"),l.a.createElement("input",{type:"text",placeholder:"Anywhere"})),l.a.createElement("div",{className:"flex"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"checkin",className:"small",style:{"text-transform":"uppercase"}},"Check-in"),l.a.createElement("input",{className:"checkin",name:"checkin"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"checkin",className:"small",style:{"text-transform":"uppercase"}},"Check-Out"),l.a.createElement("input",{className:"checkout",name:"checkout"}))),l.a.createElement("div",{className:"form-group form-check"},l.a.createElement("label",{for:"guests",className:"small",style:{"text-transform":"uppercase"}},"Guests"),l.a.createElement("select",{class:"guests",name:"guests"},l.a.createElement("option",null,"We don't do this")))),l.a.createElement(h.b,{to:"/listings",className:"btn btn-primary"},"Submit"))}}]),t}(n.Component),E=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.title="New Mexico, Mexico - Airbnb"}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null))}}]),t}(n.Component),b=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.title="Mexico City Stays - Airbnb"}},{key:"render",value:function(){return l.a.createElement("div",null,"This is the Search Results Component")}}]),t}(n.Component),v=a(15),g=a.n(v),f=a(16),y=a.n(f),j=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{height:"250px",width:"250px","margin-top":"58px"}},l.a.createElement(y.a,{bootstrapURLKeys:{key:"AIzaSyDVuL7jOejgzvj4LFPhT7Yqn1SxjghDwY0"},defaultCenter:this.props.center,defaultZoom:this.props.zoom}))}}]),t}(n.Component);j.defaultProps={center:{lat:19.390519,lng:-99.4238064},zoom:11};var N=j,O=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={listing:[]},a.showInfo=function(){if(a.state.listing)return l.a.createElement("div",null,l.a.createElement("h1",null,a.state.listing.name),l.a.createElement("p",{class:"card-text"},a.state.listing.accommodates," Guests - ",a.state.listing.bedrooms," Bedrooms - ",a.state.listing.bathrooms," Bathrooms"),l.a.createElement("p",null,a.state.listing.description))},a.showReviews=function(){if(a.state.listing.reviews)return a.state.listing.reviews.map((function(e,t){return l.a.createElement("div",{class:"card"},l.a.createElement("p",null,e.reviewer_name),l.a.createElement("p",null,e.comments))}))},a.showHost=function(){if(a.state.listing.host)return l.a.createElement("div",null,l.a.createElement("p",null,a.state.listing.host.host_name),l.a.createElement("img",{src:a.state.listing.host_thumbnail_url,alt:""}))},a.showImage=function(){if(a.state.listing.images)return l.a.createElement("img",{src:a.state.listing.images.picture_url,alt:""})},a.showAmenitites=function(){if(a.state.listing.amenities)return a.state.listing.amenities.map((function(e,t){return l.a.createElement("li",null,e)}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.title="Sweet Little Room near St Martin Canal - Boutique hotels for Rent in Paris",g.a.get("https://ironhackathon4.herokuapp.com/api/".concat(this.props.match.params.id)).then((function(t){e.setState({listing:t.data[0]})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container white"},console.log(this.state.listing),l.a.createElement("div",{className:"row white"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement(N,null)),l.a.createElement("div",{className:"col-md-4"},this.showImage())),l.a.createElement("div",{className:"row white"},l.a.createElement("div",{className:"col-md-8"},this.showInfo(),l.a.createElement("h5",null,"Neighborhood"),l.a.createElement("p",null,this.state.listing.neighborhood_overview)),l.a.createElement("div",{className:"col-md-4"},l.a.createElement(d,null))),l.a.createElement("div",{className:"row white"},l.a.createElement("div",{className:"col-md-8"},this.showHost(),l.a.createElement("button",null,"contact host"))),l.a.createElement("div",{className:"row white"},"Ammenitites",l.a.createElement("ul",null,this.showAmenitites())),l.a.createElement("div",{className:"row white"},l.a.createElement("div",{className:"col-md-8"},"Reviews",this.showReviews()),l.a.createElement("div",{className:"col-md-4 white"})))}}]),t}(n.Component),w=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(h.b,{to:"/listing/".concat(this.props.listing.id),id:this.props.listing.id},l.a.createElement("div",{class:"card mb-3"},l.a.createElement("div",{class:"row no-gutters"},l.a.createElement("div",{class:"col-md-8"},l.a.createElement("div",{class:"card-body"},l.a.createElement("p",{class:"card-text"},l.a.createElement("small",{class:"text-muted"},this.props.listing.host.host_location)),l.a.createElement("h5",{class:"card-title"},this.props.listing.name),l.a.createElement("p",{class:"card-text"},this.props.listing.accommodates," Guests - ",this.props.listing.bedrooms," Bedrooms - ",this.props.listing.bathrooms," Bathrooms"),l.a.createElement("p",{class:"card-text"}),l.a.createElement("p",{class:"card-title"},"$",this.props.listing.price,"/night"))),l.a.createElement("div",{class:"col-md-4"},l.a.createElement("img",{src:this.props.listing.images.picture_url,class:"card-img",alt:"..."})))))}}]),t}(n.Component),k=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{"align-self":"flex-right",height:"100vh",width:"100%","margin-top":"56px"}},l.a.createElement(y.a,{bootstrapURLKeys:{key:"AIzaSyDVuL7jOejgzvj4LFPhT7Yqn1SxjghDwY0"},defaultCenter:this.props.center,defaultZoom:this.props.zoom}))}}]),t}(n.Component);k.defaultProps={center:{lat:19.390519,lng:-99.4238064},zoom:11};var x=k,C=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={listings:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://ironhackathon4.herokuapp.com/api").then((function(t){e.setState({listings:t.data})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("h1",null,"100+ Places to stay"),this.state.listings.map((function(e,t){return l.a.createElement(w,{listing:e,key:t})}))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement(x,null)),console.log(this.state.listings)))}}]),t}(n.Component),S=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(h.b,{className:"navbar-brand",to:"/"},l.a.createElement("svg",{viewBox:"0 0 1000 1000",role:"presentation","aria-hidden":"true",focusable:"false",style:{height:"1em",width:"1em",display:"block",fill:"currentcolor"}},l.a.createElement("path",{d:"m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"}))),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("input",{className:"form-control my-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement(h.b,{to:"/listings",className:"btn btn-outline-success my-2 my-sm-0"},"Search"),l.a.createElement("form",{className:"form-inline my-2 my-lg-0"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(h.b,{className:"nav-link",to:"/"},"Host a home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(h.b,{className:"nav-link",to:"/"},"Host an experience")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(h.b,{className:"nav-link",to:"/"},"Help")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(h.b,{className:"nav-link",to:"/"},"Sign up")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(h.b,{className:"nav-link",to:"/"},"Log in")))))))}}]),t}(n.Component),A=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,id:"myVideo"},l.a.createElement("source",{src:"./assets/new-mexico--airbnb.mp4",type:"video/mp4"})),l.a.createElement(S,null),l.a.createElement("div",{className:"container"},l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/",component:E}),l.a.createElement(p.a,{path:"/listing/:id",component:O}),l.a.createElement(p.a,{path:"/search",component:b}),l.a.createElement(p.a,{exact:!0,path:"/listings",component:C}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(h.a,null,l.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.a579b1c6.chunk.js.map