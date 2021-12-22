
// server/index.js
const express = require('express');
// rendertron express 官方中间件
const rendertron = require('rendertron-middleware');
const app = express();

// history 路由兼容中间件
const history = require('connect-history-api-fallback');

const botlist = require('./botlist');

// 注册中间件  默认是 /index.html
app.use(history());

app.use(rendertron.makeMiddleware({
    proxyUrl: global.rendertronRenderUrl,
    userAgentPattern: new RegExp(botlist.join('|'), 'i')
}));

// spa项目打包完成的目录
app.use(express.static(global.PAGE_PATH));
app.listen(global.port, () => {
    console.log('listening to http://localhost:' + global.port);
});
