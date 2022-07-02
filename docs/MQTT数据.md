<iframe src="//player.bilibili.com/player.html?aid=983059052&bvid=BV18t4y1t75U&cid=761521324&page=1&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="600"> </iframe>

## ① 选中组件 MQTT 实时数据

选中组件，在操作界面右侧，点击图标，如下图

![1656644865](https://minio.pigx.vip/oss/1656644865.png)

## ② 编辑数据值

点击编辑在弹出的代码编辑框中填写我们的MQTT相关即可，数据格式要求参考各组件中的数据格式定义。

![](https://minio.pigx.vip/oss/1656644935.png)

> 可使用 EMQ 提供的测试服务 mqtt://broker.emqx.io:8083/mqtt

```json
{
    "clean":true,
    "connectTimeout":4000,
    "reconnectPeriod":4000,
    "clientId":"mqttjs_3be2c321",
    "username":"emqx_test",
    "password":"emqx_test",
    "topic":{
        "name":"datav",
        "qos":0
    }
}
```

- username /password 选填

## MQTT 测试客户端发送信息

- [http://tools.emqx.io/recent_connections](http://tools.emqx.io/recent_connections/25d50431-83ce-4e0e-9eab-49978a486a89)

![1656645340](https://minio.pigx.vip/oss/1656645340.png)