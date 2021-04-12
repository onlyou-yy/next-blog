import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import {Row,Col, Breadcrumb,Affix} from "antd";
import Author from "../components/Author";
import Advert from "../components/Advert";
import DetailedCss from "../styles/pages/detailed.module.css";
import {CalendarFilled,FolderFilled,FireFilled, FundTwoTone} from "@ant-design/icons";

import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import Tocify from "../components/tocify.tsx";
import {article} from "../api/apiMgr";
const Detailed = ()=>{
    let markdown='\n# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# 5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` \n var a=11; \n```';

    const tocify = new Tocify();
    const renderer = new marked.Renderer();
    
    renderer.heading = function(text,level,raw){
        const anchor = tocify.add(text,level);
        return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
    }

    marked.setOptions({
        renderer:renderer,
        gfm:true,
        pedantic:false,
        sanitize:false,
        tables:true,
        breaks:false,
        smartLists:true,
        highlight:function(code){
            return hljs.highlightAuto(code).value;
        }
    })

    const html = marked(markdown);

    return (
        <>
            <Head>
                <title>Detailed</title>
            </Head>
            <Header></Header>
            <Row className="commen-list" type="flex" justify="center">
                <Col className="commen-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                    <div>
                        <div className={DetailedCss["bread-div"]}>
                            <Breadcrumb>
                                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                                <Breadcrumb.Item><a href="/">视屏列表</a></Breadcrumb.Item>
                                <Breadcrumb.Item><a href="/">xxxx</a></Breadcrumb.Item>
                            </Breadcrumb>
                        </div>

                        <div>
                            <div className={DetailedCss["detailed-title"]}>
                                当前列表详情标题
                            </div>

                            <div className="list-icon center">
                                <span><CalendarFilled /> 2021-04-01</span>
                                <span><FolderFilled /> hello</span>
                                <span><FireFilled /> 111112</span>
                            </div>

                            <div className={DetailedCss["detailed-content"]}
                               dangerouslySetInnerHTML={{__html:html}} 
                            >
                            </div>
                        </div>
                    </div>
                </Col>

                <Col className="commen-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author></Author>
                    <Advert></Advert>
                    <Affix offsetTop={5}>
                        <div className="detailed-nav commen-box">
                            <div className="toc-list">
                                {tocify && tocify.render()}
                            </div>
                        </div>
                    </Affix>
                </Col>
            </Row>
        </>
    )
}

Detailed.getInitialProps = async (context) => {
    let id = context.query.id;
    const res = await article.getDetail(id);
    return {list:res.data.data};
}

export default Detailed;