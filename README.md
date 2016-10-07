# MobileOA

* 基于React Native技术的移动OA项目。

# 准备开发环境
* 安装 node.js 6.x
请参照[Node.js](https://nodejs.org/en/download/package-manager)给出的安装说明
* 安装 cnpm 命令行工具
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
* 安装 React Native 命令行工具
```
cnpm install -g react-native-cli
```
* 安装 CodePush 命令行工具
```
cnpm install -g code-push-cli
```
* 安装Visual Studio Code
下载并安装[Visual Studio Code](https://code.visualstudio.com)
* 安装Visual Studio Code扩展
点击Visual Studio Code扩展按钮并安装以下扩展
- React Native Tools
- Babel ES6/ES7
- ESLint
- esformatter
* 配置调试环境
点击Visual Studio Code调试按钮并设置成React Native调试环境

# 应用开发测试与发布
* Clone 代码到本地
* 运行下面的命令安装npm依赖项
```
cd TopCoder
npm install --registry=https://registry.npm.taobao.org
```
* 修改components/App/index.js
* 运行Web应用
```
npm run dev
```
* 运行iOS应用
```
react-native run-android
```
* 运行Android应用
```
react-native run-android
```
* 运行Release版本的Android应用
```
react-native run-android --variant=release
```
* 生成Release版本的Android安装包
```
cd android && ./gradlew assembleRelease
```
* 安装Release版本的Android应用
```
cd android && ./gradlew assembleRelease && ./gradlew installRelease
```

# 移动端应用安装包下载地址
* [TopCoder iOS|Alpha](https://rink.hockeyapp.net/apps/67da4f7a0de14857924c7ec29cbec0a6)
* [TopCoder Android|Alpha](https://rink.hockeyapp.net/apps/4c1a7f1beaf542769848042cdc37a53d)

# 使用CodePush发布应用
* 注册 CodePush 帐号
在发布版本之前, 你必须创建一个CodePush帐号。你可以使用以下命令进行注册
```
code-push register
```
如果已经注册过CodePush，请使用以下命令进行登录操作
```
code-push login
```
* 联系项目管理员添加你的帐号到mobileoa collaborators
* 查看当前登录状态
```
code-push whoami
```
* 查看应用
```
code-push app ls
```
* 发布Android应用
```
code-push release-react TopCoder android
```
* 发布iOS应用
```
code-push release-react TopCoder ios
```