$(() => {
    class SilideShow {
        constructor(data) {
            this.root = null;
            this.data = data;
            this.index = 0;
            this.siledeBox = null;
            this.siledeBody = null;
            this.siledeControl = null;
            this.siledeNav = null;
            this.siledebodyLiWidth = null;
            this.timer = null;

        }

        //---------------初始化
        init() {
            this.creatHtml();
            this.autoPlay();
            this.addClickHandler();
            this.addMouseHandler();
        }


        //---------------UI区
        creatHtml() { //创建大盒子
            this.creatMain();
            this.creatNav();
            this.creatControl();


            let oDiv = document.createElement("div");
            oDiv.className = "silede-box";
            oDiv.appendChild(this.siledeBody);
            oDiv.appendChild(this.siledeControl);
            oDiv.appendChild(this.siledeNav);
            this.siledeBox = oDiv;
            $("#page").append(this.siledeBox);
            this.siledebodyLiWidth = this.siledeBody.querySelectorAll("li")[0].offsetWidth;
        }
        creatMain() { //创建轮播主体
            let oUl = document.createElement("ul");
            oUl.className = "silede-body";
            let html = this.data.map((ele) => {
                return `<li><img src="${ele.src}"  alt =""></li>`;
            }).join("");
            oUl.innerHTML = html;
            this.siledeBody = oUl;

        }
        creatControl() { //创建中间两旁按钮
            let oAsd = document.createElement("aside");
            oAsd.className = "silede-control";
            let html = `<span class="prev">&lt;</span> <span class="next">&gt;</span>`;
            oAsd.innerHTML = html;
            this.siledeControl = oAsd;
        }
        creatNav() { //创建导航
            let oUl = document.createElement("ul");
            oUl.className = "silede-nav";
            let html = this.data.map((ele, index) => {
                return `<li>${index+1}</li>`;
            }).join("");

            oUl.innerHTML = html;
            this.siledeNav = oUl;
            this.siledeNav.querySelectorAll("li")[0].classList.add("active"); //给第一个nav标红
        }

        //----------------功能区
        next() { //前进
            this.index++;
            if (this.index == this.data.length) {
                this.index = 0;
            }
            this.siledeBody.style.left = -(this.index * this.siledebodyLiWidth) + "px";
        }
        prev() { //后退
            this.index--;
            if (this.index == -1) {
                this.index = this.data.length - 1;
            }
            this.siledeBody.style.left = -(this.index * this.siledebodyLiWidth) + "px";
        }
        autoPlay() { //自动播放
            this.timer = setInterval(() => {
                this.next();
                Array.from(this.siledeNav.children).forEach(ele2 => { ele2.classList.remove("active") });
                this.siledeNav.children[this.index].classList.add("active");

            }, 1000);
        }
        addClickHandler() { //点击事件
            this.siledeControl.onclick = (e) => { //前后点击事件
                e = e || window.event;
                let target = e.target || e.srcElement;
                if (target.className == "prev") {
                    this.prev();
                    console.log("prev");
                } else if (target.className == "next") {
                    this.next();
                    console.log("next");
                }
            }
            Array.from(this.siledeNav.children).map((ele1, ind1) => { //导航点击事件
                ele1.onclick = () => {
                    Array.from(this.siledeNav.children).forEach(ele2 => { ele2.classList.remove("active") });
                    ele1.classList.add("active");
                    this.index = ind1 - 1;
                    this.next();
                }
            })
        }
        addMouseHandler() { //移入事件
            this.siledeBox.onmouseenter = () => { clearInterval(this.timer) }
            this.siledeBox.onmouseleave = () => { this.autoPlay() }
        }
    }

    $.ajax({
        type: "get",
        url: `../server/index_lunbo.php`,
        dataType: "json",
        data: null,
        timeout: 1000,
        success: function(data) {
            let p1 = new SilideShow(data);
            p1.init();
        },
        error: function() {
            console.log("请求失败");
        }
    })

})