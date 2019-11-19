export default (api, opts) => {
  api.addHTMLHeadScript({
    type:"text/javascript",
    src: 'http://api.tianditu.gov.cn/api?v=4.0&tk=申请的服务许可（Key）',
  });
};
