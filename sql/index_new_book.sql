/*
 Navicat Premium Data Transfer

 Source Server         : taoshuwang
 Source Server Type    : MySQL
 Source Server Version : 50520
 Source Host           : localhost:3306
 Source Schema         : taoshuwang

 Target Server Type    : MySQL
 Target Server Version : 50520
 File Encoding         : 65001

 Date: 17/10/2019 21:38:23
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for index_new_book
-- ----------------------------
DROP TABLE IF EXISTS `index_new_book`;
CREATE TABLE `index_new_book`  (
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `href` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `label_tj` int(10) NULL DEFAULT NULL,
  `old-price` int(10) NULL DEFAULT NULL,
  `new_price` int(10) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of index_new_book
-- ----------------------------
INSERT INTO `index_new_book` VALUES ('世纪末城市：香港的流行文化', 'http://www.taoshu.com/775561.html', 'http://www.taoshu.com/img/n200.png', 76, 112, 85);
INSERT INTO `index_new_book` VALUES ('谁的城市？：战后香港的公民文化与政治论述', 'http://www.taoshu.com/775564.html', 'http://www.taoshu.com/img/n200.png', 76, 128, 97);
INSERT INTO `index_new_book` VALUES ('The Templar Legacy', 'http://www.taoshu.com/775607.html', 'http://img.taoshu.com/pic_200/2015/12/08/1317836595.jpg', 81, 90, 73);
INSERT INTO `index_new_book` VALUES ('The Arts of Asia：Materials, Techniques,', 'http://www.taoshu.com/775649.html', 'http://img.taoshu.com/pic_200/2007/08/07/04183589069974.jpg', 81, 399, 323);
INSERT INTO `index_new_book` VALUES ('Travel Maps CHINA Regional Maps Beijing', 'http://www.taoshu.com/775743.html', 'http://www.taoshu.com/img/n200.png', 81, 78, 63);
INSERT INTO `index_new_book` VALUES ('最新北京详图（商贸交通旅游适用）', 'http://www.taoshu.com/775869.html', 'http://www.taoshu.com/img/n200.png', 70, 10, 7);
INSERT INTO `index_new_book` VALUES ('Chinese Astrology', 'http://www.taoshu.com/775964.html', 'http://img.taoshu.com/pic_200/2008/06/13/1109317846164.jpg', 49, 150, 74);
INSERT INTO `index_new_book` VALUES ('坎安宁伯爵笔下的美国', 'http://www.taoshu.com/776001.html', 'http://img.taoshu.com/pic_200/2015/12/08/1176604769.jpg', 92, 428, 394);

SET FOREIGN_KEY_CHECKS = 1;
