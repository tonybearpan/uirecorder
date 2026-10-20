## 说明
- 该版本基于官方uirecorder
- 该版本升级chromedriver版本为127
- 该版本默认关闭校验浏览器，使用全屏窗口录制
- 报告使用界面更友好的allure
- 添加 npm run report 命令，生成并打开报告
- 添加修复样式按钮，解决样式偶尔会丢失的问题

## 安装方法

```shell
npm config set registry https://registry.npmjs.org/
npm config set registry https://registry.npmmirror.com/
npm install uirecorder119 mocha -g
```

其他使用与官方版本无异，请参考官方文档：

### 官方文档
[English](README_en.md), [中文](README_zh-cn.md)

## Playwright migration (experimental)

The existing WebDriver/Mocha scripts and recorder flow remain available. To create a Playwright JavaScript script from a recording, first record with the existing recorder and enable raw-command output:

    uirecorder start sample/login.spec.js --raw

After recording, the raw command file is saved next to the spec with a .json extension. Generate a parallel Playwright script:

    uirecorder playwright sample/login.spec.json
    cd sample-project
    npm install
    npx playwright install chromium
    node sample/login.spec.pw.js

Use -o output.js to choose a different output path and --headless to generate a headless script. This first migration layer supports common URL, click, double-click, typing, frame/window switching, scrolling, wait, and basic visibility/text assertion commands. Commands not translated automatically are emitted as comments; review those comments and generated selectors before relying on the script. Legacy command JSON is not modified, and the existing WebDriver runner is unchanged.

Run the builder unit checks with npm run test:playwright-builder.
