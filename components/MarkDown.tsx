import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import Tocify from "./tocify";

export default class MarkDown{

    public tocify:Tocify;
    public marked:marked;
    public markedRender:marked.Renderer;

    /**
     * 
     * @param getTocify 是否获取章节导航
     */
    constructor(getTocify:boolean = false,options:any){
        this.createTocify(getTocify);
        this.createMarked(options);
    }

    /**
     * 创建导航
     * @param getTocify 是否获取章节导航
     */
    private createTocify(getTocify:boolean):void{
        getTocify && (this.tocify = new Tocify());
    }

    /**创建marked对象
     * @param options 配置
     */
    private createMarked(options?:any):void{
        this.markedRender = new marked.Renderer();
        if(this.tocify){
            this.markedRender.heading = (text,level,raw) => {
                const anchor = this.tocify.add(text,level);
                return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
            }
        }

        let defaultConfig = {
            renderer:this.markedRender,
            gfm:true,
            pedantic:false,
            sanitize:false,
            tables:true,
            breaks:false,
            smartLists:true,
            highlight:function(code){
                return hljs.highlightAuto(code).value;
            }
        }
        let option = options || defaultConfig;

        this.marked = marked;
        this.marked.setOptions(option);
    }

    /**
     * 创建 html 节点
     * @param markStr markdown字符串
     * @param styleClass 样式类
     * @return HTMLElement
     */
    public createHtml(markStr:string,styleClass:any = ""):any{
        let html = markStr ? this.marked(markStr) : "";
        return (
            <div className={styleClass}
                dangerouslySetInnerHTML={{__html:html}}
            >
            </div>
        )
    }
}