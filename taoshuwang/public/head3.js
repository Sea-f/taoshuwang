$(() => {
            let nav1_main = `<ul class="nav1_body_1">
    <li id="href_list"><a href="list.html">全部图书分类</a><ul id="two_nav"></ul></li>
    <li>首页</li>
    <li>阅读卡兑换专区</li>
    <li>专卖场</li>
    <li>淘书会</li>
    <li>团购批发</li>
    </ul>`;
            $.ajax({
                        type: "post",
                        url: "../server/index_nav_main.php",
                        dataType: "json",
                        success: function(res) {
                                let oLi = `<ul><li></li>${res.map((els) => `<li><a href="${els.href}">${els.name}</a></li>`).join("")}</ul>`;
                       $(".nav2-box").prepend(oLi); //样式需要
        }
    })
    $.ajax({
        type:"post",
        url:"../server/index_nav.php",
        dataType:"json",
        success: function(res2) {
            $("#two_nav").prepend(
                res2.map(els =>{
                    return `<li><p>${els.h2}</p><div class="a_box">
                    ${els.two.map(els2=>{return `<a>${els2}</a>`}).join("")}</div>
            <div class="tree_box">
            
            <div class="tree_body_p">
            ${els.h3_main.map(els3=>{return `<div class="p_box"><div class="h3_icon">${els3.h3}</div>
            <div class="h3_p_body">${els3.tree.map(els4=>{return `<span>${els4}</span>`}).join("")}
            </div></div>`}).join("")}
            </div>
            
            </div>
           </li>`
        }).join(""))
}
    })
    let nav1 = `<div class="nav1-box">${nav1_main}</div>`;
    let nav2 = `<div class="nav2-box"></div>`;
    let header = `<div id="head3-nav">${nav1+nav2}</div>`;
    $("body").prepend(header);
    $("#two_nav").addClass("dsp_no");
    $("#href_list").mouseenter(()=>{
        $("#two_nav").removeClass("dsp_no").addClass("dsp_on");
    }).mouseleave(()=>{
        $("#two_nav").removeClass("dsp_on").addClass("dsp_no");
    })
    $("#href_list").click(function(){
       window.location ="list.html";
        
    })
})