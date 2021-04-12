import React, { setState } from "react";
import Head from "next/head";
import { Row, Col, List } from "antd";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import { article } from "../api/apiMgr";
import ListCss from "../styles/pages/list.module.css";
import {CalendarFilled,FolderFilled,FireFilled} from "@ant-design/icons";

const Home = ({ list }) => {
  cosnt[listData, setListData] = setState(list);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="commen-main" type="flex" justify="center">
        <Col className="commen-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
            header={<div>new Log</div>}
            itemLayout="vertical"
            dataSource={listData}
            renderItem={
              item => (
                <List.Item>
                  <div className={ListCss["list-title"]}>
                    <Link href={{ pathname: "/detailed", query: { id: item.id } }}>
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
          <Author></Author>
          <Advert></Advert>
        </Col>
      </Row>
      <Footer />
    </>
  )
}

Home.getInitialProps = async () => {
  const res = await article.getList();
  let list = res.data.data;
  return { list };
}

export default Home;