-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Авг 26 2020 г., 17:12
-- Версия сервера: 10.4.13-MariaDB
-- Версия PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `faststart`
--
CREATE DATABASE IF NOT EXISTS `faststart` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `faststart`;

-- --------------------------------------------------------

--
-- Структура таблицы `questions`
--

CREATE TABLE IF NOT EXISTS `questions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name2` varchar(100) NOT NULL,
  `email2` varchar(50) NOT NULL,
  `message` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `questions`
--

INSERT INTO `questions` (`id`, `name2`, `email2`, `message`) VALUES
(15, 'Денис', 'konoplevdenis89@yandex.ru', ';j;'),
(16, 'Денис', 'konoplevdenis89@yandex.ru', 'jgy'),
(17, '', '', ''),
(18, '', '', ''),
(19, '', '', ''),
(20, 'Денис', 'konoplevdenis89@yandex.ru', 'kukh'),
(21, 'Денис', 'konoplevdenis89@yandex.ru', 'eeeeeeeeeeeeeeeeeeeee'),
(22, 'Денис', 'konoplevdenis89@yandex.ru', 'eeeeeeeeeeeeeeeeeeeee'),
(23, 'Денис', 'konoplevdenis89@yandex.ru', 'eeeeeeeeeeeeeeeeeeeee'),
(24, 'Денис', 'konoplevdenis89@yandex.ru', 'rtrt'),
(25, 'Денис', 'konoplevdenis89@yandex.ru', '333333333333333'),
(26, 'Денис', 'konoplevdenis89@yandex.ru', '55464');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
