# Host: localhost  (Version: 5.7.26)
# Date: 2021-04-09 20:54:12
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "blog_article"
#

DROP TABLE IF EXISTS `blog_article`;
CREATE TABLE `blog_article` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `typeId` int(11) NOT NULL DEFAULT '0',
  `title` varchar(255) NOT NULL DEFAULT '',
  `content` text NOT NULL,
  `introduce` text,
  `addTime` int(11) DEFAULT NULL,
  `viewCount` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "blog_article"
#

/*!40000 ALTER TABLE `blog_article` DISABLE KEYS */;
INSERT INTO `blog_article` VALUES (1,1,'JavaScript 教程','JavaScript 是一种高级编程语言，通过解释执行，是一门动态类型，面向对象（基于原型）的解释型语言。它已经由ECMA（欧洲电脑制造商协会）通过 ECMAScript 实现语言的标准化。它被世界上的绝大多数网站所使用，也被世界主流浏览器（ Chrome、IE、FireFox、Safari、Opera ）支持。JavaScript 是一门基于原型、函数先行的语言，是一门多范式的语言，它支持面向对象编程，命令式编程，以及函数式编程。它提供语法来操控文本、数组、日期以及正则表达式等，不支持 I/O，比如网络、存储和图形等，但这些都可以由它的宿主环境提供支持。JavaScript 是一种高级编程语言，通过解释执行，是一门动态类型，面向对象（基于原型）的解释型语言。它已经由ECMA（欧洲电脑制造商协会）通过 ECMAScript 实现语言的标准化。它被世界上的绝大多数网站所使用，也被世界主流浏览器（ Chrome、IE、FireFox、Safari、Opera ）支持。JavaScript 是一门基于原型、函数先行的语言，是一门多范式的语言，它支持面向对象编程，命令式编程，以及函数式编程。它提供语法来操控文本、数组、日期以及正则表达式等，不支持 I/O，比如网络、存储和图形等，但这些都可以由它的宿主环境提供支持。JavaScript 是一种高级编程语言，通过解释执行，是一门动态类型，面向对象（基于原型）的解释型语言。它已经由ECMA（欧洲电脑制造商协会）通过 ECMAScript 实现语言的标准化。它被世界上的绝大多数网站所使用，也被世界主流浏览器（ Chrome、IE、FireFox、Safari、Opera ）支持。JavaScript 是一门基于原型、函数先行的语言，是一门多范式的语言，它支持面向对象编程，命令式编程，以及函数式编程。它提供语法来操控文本、数组、日期以及正则表达式等，不支持 I/O，比如网络、存储和图形等，但这些都可以由它的宿主环境提供支持。','JavaScript 是一种高级编程语言，通过解释执行，是一门动态类型，面向对象（基于原型）的解释型语言。它已经由ECMA（欧洲电脑制造商协会）通过 ECMAScript 实现语言的标准化。它被世界上的绝大多数网站所使用，也被世界主流浏览器（ Chrome、IE、FireFox、Safari、Opera ）支持。JavaScript 是一门基于原型、函数先行的语言，是一门多范式的语言，它支持面向对象编程，命令式编程，以及函数式编程。它提供语法来操控文本、数组、日期以及正则表达式等，不支持 I/O，比如网络、存储和图形等，但这些都可以由它的宿主环境提供支持。',NULL,0),(2,2,'java叫床','sdfasdfsadfsadf','asdfasdf阿斯顿发斯蒂芬是短发',NULL,0);
/*!40000 ALTER TABLE `blog_article` ENABLE KEYS */;

#
# Structure for table "blog_content"
#

DROP TABLE IF EXISTS `blog_content`;
CREATE TABLE `blog_content` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `introduce` text,
  `content` text,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "blog_content"
#

/*!40000 ALTER TABLE `blog_content` DISABLE KEYS */;
INSERT INTO `blog_content` VALUES (1,'测试','测试类型','测试简介测试内容测试内容测试内','测试内容测试内容测试内容测试内容测试内容测试内容\n测试内容测试内容测试内容测试内容测试内容测试内容\n测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容\n测试内容测试内容测试内容测试内容测试内容测试内容测试内容\n测试内容测试内容测试内容测试内容测试内容');
/*!40000 ALTER TABLE `blog_content` ENABLE KEYS */;

#
# Structure for table "blog_type"
#

DROP TABLE IF EXISTS `blog_type`;
CREATE TABLE `blog_type` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `typeName` varchar(255) NOT NULL DEFAULT '',
  `orderNum` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "blog_type"
#

/*!40000 ALTER TABLE `blog_type` DISABLE KEYS */;
INSERT INTO `blog_type` VALUES (1,'test type one',1),(2,'test type two',2),(3,'test type three',3);
/*!40000 ALTER TABLE `blog_type` ENABLE KEYS */;
