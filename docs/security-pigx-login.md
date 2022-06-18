<iframe src="//player.bilibili.com/player.html?aid=982516021&bvid=BV1jt4y1h7hv&cid=749696268&page=1&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="600"> </iframe>

![](https://minio.pigx.vip/oss/1655478108.jpg)

## ① 添加 maven 依赖

- [查看最新版本](https://repo1.maven.org/maven2/com/pig4cloud/plugin/datav-security-pigx-login-plugin/)

```xml
<dependency>
  <groupId>com.pig4cloud.plugin</groupId>
  <artifactId>datav-security-pigx-login-plugin</artifactId>
  <version>${lastVersion}</version>
</dependency>
```

## ② 配置免密参数

```
datav.pigx.check-token-url=http://IP:9999/auth/oauth/check_token
datav.pigx.error-url=PIGX登录页
datav.pigx.client-id=pig
datav.pigx.client-secret=pig
```

## ③ 带 PIGX 平台 Token 请求 datav

```shell
http://localhost:8080?access_token={{access_token}}&tenant_id={{tenant_id}}
```
