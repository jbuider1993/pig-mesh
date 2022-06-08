## ① 链接外置数据库

默认情况使用 H2 作为内置数据存储, 如需链接其他类型数据库作为 datav 数据库存储

● 引入相关驱动包

● 配置 链接参数

!> 自动创建表 ， 支持常见的 mysql、Oracle 、sql server 、DB2 、 达梦

## ② MySQL 为例

- 引入驱动

```xml
<dependency>
  <groupId>mysql</groupId>
  <artifactId>mysql-connector-java</artifactId>
  <scope>runtime</scope>
</dependency>
```

- 配置数据库链接及方言

```
spring.datasource.url=jdbc:mysql://localhost:3306/datav?serverTimezone=GMT%2B8
spring.datasource.username=root
spring.datasource.password=root
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
```
