import {Avatar,Divider} from "antd";
import AuthorCss from "../styles/components/author.module.css";
import {GithubOutlined,QqOutlined,WechatOutlined} from "@ant-design/icons";

const Author = () => {
    return (
        <div className={[AuthorCss["author-div"],"commen-box"].join(" ")}>
            <div> <Avatar size={100} src="https://picsum.photos/200/300"></Avatar> </div>
            <div className={AuthorCss["author-introduction"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laborum dolores ipsa expedita vero commodi repellat architecto inventore, optio corporis nesciunt quibusdam, perspiciatis officiis facere est consequatur doloribus sapiente id?
                <Divider>my lorem</Divider>
                <Avatar size={28} icon={<GithubOutlined />} className={AuthorCss["account"]}></Avatar>
                <Avatar size={28} icon={<QqOutlined />} className={AuthorCss["account"]}></Avatar>
                <Avatar size={28} icon={<WechatOutlined />} className={AuthorCss["account"]}></Avatar>
            </div>
        </div>
    )
}

export default Author;