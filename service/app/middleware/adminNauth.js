module.exports = options => {
    return async function adminNauth(ctx,next){
        if(ctx.session.openId){
            await next()
        }else{
            ctx.body = {data:"没有登录"}
        }
    }
}