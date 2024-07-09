
# jtopo 上手项目模版
    jtopo: 2.5.3 试用版(过期后，画面将只能查看，无法点击操作)
    UI框架：VUE
    打包工具: Vite

# 项目初始化安装
npm 或者 yarn都可以，这里npm演示

    npm install

    npm install ./jtopo_npm/core
    npm install ./jtopo_npm/editor

# 卸载
    npm uninstall @jtopo/editor
    npm uninstall @jtopo/core 

# 运行
    npm run dev

# 打包
    npm run build

# 访问
    http://localhost:3000

# 目录结构说明
    src         源码
    jtopo_npm   jtopo的本地npm目录
    dist        打包的目录

# 更多信息
    Vite: https://cn.vitejs.dev/guide/
    jtopo: www.jtopo.com
    试用版仅用于 **本地开发、测试、技术可行性验证**，商用需要购买授权。

    虽然项目里用到vue和vite，但jtopo和vue、vite并没有依赖关系，可以换做别的框架和打包工具。