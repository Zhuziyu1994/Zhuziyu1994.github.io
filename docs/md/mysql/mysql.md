# Mysql相关
***
[[toc]]
***
## mysql的安装
::: tip 相关资料下载链接
 [百度云](https://pan.baidu.com/s/179rmvuDgh6erFaZ2pZKyug?pwd=8888)   [https://pan.baidu.com/s/179rmvuDgh6erFaZ2pZKyug?pwd=8888](https://pan.baidu.com/s/179rmvuDgh6erFaZ2pZKyug?pwd=8888)  提取码：8888 
 
 安装什么版本? 5.7版本比较常用,  当然安装8.0版本也是可以的，在使用上区别不是很大。
:::

***
## 同学在学习mysql常提的问题
### 查询的时候为什么某个字段为空
::: tip 很多同学提问为什么查询数据库，明明有这个字段查询出来却是空
绝大部分是因为字段名不一样，映射失败<br>
小部分是因为查错库了
:::
> 示例：

表结构如下：
```mysql{3}
CREATE TABLE `furn` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `img_path` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
```
JavaBean 如下
```java{8,9,28}
package com.hspedu.furns.entity;

import java.math.BigDecimal;

public class Furn {
    
    private Integer id;
    //为什么数据库中有值，但是imgPath查询出来为空
    private String imgPath;

    public Furn() {
    }

  
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public String getImgPath() {
        return imgPath;
    }

    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }

}
```
SQL 如下
```mysql
SELECT * from furn;
```
这样查询发现imgPath字段查询为空<br><br>
问题是因为数据库的***img_path***与java中的***imgPath***字段名不同，无法映射，需要使用别名。<br>
修改sql如下：
```mysql
select id,img_path as imgPath from furn;
```

***
### mysql的datetime，在java中用Date类型接收 为什么报错java.sql.SQLException: Cannot set createTime: incompatible types？
::: tip 这个问题出现在使用mysql-connector-java-8.0.jar  mysql8.0中的datetime在java中映射为LocalDateTime
解决：修改datetime为timestamp
如果使用mybatis等ORM框架，是可以兼容所有时间类型的。
:::