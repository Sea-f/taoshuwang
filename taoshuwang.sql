/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50520
 Source Host           : localhost:3306
 Source Schema         : taoshuwang

 Target Server Type    : MySQL
 Target Server Version : 50520
 File Encoding         : 65001

 Date: 14/10/2019 01:00:26
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tsw-login
-- ----------------------------
DROP TABLE IF EXISTS `tsw-login`;
CREATE TABLE `tsw-login`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `username` varchar(18) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(18) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户的密码',
  `e-mail` varchar(100) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf16 COLLATE = utf16_general_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;
