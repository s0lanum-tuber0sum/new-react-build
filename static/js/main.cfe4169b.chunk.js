(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(73),r=a.n(c),o=a(51),i=a(3),u=a(27),d=a(16),s=[0,1,2,5,10,20,50,100,200,500],m=[0,.5,1,2,2.5,3,5,10],p=a(11);function f(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var b="RMK-SELECTED-VEGETABLES",v=function(e){try{localStorage.setItem(b,JSON.stringify(e))}catch(t){alert("Data not stored on Local storage")}},g={id:null,type:null,value:0},E=Object(o.b)({name:"app",initialState:{value:0,vegetables:Object(d.a)([{id:"632ef03d20575fc23786831a",value:"Avarakka"},{id:"632ef03da6b833d543372bb1",value:"Beans"},{id:"632ef03dbe88e165308ae1f9",value:"Brinjal"},{id:"632ef03d7880f640c3883353",value:"Carrot"},{id:"632ef03d51779efdfc16a455",value:"Chilly"},{id:"632ef03d2a0c43086aafbcbc",value:"ChowChow"},{id:"632ef03d544aa8b99690736e",value:"Coconut"},{id:"632ef03d7a7970e7caba8595",value:"Coriander Leaf"},{id:"632ef03d350cd1c434925ff5",value:"Curry Leaf"},{id:"632ef03d4a1d76e9155aeafb",value:"Drum Stick"},{id:"632ef03d4660e1fcecd3a0f3",value:"Garlic"},{id:"632ef03d2ea24cb63064a495",value:"Garlic - Peeled"},{id:"632ef03d1c5445caec6c50b6",value:"Ginger"},{id:"632ef03d430c47bfb8480fc5",value:"Karunai Kilangu"},{id:"632ef03d3bd6ee17d26cfb4f",value:"Kovakka"},{id:"632ef03df102afbda1a6096f",value:"Mango"},{id:"632ef03d6bb696bdabe68365",value:"Nukal"},{id:"632ef03d8a892ff280e7be4f",value:"Ladies Finger"},{id:"632ef03d0471fb2584933732",value:"Onion"},{id:"632ef03d25690ca0c1ab5fc3",value:"Potato"},{id:"632ef03d849be4ce1b44cb72",value:"Pundina Leaf"},{id:"632ef03dde47879dee286eaf",value:"Pumpkin - Yellow"},{id:"632ef03de12228d331def77c",value:"Radish"},{id:"632ef03d0091d964df7b6aaa",value:"Raw Banana"},{id:"632ef03d8dd37725b7416fc4",value:"Ridge Gourd"},{id:"632ef03d0e8ad5f9b427ab70",value:"Sambarkai"},{id:"632ef03df96379340063c4f5",value:"Sorakka"},{id:"632ef03db0e79de78ee65210",value:"Tomato"},{id:"632ef03d5a840a33959af7d3",value:"Tomato - Nati"},{id:"633475b2cee39b6dd7826fb0",value:"Other 1"},{id:"633475b2bcfdb0e3a721bafb",value:"Other 2"},{id:"633475b204a8a986f116d95a",value:"Other 3"}]),vegStack:[],selectedVegetables:function(e){var t=localStorage.getItem(b);return t?JSON.parse(t):e}([]),checkboxMsRs:g,shopCount:0,vegStackFilterAlphaValue:"All"},reducers:{addVegetable:function(e,t){e.selectedVegetables=[].concat(Object(d.a)(e.selectedVegetables),[Object(u.a)({},t.payload,{ms:0,rs:0,rstt:0,shop:e.shopCount,selected:!1})])},setVegStack:function(e){var t=e.vegetables.map(function(e){return Object(u.a)({},e,function(){var e=[255,0,0];return e[0]=Math.round(255*Math.random()),e[1]=Math.round(255*Math.random()),e[2]=Math.round(255*Math.random()),{textColour:Math.round((299*parseInt(e[0])+587*parseInt(e[1])+114*parseInt(e[2]))/1e3)>125?"black":"white",backgroundColour:"rgb("+e[0]+","+e[1]+","+e[2]+")"}}())});e.vegStack=Object(d.a)(t)},updateMeasureCheckBox:function(e,t){var a=g,n=t.payload,l=n.id,c=n.value;l&&(a={id:l,type:"MS",value:c}),e.checkboxMsRs=a},updateRsCheckBox:function(e,t){var a=g,n=t.payload,l=n.id,c=n.value;l&&(a={id:l,type:"RS",value:c}),e.checkboxMsRs=a},updateRsTtCheckBox:function(e,t){var a=g,n=t.payload,l=n.id,c=n.value;l&&(a={id:l,type:"RSTT",value:c}),e.checkboxMsRs=a},updateMsRsvalue:function(e,t){var a=t.payload,n=a.value,l=a.id,c=a.type,r=a.updateWhole,o=void 0!==r&&r;e.selectedVegetables=e.selectedVegetables.map(function(e){return l===e.id?Object(u.a)({},e,Object(i.a)({},c.toLowerCase(),n>0?o?n:e[c.toLowerCase()]+n:0)):e})},selectedVegToggleChecked:function(e,t){var a=t.payload,n=a.id,l=a.selected;e.selectedVegetables=e.selectedVegetables.map(function(e){return n===e.id?Object(u.a)({},e,{selected:l}):e})},selectedVegAllToggleChecked:function(e,t){var a=t.payload;e.selectedVegetables=e.selectedVegetables.map(function(e){return Object(u.a)({},e,{selected:a})})},deleteSelectedVeg:function(e){e.selectedVegetables=e.selectedVegetables.filter(function(e){return!e.selected})},plusORminusShopCount:function(e,t){e.shopCount="plus"===t.payload?e.shopCount+=1:e.shopCount-=1},selectedVegChangeShopCount:function(e,t){e.selectedVegetables=e.selectedVegetables.map(function(e){return e.selected?Object(u.a)({},e,{shop:"plus"===t.payload?e.shop+1:e.shop-1<=0?0:e.shop-1}):e})},selectedVegUpdateRupees:function(e,t){var a="total"===t.payload?"rstt":"rs";e.selectedVegetables=e.selectedVegetables.map(function(e){return e.selected?Object(u.a)({},e,Object(i.a)({},a,"total"===t.payload?e.ms*e.rs:Math.ceil(e.rstt/e.ms))):e})},updateVegStackFilter:function(e,t){e.vegStackFilterAlphaValue=t.payload}}}),h=E.actions,x=h.addVegetable,k=h.setVegStack,S=h.updateMeasureCheckBox,C=h.updateRsCheckBox,y=h.updateMsRsvalue,O=h.selectedVegToggleChecked,j=h.selectedVegAllToggleChecked,R=h.deleteSelectedVeg,w=h.plusORminusShopCount,V=h.selectedVegChangeShopCount,M=h.updateVegStackFilter,z=h.updateRsTtCheckBox,N=h.selectedVegUpdateRupees,T=E.reducer,I=Object(o.a)({reducer:{app:T}}),A=a(12),F=a(166),P=a(171),B=a(167),L=a(172),G=a(97),K=a.n(G),W=a(162),Y=function(){var e=Object(A.c)(function(e){return e.app.selectedVegetables}),t=Object(n.useState)({Items:0,Measure:0,Rupees:0}),a=Object(p.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)(function(){if(e.length>0){var t=0,a=0,n=0;e.map(function(e){var l=e.selected,c=e.ms,r=e.rstt;l&&(t+=1,a+=c,n+=r)}),r({Items:t,Measure:a,Rupees:n})}},[e]),l.a.createElement("div",{className:"checkedVegCounts flexCenter"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{colSpan:2},"Total"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Items"),l.a.createElement("td",{align:"center"},c.Items)),l.a.createElement("tr",null,l.a.createElement("td",null,"Measure ",l.a.createElement("small",null,"(KG/G)")),l.a.createElement("td",{align:"center"},c.Measure)),l.a.createElement("tr",null,l.a.createElement("td",null,"Rupees"),l.a.createElement("td",{align:"center"},"Rs.",c.Rupees)))))},D=a(173),J=a(56),U=a.n(J),q=a(52),H=a.n(q),_=function(){var e=Object(A.c)(function(e){return e.app.shopCount}),t=Object(A.b)();return l.a.createElement("div",{className:"shopCount flexCenter"},l.a.createElement(D.a,{variant:"caption",gutterBottom:!0},"Shop Count :"),l.a.createElement(L.a,{color:"primary",size:"large",onClick:function(){return e>0&&t(w("minus"))}},l.a.createElement(H.a,{fontSize:"large"})),l.a.createElement("div",{style:{fontSize:"36px"}},e),l.a.createElement(L.a,{color:"primary",size:"large",onClick:function(){return t(w("plus"))}},l.a.createElement(U.a,{fontSize:"large"})))},Q=a(169),X=a(93),Z=a.n(X),$=a(96),ee=a.n($),te=function(e){var t=e.onlySaveIcon,a=void 0!==t&&t,n=Object(A.c)(function(e){return e.app.selectedVegetables});return l.a.createElement(l.a.Fragment,null,a?l.a.createElement(L.a,{color:"primary",style:{fontSize:"16px"}},l.a.createElement(Z.a,{fontSize:"",onClick:function(){v(n)}})):l.a.createElement("div",{className:"save flexCenter"},l.a.createElement(Q.a,{color:"primary",size:"large",onClick:function(){return v(n)},startIcon:l.a.createElement(Z.a,null)},"Save"),l.a.createElement(Q.a,{color:"error",size:"large",onClick:function(){window.confirm("Are you sure ?")&&localStorage.removeItem(b)},startIcon:l.a.createElement(ee.a,null)},"Clear")))},ae=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],c=t[1],r=function(){c(!a)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"menu flexCenter"},l.a.createElement(L.a,{"aria-label":"delete",size:"small",onClick:r},l.a.createElement(K.a,null))),l.a.createElement(W.a,{anchor:"right",open:a,onClose:r},l.a.createElement(P.a,{sx:{width:"70vw"}},l.a.createElement(Y,null),l.a.createElement(_,null),l.a.createElement(te,null))))},ne=function(){return l.a.createElement(ae,null)},le=a(163),ce=a(168),re=a(160),oe=function(e){var t=e.fullWidth,a=Object(A.c)(function(e){return e.app.vegStack}),n=Object(A.b)();return l.a.createElement("div",{className:t?"vegStackAlphaFilter overflowY fullWidth":"vegStackAlphaFilter overflowY"},l.a.createElement(re.a,{direction:"row",spacing:1},a&&function(e){var t=e.map(function(e){return e.value.charAt(0)});return["All"].concat(Object(d.a)(new Set(t)))}(a).map(function(e,t){return l.a.createElement(ce.a,{key:e,variant:"filled",size:"small",color:(t+1)%2===0?"primary":"info",onClick:function(){return function(e){n(M(e))}(e)},label:e})})))},ie=function(){var e,t,a=Object(A.c)(function(e){return e.app.vegStack}),n=Object(A.c)(function(e){return e.app.selectedVegetables}),c=Object(A.c)(function(e){return e.app.vegStackFilterAlphaValue}),r=Object(A.b)();return l.a.createElement("div",{className:"vegetableStack overflowY"},l.a.createElement(re.a,{direction:"row",spacing:1},a&&(e=a,t=c,"all"!==t.toLowerCase()?e.filter(function(e){return e.value.charAt(0).toLowerCase()===t.toLowerCase()}):Object(d.a)(e)).map(function(e){var t=e.id,a=e.value,c=e.textColour,o=e.backgroundColour,i=n.some(function(e){return e.id===t});return l.a.createElement(ce.a,{sx:{backgroundColor:i?"none":o,color:i?"#222222":c,border:i?"1px solid #222222":"none"},variant:i?"outlined":"filled",onClick:function(){r(x(e))},label:a,disabled:i})})))},ue=function(){var e=Object(A.c)(function(e){return e.app.checkboxMsRs}),t=Object(A.b)();return l.a.createElement("div",{className:"moneyStack overflowY"},l.a.createElement(re.a,{direction:"row",spacing:1},s&&s.map(function(a){return l.a.createElement(ce.a,{sx:{border:"1px solid #222222"},variant:"outlined",onClick:function(){return function(a){var n=e.type,l=e.id;t(y({value:a,type:n,id:"RS"===n||"RSTT"===n?l:null}))}(a)},label:"+".concat(a)})})))},de=function(){var e=Object(A.c)(function(e){return e.app.checkboxMsRs}),t=Object(A.b)();return l.a.createElement("div",{className:"measureStack overflowY"},l.a.createElement(re.a,{direction:"row",spacing:1},m&&m.map(function(a){return l.a.createElement(ce.a,{sx:{border:"1px solid #222222"},variant:"outlined",onClick:function(){return function(a){var n=e.type,l=e.id;t(y({value:a,type:n,id:"MS"===n?l:null}))}(a)},label:"+".concat(a)})})))},se=function(e){var t=e.type,a=e.max,c=e.step,r=e.exValue,o=void 0===r?0:r,i=Object(A.c)(function(e){return e.app.checkboxMsRs}),u=Object(A.b)(),d=l.a.useState(o),s=Object(p.a)(d,2),m=s[0],f=s[1];Object(n.useEffect)(function(){f(o)},[o]);return l.a.createElement("div",{className:"inputRange"},l.a.createElement("input",{type:"range",min:"0",max:a,step:c,value:m,onInput:function(e){!function(e){f(e);var a=i.type,n=i.id;u(y({value:e,type:a,id:a===t?n:null,updateWhole:!0}))}(Number(e.target.value))}}))},me=function(){var e=Object(A.c)(function(e){return e.app.checkboxMsRs}),t=l.a.useState(!1),a=Object(p.a)(t,2),n=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,!e.id&&!e.type&&l.a.createElement(oe,{fullWidth:!e.id||!e.type||!n}),e.id&&("RS"===e.type||"MS"===e.type||"RSTT"===e.type)&&l.a.createElement("div",{className:"rangerCheckbox"},l.a.createElement(le.a,{onClick:function(e){c(e.target.checked)},color:"success",checked:n})),l.a.createElement("div",{className:"footer flexStartContentCenter"},!e.id&&!e.type&&l.a.createElement(ie,null),e.id&&("RS"===e.type||"RSTT"===e.type)&&(n?l.a.createElement(ue,null):l.a.createElement(se,{type:e.type,max:300,step:5,exValue:e.value})),e.id&&"MS"===e.type&&(n?l.a.createElement(de,null):l.a.createElement(se,{type:"MS",max:15,step:.5,exValue:e.value}))))},pe=a(58),fe=a.n(pe),be=a(39),ve=a.n(be),ge=a(102),Ee=a.n(ge),he=a(103),xe=a.n(he),ke=a(179),Se=a(180),Ce=a(177),ye=a(178),Oe=a(176),je=a(175),Re=a(181),we=a(170),Ve=a(161);var Me=function(e){var t=e.onSelectAllClick,a=e.order,l=e.orderBy,c=e.numSelected,r=e.rowCount,o=e.onRequestSort,i=e.headCells;return n.createElement(Re.a,null,n.createElement(Oe.a,null,n.createElement(Ce.a,{padding:"checkbox"},n.createElement(le.a,{color:"error",indeterminate:c>0&&c<r,checked:r>0&&c===r,onChange:t,inputProps:{"aria-label":"select all desserts"}})),i.map(function(e){return n.createElement(Ce.a,{key:e.id,align:e.numeric?"center":"left",padding:e.disablePadding?"none":"normal",sortDirection:l===e.id&&a},n.createElement(we.a,{active:l===e.id,direction:l===e.id?a:"asc",onClick:(t=e.id,function(e){o(e,t)}),hideSortIcon:!0},e.label,l===e.id?n.createElement(P.a,{component:"span",sx:Ve.a},"desc"===a?"sorted descending":"sorted ascending"):null));var t})))},ze=a(153),Ne=a(182),Te=a(100),Ie=a.n(Te),Ae=a(99),Fe=a.n(Ae),Pe=a(101),Be=a.n(Pe),Le=a(98),Ge=a.n(Le),Ke=function(e){var t=Object(A.b)(),a=e.numSelected,l=Object(A.c)(function(e){return e.app.selectedVegetables}),c=n.useState({Measure:0,Rupees:0}),r=Object(p.a)(c,2),o=r[0],i=r[1];return n.useEffect(function(){if(l.length>0){var e=0,t=0;l.map(function(a){var n=a.selected,l=a.ms,c=a.rstt;n&&(e+=l,t+=c)}),i({Measure:e,Rupees:t})}},[l]),n.createElement(Ne.a,{sx:Object(u.a)({pl:{sm:2},pr:{xs:1,sm:1}},{bgcolor:function(e){return Object(ze.a)(e.palette.error.main,e.palette.action.activatedOpacity)}},{boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",minHeight:"36px"})},n.createElement(n.Fragment,null,n.createElement(P.a,{style:{width:"40%",color:"#222222",fontSize:"14px"},className:"flexStartContentCenter"},n.createElement(Ge.a,{fontSize:"small"}),n.createElement(D.a,{sx:{width:"10%",margin:"0 20px 0px 4px"},color:"inherit",variant:"caption"},a),n.createElement(fe.a,{fontSize:""}),n.createElement(D.a,{sx:{width:"10%",margin:"0 20px 0px 4px"},color:"inherit",variant:"caption"},o.Measure),n.createElement(ve.a,{fontSize:""}),n.createElement(D.a,{sx:{width:"10%",margin:"0 20px 0px 4px"},color:"inherit",variant:"caption"},o.Rupees)),n.createElement(P.a,{style:{width:"60%",color:a>0?"#222222":"#c2c2c2",fontSize:"14px",paddingRight:"24px"},className:"flexEndContentCenter"},n.createElement(te,{onlySaveIcon:!0}),n.createElement("div",{className:"actionIcons"},a<=0&&n.createElement("div",{className:"overLayDisable"},"\xa0"),n.createElement(L.a,{color:"inherit",style:{fontSize:"16px",padding:"0px 5px 0px 0px"}},n.createElement(Fe.a,{fontSize:"",onClick:function(){window.confirm("Updating Per KG Rupees from Total Rupees !!")&&t(N())}})),n.createElement(L.a,{color:"inherit",style:{fontSize:"16px",padding:"0px"}},n.createElement(Ie.a,{fontSize:"",onClick:function(){window.confirm("Updating Total Rupees from Per KG Rupees !!")&&t(N("total"))}})),n.createElement(L.a,{color:"inherit",style:{fontSize:"16px",color:a>0?"#FF0000":"#c2c2c2"}},n.createElement(Be.a,{fontSize:"",onClick:function(){window.confirm("Are you sure ?")&&t(R())}})),n.createElement(L.a,{color:"inherit",style:{fontSize:"16px",padding:"0px 5px 0px 0px"}},n.createElement(U.a,{fontSize:"",onClick:function(){t(V("plus"))}})),n.createElement(L.a,{color:"inherit",style:{fontSize:"16px",padding:"0px"}},n.createElement(H.a,{fontSize:"",onClick:function(){t(V("minus"))}}))))))};var We=function(e){var t=e.rows,a=e.headCells,l=Object(A.b)(),c=n.useState("asc"),r=Object(p.a)(c,2),o=r[0],i=r[1],u=n.useState(""),d=Object(p.a)(u,2),s=d[0],m=d[1],b=Object(A.c)(function(e){return e.app.checkboxMsRs}),v=t.filter(function(e){return e.selected}).length;return n.createElement(P.a,{sx:{width:"100%"}},n.createElement(je.a,{sx:{width:"100%",mb:2}},n.createElement(Ke,{numSelected:v}),n.createElement(ye.a,null,n.createElement(ke.a,{sx:{minWidth:"100%"},"aria-labelledby":"tableTitle",size:"small"},n.createElement(Me,{numSelected:v,order:o,orderBy:s,onSelectAllClick:function(e){l(j(e.target.checked))},onRequestSort:function(e,t){i(s===t&&"asc"===o?"desc":"asc"),m(t)},rowCount:t.length,headCells:a}),n.createElement(Se.a,null,function(e,t){var a=e.map(function(e,t){return[e,t]});return a.sort(function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]}),a.map(function(e){return e[0]})}(t,function(e,t){return"desc"===e?function(e,a){return f(e,a,t)}:function(e,a){return-f(e,a,t)}}(o,s)).map(function(e,t){var a=e.selected,c="MS"===b.type&&b.id===e.id,r="RS"===b.type&&b.id===e.id,o="RSTT"===b.type&&b.id===e.id,i="enhanced-table-checkbox-".concat(t);return n.createElement(Oe.a,{hover:!0,role:"checkbox","aria-checked":a,tabIndex:-1,key:e.id,selected:a,className:"selectedVegTable"},n.createElement(Ce.a,{padding:"checkbox"},n.createElement(le.a,{onClick:function(t){l(O({id:e.id,selected:t.target.checked}))},color:"error",checked:a,inputProps:{"aria-labelledby":i}})),n.createElement(Ce.a,{component:"th",id:i,scope:"row",padding:"none"},e.value),n.createElement(Ce.a,{align:"center",padding:"none"},e.shop),n.createElement(Ce.a,{align:"center",className:"measure-cell"},e.ms,n.createElement(le.a,{onClick:function(t){var a=t.target.checked?e.id:null;l(S({id:a,value:e.ms}))},color:"primary",checked:c,inputProps:{"aria-labelledby":i}})),n.createElement(Ce.a,{align:"center",className:"rupees-cell"},e.rs,n.createElement(le.a,{onClick:function(t){var a=t.target.checked?e.id:null;l(C({id:a,value:e.rs}))},color:"primary",checked:r,inputProps:{"aria-labelledby":i}})),n.createElement(Ce.a,{align:"center",className:"rupees-total-cell"},e.rstt,n.createElement(le.a,{onClick:function(t){var a=t.target.checked?e.id:null;l(z({id:a,value:e.rstt}))},color:"primary",checked:o,inputProps:{"aria-labelledby":i}})))}))))))},Ye=[{id:"value",numeric:!1,disablePadding:!0,label:n.createElement(Ee.a,null)},{id:"shop",numeric:!0,disablePadding:!1,label:n.createElement(xe.a,null)},{id:"ms",numeric:!0,disablePadding:!1,label:n.createElement(fe.a,null)},{id:"rs",numeric:!0,disablePadding:!1,label:n.createElement(ve.a,null)},{id:"rstt",numeric:!0,disablePadding:!1,label:n.createElement(n.Fragment,null,n.createElement(ve.a,null),n.createElement(ve.a,null))}],De=function(){var e=Object(A.c)(function(e){return e.app.selectedVegetables});return n.createElement(n.Fragment,null,n.createElement(We,{rows:e,headCells:Ye}))},Je=function(){return l.a.createElement("div",{className:"body flexStart"},l.a.createElement(De,null))},Ue=function(){var e=Object(A.b)(),t=Object(A.c)(function(e){return e.app.vegetables});return n.useMemo(function(){e(k())},[t]),n.createElement(n.Fragment,null,n.createElement(F.a,null),n.createElement(B.a,{fixed:!0,className:"app_container"},n.createElement(P.a,{className:"boxWrapper"},n.createElement(ne,null),n.createElement(Je,null),n.createElement(me,null))))};a(114);function qe(){return n.createElement(A.a,{store:I},n.createElement(Ue,null))}r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(qe,null)))},76:function(e,t,a){e.exports=a(116)}},[[76,2,1]]]);
//# sourceMappingURL=main.cfe4169b.chunk.js.map