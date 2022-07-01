<iframe src="//player.bilibili.com/player.html?aid=512325240&bvid=BV1gg41197Q6&cid=742389160&page=1&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="600"> </iframe>

## ① 选中组件

选中组件，在操作界面右侧，点击图标，如下图

![](https://minio.pigx.vip/oss/1656645795.png)

## ② 编辑数据值

输入目标的 WS 接口即可

![](https://minio.pigx.vip/oss/1656645815.png)


## ③ 非必要: Java 快速部署WS 服务

- 添加maven 依赖

```xml
<dependency>
    <groupId>org.yeauty</groupId>
    <artifactId>netty-websocket-spring-boot-starter</artifactId>
    <version>0.12.0</version>
</dependency>
```

- 定义端点

```java
@ServerEndpoint(path = "/ws/{arg}", port = "8089")
public class DataVWsServerEndpoint {
	public static Map<String, Session> sessionKit = new HashMap<>();

	@BeforeHandshake
	public void handshake(Session session, HttpHeaders headers, @PathVariable String arg) {
		session.setSubprotocols("stomp");
	}

	@OnOpen
	public void onOpen(Session session, HttpHeaders headers, @RequestParam String req,
			@RequestParam MultiValueMap reqMap, @PathVariable String arg, @PathVariable Map pathMap) {
		// 链路通了保存 session
		sessionKit.put(arg, session);
	}

	@OnClose
	public void onClose(Session session) throws IOException {
		System.out.println("one connection closed");
	}

	@OnError
	public void onError(Session session, Throwable throwable) {
		throwable.printStackTrace();
	}

	@OnMessage
	public void onMessage(Session session, String message) {
		session.sendText("Hello Netty!");
	}

	@OnBinary
	public void onBinary(Session session, byte[] bytes) {
		session.sendBinary(bytes);
	}

	@OnEvent
	public void onEvent(Session session, Object evt) {
		if (evt instanceof IdleStateEvent) {
			IdleStateEvent idleStateEvent = (IdleStateEvent) evt;
			switch (idleStateEvent.state()) {
			case READER_IDLE:
				System.out.println("read idle");
				break;
			case WRITER_IDLE:
				System.out.println("write idle");
				break;
			case ALL_IDLE:
				System.out.println("all idle");
				break;
			default:
				break;
			}
		}
	}
}


```

- 服务端发送数据

```json
DataVWsServerEndpoint.sessionKit.get(args).sendText(JSONUtil.createObj().set("value", i).toString());

```