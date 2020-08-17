/*
 Navicat Premium Data Transfer

 Source Server         : yayasql
 Source Server Type    : MySQL
 Source Server Version : 50520
 Source Host           : localhost:0
 Source Schema         : yaya

 Target Server Type    : MySQL
 Target Server Version : 50520
 File Encoding         : 65001

 Date: 07/02/2020 20:48:11
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list`  (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `src` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `mtitle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `msrc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `price` int(11) NULL DEFAULT NULL,
  `evaluate` int(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES (1, 'Apple iPhone 11 Pro 全网通 金色 64GB  【以旧换新】最高享200元换新补贴', 'https://img2.yaya.cn/pic/product/440x440/20191209202346892.jpg.webp', 'Apple iPhone 11 Pro 全网通 深空灰色 64GB ', 'https://img2.yaya.cn/pic/product/440x440/20191009174136977.jpg.webp', 7899, 102);
INSERT INTO `list` VALUES (2, 'Apple iPhone 11 全网通 紫色 128GB  ', 'https://img2.yaya.cn/pic/product/440x440/2019091920130996.jpg.webp', 'Apple iPhone 11 全网通 黑色 128GB ', 'https://img2.yaya.cn/pic/product/440x440/20190911103416335.jpg.webp', 5930, 200);
INSERT INTO `list` VALUES (3, 'Apple iPhone 11 Pro Max 全网通版 金色 64GB  ', 'https://img2.yaya.cn/pic/product/440x440/20191209202332165.jpg.webp', 'Apple iPhone 11 Pro Max 全网通版 金色 512GB ', 'https://img2.yaya.cn/pic/product/440x440/20190911114650113.jpg.webp', 9180, 330);
INSERT INTO `list` VALUES (4, 'Apple iPhone 8 Plus 双网通版 金色 64GB  【火热销售】视网膜高清显示屏,无线充电,A11仿生处理器', 'https://img2.yaya.cn/pic/product/440x440/20190618233621132.jpg.webp', 'Apple iPhone 8 Plus 双网通版 金色 64GB ', 'https://img2.yaya.cn/pic/product/440x440/20190618233621132.jpg.webp', 3499, 404);
INSERT INTO `list` VALUES (5, 'Apple iPhone XS Max 全网通版 深空灰色 64GB  ', 'https://img2.yaya.cn/pic/product/440x440/20181112161929604.jpg.webp', 'Apple iPhone XS Max 全网通版 金色 256GB ', 'https://img2.yaya.cn/pic/product/440x440/20190618233537253.jpg.webp', 5999, 202);
INSERT INTO `list` VALUES (6, '努比亚 红魔3S 游戏手机 红蓝竞技 12GB+256GB  高通骁龙855 Plus，风扇+液冷双散热，90Hz电竞屏', 'https://img2.yaya.cn/pic/product/440x440/20190905153502518.jpg.webp', '努比亚 红魔3S 游戏手机 玄铁黑 8GB+128GB ', 'https://img2.yaya.cn/pic/product/440x440/20190905153454607.jpg.webp', 3799, 366);
INSERT INTO `list` VALUES (7, 'Apple iPhone XR 全网通版 红色特别版 128GB  ', 'https://img2.yaya.cn/pic/product/440x440/20180913062905929.jpg.webp', 'Apple iPhone XR 全网通版 白色 128GB ', 'https://img2.yaya.cn/pic/product/440x440/20180913062847599.jpg.webp', 4980, 155);
INSERT INTO `list` VALUES (8, 'Apple iPhone XS 全网通版 金色 64GB  【火热销售】5.8英寸视网膜全面屏，面容ID！', 'https://img2.yaya.cn/pic/product/440x440/20181207095127191.jpg.webp', 'Apple iPhone XS 全网通版 深空灰色 64GB ', 'https://img2.yaya.cn/pic/product/440x440/20180913060741768.jpg.webp', 5299, 122);
INSERT INTO `list` VALUES (9, 'Apple iPhone 8 全网通版 银色 64GB  【爆款特价】双面全玻璃，无线充电，视网膜显示屏！', 'https://img2.yaya.cn/pic/product/440x440/20170913035340180.jpg.webp', 'Apple iPhone 8 全网通版 深空灰色 128GB ', 'https://img2.yaya.cn/pic/product/440x440/20170913035335475.jpg.webp', 3299, 188);
INSERT INTO `list` VALUES (10, 'Apple iPhone 8 Plus 全网通版 金色 128GB  【爆款特价】双面全玻璃，无线充电，5.5英寸视网膜屏！', 'https://img2.yaya.cn/pic/product/440x440/20190618233621132.jpg.webp', 'Apple iPhone 8 Plus 全网通版 银色 128GB ', 'https://img2.yaya.cn/pic/product/440x440/20170913033546139.jpg.webp', 4799, 66);
INSERT INTO `list` VALUES (11, 'Apple iPhone 7 Plus 全网通版 银色 128GB  【苹果双摄】A10处理器，光学防抖双摄，3GB运存', 'https://img2.yaya.cn/pic/product/440x440/20170421144123524.jpg.webp', 'Apple iPhone 7 Plus 全网通版 玫瑰金色 128GB ', 'https://img2.yaya.cn/pic/product/440x440/201704211441298.jpg.webp', 3499, 721);
INSERT INTO `list` VALUES (12, 'Apple iPhone 7 全网通版 玫瑰金色 128GB  【经典旗舰】新一代主屏幕按钮，IP67防水防尘', 'https://img2.yaya.cn/pic/product/440x440/20170421142545617.jpg.webp', 'Apple iPhone 7 全网通版 玫瑰金色 128GB ', 'https://img2.yaya.cn/pic/product/440x440/20170421142545617.jpg.webp', 2680, 5614);
INSERT INTO `list` VALUES (13, '努比亚 Z20 全网通版 锦鲤红 8GB+512GB  【超清双屏自拍】4800万超清双屏自拍，骁龙855 Plus，AI三摄美颜自拍，光学防抖，30倍数码变焦', 'https://img2.yaya.cn/pic/product/440x440/20190830104707141.jpg.webp', '努比亚 Z20 全网通版 锦鲤红 8GB+128GB ', 'https://img2.yaya.cn/pic/product/440x440/20190830104703721.jpg.webp', 3350, 1212);
INSERT INTO `list` VALUES (14, 'Apple iPhone X 全网通版 深空灰色 256GB  【爆款特价】游戏拍照全面屏，人脸识别 ！3D结构光面容解锁！', 'https://img2.yaya.cn/pic/product/440x440/20180802145107132.jpg.webp', 'Apple iPhone X 全网通版 深空灰色 256GB ', 'https://img2.yaya.cn/pic/product/440x440/20180802145107132.jpg.webp', 7150, 99);
INSERT INTO `list` VALUES (15, 'Apple iPhone 6s Plus 全网通版 金色 128GB  【大屏iPhone冰点价】超低特价！3D touch！', 'https://img2.yaya.cn/pic/product/440x440/20150910060117183.jpg.webp', 'Apple iPhone 6s Plus 全网通版 深空灰色 128GB ', 'https://img2.yaya.cn/pic/product/440x440/20150910060731716.jpg.webp', 2750, 888);

-- ----------------------------
-- Table structure for shopcar
-- ----------------------------
DROP TABLE IF EXISTS `shopcar`;
CREATE TABLE `shopcar`  (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `src` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `price` int(20) NULL DEFAULT NULL,
  `sumcont` int(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for usertable
-- ----------------------------
DROP TABLE IF EXISTS `usertable`;
CREATE TABLE `usertable`  (
  `id` int(20) NOT NULL,
  `username` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `password` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `phone` varchar(11) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of usertable
-- ----------------------------
INSERT INTO `usertable` VALUES (0, 'lsl', 'e10adc3949', '2147483647');

SET FOREIGN_KEY_CHECKS = 1;
