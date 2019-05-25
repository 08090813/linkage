# 微信小程序 省市区【树形】 三级联动
因官方三级联动的地址数据不符合业务需求，百度看了一些自定义的三级联动示例，稍微复杂了一点，所以制作了此三级联动的小程序组件，传入的数据格式为树形结构，确认和关闭等回调事件的处理、方便，快捷！

> 使用方式
### 下载 linkage 到小程序的 组件目录、一般为 component

## 在页面的 json 文件中 引入linkage
~~~
{
  "usingComponents": {
    "linkage":"/component/linkage/index"
  }
}
~~~
## 在页面的 wxml 文件中 引入 
~~~
<linkage address="{{ area_actions }}" is_show="{{ showArea }}" bind:confirm="onAreaSelect" bind:cancel="onAreaClose"></linkage>
~~~

## 参数说明

+ address 地址数据源、格式参考 附加说明
+ is_show 是否显示组件
+ bind:confirm 点击确认事件
+ bind:cancel 点击取消事件

## 事件回调参数
~~~
  onAreaSelect(event) {
    let detail = event.detail
    let area = detail.area
    console.log(area)//自行查看
  }
~~~

## 附加说明 取下面数据中的 data 作为area_actions参数既可、如果你自定义
~~~
{"code":200,"msg":"\u6570\u636e\u83b7\u53d6\u6210\u529f","data":[{"area_id":33,"name":"\u8d35\u5dde\u7701","pid":0,"is_show":1,"child":[{"area_id":3,"name":"\u8d35\u9633\u5e02","pid":33,"is_show":1,"child":[{"area_id":4,"name":"\u5357\u660e\u533a","pid":3,"is_show":1},{"area_id":5,"name":"\u82b1\u6eaa\u533a","pid":3,"is_show":1},{"area_id":6,"name":"\u767d\u4e91\u533a","pid":3,"is_show":1},{"area_id":7,"name":"\u4e4c\u5f53\u533a","pid":3,"is_show":1},{"area_id":8,"name":"\u91d1\u9633\u65b0\u533a","pid":3,"is_show":1},{"area_id":9,"name":"\u5f00\u9633\u53bf","pid":3,"is_show":1},{"area_id":10,"name":"\u4fee\u6587\u53bf","pid":3,"is_show":1},{"area_id":11,"name":"\u606f\u70fd\u53bf","pid":3,"is_show":1},{"area_id":12,"name":"\u6e05\u9547\u5e02","pid":3,"is_show":1}]},{"area_id":13,"name":"\u516d\u76d8\u6c34\u5e02","pid":33,"is_show":1,"child":[{"area_id":14,"name":"\u949f\u5c71\u533a","pid":13,"is_show":1},{"area_id":15,"name":"\u516d\u679d\u7279\u533a","pid":13,"is_show":1},{"area_id":16,"name":"\u6c34\u57ce\u53bf","pid":13,"is_show":1},{"area_id":17,"name":"\u76d8\u5dde\u5e02","pid":13,"is_show":1}]},{"area_id":18,"name":"\u9075\u4e49\u5e02","pid":33,"is_show":1,"child":[{"area_id":19,"name":"\u7ea2\u82b1\u5c97\u533a","pid":18,"is_show":1},{"area_id":20,"name":"\u6c47\u5ddd\u533a","pid":18,"is_show":1},{"area_id":21,"name":"\u64ad\u5dde\u533a","pid":18,"is_show":1},{"area_id":22,"name":"\u8d64\u6c34\u5e02","pid":18,"is_show":1},{"area_id":23,"name":"\u4ec1\u6000\u5e02","pid":18,"is_show":1},{"area_id":24,"name":"\u6850\u6893\u53bf","pid":18,"is_show":1},{"area_id":25,"name":"\u7ee5\u9633\u53bf","pid":18,"is_show":1},{"area_id":26,"name":"\u6b63\u5b89\u53bf","pid":18,"is_show":1},{"area_id":27,"name":"\u9053\u771f\u4ee1\u4f6c\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf","pid":18,"is_show":1},{"area_id":28,"name":"\u52a1\u5ddd\u4ee1\u4f6c\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf","pid":18,"is_show":1},{"area_id":29,"name":"\u51e4\u5188\u53bf","pid":18,"is_show":1},{"area_id":30,"name":"\u6e44\u6f6d\u53bf","pid":18,"is_show":1},{"area_id":31,"name":"\u4f59\u5e86\u53bf","pid":18,"is_show":1},{"area_id":32,"name":"\u4e60\u6c34\u53bf","pid":18,"is_show":1}]}]},{"area_id":34,"name":"\u4e91\u5357\u7701","pid":0,"is_show":1,"child":[{"area_id":35,"name":"\u6606\u660e\u5e02","pid":34,"is_show":1,"child":[{"area_id":36,"name":"\u76d8\u9f99\u533a","pid":35,"is_show":1},{"area_id":37,"name":"\u76d8\u9f99\u533a","pid":35,"is_show":1}]},{"area_id":38,"name":"\u66f2\u9756\u5e02","pid":34,"is_show":1},{"area_id":39,"name":"\u7389\u6eaa\u5e02","pid":34,"is_show":1}]}]}
~~~