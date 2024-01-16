## 说明
- 该版本基于官方uirecorder
- 该版本安装chromedriver版本为113，请使用[chrome113](https://edgedl.me.gvt1.com/edgedl/release2/chrome/pxdjhchicvhxhf56y2sondqxx4_113.0.5672.93/113.0.5672.93_chrome_installer.exe) 无更新组件版本，减少配置driver版本的麻烦
- 该版本默认关闭校验浏览器，使用全屏窗口录制
- 报告使用界面更友好的allure
- 添加 npm run report 命令，生成并打开报告

## 安装方法

```shell
npm config set registry https://registry.npm.taobao.org
npm install uirecorder119 mocha -g
```

其他使用与官方版本无异，请参考官方文档：

### 官方文档
[English](README_en.md), [中文](README_zh-cn.md)