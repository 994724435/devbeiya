/*
Navicat MySQL Data Transfer

Source Server         : 本机
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : devreg

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-03-24 13:50:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `p_users`
-- ----------------------------
DROP TABLE IF EXISTS `p_users`;
CREATE TABLE `p_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  `enname` varchar(32) DEFAULT NULL,
  `tel` varchar(32) NOT NULL,
  `password` varchar(128) NOT NULL,
  `email` varchar(64) DEFAULT NULL,
  `qsplace` varchar(64) DEFAULT NULL,
  `qeplace` varchar(64) DEFAULT NULL,
  `qnumber` varchar(64) DEFAULT NULL,
  `qzhong` varchar(1) DEFAULT NULL,
  `qzhongplace` varchar(64) DEFAULT NULL,
  `qdt` date DEFAULT NULL,
  `qedt` date DEFAULT NULL,
  `fnumber` varchar(128) DEFAULT NULL,
  `fsplace` varchar(128) DEFAULT NULL,
  `feplace` varchar(123) DEFAULT NULL,
  `fzhong` varchar(1) DEFAULT NULL,
  `fzhongplace` varchar(64) DEFAULT NULL,
  `short` varchar(4) DEFAULT NULL,
  `addtime` datetime DEFAULT NULL,
  `updatetime` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of p_users
-- ----------------------------
INSERT INTO `p_users` VALUES ('1', '李海龙', 'lihailong', '18883287644', '1', '99@qq.com12', '重庆12', '四川12', '12345612', '否', 'hes12', '2019-03-03', '2019-03-23', '重庆花花公司12', '思忖12', '重庆12', '否', null, 'XS', '2019-03-21 21:43:20', '2019-03-24 13:03:34');
INSERT INTO `p_users` VALUES ('4', 'admin', 'li', '13649588123', '1', 'qw@qq.com', '重庆1', '四川1', '11111', '是', 'hes12', '2019-03-01', '2019-03-24', '222222', '思忖1', '重庆12', '是', null, 'XS', '2019-03-24 13:37:28', '2019-03-24 13:37:28');
