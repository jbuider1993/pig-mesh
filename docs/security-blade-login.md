![](https://minio.pigx.vip/oss/1655478215.jpg)

## ① 添加 maven 依赖

- [查看最新版本](https://repo1.maven.org/maven2/com/pig4cloud/plugin/datav-security-blade-login-plugin/)

```xml
<dependency>
  <groupId>com.pig4cloud.plugin</groupId>
  <artifactId>datav-security-blade-login-plugin</artifactId>
  <version>${lastVersion}</version>
</dependency>
```

## ② 配置免密参数

```
datav.blade.check-token-url=http://IP:port/api/blade-user/info
datav.blade.error-url=blade登录页
datav.blade.client-id=saber
datav.blade.client-secret=saber_secret
```

## ③ 带 PIGX 平台 Token 请求 datav

```shell
http://localhost:8080?access_token={{access_token}}
```
