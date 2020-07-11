#制定node镜像的版本
FROM registry.cn-beijing.aliyuncs.com/rdmix/alinode:v0.0.1
# FROM keymetrics/pm2:latest-alpine
#声明作者
MAINTAINER Hank
#移动当前目录下面的文件到app目录下
COPY . /app/
#进入到app目录下面，类似cd
WORKDIR /app
#安装依赖
RUN node --version
RUN npm install -g yarn --registry https://registry.npm.taobao.org 
RUN yarn --registry http://vd.shudong.wang
#对外暴露的端口
EXPOSE 3000
#环境变量
ENV NODE_ENV production

#程序启动脚本
CMD [ "pm2-runtime", "start", "ecosystem.config.js", "--only","appview","--env","prod"]
