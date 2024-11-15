1. go mod init github.com/yourusername/myapp
    > GO111MODULE=on 启用go module  
    > 执行 go mod init命令的时候加上模块的路径。典型的模块路径是代码所在的资料库。  
    > 运行 go mod init 命令会在项目的根目录下生成一个 go.mod 文件。该文件包含了模块信息和依赖信息
    > 跟随 go.mod 文件一起被创建的还有 go.sum 文件。该文件包含依赖模块的校验和。保证下载的模块的完整性。
2. go run main.go
    > 编译并运行main.go
3. go get github.com/xxx/xxapp
    > 自动下载并安装包及其依赖项