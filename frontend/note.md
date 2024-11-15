1. npm install -g create-react-app
> 全局安装create-react-app用来创建react应用
2. npx create-react-app .
> 在当前目录下创建react应用
3. npm start
> 实际上会执行当前目录的package.json里面的 script.start这个字段  
> 在这个react项目里也就是react-scripts start  
> react-scripts 是来自 create-react-app 启动包的一组脚本。 
> react-scripts start 会在本地启动一个服务器并监听一个端口，通过 webpack-dev-server 本地启动一个node服务，把react生成的html，css，js放在上面并响应请求。  
> 所以这个服务是用来作为web服务器？存了前端的逻辑响应给浏览器，然后浏览器解析响应的内容并执行？执行时跟真正的后端服务器进行连接？