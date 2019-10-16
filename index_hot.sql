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

 Date: 16/10/2019 11:51:36
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for index_hot
-- ----------------------------
DROP TABLE IF EXISTS `index_hot`;
CREATE TABLE `index_hot`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of index_hot
-- ----------------------------
INSERT INTO `index_hot` VALUES (1, '你会');
INSERT INTO `index_hot` VALUES (2, '村上春树');
INSERT INTO `index_hot` VALUES (3, '苏立文');
INSERT INTO `index_hot` VALUES (4, '溥仪');
INSERT INTO `index_hot` VALUES (5, '莫言');
INSERT INTO `index_hot` VALUES (6, '诺贝尔文学');
INSERT INTO `index_hot` VALUES (7, '佛教');
INSERT INTO `index_hot` VALUES (8, '民国');
INSERT INTO `index_hot` VALUES (9, '周汝昌');
INSERT INTO `index_hot` VALUES (10, '辛亥');

SET FOREIGN_KEY_CHECKS = 1;
