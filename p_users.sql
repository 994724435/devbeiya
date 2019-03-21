/*
Navicat MySQL Data Transfer

Source Server         : 本机
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : devreg

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-03-21 23:05:29
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `p_users`
-- ----------------------------
DROP TABLE IF EXISTS `p_users`;
CREATE TABLE `p_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  `tel` varchar(32) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(64) DEFAULT NULL,
  `splace` varchar(64) DEFAULT NULL,
  `eplace` varchar(64) DEFAULT NULL,
  `hangban` varchar(32) DEFAULT NULL,
  `number` varchar(64) DEFAULT NULL,
  `begindt` date DEFAULT NULL,
  `enddt` date DEFAULT NULL,
  `campany` varchar(255) DEFAULT NULL,
  `addtime` datetime DEFAULT NULL,
  `updatetime` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of p_users
-- ----------------------------
INSERT INTO `p_users` VALUES ('1', '李海龙', '18883287644', '1', '99@qq.com', '重庆', '四川', '其他', '123456', '2019-03-01', '2019-03-21', '重庆花花公司', '2019-03-21 21:43:20', '2019-03-21 21:43:20');
INSERT INTO `p_users` VALUES ('2', 'admin', '13649588123', '1', '324232@qq.com', '重庆2', '四川2', '其他', '83632', '2019-03-02', '2019-03-29', '重庆花花公司22', '2019-03-21 21:45:15', '2019-03-21 22:07:27');
