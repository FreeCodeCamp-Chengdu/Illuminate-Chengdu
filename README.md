# FCC 点亮成都
FCC 2017 秋冬Hackthon 项目
## 技术栈
- 腾讯地图API
- jquery 2.0.3
- bootstrap 4.0.0
- leancloud（后台）
## 目标
以成都地图为平台，在地图上以经纬度添加标记，点击标记展现参赛者以“点亮成都”为主题的SPA。

## Todo
地图页面：
1. 显示成都地图
2. 后台读取数据，在地图上添加标记，点击后显示参赛项目详情（名称，介绍，图片，作者，详情页面链接）
3. 点击链接跳转到作者项目页（或者弹出dialog?）

提交页面：
1. 设计表单，使项目作者提交项目
2. 提交数据到后台（名称，作者，介绍，图片，经纬度，详情链接）
## 本地运行

首先确认本机已经安装 [Node.js](http://nodejs.org/) 运行环境和 [LeanCloud 命令行工具](https://leancloud.cn/docs/leanengine_cli.html)

安装依赖：

```
npm install
```

登录并关联应用：

```
lean login
lean switch
```

启动项目：

```
lean up
```

之后你就可以在 [localhost:3000](http://localhost:3000) 访问到应用。

## 部署到 LeanEngine

部署到预备环境（若无预备环境则直接部署到生产环境）：
```
lean deploy
```

## 相关文档

* [云函数开发指南](https://leancloud.cn/docs/leanengine_cloudfunction_guide-node.html)
* [网站托管开发指南](https://leancloud.cn/docs/leanengine_webhosting_guide-node.html)
* [JavaScript 开发指南](https://leancloud.cn/docs/leanstorage_guide-js.html)
* [JavaScript SDK API](https://leancloud.github.io/javascript-sdk/docs/)
* [Node.js SDK API](https://github.com/leancloud/leanengine-node-sdk/blob/master/API.md)
* [命令行工具使用指南](https://leancloud.cn/docs/leanengine_cli.html)
* [云引擎常见问题和解答](https://leancloud.cn/docs/leanengine_faq.html)
