<iframe src="//player.bilibili.com/player.html?aid=512325240&bvid=BV1gg41197Q6&cid=742389160&page=1&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="600"> </iframe>

## ① 选中组件

选中组件，在操作界面右侧，点击图标，如下图

![](https://minio.pigx.vip/oss/1656645795.png)

## ② 编辑数据值

输入目标的 WS 接口即可

![](https://minio.pigx.vip/oss/1656645815.png)

## ③ 可选: 部署测试 websocket 服务

```shell
docker run --name ws-demo  -p  18089:18089 -d pig4cloud/datav-ws-demo
```

!> ws://ip:18089/ws/{组件区分标识}
