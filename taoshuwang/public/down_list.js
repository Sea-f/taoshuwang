function addDownList(add_dow, list) {
    $.ajax({
        type: "post",
        url: "../server/index_new_book.php",
        dataType: "json",
        success: function(res) {
            let oLi = Array.from(res).map((els, index) => {
                return `<li >
                <aside class="down_listNumber">${index+1}</aside>
                <div class="down_img dsp_none_down"><img src="${els.img}" alt=""></div>
                <div class="down_text">
                <p>${els.title}</p>
                <span class="dsp_none_down">￥${els.new_price}</span>
                <span class="down_Tj dsp_none_down">${els.label_tj}折</span>
                </div>
                </li>`
            }).join("");
            let oList = `<div class="down_listbox" id="${add_dow}_dowlist">
            <ul class="down_list"><span>编辑推荐</span>${oLi}</ul>
            </div>`
            console.log(1);

            $(`${add_dow}`).after(oList);
            $(".down_list li").mouseenter(function() {
                    $(this).children(".down_text").css("width", "40%");
                    $(this).siblings().children(".down_text").css("width", "80%");
                    $(this).children("div").removeClass("dsp_none_down").addClass("dsp_block_down").children("span").removeClass("dsp_none_down");
                    $(this).siblings().children("div").addClass("dsp_none_down").removeClass("dsp_block_down").children("span").addClass("dsp_none_down")
                })
                /*  resolve(); */
        }
    })
}