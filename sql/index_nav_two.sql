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

 Date: 16/10/2019 19:00:26
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for index_nav_two
-- ----------------------------
DROP TABLE IF EXISTS `index_nav_two`;
CREATE TABLE `index_nav_two`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `h2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `h2_href` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `two` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `two_href` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of index_nav_two
-- ----------------------------
INSERT INTO `index_nav_two` VALUES (1, '人文社科', 'http://www.taoshu.com/list/1003.html', '[\"国学\",\"哲学\",\"宗教\",\"社会科学\",\"政治\",\"军事\",\"文化\",\"历史\",\"地理\"]', '[\"http://www.taoshu.com/list/1001.html\",\"http://www.taoshu.com/list/1083.html\",\"http://www.taoshu.com/list/1084.html\",\"http://www.taoshu.com/list/1085.html\",\"http://www.taoshu.com/list/1086.html\",\"http://www.taoshu.com/list/1088.html\",\"http://www.taoshu.c');
INSERT INTO `index_nav_two` VALUES (2, '文学艺术', 'http://www.taoshu.com/list/1002.html', '[\"文学\",\"小说\",\"传记\",\"青春文学\",\"艺术\",\"动漫\"]', '[\"http://www.taoshu.com/list/1077.html\",\"http://www.taoshu.com/list/1078.html\",\"http://www.taoshu.com/list/1081.html\",\"http://www.taoshu.com/list/1079.html\",\"http://www.taoshu.com/list/1082.html\",\"http://www.taoshu.com/list/1080.html\"]');
INSERT INTO `index_nav_two` VALUES (3, '经管法律', 'http://www.taoshu.com/list/1004.html', '[\"经济\",\"管理\",\"法律\",\"励志\"]', '[\"http://www.taoshu.com/list/1092.html\",\"http://www.taoshu.com/list/1093.html\",\"http://www.taoshu.com/list/1087.html\",\"http://www.taoshu.com/list/1094.html\"]');
INSERT INTO `index_nav_two` VALUES (4, '少儿图书', 'http://www.taoshu.com/list/1008.html', '[\"亲子读物\",\"少儿文学\",\"少儿百科\",\"才艺课堂\",\"励志与成长\"]', '[\"http://www.taoshu.com/list/1114.html\",\"http://www.taoshu.com/list/1121.html\",\"http://www.taoshu.com/list/1127.html\",\"http://www.taoshu.com/list/1122.html\",\"http://www.taoshu.com/list/1125.html\"]');
INSERT INTO `index_nav_two` VALUES (5, '科学技术', 'http://www.taoshu.com/list/1006.html', '[\"科普读物\",\"自然科学\",\"工业技术\",\"医学\",\"农业科学\",\"交通运输\",\"环境科学\",\"航空、航天\"]', '[\"http://www.taoshu.com/list/1102.html\",\"http://www.taoshu.com/list/1103.html\",\"http://www.taoshu.com/list/1104.html\",\"http://www.taoshu.com/list/1105.html\",\"http://www.taoshu.com/list/1106.html\",\"http://www.taoshu.com/list/1108.html\",\"http://www.taoshu.c');

SET FOREIGN_KEY_CHECKS = 1;
