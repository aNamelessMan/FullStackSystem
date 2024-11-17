# 教程里用的缺失了git，会报"exec: "git": executable file not found in $PATH" https://github.com/docker-library/golang/issues/209
FROM golang:1.12
RUN mkdir /app
ADD . /app/
WORKDIR /app
RUN go mod download
# 教程里./...会报错"go build: cannot use -o with multiple packages"
RUN go build -o main .
CMD ["/app/main"]