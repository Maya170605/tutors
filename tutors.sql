-- MySQL dump 10.13  Distrib 8.1.0, for Win64 (x86_64)

-- Host: localhost    Database: tutors


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tutor`
--

DROP TABLE IF EXISTS `tutor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tutor` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `added` varchar(255) DEFAULT NULL,
  `education` varchar(255) DEFAULT NULL,
  `experience` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `img_url` varchar(255) DEFAULT NULL,
  `subjects` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `tutor` WRITE;
/*!40000 ALTER TABLE `tutor` DISABLE KEYS */;
INSERT INTO `tutor` VALUES (18,'24.12.2023','БГУИР, курс прикладного пинания деревянных веников','2010','Алексей Иванович','https://profile.protutor.by/static/avatars/s_070ccb27e9057167401ca56e126deb41.jpg','Математика, Физика'),(21,'24.12.2023','Белорусский государственный университет, факультет социокультурных коммуникаций, специальность – современные иностранные языки (преподавание)','2016','Ирина Ивановна Максименко','https://cdn.profi-bel.by/xfiles/pfiles/792a1da21b974ae8afa1546a4f2aa2eb.jpg-profi_a34-180.jpg','Русский язык, Английский язык'),(22,'24.12.2023','Барановичский государственный университет, информационные системы и технологии 2014–2018 гг.','2017','Лихорад Александр','https://cdn.profi-bel.by/xfiles/pfiles/5a48b086d7b341f09ee194549bce4426.jpg-profi_a34-180.jpg','Программирование, Обучение C++'),(23,'24.12.2023','Белорусский государственный университет, культурология (фундаментальная) 2014–2018 гг','2022','Александра Викторовна Шатненко','https://cdn.profi-bel.by/xfiles/pfiles/fa9c69bfa15b450786f48a161931a838.jpg-profi_a34-180.jpg','География, Химия'),(24,'24.12.2023','БНТУ, курс лучших филологов и не только','2018','Кристина Денисовна Величко','https://cdn.profi-bel.by/xfiles/pfiles/a685a14066fb4c36806ae32f2748ffba.jpg-profi_a34-180.jpg','Английский язык'),(25,'24.12.2023','Гомельский государственный университет, математический факультет, специальность – математика 1973–1978 гг.','2005','Александр Николаевич Осипенко','https://cdn.profi-bel.by/xfiles/pfiles/d87e04b78c7442358bac718ffeab85ed.jpg-profi_a34-180.jpg','Математика, Алгебра'),(26,'24.12.2023','Warszawska Wyższa Szkoła Ekonomiczna im. Edwarda Wiszniewskiego (Варшавская высшая экономическая школа им. Эдварда Вишневского), экономический факультет, направление подготовки – управление кадрами','2016','Илья Александрович Полешук','https://cdn.profi-bel.by/xfiles/pfiles/7200f87382ea4144af0fcdc4be9eecad.jpg-profi_a34-180.jpg','Подготовка к экзаменам'),(27,'24.12.2023','МГЛУ, факультет межкультурных коммуникаций, специальность «переводчик-референт (со знанием английского и испанского языков)» 2018–2023 гг.','2020','Юлия Александровна Тимошкова','https://cdn.profi-bel.by/xfiles/pfiles/081ef591b7c4466cbeec31300a8a4abb.jpg-profi_a34-180.jpg','Английский язык, Английский для младших школьников'),(28,'24.12.2023','В 2004 году окончил Белорусский государственный университет транспорта, обучался на электротехническом факультете, специальность – автоматика 2004 г.','2018','Павел Владимирович Никифоров','https://cdn.profi-bel.by/xfiles/pfiles/77ce1652ee224be797003412744c3963.jpg-profi_a34-180.jpg','Программирование, ООП, Изучение языков программирования');
/*!40000 ALTER TABLE `tutor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `login` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','admin',1),(2,'user','user',0),(3,'test','test',0),(4,'test1','test1',0),(5,'testUser','testUser',0),(6,'Иван','иван',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

