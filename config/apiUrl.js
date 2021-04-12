const clientBaseUrl = "http://localhost:7001/default";
const adminBaseUrl = "http://localhost:7001/admin";

const serverPaths = {
    getArticleList: clientBaseUrl + "/getArticleList",
    getArticleDetail: clientBaseUrl + "/getArticleDetail/"
}

export default serverPaths;