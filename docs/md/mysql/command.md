# Mysql常用命令
###### 连接命令： 
```mysql
mysql -uroot -proot -h127.0.0.1 -P3306 
```

###### 创建用户
```mysql
create user 'usertest'@'%' identified by '123456Aa';
// mysql 8.0 以上想要远程连接还需要修改密码规则
ALTER USER 'usertest'@'%' IDENTIFIED WITH mysql_native_password BY '123456Aa';

```

###### 授权
```mysql
grant all privileges on hsp_db02 to 'usertest'@'%';
flush privileges;
```