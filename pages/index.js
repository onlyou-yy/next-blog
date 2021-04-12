import React from "react";
import Head from "next/head";
import {Row,Col} from "antd";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import axios from "axios";

const Home = () => {
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
    <Header />
    <Row className="commen-main" type="flex" justify="center">
      <Col className="commen-left" xs={24} sm={24} md={16} lg={18} xl={14}>
        left
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

export default Home;