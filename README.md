https://www.babeljs.cn/docs/setup/#installation

配置: cli


安装: npm install --save-dev babel-cli

使用:
我们将把我们的指令放在本地版本的 npm 脚本中，而不是直接通过命令行来运行 Babel.
简单的在你的 package.json 中添加一个 "scripts" 属性并将 babel 命令放在它的 build 属性中。

  {
    "name": "my-project",
    "version": "1.0.0",
+   "scripts": {
+     "build": "babel src -d lib"
+   },
    "devDependencies": {
      "babel-cli": "^6.0.0"
    }
  }


  创建 .babelrc 配置文件
非常棒！虽然已经配置好了 Babel ，但并没有让它真正生效。在项目的根目录中创建一个 .babelrc 文件并启用一些插件。

首先，你可以使用转换 ES2015+ 的 env preset 。

npm install babel-preset-env --save-dev
为了让 preset 生效，你需要像下面这样定义你的 .babelrc 文件：

{
  "presets": ["env"]
}
注意: 因为 npm 2.x 下载依赖的关系，在使用 npm 2.x 运行 Babel 6.x 的项目时，可能会引起性能问题。 你可以通过切换到 npm 3.x 或在 npm 2.x 上使用 dedupe 选项来解决这个问题。查看 npm 版本你可以运行如下命令:

npm --version