'use strict';

const { Controller } = require("egg");

class HomeController extends Controller{
    async index(){
        let result = await this.app.mysql.get("blog_content",{});
        this.ctx.body = result;
    }

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
}

module.exports = HomeController