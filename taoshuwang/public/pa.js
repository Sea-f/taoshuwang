var olAll = document.querySelectorAll(".mainCate") //拿到所有的li

let h2 = Array.from(olAll).map((els) => { console.log(els.children[0].innerText, els.children[0].children[0].href) }) //爬到h2  和h2导航

var oMinsort = document.querySelectorAll(".min-sort")[x].children[x] //拿到所有的min-sort  国学 哲学 .href链接 .innerText 文本

let ms = Array.from(oMinsort).map((els) => { console.log(els.innerTextels) }) //拿到所有的二级子导航

var oSbm = document.querySelectorAll(".submenu")[x].children[0] //拿到全部的二级级导航   submenu 的 ul 个数 等价于  二级导航栏数量
    // submenu↓      ↓ul         ↓这里是li  ↓ h3      ↓a           ↓a的内容    国学
var oSlia = oSbm.children[0].children[x].children[0].children[0].innerTEXT; //国学  li标签标题索引
var oE = oSbm.children[0].children[x].children[1].children[x].innerTEXT; //经部 史部

let arr = [{
    "h2": " ", //人文社科
    "h2_href": "", //人文社科的链接
    "two": [oMinsort.innerText], //国学 哲学
    "two_href": oMinsort.href, //链接
    "tree": [{ //三级导航
        "t_h2": oMinsort, //国学
        "tree_main": [oE] //国学内容
    }, {
        "t_h2": oMinsort, //哲学
        "tree_main": [oE] //哲学内容
    }, ]
}]
var olAll = document.querySelectorAll(".mainCate")
var oMis = document.querySelectorAll(".min-sort")
var arr_h2 = [];

Array.from(olAll).map((els, index) => {

    var atr = Array.from(oMis[index].children).map(els => { return els.innerText });
    var atr_h = Array.from(oMis[index].children).map(els => { return els.href });
    var arr_h3 = [];
    var oLie = els.querySelectorAll(".submenu")[0].children[0].children;

    Array.from(oLie).map((els, index) => {

            var oA = els.querySelectorAll(".e")[0].children;
            var aee = Array.from(oA).map((els) => { return els.innerText });
            var aee_f = Array.from(oA).map((els) => { return els.href });

            arr_h3.push({
                "h3": els.children[0].children[0].innerText,
                "h3_href": els.children[0].children[0].href,
                "tree": aee,
                "tree_href": aee_f
            })
        })
        // var tr_a=[];
    arr_h2.push({
        "h2": els.children[0].innerText,
        "h2_href": els.children[0].children[0].href,
        "two": atr,
        "two_href": atr_h,
        "h3_main": arr_h3
    })

})


var oSpan = document.querySelectorAll(".catli"); //li
var arr_h2 = [];
Array.from(oSpan).map((els) => {
    var h2_s = els.querySelectorAll("span")[0].innerTEXT;
    var h3_main = [];
    arr_h2.push({
        "h2": h2_s,

    })
})



var attext = document.querySelectorAll(".tjjx .ks-switchable-nav a");
var oUl = document.querySelectorAll("#sbook1 .travel-ul");
var main = []


Array.from(oUl).map((els, index) => {
    var oLi = els.querySelectorAll("li");
    var main1 = [];
    Array.from(oLi).map(els2 => {
        main1.push({
            img: els2.querySelectorAll(".img180 img")[0].src,
            titel: els2.querySelectorAll(".book-name")[0].innerText,
            label_tj: els2.querySelectorAll(".label_tj")[0].innerText,
            oli_price: els2.querySelectorAll(".old-price")[0].innerText,
            new_price: els2.querySelectorAll(".new-price")[0].innerText
        })
    })
    main.push({
        "h1_titel": attext[index].innerText,
        "box": main1
    })
})

document.querySelectorAll(".goods .img .imgtag");
var arr = []
var obj = document.querySelectorAll(".ks-waterfall")
Array.from(obj).map(els => {
    arr.push({
        "src": els.querySelectorAll("img")[0].src,
        "title": els.querySelectorAll(".tbook-name")[0].children[0].innerText,
        "href": els.querySelectorAll(".tbook-name")[0].children[0].href,
        "price": els.querySelectorAll(".new-price")[0].innerText,
        "old_price": els.querySelectorAll(".old-price")[0].innerText,
        "label_tj": els.querySelectorAll(".label_tj")[0].innerText
    })
})
JSON.stringify(arr);