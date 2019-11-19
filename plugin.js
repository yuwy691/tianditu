export default (api, opts) => {
  api.addHTMLHeadScript({
    type:"text/javascript",
    src: 'http://api.tianditu.gov.cn/api?v=4.0&tk=3058dfd1d4f8ef4ca9e555c8ecdbbfab',
  });
};
