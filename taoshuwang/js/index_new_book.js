$(() => {
    $.ajax({
        type: "post",
        url: "../server/index_new_book.php",
        dataType: "json",
        success: function(res) {
            let oLi = Array.from(res).map((els) => {
                return `<li class="book_obj">
                        <figure>
                        
                            <aside class="store">
                            <span>${els.label_tj}折</span>
                            </aside><img src="${els.img}"/>
                            <figcaption>${els.title}</figcaption>
                            <figcaption>￥${els.new_price}</figcaption>
                            </figure>
                            
                    </li>`
            }).join("");
            let oUl = `<ul>${oLi}</ul>`
            $(".new_book").append(oUl);
        }
    })
})