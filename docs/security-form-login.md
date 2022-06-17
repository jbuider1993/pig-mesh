## ① 添加 maven 依赖

- [查看最新版本](https://repo1.maven.org/maven2/com/pig4cloud/plugin/datav-security-form-login-plugin/)

```xml
<dependency>
  <groupId>com.pig4cloud.plugin</groupId>
  <artifactId>datav-security-form-login-plugin</artifactId>
  <version>${lastVersion}</version>
</dependency>
```

## ② 配置账号密码

```
spring.security.user.name=datav
spring.security.user.password=datav
```

## 进阶: 个性化登录页面

> 将 logint.html 放置于如下文件目录 即可完成页面个性化

```
├── src
│   ├── main
│   │   └── resources
│   │       ├── META-INF
│   │       │   └── resources
│   │       │       └── logint.html

```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>登录DataV</title>
    <link
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M"
      crossorigin="anonymous"
    />
    <link href="https://getbootstrap.com/docs/4.0/examples/signin/signin.css" rel="stylesheet" crossorigin="anonymous" />
  </head>
  <body>
    <div class="container">
      <form class="form-signin" method="post" action="/login">
        <h2 class="form-signin-heading">DataV 数据可视化</h2>
        <p>
          <label for="username" class="sr-only">用户名</label>
          <input type="text" id="username" name="username" class="form-control" placeholder="用户名" required autofocus />
        </p>
        <p>
          <label for="password" class="sr-only">密码</label>
          <input type="password" id="password" name="password" class="form-control" placeholder="密码" required />
        </p>
        <button class="btn btn-lg btn-primary btn-block" type="submit">登录</button>
      </form>
    </div>
  </body>
</html>
```
