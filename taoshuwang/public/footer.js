$(() => {
    let oUl1 = `<ul><li>购物流程</li><li>发票制度</li><li>积分说明</li><li>我的订单</li><li>关于特价书</li></ul>`;
    let oUl2 = `<ul><li>配送时间及运费</li><li>验货与签收</li><li>订单配送查询</li></ul>`;
    let oUl3 = `<ul><li>货到付款</li><li>网上支付</li><li>邮局汇款</li><li>银行转帐</li><li>账户余额</li></ul>`;
    let oUl4 = `<ul><li>退换货政策</li>
    <li>退换货流程</li>
    <li>退换货申请</li>
    <li>退款说明</li>
    <li>申请余额提现</li></ul>`;
    let oUl5 = `<ul><li>常见问题</li>
    <li>找回密码</li>
    <li>汇款单招领</li>
    <li>联系客服</li></ul>`;
    let oUls = `<div class="footer_1">${oUl1+oUl2+oUl3+oUl4+oUl5}</div>`

    let p1 = `<p><span>关于淘书</span><span>诚征英才</span><span>书目清单</span><span>网站联盟</span><span>免责条款</span><span>联系我们</span><span>数据API</span><span>友情链接</span></p>`;
    let p2 = `<p> Copyright © 2012-2015 淘书网 Taoshu.com 版权所有|京ICP备12020895号出版物经营许可证 新出发京零字第朝110069号</p>`
    let oFooter = `<div class="footer_p">${p1+p2}</div>`
    let footer = `<footer id="footer_end">${oUls+oFooter}</footer>`;
    $("body").append(footer);
})