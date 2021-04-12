'use strict'

module.exports = app => {
    const {router,controller} = app;
    router.get("/default/index",controller.default.home.index);
    router.get("/default/getArticleList",controller.default.home.getArticleList);
    router.get("/default/getArticleDetail/:id",controller.default.home.getArticleDetail);
    router.get("/default/getNavList",controller.default.home.getNavList);
    router.get("/default/getListByType/:typeId",controller.default.home.getListByType);
}