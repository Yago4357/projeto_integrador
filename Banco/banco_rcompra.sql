-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: banco
-- ------------------------------------------------------
-- Server version	5.7.20-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `rcompra`
--

DROP TABLE IF EXISTS `rcompra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rcompra` (
  `idC` int(11) NOT NULL AUTO_INCREMENT,
  `idProd` int(11) NOT NULL,
  `qtdC` int(11) NOT NULL,
  `vC` double DEFAULT NULL,
  `dt` datetime DEFAULT NULL,
  `forn` varchar(49) NOT NULL,
  `idFun` int(11) DEFAULT NULL,
  PRIMARY KEY (`idC`),
  KEY `fkidProd_idx` (`idProd`),
  KEY `fkidProd_id_compra` (`idProd`),
  KEY `fkidFun_compra_idx` (`idFun`),
  CONSTRAINT `fkidFun_compra` FOREIGN KEY (`idFun`) REFERENCES `usuario` (`IdFun`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fkidProd_compra` FOREIGN KEY (`idProd`) REFERENCES `produto` (`Idprod`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rcompra`
--

LOCK TABLES `rcompra` WRITE;
/*!40000 ALTER TABLE `rcompra` DISABLE KEYS */;
INSERT INTO `rcompra` VALUES (4,2,1,270,NULL,'pichau',1);
/*!40000 ALTER TABLE `rcompra` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-01 11:06:50
