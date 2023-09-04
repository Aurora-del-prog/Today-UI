---
title: AutoComplete
description: AutoComplete 组件的文档
---
## 自动填充器

当选项过多时，使用下拉菜单展示并选择内容。

#### 基础用法

适用广泛的基础单选 v-model 的值为当前被选中的 `option` 的 value 属性值, `filterMethod` 为筛选方法

<preview path="../demo/AutoComplete/Basic.vue" title="基础选择器" description="AutoComplete 基础选择器"></preview>



## 自定义模板

你可以自定义如何来渲染每一个选项, 使用 `renderLabel` 属性，它接受一个回调函数，返回 vNode 类型。

<preview path="../demo/AutoComplete/CustomRender.vue" title="自定义模板" description="AutoComplete 自定义模板"></preview>


## 远程搜索

输入关键字以从远程服务器中查找数据。

服务器搜索数据，输入关键字进行查找。为了启用远程搜索，需要将 `filterable` 和 `remote` 设置为true，同时传入一个`remote-method`。 remote-method 为一个返回 Promise 的Function，类型为 `(value: string) => Promise<AutoCompleteOption[]>` 。

<preview path="../demo/AutoComplete/Remote.vue" title="筛选选项" description="AutoComplete 筛选选项"></preview>
