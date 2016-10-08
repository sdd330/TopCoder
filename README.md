# TopCoder

* 基于React Native技术，APP一次编写，跨平台运行（同时支持iOS，Android和Web平台）。
* [TopCoder iOS版下载](https://rink.hockeyapp.net/apps/67da4f7a0de14857924c7ec29cbec0a6)
* [TopCoder Android版下载](https://rink.hockeyapp.net/apps/4c1a7f1beaf542769848042cdc37a53d)

# :loudspeaker: 诚招贡献者
我们正在构建第一版的应用，希望能有更多的小伙伴加入，为APP添加更多的组件和功能。

# 准备开发环境
* 安装 [Node.js 6.x](https://nodejs.org)
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
* 安装 [Visual Studio Code](https://code.visualstudio.com)
- 安装Visual Studio Code扩展
 + React Native Tools
 + Babel ES6/ES7
 + ESLint
 + [esformatter](https://github.com/leftstick/vscode-esformatter) 特别感谢leftstick提供的扩展
- 设置调试环境为React Native

# 应用开发
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
react-native run-ios
```
* 运行Android应用
```
react-native run-android
```

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
* 联系项目管理员添加你的帐号到TopCoder collaborators
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

# 编译打包移动端APP

## iOS
[TBD]

## Android
[TBD]
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
