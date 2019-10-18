$(() => {
    function addTitel(addTitelname, jsonList) { //插入的位置，插入的json数据

        let oHeadul = `<ul class="artc_head_ul"></ul>`;
        let oBodyul = `<ul class="artc_body_ul"></ul>`;
        let head = `<div class="artc_head">${oHeadul}</div>`
        let body = `<div class="artc_body"></div>`
        let main = `<div class="artc_box">${head + body}</div>`
        let articel = `<article class=${addTitelname + "_box"}>${main}</article>`
        $(`#${addTitelname}`).append(articel);
        let arr = Array.from(jsonList);
        arr.map((els, index) => {
            $(`#${addTitelname + " .artc_head_ul"}`).append(`<li class=${index==0?"z_color":""}>${els.h1_title}</li>`)
        })
        let oLi_body_main = arr.map((els, index) => {
            let oLi = els.box.map(els2 => {
                return `<li class="book_obj">
                      <figure>
                      <aside class="store">
                      <span>${els2.label_tj}折</span>
                      </aside>
                      <img src="${els2.img}"/>
                      <figcaption>${els2.title}</figcaption>
                      <figcaption>￥${els2.new_price}</figcaption>
                      </figure>
                </li>`
            }).join("")
            return `<ul class="${index==0?("artc_body_ul z_block"):"artc_body_ul"}">${oLi}</ul>`
        }).join("");
        $(`#${addTitelname} .artc_body`).append(oLi_body_main);

        $(".artc_head_ul  li").click(function() {
            $(this).addClass("z_color").siblings().removeClass("z_color");
            let index = $(this).index();
            console.log($(this).parent().parent().siblings(".artc_body").children(".artc_body_ul").eq(index).addClass("z_block").siblings().removeClass("z_block"));
        })
    }

    $.ajax({
        type: "post",
        url: "../json/index_main_top.json",
        data: "json",
        success: function(res) {
            addTitel("main_top", res);
            addTitel("main_rand", res);
            /*  resolve(); */
        }
    })

})