$(() => {
    loadCart();

    function loadCart() {
        /* $(".cartBox").remove(); */
        $.ajax({ //获取商品数据
            /* data: { type: "get" }, */
            url: "../server/cart.php",
            dataType: "json",
            success: function(res) {
                renderUI(res);
            }
        });
    }


    /* 渲染购物车 */
    function renderUI(data) {
        let tmp = data.map(item => {
            return `
            <ul class="order_lists order_item" gid=${item.shop_id}>
                <li class="list_chk">
                  <input type="checkbox" id="checkbox_${item.shop_id}" class="son_check">
                  <label for="checkbox_${item.shop_id}"></label>
                </li>
                <li class="list_con">
                  <div class="list_img"><a href="../html/page_shop.html?id=${item.shop_id}"><img src=${item.src} alt=""></a></div>
                  <div class="list_text"><a href="../html/page_shop.html?id=${item.shop_id}">${item.title}</a></div>
                </li>
                <li class="list_price">
                  <p class="price">￥<span class="price_number">${item.price}</span></p>
                </li>
                <li class="list_amount">
                  <div class="amount_box">
                    <a href="javascript:;" class="reduce" data-id="${item.shop_id}">-</a>
                    <input type="text" value="${item.math}" class="sum">
                    <a href="javascript:;" class="plus" data-id="${item.shop_id}">+</a>
                  </div>
                </li>
                <li class="list_sum">
                  <p class="sum_price" data-price=${item.price}>￥<span class="monny">${Math.round(item.price * item.math * 100) / 100}</span></p>
                </li>
                <li class="list_op">
                  <p class="del"><a href="javascript:;" class="delBtn">移除商品</a></p>
                </li>
              </ul>`
        }).join('');

        let html = `
                <div class="cartBox">
                 
                  <div class="order_content">${tmp}</div>
                </div>`;
        $(html).insertAfter('.cartMain_hd');
        let num = 0
        Array.from(document.querySelectorAll(".monny")).map(els => {
            num += Number(els.innerHTML);
        })
        $(".total_text").text(`￥${num}`);
    }

    $("body").on("click", ".plus,.reduce", function() {
        /* 更改数量|发送网络请求 */
        if (this.className == "plus") {
            count = $(this).prev().val() * 1 + 1;
            $(this).prev().val(count);
            $.ajax({
                type: "post",
                data: {
                    id: $(this).attr("data-id"),
                    click: this.className,
                },
                url: "../server/carts_click.php",
                success: function(res) {
                    if (res) {
                        Array.from(document.querySelectorAll(".price_number")).map((els, index) => {
                            document.querySelectorAll(".monny")[index].innerHTML = Number(els.innerHTML) * Number(document.querySelectorAll(".sum")[index].value);
                        })
                        let num = 0
                        Array.from(document.querySelectorAll(".monny")).map(els => {
                            num += Number(els.innerHTML);
                        })
                        $(".total_text").text(`￥${num}`);
                    } else {
                        alert("发生未知错误,请联系管理员");
                    }
                }
            });
        } else {
            count = $(this).next().val() * 1 - 1;
            $(this).next().val(count);
            $.ajax({
                type: "post",
                data: {
                    id: $(this).attr("data-id"),
                    click: this.className,
                },
                url: "../server/carts_click.php",
                success: function(res) {
                    if (res) {
                        Array.from(document.querySelectorAll(".price_number")).map((els, index) => {
                            document.querySelectorAll(".monny")[index].innerHTML = Number(els.innerHTML) * Number(document.querySelectorAll(".sum")[index].value);
                        })
                        let num = 0
                        Array.from(document.querySelectorAll(".monny")).map(els => {
                            num += Number(els.innerHTML);
                        })
                        $(".total_text").text(`￥${num}`);
                    } else {
                        alert("发生未知错误,请联系管理员");
                    }
                }
            })

        };
    })
    $("body").on("click", ".delBtn", function() {
        console.log();
        $.ajax({
            type: "post",
            data: {
                id: $(this).parents(".order_lists").attr("gid")
            },
            url: "../server/delect_car.php",
            success: function(res) {
                console.log(res);

                if (res) {
                    location.reload();
                } else {
                    alert("请求失败，请联系管理员");
                }
            }
        })
    })
})