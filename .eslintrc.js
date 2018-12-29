/**
 * @module ESLint Config
 * @desc ESLint 的配置文件， ESLint 插件是专门用来约束编码规范的，
 *       下面给出的链接是 eslint-config-standard 的中文注解文档。
 * @link https://standardjs.com/rules-zhcn.html
 */
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  
  /**
   * @desc 下面给出的链接地址是 StandardJs 的官方 github 地址。
   * @link https://github.com/standard
   */
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  
  /**
   * @desc 可以根据团队内部的需求自定修改 js standard 规则配置
   *       每一条规则的值有三种： 0 = off, 1 = warn, 2 = error， 如下链接给出详细配置的属性规则名字
   * @link https://blog.csdn.net/qq_15307457/article/details/81135204
   */
  'rules': {
    
    // 箭头函数使用小括号括起来
    'arrow-parens': 0,
    
    // 生成器函数的前后空格（为 ESMAScript 6 新特性）
    'generator-star-spacing': 0,
    
    // 一行结束之后， 后面允许有空格或空行， 但是不允许有多个空行
    'no-trailing-spaces': 0,
    
    // 块语句行首行尾可以留空行， 同样也不能留多个空行
    'padded-blocks': 0,
    
    // 在开发环境下允许使用 debugger 关键字来调试代码
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'eqeqeq': 0,
    
    // 允许在通过 new 关键字创建对象之后不赋值
    'no-new': 0
  }
}
