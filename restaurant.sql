-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 08-Set-2020 às 02:00
-- Versão do servidor: 10.4.10-MariaDB
-- versão do PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `restaurant`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `desserts`
--

DROP TABLE IF EXISTS `desserts`;
CREATE TABLE IF NOT EXISTS `desserts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL,
  `images` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `desserts`
--

INSERT INTO `desserts` (`id`, `name`, `description`, `price`, `images`) VALUES
(1, 'Cake of Sky', 'ice cream cake with icing of strawberry. Is the sky in the plate, so... Put your hand on the sky... mouth', 45, 'dessert1.jpeg'),
(2, 'A Normal Cake', 'A normal cake with strawberry, all the things is normal but is very good for eat in evening before sleep', 10, 'dessert2.jpeg'),
(3, 'Pancakes', 'pancakes ! yes pancakes with fruits , and oil for you eat good', 33, 'dessert3.jpeg'),
(4, 'Bread Dot', 'Bread with dots of fruits red, is simple but very delicious, eat and rise up for the yours dreams', 12, 'dessert4.jpeg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `drinks`
--

DROP TABLE IF EXISTS `drinks`;
CREATE TABLE IF NOT EXISTS `drinks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL,
  `images` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `drinks`
--

INSERT INTO `drinks` (`id`, `name`, `description`, `price`, `images`) VALUES
(1, 'Refreshing Drink', 'A drink that you want drink in the summer because is awesome the \"refreshing\". A beverage natural orange with gas', 22, 'drink1.jpeg'),
(2, 'RedNoze', 'A beverage of red fruits, but not all red fruits are red fruits, some is purple', 19, 'drink2.jpeg'),
(3, 'AllForOne', 'A special beverage for you ! Drink all the things in a single ! A beverage with lemons,passion fruit, coconut and more', 21, 'drink3.jpeg'),
(4, 'Demon Drink', 'Special and mysterious drink. There are things that nobody knows, but they say that these drinks become a god', 100, 'drink4.jpeg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `foods`
--

DROP TABLE IF EXISTS `foods`;
CREATE TABLE IF NOT EXISTS `foods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL,
  `images` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `foods`
--

INSERT INTO `foods` (`id`, `name`, `description`, `price`, `images`) VALUES
(1, 'Salad of Fell', ' A salad to appreciate the flavor, only vegetables green with some tomatoes and grains', 9, 'food4.jpeg'),
(2, 'Exotic Bread', 'bread with tomato, salad, flowers and passion fruit', 15, 'food2.jpeg'),
(3, 'Salad Contr', 'salad of many vegetables for eat with a bread, special dish for peoples that dont\'t eat meat', 12, 'food3.jpeg'),
(4, 'Pasta Lorel', 'pasta with a special sauce of the master chief for eat slowly or much fast if you have hangry', 43, 'food1.jpeg'),
(5, 'Sauce of the God', 'A special sauce that stay in development from master chief , but is already delicious', 2, 'food5.jpeg'),
(6, 'Meat Happy', 'Meat with a ketchup and some legumes, a perfect dish for fell a little more happy', 69, 'food6.jpeg'),
(7, 'Hamburger', 'Bread with hamburger, cheese, pickles, tomatoes. To accompany chips, ketchup and mustard. Typical snack of region', 25, 'food8.jpeg'),
(8, 'Secret Food', 'The supreme dish of the house, eat and discover a new world. Alert : Secret recipe', 66, 'food7.jpeg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `user_name`, `email`, `password`) VALUES
(1, 'force', 'marcelor068@gmail.com', '123456'),
(2, 'MiltinhoS2', 'miltonrocha139@gmail.com', '123456'),
(3, 'Maickada', 'maickon@maickada.com', '123456'),
(4, 'Miltorone', 'miltorone@miltao.com', '123456'),
(5, 'leandro', 'leandrobla@gmail..com', '123456');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
