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

 Date: 16/10/2019 11:51:47
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for index_nav_tree
-- ----------------------------
DROP TABLE IF EXISTS `index_nav_tree`;
CREATE TABLE `index_nav_tree`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `h3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `h3_href` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `tree` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `tree_href` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of index_nav_tree
-- ----------------------------
INSERT INTO `index_nav_tree` VALUES (1, '国学', 'http://www.taoshu.com/list/1001.html', '[\"经部\",\"史部\",\"子部\",\"集部\",\"丛部\",\"国学入门\",\"国学著作\"]', '[\"http://www.taoshu.com/list/1011.html\",\"http://www.taoshu.com/list/1012.html\",\"http://www.taoshu.com/list/1013.html\",\"http://www.taoshu.com/list/1014.html\",\"http://www.taoshu.com/list/1015.html\",\"http://www.taoshu.com/list/1617.html\",\"http://www.taoshu.c');
INSERT INTO `index_nav_tree` VALUES (2, '哲学', 'http://www.taoshu.com/list/1083.html', '[\"哲学理论\",\"中国哲学\",\"马/列/毛/邓经典理论\",\"世界哲学\",\"逻辑学\",\"美学\",\"心理学\",\"哲学知识读物\"]', '[\"http://www.taoshu.com/list/1224.html\",\"http://www.taoshu.com/list/1225.html\",\"http://www.taoshu.com/list/1226.html\",\"http://www.taoshu.com/list/1227.html\",\"http://www.taoshu.com/list/1229.html\",\"http://www.taoshu.com/list/1230.html\",\"http://www.taoshu.c');
INSERT INTO `index_nav_tree` VALUES (3, '宗教', 'http://www.taoshu.com/list/1084.html', '[\"宗教理论\",\"佛教\",\"道教\",\"基督教\",\"伊斯兰教\",\"其他宗教\",\"宗教知识读物\"]', '[\"http://www.taoshu.com/list/1233.html\",\"http://www.taoshu.com/list/1234.html\",\"http://www.taoshu.com/list/1235.html\",\"http://www.taoshu.com/list/1236.html\",\"http://www.taoshu.com/list/1237.html\",\"http://www.taoshu.com/list/1238.html\",\"http://www.taoshu.c');
INSERT INTO `index_nav_tree` VALUES (4, '社会科学', 'http://www.taoshu.com/list/1085.html', '[\"社会科学总论\",\"社会学\",\"民族学\",\"信息与知识传播\",\"语言文字\",\"人口学\",\"统计学\",\"图书馆学/情报学/档案学\",\"人才学\"]', '[\"http://www.taoshu.com/list/1240.html\",\"http://www.taoshu.com/list/1241.html\",\"http://www.taoshu.com/list/1242.html\",\"http://www.taoshu.com/list/1243.html\",\"http://www.taoshu.com/list/1244.html\",\"http://www.taoshu.com/list/1245.html\",\"http://www.taoshu.c');
INSERT INTO `index_nav_tree` VALUES (5, '政治', 'http://www.taoshu.com/list/1086.html', '[\"政治理论\",\"中国政治\",\"世界政治\",\"外交、国际关系\",\"时政\",\"党政读物\",\"行政管理\"]', '[\"http://www.taoshu.com/list/1248.html\",\"http://www.taoshu.com/list/1249.html\",\"http://www.taoshu.com/list/1250.html\",\"http://www.taoshu.com/list/1251.html\",\"http://www.taoshu.com/list/1252.html\",\"http://www.taoshu.com/list/1253.html\",\"http://www.taoshu.c');
INSERT INTO `index_nav_tree` VALUES (6, '军事', 'http://www.taoshu.com/list/1088.html', '[\"军事理论\",\"中国军事\",\"世界军事\",\"军事技术\",\"军事历史/纪实\",\"兵器\"]', '[\"http://www.taoshu.com/list/1255.html\",\"http://www.taoshu.com/list/1256.html\",\"http://www.taoshu.com/list/1257.html\",\"http://www.taoshu.com/list/1258.html\",\"http://www.taoshu.com/list/1259.html\",\"http://www.taoshu.com/list/1260.html\"]');
INSERT INTO `index_nav_tree` VALUES (7, '文化', 'http://www.taoshu.com/list/1089.html', '[\"文化理论\",\"文化评述\",\"中国文化\",\"世界各国文化\",\"地域文化\",\"神秘现象\"]', '[\"http://www.taoshu.com/list/1270.html\",\"http://www.taoshu.com/list/1271.html\",\"http://www.taoshu.com/list/1272.html\",\"http://www.taoshu.com/list/1273.html\",\"http://www.taoshu.com/list/1274.html\",\"http://www.taoshu.com/list/1275.html\"]');
INSERT INTO `index_nav_tree` VALUES (8, '历史', 'http://www.taoshu.com/list/1090.html', '[\"史学理论\",\"中国史\",\"世界史\",\"风俗习惯\",\"文物考古\",\"地方史志\",\"历史知识读物\",\"民族史志\"]', '[\"http://www.taoshu.com/list/1276.html\",\"http://www.taoshu.com/list/1277.html\",\"http://www.taoshu.com/list/1278.html\",\"http://www.taoshu.com/list/1279.html\",\"http://www.taoshu.com/list/1280.html\",\"http://www.taoshu.com/list/1281.html\",\"http://www.taoshu.c');
INSERT INTO `index_nav_tree` VALUES (9, '地理', 'http://www.taoshu.com/list/1091.html', '[\"地理学理论\",\"中国地理\",\"世界地理\",\"地图\"]', '[\"http://www.taoshu.com/list/1293.html\",\"http://www.taoshu.com/list/1294.html\",\"http://www.taoshu.com/list/1295.html\",\"http://www.taoshu.com/list/1129.html\"]');

SET FOREIGN_KEY_CHECKS = 1;
