import React,{useState} from 'react';
import marked from "marked";
import "../static/css/addArticle.css";
import {Row,Col,Input,Select,Button,DatePicker} from "antd";

const {Option} = Select;
const {TextArea} = Input;

const AddArticle = () => {
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
                                />
                        </Col>
                        <Col span={12}>
                            <div className="show-html">

                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row gutter={[10,10]}>
                        <Col span={24}>
                            <Button size="large" onClick={saveArticle}>暂存文章</Button>
                            <Button type="primary" size="large" onClick={publishArticle}>发布文章</Button>
                        </Col>
                        <Col span={24}>
                            <TextArea rows={4} placeholder="文章简介"></TextArea>
                            <div className="introduce-html"></div>
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