import React,{useState} from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import {Row,Col,List,Breadcrumb} from "antd";
import {CalendarFilled,FolderFilled,FireFilled} from "@ant-design/icons";
import ListCss from "../styles/pages/list.module.css";
import Footer from "../components/Footer";
import serverPaths from "../config/apiUrl";
import { article } from "../api/apiMgr";

const MyList = ({list})=>{
    const [listData,setListData] = useState(list);
    return (
        <>
            <Head>
                <title>List</title>
            </Head>
            <Header></Header>
            <Row className="commen-main" type="flex" justify="center">
                <Col className="commen-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                    <Breadcrumb>
                        <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                        <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                    </Breadcrumb>
                    <List
                        header={<div>new Log</div>}
                        itemLayout="vertical"
                        dataSource={listData}
                        renderItem={
                            item=>(
                                <List.Item>
                                    <div className={ListCss["list-title"]}>
                                        <Link href={{pathname:"/detailed",query:{id:item.id}}}>
                                            <a>{item.title}</a>
                                        </Link>
                                    </div>
                                    <div className={ListCss["list-icon"]}>
                                        <span><CalendarFilled /> {item.addTime}</span>
                                        <span><FolderFilled /> {item.typeName}</span>
                                        <span><FireFilled /> {item.viewCount}</span>
                                    </div>
                                    <div className={ListCss["list-content"]}>{item.introduce}</div>
                                </List.Item>
                            )
                        }
                    />
                </Col>

                <Col className="commen-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    right;
                </Col>
            </Row>
            <Footer />
        </>
    )
}

MyList.getInitialProps = async () => {
  const res = await article.getList();
  return {list:res.data.data};
}

export default MyList