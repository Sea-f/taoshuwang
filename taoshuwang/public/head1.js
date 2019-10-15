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
    let head1_left = `<p class="login-info">爱书的朋友，欢迎来淘书！<a href="../html/login.html">请登录</a><a href="../html/register.html">免费注册</a></p>`;

    let head1_rigth_main = `<li><a href="#">首页</a> </li>
    <li class="mytaoshu menu-item">我的淘书<span id="onleaver_xuanzhuan">ˇ</span><ul>
        <li class="mytaoshu_top"><a href="#">我的订单</a></li>
        <li class="mytaoshu_top"><a href="#">我的地址</a></li></ul>
    </li>
    <li id="shopcar"><a href="#"><s></s>购物车<span id="shopcar_math">0</span>件</a></li>
    <li id="favorite"><a href="#">收藏夹</a></li>
    <li id="proxy"><a href="#">团购批发</a></li>
    <li id="help"><a href="#">帮助中心</a></li>
    <li id="phone"><a href="#">400-8888-184</a></li>
    <li><li>`;
    let head1_rigth = `<ul class="quick-menu">${head1_rigth_main}</ul>`;
    let head1 = `<div class="site-bg"><div class="site-nav">${head1_left+head1_rigth}</div></div>`;
    /* let head2_logo = `<div class="logo"><a herf="#"><img src="../img/taoshu-logo.jpg"></a></div>`;
    let head2_search = `<div class="head-search"><input type="text"><span class="search-move">搜索全部</span><button class="search-on">搜索</button></div>`;
    let head2_heigth = `<div class="search-heigth"><a herf="#">高级搜索</a></div>`;
    let a_hot_main = arr.map((els) => { return `<a herf=${els.src}>${els.name}</a>` }).join("");
    let head2_hot = `<div class="search-hot">热门搜索:${a_hot_main}</div>`;
    let head2 = `<div id ="header-wrapper">${head2_logo+head2_search+head2_heigth+head2_hot}</div>`; */
    let header = `<div id="page"><header id="header">${head1}</header></div>`;
    $("body").prepend(header)

})


/* let oA=$(".rec-content>.clearfix").children().children();
Array.from(oA).map((els,index)=>{console.log(els.href,index)})//拿到所有的跳转地址
Array.from(oA.children("img")).map((els)=>{console.log(els.src)})//拿到所有图片地址
Array.from(oA.children(".title")).map((els,index)=>{console.log(els.innerText)})//拿到所有的文本标签
Array.from(oA.children(".price")).map((els,index)=>{console.log(els.innerText)})//拿到所有的价格 */