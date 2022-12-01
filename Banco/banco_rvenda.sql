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
-- Table structure for table `rvenda`
--

DROP TABLE IF EXISTS `rvenda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rvenda` (
  `codV` int(11) NOT NULL AUTO_INCREMENT,
  `comV` double NOT NULL,
  `qtdV` int(11) NOT NULL,
  `vF` double NOT NULL,
  `idCliente` int(11) DEFAULT NULL,
  `idProd` int(11) DEFAULT NULL,
  `idUsuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`codV`),
  KEY `fkidProd_idx` (`idProd`),
  KEY `fkidCliente_idx` (`idCliente`),
  KEY `fkidUsuario_venda_idx` (`idUsuario`),
  CONSTRAINT `fkidCliente` FOREIGN KEY (`idCliente`) REFERENCES `cliente` (`idC`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fkidProd` FOREIGN KEY (`idProd`) REFERENCES `produto` (`Idprod`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fkidUsuario_venda` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`IdFun`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rvenda`
--

LOCK TABLES `rvenda` WRITE;
/*!40000 ALTER TABLE `rvenda` DISABLE KEYS */;
INSERT INTO `rvenda` VALUES (12,15,1,150,1,1,1),(13,15,1,150,1,1,1);
/*!40000 ALTER TABLE `rvenda` ENABLE KEYS */;
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
