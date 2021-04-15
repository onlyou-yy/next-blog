'use strict';

const { Controller } = require("egg");

class HomeController extends Controller{
    async index(){
        let result = await this.app.mysql.get("blog_content",{});
        this.ctx.body = result;
    }

    /**获取文章列表 */
    async getArticleList(){
        let sql = `
        SELECT 
            a.id as id,
            a.title as title,
            a.introduce as introduce,
            FROM_UNIXTIME(a.addTime,'%Y-%m-%d %H:%i:%s') as addTime,
            a.viewCount as viewCount,
            b.typeName as typeName  
        FROM blog_article a LEFT JOIN blog_type b ON a.typeId = b.id;
        `;
        const results = await this.app.mysql.query(sql);
        this.ctx.body = {data:results}
    }

    /**根据文章id，获取文章详情数据 */
    async getArticleDetail(){
        let id = this.ctx.params.id;
        let sql = `
        SELECT 
            a.id as id,
            a.title as title,
            a.introduce as introduce,
            a.content as content,
            FROM_UNIXTIME(a.addTime,'%Y-%m-%d %H:%i:%s') as addTime,
            a.viewCount as viewCount,
            b.typeName as typeName,
            b.id as typeId 
        FROM blog_article a LEFT JOIN blog_type b ON a.typeId = b.id
        WHERE a.id = ${id};
        `;
        const results = await this.app.mysql.query(sql);
        this.ctx.body = {data:results}
    }

    /**获取导航栏数据 */
    async getNavList(){
        const results = await this.app.mysql.select("blog_type",{});
        this.ctx.body = {data:results};
    }

    /**根据类型id，获取文章列表 */
    async getListByType(){
        let typeId = this.ctx.params.id;
        let sql = `
        SELECT 
            a.id as id,
            a.title as title,
            a.introduce as introduce,
            FROM_UNIXTIME(a.addTime,'%Y-%m-%d %H:%i:%s') as addTime,
            a.viewCount as viewCount,
            b.typeName as typeName  
        FROM blog_article a LEFT JOIN blog_type b ON a.typeId = b.id
        WHERE b.id = ${typeId};
        `;
        const results = await this.app.mysql.query(sql);
        this.ctx.body = {data:results};
    }
}

module.exports = HomeController