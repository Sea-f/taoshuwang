$(() => {
    $.ajax({
        type: "post",
        url: "../server/index_hot.php",
        dataType: "json",
        success: function(res) {
            let oLi = res.map(els => `<li>${els.name}</li>`);
            $(".head2-hot-ul").prepend(oLi);
        }
    })

    let logo = `<h1 class="head2-logo"></h1>`;

    let gaojisousuo = `<a href ="#" id="head2-goaji">高级搜索</a>`;
    let oUl = `<li>热门搜索：</li><ul class="head2-hot-ul"></ul>`;
    let seek = `<div class="seek">
    <div class="seek-input">
    <input type="text">
    <div class="select-type" id="select-type">
    <div name="" class="select-t" id="select-t">
        <ul>
            <li>搜索全部</li>
        </ul>
    </div>
    <div class="options" id="options">
        <div class="all-field">搜索全部</div>
        <ul>
            <li name="1" class="">ISBN</li>
            <li name="2" class="">书名</li>
            <li name="3" class="">作者</li>
            <li name="4" class="">出版社</li>
            <li name="5">丛书</li>
        </ul>
    </div>
    
</div><div class="search-button">
<button type="button">搜  索</button>
</div>
    </div>
    <ul class="hot-search">
    ${oUl}
    </ul>
    </div>`;
    let header = `<div class="head2-main">${logo+seek+gaojisousuo}</div>`;

    // let head2_logo = `<div class="logo"><a herf="#"><img src="../img/taoshu-logo.jpg"></a></div>`;
    // let head2_search = `<div class="head-search"><input type="text"><span class="search-move">搜索全部</span><button class="search-on">搜索</button></div>`;
    // let head2_heigth = `<div class="search-heigth"><a herf="#">高级搜索</a></div>`;
    // let a_hot_main; /* arr.map((els) => { return `<a herf=${els.src}>${els.name}</a>` }).join(""); */
    // let head2_hot = `<div class="search-hot">热门搜索:${a_hot_main}</div>`;
    // let head2 = `<div id ="header-wrapper">${head2_logo+head2_search+head2_heigth+head2_hot}</div>`;


    // console.log(head2);

    $("body").prepend(header);



})