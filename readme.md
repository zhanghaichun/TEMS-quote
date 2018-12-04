运行 npm run comment 命令可以为该项目生成 API 文档，
该文档使用的是 jsdoc 生成的。

注意： 进行注释的时候一定要使用对应含义的标签，
在对 Vue 文件进行注释的时候， 一定要在最开始表名 @module 标签，
否则不会生效。例如：

```
/**
	这是服务于导航的一个子组件
	@module navMenu
*/
export default {
	data () {
		return {}
	}
}
```
>>> 在命名模块的时候使用同一的驼峰式的命名，
如：@module testHomeService √ ok
@module test home service × avoid // 因为这种写法会导致生成的文档链接失效

### JSDoc 标签一览:
	{@link: ...}, {@linkplain: ...}, {@linkcode: ...}, {@tutorial: ...}: 内联标签
	@abstract: 抽象，必须由继承者实现（或者覆盖）
	@access: 访问级别（private、public或者protected）
	@alias: 别名
	@augments: 参数
	@author: 作者
	@borrows: 借用
	@callback: 回调函数
	@classdesc: 类描述
	@constant: 常量
	@constructor: 构造函数，可以使用new创建一个实例
	@constructs: 构造
	@copyright: 版权
	@default: 默认值
	@deprecated: 弃用的
	@desc: 描述
	@enum: 枚举值
	@event: 事件
	@example: 范例
	@exports: 模块导出（模块化）
	@external: 外部模块（模块化）
	@file: 文件
	@fires: 可触发的事件
	@global: 全局对象
	@ignore: 忽略
	@inner: 内联对象
	@instance: 实例
	@kind: 标识类型
	@lends: 遍历属于同一个标识的所有属性
	@license: 软件授权
	@link: 内联
	@member: 成员
	@memberof: 属于某成员
	@method: 方法
	@mixes: 合并
	@mixin: 最小化
	@module: 模块（模块化）
	@name: 名称
	@namespace: 命名空间
	@param: 参数
	@private: 私有的（访问控制）
	@property: 属性
	@protected: 受保护的（访问控制）
	@public: 公开的（访问控制）
	@readonly: 只读的
	@requires: 依赖（模块化）
	@return: 返回值
	@see: 引用
	@since: 开始于
	@static: 静态的
	@summary: 概述
	@this: 解释this关键字
	@throws: 可能抛出的异常
	@todo: 待办事项
	@tutorial: 引用指导手册
	@type: 类型
	@typedef: 自定义类型
	@variation: 区分不同的对象具有相同名称的
	@version: 版本