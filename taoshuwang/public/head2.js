$(() => {
    let arr = [{
        name: "门罗",
        src: "#"
    }, {
        name: "村上春树",
        src: "#"
    }, {
        name: "苏立文",
        src: "#"
    }, {
        name: "溥仪",
        src: "#"
    }, {
        name: "莫言",
        src: "#"
    }, {
        name: "诺贝尔文学",
        src: "#"
    }, {
        name: "佛教",
        src: "#"
    }, {
        name: "民国",
        src: "#"
    }, {
        name: "周汝昌",
        src: "#"
    }, {
        name: "辛亥",
        src: "#"
    }];
    let logo = `<h1 class="head2-logo"></h1>`;
    let seek = `<div class="seek"><div class="seek-input"><input type="text"></div><></div>`;
    let header = `<div class="head2-main">${logo+seek}</div>`;

    let head2_logo = `<div class="logo"><a herf="#"><img src="../img/taoshu-logo.jpg"></a></div>`;
    let head2_search = `<div class="head-search"><input type="text"><span class="search-move">搜索全部</span><button class="search-on">搜索</button></div>`;
    let head2_heigth = `<div class="search-heigth"><a herf="#">高级搜索</a></div>`;
    let a_hot_main = arr.map((els) => { return `<a herf=${els.src}>${els.name}</a>` }).join("");
    let head2_hot = `<div class="search-hot">热门搜索:${a_hot_main}</div>`;
    let head2 = `<div id ="header-wrapper">${head2_logo+head2_search+head2_heigth+head2_hot}</div>`;


    console.log(head2);

    $("body").prepend(head2);
})