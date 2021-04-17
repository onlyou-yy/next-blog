## Less 预编译器

less 是 css 的一种预编译语言，扩展了css的方法以及功能，如变量，方法，函数等特性。使用 less 编写 css 样式可以增强开发项目的效率以及项目的可维护性。

在 less 中css 是可以像dom那样，是有层级的，如下，`#warp .inner`虽然也可以表示层级，但是层级还是不太明显的，如果样式或者类名，id名一多可能就会搞混掉 

![image-20210416160820878](Less/image-20210416160820878.png)

所幸的是在 less 中你可以这样子写

```less
#wrap{
    ...
    
    .inner{
        ...
    }
}
```

这样子就和 html 的 dom 结构一样了，有时候你可以都不用在去看 html 就可以知道他们的结构了。



## Less 安装及基本使用

### 使用node安装

less 的运行环境是 node ，使用 less 需要在node 环境下进行。所以想要使用 less 需要先安装

```she
npm install less -g
```

安装之后可以使用 `lessc`命令将`.less`文件编译成`css`文件，之后我们可以直接使用编译出来的文件，在html上。

```shell
lessc input.less output.css
```

将`input.less`编译后输出到`output.css`



### 直接使用 CDN 引入后使用

除了安装后使用以外，还可以使用 CDN 引入。

```html
<script src="less/less.min.js"></script>
```

但是需要注意的是 less 必须在 `<style>`之后引入，并且`<style type="text/less">`这样 less 才能定位获取到需要编译的样式。



### 注释

在less中有两种注释方式可以选择`//`和`/** */`，两种注释的区别在第一种不会被编译到`.css` 文件中，第二种会

### 变量

在 less 中可以使用 `@` 符号定义变量，变量处理可以用做属性值以外还可以用做 属性名 、类名、id名、url。

```less
@width:10px;
@height:@width + 10px;
@color:skyblue;
@id:header;
@myClass:my-class;
@myAttr:border-radius;
@url:"../img";
@themes: "../../src/themes";
@siez:size;

@import "@{themes}/tidal-wave.less";
#@{id}{
    width:@width;
    height:@height;
    background:@color;
}

.@{myClass}{
    width:@width * 2;
    height:@height * 2;
    background:url("@{url}/img.jpg");
    @{myAttr}:10px;
    font-@{size}:18px;
}
```

编译后得到的文件就会是

```css
@import "../../src/themes/tidal-wave.less";
#header {
  width: 10px;
  height: 20px;
  background: skyblue;
}
.my-class {
  width: 20px;
  height: 40px;
  background:url("../img/img.jpg");
  border-radius: 10px;
  font-size:18px;
}
```

**需要注意**的是 less 采用的延迟加载的模式，所以在同一级域中如果有多个同名的变量的话会使用最后定义的那个变量的值，也因如此，变量无需先定义后使用。

```less
@var: 0;
.class {
  @var: 1;
  .brass {
    @var: 2;
    three: @var;
    @var: 3;
  }
  one: @var;
}
```

编译输出的会是

```css
.class {
  one: 1;
}
.class .brass {
  three: 3;
}
```

在 less 3.5 的版本中变量可以支持 map 类型数据了

```less
@map:{
   color:red;
   border-radius:10px;
}
.class {
  color:@map[color];
  border-radius:@map[border-radius];
}
```



### 混合

在 less 中的混合（mixin），更加像是对样式的引用。使用混合可以避免我们写一些重复样式

```less
.center{
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
#pink{
    color:pink;
}
.my-inner(){
    .inner{
        color:red;
    }
}

.wrap{
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: inherit;
    .center();
    #pink();
    .my-inner();
}
```

输出为

```css
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#pink {
  color: pink;
}
.wrap {
  width: 100px;
  height: 100px;
  background-color: red;
  border-radius: inherit;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: pink;
}
.wrap .inner {
  color: red;
}
```

从上面中可看到混合不仅能混合属性，也可以混合样式选择器，使用只需要在类样式名`.center`或者id样式名`#pink`后面加个`()`那么这个样式就会被混合到样式中去。但是这种方式会将`.center{..}`和`#pink{..}`这两个样式也会被编译到css中，如果不想要被编译进去可以改为`.center(){..} #pink(){..}`，这样less就会认为这是一个mixin而不是一个样式。

#### 带参数的混合

混合还可以带参数，并且有匹配模式的区分，使用带参数的混合可以极大降低代码的重复性,如创建四个方向的箭头

```less
.triangle(@_;@w:50;@c:red){
    width:0px;
    height:0px;
    overflow:hiddle;
}
.triangle(left;@w:50;@c:red){
    border-width:@w;
    border-style:dashed solid dashed dashed;
    border-color:transparent @c transparent transparent;
}
.triangle(right;@w:50;@c:blue){
    border-width:@w;
    border-style:dashed dashed dashed solid;
    border-color:transparent transparent transparent @c;
}

.my-arrow-left{
    .triangle(left, 40,black);
}

.my-arrow-right{
    .triangle(right);
}
```

编译后会有

```css
.my-arrow-left {
  width: 0px;
  height: 0px;
  overflow: hiddle;
  border-width: 40;
  border-style: dashed solid dashed dashed;
  border-color: transparent black transparent transparent;
}
.my-arrow-right {
  width: 0px;
  height: 0px;
  overflow: hiddle;
  border-width: 50;
  border-style: dashed dashed dashed solid;
  border-color: transparent transparent transparent blue;
}

```

mixin 在传参数的说可以传递多个并且可以设置默认值，如果要开启 匹配模式的话第一个参数就是模式名，之后可以通过这个 模式名来定位，如果多个相同的名字的混合的话会全部引入，合并但不会覆盖。所以公共样式和默认样式的 mixin 一定要放在前面。

### 嵌套

less 提供了一种类似于html标签层级结构的嵌套模板，使得css的结构更加清晰明了。如

```less
#header {
  color: black;
  .nav {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```

这样子默认解析出来的就会是 `#header .nav`和`#header .logo`但是如果想要表示`> ~ +`的关系或者`:hover`等伪类的话就无法实现了，这时候可以使用`&`来表示父级，这里表示的父级的完整关系。

```less
#header {
  color: black;
  .nav {
    font-size: 12px;
      &:hover {
        font-size: 16px;
      }
  }
}
```

这里的`&`表示的是`#header .nav`。

### 转义

转义（Escaping）允许你使用任意字符串作为属性或变量值。任何 `~"anything"` 或 `~'anything'` 形式的内容都将按原样输出。

```less
@min768: ~"(min-width: 768px)";
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}
```

编译为

```css
@media (min-width: 768px) {
  .element {
    font-size: 1.2rem;
  }
}
```







### 响应式布局核心：媒体查询 `@media`

```css
@media only|not 媒体类型 and|only|not (带条件的媒体属性1) and (带条件的媒体属性2){  }
```

#### 媒体类型

+ all：全部
+ screen：彩色屏幕
+ print：打印机
+ ....

#### 媒体属性

+ width：浏览器的窗口尺寸
+ device-width：设备尺寸
+ device-pixel-ratio(必须加 webkit 前缀)：像素比

上面的三个属性都可以将 min 或者 max 前缀，如`min-width max-width`

+ orientation：横竖屏切换 landscape(横屏) / portrait(竖屏)

#### 关键字

+ and：用于连接两个条件
+ only
+ not：取反