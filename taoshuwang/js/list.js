$(() => {

    new Promise(function(resolve, reject) {
        $.ajax({
            type: "get",
            url: "../server/getPageCount.php",
            dataType: "json",
            success: (data) => {
                let res = "";
                for (let i = 0; i < data.count; i++) {
                    res += `<a href="javascript:;">${i + 1}</a>`
                }
                $("#page").append(`<div>${res}</div>`);
                $("#page").children().eq(0).addClass("active");

                resolve();
            }
        });
    }).then(function() {
        getDataWithPage(1, 0);
    })


    /* type ==0 默认排序  id */
    /* type ==1 升序排列  价格 */
    /* type ==2 降序排列  价格 */
    function getDataWithPage(page, type) {
        $.ajax({
            type: "get",
            url: "../server/getGoodsData.php",
            data: `page=${page}&sortType=${type}`,
            dataType: "json",
            success: (data) => renderUI(data)
        });
    }

    function renderUI(data) {
        console.log(data);

        let html = data.map((ele) => {
            return `
            <li class="book_obj">
            <figure>
                <aside class="store">
                <span>${ele.label_tj}折</span>
                </aside>
                <img src="${ele.src}"/>
                <figcaption>${ele.title.substr(0,15)}</figcaption>
                <figcaption>￥${ele.price}</figcaption>
                </figure>
        </li>
                
            `
        }).join("");
        $(".box-list").html(html);
    }

    /* 先给页面添加点击事件，当点击的时候获取页码值，根据该值发送网络请求 */
    $("#page").on("click", "a", function() {
        getDataWithPage($(this).text());
        $(this).addClass("active").siblings().removeClass("active");
    })

    /* 处理排序 */
    $(".typeBtn").click(function() {
        getDataWithPage(1, $(this).index());
    })
})