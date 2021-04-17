'use strict'

module.exports = app => {
    const {router,controller} = app;
    let adminNauth = app.middleware.adminNauth();
    router.get("/admin/index",controller.admin.main.index);
    router.get("/admin/checkLogin",controller.admin.main.checkLogin);
    router.get("/admin/getBlogType",adminNauth,controller.admin.main.getBlogType);
}