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

 Date: 16/10/2019 19:00:13
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for index_nav_main
-- ----------------------------
DROP TABLE IF EXISTS `index_nav_main`;
CREATE TABLE `index_nav_main`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of index_nav_main
-- ----------------------------
INSERT INTO `index_nav_main` VALUES (1, '文学');
INSERT INTO `index_nav_main` VALUES (2, '小说');
INSERT INTO `index_nav_main` VALUES (3, '传记');
INSERT INTO `index_nav_main` VALUES (4, '青春文学');
INSERT INTO `index_nav_main` VALUES (5, '艺术');
INSERT INTO `index_nav_main` VALUES (6, '散文随笔');
INSERT INTO `index_nav_main` VALUES (7, '收藏/鉴赏');
INSERT INTO `index_nav_main` VALUES (8, '人文社科');
INSERT INTO `index_nav_main` VALUES (9, '经济管理');
INSERT INTO `index_nav_main` VALUES (10, '自我实现/励志');
INSERT INTO `index_nav_main` VALUES (11, '生活时尚');
INSERT INTO `index_nav_main` VALUES (12, '教育/教材');
INSERT INTO `index_nav_main` VALUES (13, '考试');
INSERT INTO `index_nav_main` VALUES (14, '少儿/童书');

SET FOREIGN_KEY_CHECKS = 1;
