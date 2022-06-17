![](https://minio.pigx.vip/oss/1655478129.jpg)

## ① 添加 maven 依赖

- [查看最新版本](https://repo1.maven.org/maven2/com/pig4cloud/plugin/datav-security-pig-login-plugin/)

```xml
<dependency>
  <groupId>com.pig4cloud.plugin</groupId>
  <artifactId>datav-security-pig-login-plugin</artifactId>
  <version>${lastVersion}</version>
</dependency>
```

## ② 配置免密参数

```
datav.pig.check-token-url=http://ip:9999/auth/token/check_token
datav.pig.error-url=PIG 登录页
datav.pig.client-id=pig
datav.pig.client-secret=pig
```

## ③ 带 PIGX 平台 Token 请求 datav

```shell
http://localhost:8080?access_token={{access_token}}
```
