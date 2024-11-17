1. Why Dockerizing?
> To have a standard way of deploying our application using containerization technology.  
> You are able to deploy your docker-based application to any server or platform that supports Docker.  
> This means that, regardless of where you are deploying to, you can start up your application with a single command.  
> Not only that, it eradicates the “it works on my machine” as, within your Dockerfile, you dictate the exact environment that your application needs in order to start up.
2. No Docker for the Frontend?
> At this point, you may be wondering why we aren’t doing the same for our frontend/ application? The reason for this is that we are intending to deploy this frontend app to the likes of an AWS S3 bucket.
> We don’t need anything fancy serving our frontend when we go to production, we just need something that will be able to reliably serve our built frontend files.
3. 具体怎么用
   1. 在backend文件夹下创建Dockerfile并编写镜像构建逻辑
   2. docker build -t backend .
      1. 在backend文件夹下执行该命令用于构建名为backend的image（镜像）
   3. docker run -it -p 8080:8080 backend
      1. 启动backend镜像并设置端口转发
![alt text](https://i-blog.csdnimg.cn/direct/cac0ae53f25e4285a6d96c456e3e42d3.png)