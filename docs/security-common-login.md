<iframe src="//player.bilibili.com/player.html?aid=982266201&bvid=BV1dt4y1n7zh&cid=742278867&page=1&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="600"> </iframe>

## ① 添加 maven 依赖

- [查看最新版本](https://repo1.maven.org/maven2/com/pig4cloud/plugin/datav-security-common-login-plugin/)

```xml
<dependency>
  <groupId>com.pig4cloud.plugin</groupId>
  <artifactId>datav-security-common-login-plugin</artifactId>
  <version>${lastVersion}</version>
</dependency>
```

## ② 接口

#### 获取令牌

```shell
POST 请求
/api/login/token?identify=xxx

identify： 业务系统当前用户的唯一标识，比如ID
```

#### 退出

```shell
DELETE 请求
/api/login/token?token=xxx

token: 上一步中获取到的 token
```
