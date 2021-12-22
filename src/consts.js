const path = require('path');

// 根目录
global.ROOT_PATH = path.join(__dirname, '../');
// 页面目录
global.PAGE_PATH = path.join(ROOT_PATH, 'html');
// 运行端口
global.port = process.env.PORT || 8080;
// rendertron运行地址, 默认是3000端口
global.rendertronServiceUrl = 'http://localhost:3000';
// rendertron渲染地址
global.rendertronRenderUrl = `${global.rendertronServiceUrl}/render`;
