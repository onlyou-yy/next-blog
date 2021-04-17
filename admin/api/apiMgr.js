import axios from "axios";
import serverPaths from "../config/apiUrl";

const articleApi = {};
articleApi.getList = () => axios(serverPaths.getArticleList);
articleApi.getDetail = (id) => axios(serverPaths.getArticleDetail + id);
articleApi.getNavList = () => axios(serverPaths.getNavList);
articleApi.getListByType = (id) => axios(serverPaths.getListByType, id);

export const article = articleApi;

export default {
    article,
}