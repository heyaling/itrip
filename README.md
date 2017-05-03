## 环境

1. 下载安装 node

2. 安装 cnpm
```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

3. 下载安装git-bash

4. 生成密钥对
```
$ cd
$ ssh-keygen -t rsa
$ eval `ssh-agent -s`
$ ssh-add
```
> 步骤4命令必须在git-bash里执行


## 启动开发

1. 克隆代码
```
$ git clone git@github.com:heyaling/itrip.git
```

2. 安装依赖
```
$ cnpm install
```

3. 启动开发环境
```
$ npm start
```

