import ReactMarkDown from "react-markdown";
import gfm from "remark-gfm";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import CodeBlock from "./CodeBlock";

const MarkDown = ({source}) => (
    <ReactMarkDown 
    plugins={[gfm]} 
    children={source} 
    allowDangerousHtml={false} 
    renderer={{code:CodeBlock}} 
    />
)

export default MarkDown;
