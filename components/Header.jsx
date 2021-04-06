import React from "react";
import HeaderCss from "../styles/components/header.module.css";
import {Row,Col,Menu} from "antd";
import { HomeOutlined } from "@ant-design/icons";
const Header = () => {
    return (
        <div className={HeaderCss.header}>
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className={HeaderCss["header-logo"]}>onlycode</span>
                    <span className={HeaderCss["header-txt"]}>like coding,more like live</span>
                </Col>

                <Col className={HeaderCss["menu-div"]} xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal">
                        <Menu.Item key="home">
                            <HomeOutlined />
                            首页
                        </Menu.Item>
                        <Menu.Item key="video">
                            <HomeOutlined />
                            视频
                        </Menu.Item>
                        <Menu.Item key="life">
                            <HomeOutlined />
                            生活
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header;