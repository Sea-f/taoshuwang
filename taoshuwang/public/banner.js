    function addBanner(add, img) {
        let banner_main = `<div class="banner_main"><img src="${img}" alt=""></div>`;
        let banner = `<banner class="banner_box">${banner_main}</banner>`;
        $(`${add}`).after(banner);
    }