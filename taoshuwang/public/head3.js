$(() => {
            let nav1_main = `<ul class="nav1_body_1">
    <li>全部图书分类</li>
    <li>首页</li>
    <li>阅读卡兑换专区</li>
    <li>专卖场</li>
    <li>淘书会</li>
    <li>团购批发</li>
    </ul>`;
            $.ajax({
                        type: "post",
                        url: "../server/index_nav2.php",
                        dataType: "json",
                        success: function(res) {
                                let oLi = `<ul><li></li>${res.map((els) => `<li><a href="${els.href}">${els.name}</a></li>`).join("")}</ul>`;
            $(".nav2-box").prepend(oLi); //样式需要
        }
    })
    let nav1 = `<div class="nav1-box">${nav1_main}</div>`;
    let nav2 = `<div class="nav2-box"></div>`;
    let header = `<div id="head3-nav">${nav1+nav2}</div>`;
    $("body").prepend(header)
})