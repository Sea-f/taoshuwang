class Advertising {
    constructor(name, more, arr1, arr2) {
        this.arr1 = arr1;
        this.arr2 = arr2;
        this.name = name; //传入标题
        this.more = more; //传入选项卡名字
        this.root = null;
        this.oPi = null;
        this.oUl = null;
        this.oLi = null;
    }
    init() {
        this.root = this.creatBox();
        this.insertView(this.root);
        this.oPi = this.root.querySelectorAll(".xxcar")[0].children; //获取到选项卡
        this.oUl = this.root.querySelectorAll(".atc_box");
        this.oLi = this.root.querySelectorAll("li");
        this.addClickEvent();
    }
    creatHTML(num) {
        let oArticle = document.createElement("acticel");
        oArticle.className = (num == this.arr1 ? "atc_box" : ("atc_box" + " hide"));
        //渲染信息
        let oUl = num.map((els, index) => { //给ul添加li，给li填充内容
            if (index == 0 || index == 5) {
                return `<li class="atc_li_no"><img src="${els.src}" alt=""></li>`
            } else {
                return `<li class="atc_li">
                                    <img src="${els.src}" alt="">
                                    <h3>${els.title}</h3>
                                    <p>${els.desc}</p>
                                    <p><span>${els.price}</span></p></li>`
            }
        }).join("");
        oArticle.innerHTML = oUl;
        return oArticle;
    }

    insertView(value) {
        document.body.appendChild(value);
    }
    creatHead(name, more) {
        let oH1 = document.createElement("header");
        oH1.className = "box_header";
        oH1.innerHTML = `${this.name}<p class="xxcar"><span class="onstart">热门</span><span>${this.more}</span></p>`
        return oH1;
    }
    creatBox() {
        let Box = document.createElement("acide");
        Box.className = "box_body";
        let oBox = document.querySelectorAll(".box_body");
        document.body.appendChild(Box);
        Box.appendChild(this.creatHead(this.name, this.more)); //将顶部插入到box中
        Box.appendChild(this.creatHTML(this.arr1)); //将第一张选项卡插入到box中
        Box.appendChild(this.creatHTML(this.arr2)); //将第二张选项卡插入到box中
        return Box;
    }
    addClickEvent() {
        let self = this;
        let len_oPi = this.oPi.length;
        for (let i = 0; i < len_oPi; i++) { //给ul添加切换选项卡事件

            this.oPi[i].index = i;
            this.oPi[i].onmouseover = function() {
                for (let j = 0; j < len_oPi; j++) {
                    self.oPi[j].className = "";
                    self.oUl[j].className = "atc_box" + " hide";
                }
                self.oPi[this.index].className = "onstart";
                self.oUl[this.index].className = "atc_box";
            }
        }
        let len_oLi = this.oLi.length;
        for (let i = 0; i < len_oLi; i++) { //给li添加移入事件
            this.oLi[i].index = i;
            this.oLi[i].onmouseenter = function() {
                self.oLi[this.index].className = `${(this.index == 0 || this.index == 5 || this.index == 10 ||this.index == 15) ? ("atc_li_no" + " active_on") : ("atc_li" + " active_on")}`;
            }
            this.oLi[i].onmouseleave = function() {
                self.oLi[this.index].className = `${(this.index == 0 || this.index == 5 || this.index == 10 ||this.index == 15) ? ("atc_li_no") : "atc_li"}`;
            }
        }

    }
}