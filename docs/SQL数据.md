<iframe src="//player.bilibili.com/player.html?aid=384825110&bvid=BV1aZ4y1t752&cid=742389250&page=1&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="600"> </iframe>

## ① 维护数据源

### （1） 添加对应数据驱动

!> 支持 常见的 mysql、oracle、mssql、pg、达梦等

```xml
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.29</version>
</dependency>

```

### (2) 增加数据源

![](https://minio.pigx.vip/oss/1652887573.png)

## ② 编辑 SQL 语句

- 1. 点击编辑在弹出的 SQL 编辑框中输入对应 SQL，选择对应的数据源执行即可

![1652887638](https://minio.pigx.vip/oss/1652887638.png)

- 2. 点击编辑在弹出的 SQL 编辑框中输入对应函数，即可拥有参数传递的能力具体参考 [参数处理](/docs/%E5%8F%82%E6%95%B0%E4%BC%A0%E9%80%92.md)

```js
() => {
  return `SELECT * FROM sys_user where username = ${window.$glob.params.username}`;
};
```

!> SQL 语句输入框不只可以输入字符串，更可以写函数！！！
