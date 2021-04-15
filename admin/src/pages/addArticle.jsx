import React,{useState} from 'react';
import marked from "marked";
import "../static/css/addArticle.css";
import {Row,Col,Input,Select,Button,DatePicker} from "antd";

const {Option} = Select;
const {TextArea} = Input;

const AddArticle = () => {
    
    const [articleTitle,setArticleTitle] = useState('')   //文章标题
    const [articleContent , setArticleContent] = useState('')  //markdown的编辑内容
    const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
    const [introducemd,setIntroducemd] = useState()            //简介的markdown内容
    const [introducehtml,setIntroducehtml] = useState('等待编辑') //简介的html内容
    const [showDate,setShowDate] = useState()   //发布日期
    const [updateDate,setUpdateDate] = useState() //修改日志的日期
    const [typeInfo ,setTypeInfo] = useState([]) // 文章类别信息
    const [selectedType,setSelectType] = useState(1) //选择的文章类别

    marked.setOptions({
        renderer: marked.Renderer(),
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
    });

    const changeContent = (e) => {
        setArticleContent(e.target.value);
        let html = marked(e.target.value);
        setMarkdownContent(html);
    }

    const changeIntroduce = (e) => {
        setIntroducemd(e.target.value);
        let html = marked(e.target.value);
        setIntroducehtml(html);
    }
    const publishArticle = () => {};
    const saveArticle = () => {};
    return (
        <div className="">
            <Row gutter={5}>
                <Col span={18}>
                    <Row justify="space-between">
                        <Col span={20}>
                            <Input placeholder="博客标题" size="large"></Input>
                        </Col>
                        <Col span={4}>
                            <Select defaultValue="Sign up" size="large">
                                <Option value="sign up">视频教程</Option>
                            </Select>
                        </Col>
                    </Row>
                    <br />
                    <Row gutter={10} justify="space-between">
                        <Col span={12}>
                            <TextArea 
                                className="markdown-content" 
                                rows={35}  
                                placeholder="文章内容"
                                onChange={changeContent}
                                value={articleContent}
                                onPressEnter={changeContent}
                                />
                        </Col>
                        <Col span={12}>
                            <div className="show-html" dangerouslySetInnerHTML={{__html:markdownContent}}></div>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row gutter={[0,10]}>
                        <Col span={24}>
                            <Button size="large" onClick={saveArticle}>暂存文章</Button>
                            <Button type="primary" size="large" onClick={publishArticle}>发布文章</Button>
                        </Col>
                        <Col span={24}>
                            <TextArea rows={4} placeholder="文章简介"
                                onChange={changeIntroduce}
                                value={introducemd}
                                onPressEnter={changeIntroduce}
                            ></TextArea>
                        </Col>
                        <Col span={24}>
                            <div className="introduce-html" dangerouslySetInnerHTML={{__html:introducehtml}}></div>
                        </Col>
                        <Col span={12}>
                            <div className="date-select">
                                <DatePicker
                                    placeholder="发布日期"
                                    size="large"  
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row gutter={5}>
                <Col span={18}></Col>
                <Col span={6}></Col>
            </Row>
        </div>
    )
}

export default AddArticle;