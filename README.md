This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


Nextjs 在9.5之后就不需要使用`@zeit/next-css`进行样式的导入处理了，可以直接使用`import "xxx.css"`进行导入。


Global CSS cannot be imported from files other than your Custom <App>. Please move all global CSS imports to pages\_app.js. Or convert the import to Component-Level CSS (CSS Modules).

这个错误是因为Nextjs 放弃的队文件中的全局css的支持，会把文件名中没有`module`的css文件如`header.css`当做是全局的css文件处理，而全局样式文件只能在_app.js中导入，如果想要使用局部自定义的样式文件就需要命名成`header.module.css`。对于模块里面的类可以使用`import header from "./header.module.css`进行引入，使用类样式可以`className={header["header-logo"]}`;

antd 在4.1版本之后不会自带Icon库，需要安装`@ant-design/icons`库，进行模块导入使用`import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';`


源文本中存在无法识别的标记。
所在位置 行:1 字符: 7
+ npm i  <<<< @ant-design/icons -S
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecor 
   dException
    + FullyQualifiedErrorId : UnrecognizedToken

方法一：
使用cmd 执行该句可以。
切换方法代码
1.按Windows+R快捷键打开运行窗口。

2.输入regedit，按下回车键即可进入注册表编辑器。
HKEY_CLASSES_ROOT\Directory\Background\shell\cmd\command
找到此目录更改数据
cmd.exe /s /k pushd “%V”
C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -NoExit cd %V
两种cmd 和powershell的切换方式

方法二：
`npm i "@ant-design/icons" -S`