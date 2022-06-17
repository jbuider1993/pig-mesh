![](https://minio.pigx.vip/oss/1655478157.jpg)

## ① 添加 maven 依赖

- [查看最新版本](https://repo1.maven.org/maven2/com/pig4cloud/plugin/datav-security-renren-login-plugin/)

```xml
<dependency>
  <groupId>com.pig4cloud.plugin</groupId>
  <artifactId>datav-security-renren-login-plugin</artifactId>
  <version>${lastVersion}</version>
</dependency>
```

## ② 配置免密参数

```
datav.renren.check-token-url=http://ip:port/sys/user/info
datav.renren.error-url=renren登录页
```

## ③ 带 PIGX 平台 Token 请求 datav

```shell
http://localhost:8080?access_token={{access_token}}
```
