const base = {
    get() {
        return {
            url : "http://localhost:8080/jiajushangcheng/",
            name: "jiajushangcheng",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/jiajushangcheng/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "家具商城"
        } 
    }
}
export default base
