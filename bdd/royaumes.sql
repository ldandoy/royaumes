-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 14, 2020 at 03:27 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `royaumes`
--

-- --------------------------------------------------------

--
-- Table structure for table `barracks`
--

CREATE TABLE `barracks` (
  `id` int(11) NOT NULL,
  `unitId` int(11) NOT NULL,
  `kingdomId` int(11) NOT NULL,
  `nb` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `barracks`
--

INSERT INTO `barracks` (`id`, `unitId`, `kingdomId`, `nb`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 15, '2020-12-12 14:15:22', '2020-12-12 14:15:22'),
(2, 3, 2, 2, '2020-12-12 14:15:22', '2020-12-12 14:15:22'),
(3, 2, 1, 28, '2020-12-13 21:18:36', '2020-12-13 21:18:36');

-- --------------------------------------------------------

--
-- Table structure for table `kingdoms`
--

CREATE TABLE `kingdoms` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `kingdoms`
--

INSERT INTO `kingdoms` (`id`, `name`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 'Ville de ldandoy', 1, '2020-10-08 19:20:07', '2020-10-08 19:20:07'),
(2, 'Ville de a', 3, '2020-12-12 13:11:35', '2020-12-12 13:11:35');

-- --------------------------------------------------------

--
-- Table structure for table `units`
--

CREATE TABLE `units` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `att` int(11) NOT NULL,
  `def` int(11) NOT NULL,
  `booty` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `units`
--

INSERT INTO `units` (`id`, `name`, `att`, `def`, `booty`, `speed`, `createdAt`, `updatedAt`) VALUES
(1, 'Combatants à l\'épee', 5, 10, 20, 5, '2020-12-12 14:00:15', '2020-12-12 14:00:15'),
(2, 'Frondeurs', 12, 7, 30, 9, '2020-12-12 14:00:15', '2020-12-12 14:00:15'),
(3, 'Chars', 15, 20, 40, 10, '2020-12-12 14:00:52', '2020-12-12 14:00:52');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(100) NOT NULL,
  `username` varchar(30) NOT NULL,
  `level` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `username`, `level`, `createdAt`, `updatedAt`) VALUES
(1, 'ldandoy@gmail.com', '$2b$10$je4YZZy9nHHSI4QiM.tpiOyotSbt7HHwfzIVyZFZKrzi9hOSZWI5y', 'ldandoy', 1, '2020-10-07 19:16:11', '2020-10-07 19:16:11'),
(3, 'a@a.com', '$2b$10$5gt7ixXtw3vxfWJ852TBiOT3sD2.CQcJyUOuQQ2gZ/BVe9keC9N9W', 'a', 1, '2020-12-12 13:11:35', '2020-12-12 13:11:35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barracks`
--
ALTER TABLE `barracks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kingdomId` (`kingdomId`),
  ADD KEY `barracks_ibfk_2` (`unitId`);

--
-- Indexes for table `kingdoms`
--
ALTER TABLE `kingdoms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`userId`);

--
-- Indexes for table `units`
--
ALTER TABLE `units`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `barracks`
--
ALTER TABLE `barracks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `kingdoms`
--
ALTER TABLE `kingdoms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `units`
--
ALTER TABLE `units`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `barracks`
--
ALTER TABLE `barracks`
  ADD CONSTRAINT `barracks_ibfk_1` FOREIGN KEY (`kingdomId`) REFERENCES `kingdoms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `barracks_ibfk_2` FOREIGN KEY (`unitId`) REFERENCES `units` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `kingdoms`
--
ALTER TABLE `kingdoms`
  ADD CONSTRAINT `kingdoms_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
