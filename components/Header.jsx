import React，{useEffect,useState} from "react";
import Router from "next/router";
import HeaderCss from "../styles/components/header.module.css";
import {Row,Col,Menu} from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import {article} from "../api/apiMgr";

const Header = () => {
    const [navArray,setNavArray] = useState([]);
    useEffect(()=>{
        let res = await article.getNavList();
        let nav = res.data.data;
        setNavArray(nav);
    },[])
    const handleClick = (e) => {
        if(e.key == 0){
            Router.push("/index");
        }else{
            Router.push("/list?id=" + e.key);
        }
    }
    return (
        <div className={HeaderCss.header}>
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className={HeaderCss["header-logo"]}>onlycode</span>
                    <span className={HeaderCss["header-txt"]}>like coding,more like live</span>
                </Col>

                <Col className={HeaderCss["menu-div"]} xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal" onClick={handleClick}>
                        <Menu.Item key="0">
                            <HomeOutlined />
                            首页
                        </Menu.Item>
                        {navArray.map(item=>{
                            return (
                                <Menu.Item key={item.id}>
                                    <HomeOutlined />
                                    {item.typeName}
                                </Menu.Item>
                            )
                        })}
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header;