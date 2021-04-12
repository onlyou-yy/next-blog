import axios from "axios";
import serverPaths from "../config/apiUrl";

const articleApi = {};
articleApi.getList = () => axios(serverPaths.getArticleList);
articleApi.getDetail = (id) => axios(serverPaths.getArticleDetail + id);

export const article = articleApi;

export default {
    article,
}