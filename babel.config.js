module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  //添加支持按需引入配置
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        // 指定样式路径
        style: (name) => `${name}/style/less`,
      },
      "vant"
    ],
  ],
};