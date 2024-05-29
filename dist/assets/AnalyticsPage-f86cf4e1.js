import{j as s,t as c,r as p,u as y,g as t,a as O}from"./index-89147f3e.js";import{S as f,a as z,b as m,c as g,d as E}from"./StatisticsWidget-276c8dd5.js";import{A as w}from"./apexcharts.common-153f1302.js";import{C as v}from"./ChartDurationFilter-22e88437.js";import{C as b,O as W,A as D,S as B}from"./chart-fa93cbbd.js";function _({value1:e,value2:i}){return s.jsx("div",{className:"card shadow-sm bg-white",style:{borderRadius:12,padding:"50px 0px"},children:s.jsxs("div",{className:"d-flex align-items-center justify-content-center ",style:{gap:64},children:[s.jsxs("div",{className:"d-flex align-items-center",style:{gap:64},children:[s.jsx(f,{title:e.value,icon:s.jsx("img",{src:c("media/svg/business.svg"),className:"d-d-inline-block "}),description:e.desc,unit:"₸"}),s.jsx("div",{children:s.jsxs("span",{className:"badge badge-light-success fs-base",children:[s.jsxs("i",{className:"ki-duotone ki-arrow-up fs-5 text-success ms-n1",children:[s.jsx("span",{className:"path1"}),s.jsx("span",{className:"path2"})]}),`${e.percent}%`]})})]}),s.jsx("div",{children:s.jsx("span",{className:"fw-bold text-dark",style:{fontSize:38,lineHeight:"38px"},children:">"})}),s.jsxs("div",{className:"d-flex align-items-center",style:{gap:64},children:[s.jsx("div",{children:s.jsxs("span",{className:"badge badge-light-success fs-base",children:[s.jsxs("i",{className:"ki-duotone ki-arrow-up fs-5 text-success ms-n1",children:[s.jsx("span",{className:"path1"}),s.jsx("span",{className:"path2"})]}),`${i.percent}%`]})}),s.jsx(f,{title:i.value,icon:s.jsx("img",{src:c("media/svg/business.svg"),className:"d-d-inline-block "}),description:i.desc,unit:"₸"})]})]})})}function N({className:e,data:i,height:r="300px"}){const n=p.useRef(null),{mode:a}=y(),h=()=>{if(!n.current)return;const l=new w(n.current,L(i,parseInt(r)||200));return l&&l.render(),l};return p.useEffect(()=>{const l=h();return()=>{l&&l.destroy()}},[n,a]),s.jsx("div",{ref:n,id:"kt_charts_widget_5_chart",style:{height:r},className:e})}function L(e,i){t("--bs-gray-500"),t("--bs-gray-200"),t("--bs-success"),t("--bs-danger");const r=Object.keys(e);return{series:[{name:"Просрочники",data:r.map(a=>e[a].count)}],chart:{type:"bar",height:i,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"24px",borderRadius:4}},dataLabels:{enabled:!0,style:{colors:["#000"]}},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:r,axisTicks:{show:!1}},yaxis:{},fill:{colors:["#FFCB45"],opacity:1}}}function P({height:e}){return s.jsxs("div",{className:"card shadow-sm",style:{borderRadius:12,padding:30},children:[s.jsxs("div",{className:"d-flex flex-row align-items-center  justify-content-between",children:[s.jsxs("div",{children:[s.jsx("h2",{children:"Анализ"}),s.jsx("span",{children:"Суммы указаны в тысячах"})]}),s.jsxs("div",{className:"d-flex flex-row gap-7",children:[s.jsx(v,{}),s.jsxs("select",{className:"form-select form-select-solid form-select-lg",name:"city",children:[s.jsx("option",{value:"",children:"Выберите регион/город"}),Object.keys(b).map(i=>s.jsx("option",{value:i,children:i},i))]})]})]}),s.jsx(N,{className:"mt-9",data:W,height:e})]})}function F({className:e,title:i,toolbar:r,data:n}){const a=p.useRef(null),{mode:h}=y(),l=()=>{if(!a.current)return;const x=parseInt(O(a.current,"height")),o=new w(a.current,$(n,x));return o&&o.render(),o};return p.useEffect(()=>{const x=l();return()=>{x&&x.destroy()}},[a,h]),s.jsx("div",{ref:a,id:"kt_charts_widget_5_chart",style:{height:"200px"}})}function $(e,i){const r=t("#7E8299"),n=t("--bs-gray-200"),a=t("--bs-info"),h=t("--bs-info-light"),l=t("--bs-danger"),x=t("--bs-danger-light"),o=t("--bs-success"),C=t("--bs-success-light"),j=t("--bs-warning"),k=t("--bs-warning-light");t("--bs-danger");const u=Object.keys(e),R=u.map(d=>e[d].fixedExpense),S=u.map(d=>e[d].factExpense),T=u.map(d=>e[d].profit),A=u.map(d=>e[d].netProfit);return{series:[{name:"Фикс. расход",data:R},{name:"Факт. расход",data:S},{name:"Доход",data:T},{name:"Чистая прибыль",data:A}],chart:{fontFamily:"inherit",type:"area",height:i,width:"100%",toolbar:{show:!1,tools:{download:!1}},zoom:{enabled:!1}},legend:{show:!1},fill:{type:"solid",opacity:1},stroke:{curve:"smooth",show:!0,width:2,colors:[a,l,o,j]},dataLabels:{enabled:!1},xaxis:{offsetX:0,offsetY:0,categories:u,axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!0,hideOverlappingLabels:!0,style:{colors:r,fontSize:"14px"}},crosshairs:{show:!1,position:"front",stroke:{color:"#000",width:1,dashArray:3}},tooltip:{enabled:!1,formatter:void 0,offsetY:0,style:{fontSize:"12px"}}},yaxis:{labels:{offsetX:-10,show:!0,style:{colors:r,fontSize:"14px"}}},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(d){return"$"+d+" thousands"}}},colors:[h,x,C,k],grid:{borderColor:n,strokeDashArray:4,padding:{top:0,bottom:0,left:0,right:0}},markers:{colors:[a,l,o,j],strokeColors:[a,l,o,j],strokeWidth:3}}}function I(){return s.jsxs("div",{className:"card rounded-5 shadow-sm p-9",style:{borderRadius:12},children:[s.jsxs("div",{className:"d-flex justify-content-between  align-items-center",children:[s.jsxs("div",{children:[s.jsx("h2",{children:"Анализ"}),s.jsx("span",{children:"Суммы указаны в тысячах"})]}),s.jsxs("div",{className:"d-flex flex-row gap-7",children:[s.jsx(v,{}),s.jsxs("select",{className:"form-select form-select-solid form-select-lg",name:"city",children:[s.jsx("option",{value:"",children:"Выберите регион/город"}),Object.keys(b).map(e=>s.jsx("option",{value:e,children:e},e))]})]})]}),s.jsxs("div",{className:"d-flex ",style:{marginTop:50,gap:50},children:[s.jsxs("div",{className:"d-flex flex-column fw-bold",style:{width:155,fontSize:14,gap:10},children:[s.jsxs("div",{className:"d-flex align-items-center ",children:[s.jsx("div",{className:"flex-grow-1",children:"Фикс. расход"}),s.jsx("span",{className:"d-block bg-info",style:{height:3,width:22,borderTopRightRadius:8,borderBottomRightRadius:8}})]}),s.jsxs("div",{className:"d-flex align-items-center",children:[s.jsx("div",{className:"flex-grow-1",children:"Факт. расход"}),s.jsx("span",{className:"d-block bg-danger",style:{height:3,width:22,borderTopRightRadius:8,borderBottomRightRadius:8}})]}),s.jsxs("div",{className:"d-flex align-items-center",children:[s.jsx("div",{className:"flex-grow-1",children:"Доход"}),s.jsx("span",{className:"d-block bg-success",style:{height:3,width:22,borderTopRightRadius:8,borderBottomRightRadius:8}})]}),s.jsxs("div",{className:"d-flex align-items-center",children:[s.jsx("div",{className:"flex-grow-1",children:"Чистая прибыль"}),s.jsx("span",{className:"d-block bg-warning",style:{height:3,width:22,borderTopRightRadius:8,borderBottomRightRadius:8}})]})]}),s.jsx("div",{className:"flex-grow-1",children:s.jsx(F,{data:D})})]})]})}function M(){return s.jsxs("div",{className:"card shadow-sm",style:{borderRadius:12,padding:30},children:[s.jsxs("div",{className:"d-flex flex-row align-items-center  justify-content-between",children:[s.jsxs("div",{children:[s.jsx("h2",{children:"Продажи по регионам"}),s.jsx("span",{children:"Показано в тысячах тенге"})]}),s.jsxs("div",{className:"d-flex flex-row gap-7",children:[s.jsx(v,{}),s.jsxs("select",{className:"form-select form-select-solid form-select-lg",name:"city",children:[s.jsx("option",{value:"",children:"Выберите регион/город"}),Object.keys(b).map(e=>s.jsx("option",{value:e,children:e},e))]})]})]}),s.jsx(N,{className:"mt-9",data:B})]})}function q(){return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"w-100 position-absolute top-0",style:{height:80,backgroundColor:t("--bs-app-header-minimize-bg-color"),left:0}}),"AnalyticsPage=",s.jsxs("div",{style:{maxWidth:1160,margin:"0px auto"},children:[s.jsx(I,{}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:30,marginTop:30},children:[s.jsx("div",{style:{gridColumn:"span 3"},children:s.jsx(P,{height:"220px"})}),s.jsxs("div",{className:"d-flex flex-column justify-content-between ",style:{gridColumn:"span 1",gap:30},children:[s.jsx("div",{className:"card bg-white shadow-sm",style:{borderRadius:12,padding:"50px 30px 50px 30px"},children:s.jsx(f,{title:"400",unit:"чел.",description:"Количество клиентов",icon:s.jsx("img",{src:c("media/svg/business.svg")})})}),s.jsx("div",{className:"card bg-white shadow-sm",style:{borderRadius:12,padding:"50px 30px 50px 30px"},children:s.jsx(f,{title:"17,500",unit:"₸",description:"Общая сумма",icon:s.jsx("img",{src:c("media/svg/business.svg")})})})]})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:30,marginTop:40},children:[s.jsx("div",{style:{gridColumn:"span 3"},children:s.jsx(M,{})}),s.jsx(z,{title:s.jsxs("span",{children:[s.jsx("b",{style:{fontSize:38},children:"27,500"})," ₸"]}),description:"Общая сумма продаж",icon:s.jsx("img",{src:c("media/svg/business.svg")}),percent:2.2})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:30,marginTop:40},children:[s.jsx("div",{style:{gridColumn:"span 4"},children:s.jsx(_,{value1:{value:"700,000",percent:70,desc:"Общий ЗК"},value2:{value:"300,000",percent:-30,desc:"Общий СК"}})}),s.jsx(m,{title:"40,000",icon:s.jsx("img",{src:c("media/svg/business.svg"),className:"d-d-inline-block "}),description:"ЗК Иван",unit:"₸"}),s.jsx(m,{title:"40,000",icon:s.jsx("img",{src:c("media/svg/business.svg"),className:"d-d-inline-block "}),description:"ЗК Кредит",unit:"₸"}),s.jsx(m,{title:"40,000",icon:s.jsx("img",{src:c("media/svg/business.svg"),className:"d-d-inline-block "}),description:"СК на руках",unit:"₸"}),s.jsx(m,{title:"40,000",icon:s.jsx("img",{src:c("media/svg/business.svg"),className:"d-d-inline-block "}),description:"СК в товарах",unit:"₸"}),s.jsx("div",{style:{gridColumn:"span 2"},children:s.jsx(g,{title:"Финансы",data:[{value:"50 000",unit:"₸",desc:"Начало смены"},{value:"50 000",unit:"₸",desc:"Конец смены"},{value:"50 000",unit:"₸",desc:"Расход за смену"},{value:"50 000",unit:"₸",desc:"Возврат товаров"}]})}),s.jsx("div",{style:{gridColumn:"span 2"},children:s.jsx(g,{title:"Выкуп",data:[{value:"50 000",unit:"₸",desc:"Частичный выкуп"},{value:"50 000",unit:"₸",desc:"Продление"},{value:"50 000",unit:"₸",desc:"Вывод из залогов"},{value:"50 000",unit:"₸",desc:"Продажа товаров"}]})}),s.jsx("div",{style:{gridColumn:"span 2"},children:s.jsx(g,{title:"Товары",data:[{value:"50 000",unit:"₸",desc:"Залог"},{value:"50 000",unit:"₸",desc:"Залоговые билеты/готов к продаже"},{value:"50 000",unit:"₸",desc:"Товары бу"},{value:"50 000",unit:"₸",desc:"Залоговые билеты/товары"}]})}),s.jsx("div",{style:{gridColumn:"span 2"},children:s.jsx(g,{title:"Расходы",data:[{value:"50 000",unit:"₸",desc:"Непредвиденный расход"},{value:"50 000",unit:"₸",desc:"Доход за проценты"},{value:"50 000",unit:"₸",desc:"Доход за продажу"},{value:"50 000",unit:"₸",desc:"Чистая прибыль"}]})}),s.jsx("div",{children:s.jsx(E,{title:"Фикс",data:{value:"50 000",unit:"₸",desc:"Фикс. расход"}})})]})]})]})}export{q as default};
