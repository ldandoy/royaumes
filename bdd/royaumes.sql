-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : jeu. 17 déc. 2020 à 12:24
-- Version du serveur :  5.7.29-log
-- Version de PHP : 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `royaumes`
--

-- --------------------------------------------------------

--
-- Structure de la table `barracks`
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
-- Déchargement des données de la table `barracks`
--

INSERT INTO `barracks` (`id`, `unitId`, `kingdomId`, `nb`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 15, '2020-12-12 14:15:22', '2020-12-16 17:32:23'),
(2, 3, 2, 0, '2020-12-12 14:15:22', '2020-12-16 17:32:23'),
(3, 2, 1, 0, '2020-12-13 21:18:36', '2020-12-16 17:32:23');

-- --------------------------------------------------------

--
-- Structure de la table `kingdoms`
--

CREATE TABLE `kingdoms` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `kingdoms`
--

INSERT INTO `kingdoms` (`id`, `name`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 'Ville de ldandoy', 1, '2020-10-08 19:20:07', '2020-10-08 19:20:07'),
(2, 'Ville de a', 3, '2020-12-12 13:11:35', '2020-12-12 13:11:35');

-- --------------------------------------------------------

--
-- Structure de la table `ressources`
--

CREATE TABLE `ressources` (
  `id` int(11) NOT NULL,
  `wood` int(11) NOT NULL,
  `or` int(11) NOT NULL,
  `stone` int(11) NOT NULL,
  `pop` int(11) NOT NULL,
  `kingdomId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `ressources`
--

INSERT INTO `ressources` (`id`, `wood`, `or`, `stone`, `pop`, `kingdomId`, `createdAt`, `updatedAt`) VALUES
(1, 40, 100, 20, 120, 1, '2020-12-16 19:12:23', '2020-12-16 18:12:50'),
(2, 500, 3000, 2000, 30, 2, '2020-12-16 19:12:23', '2020-12-16 18:12:50');

-- --------------------------------------------------------

--
-- Structure de la table `units`
--

CREATE TABLE `units` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `off` int(11) NOT NULL,
  `def` int(11) NOT NULL,
  `booty` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  `wood` int(11) NOT NULL,
  `or` int(11) NOT NULL,
  `pop` int(11) NOT NULL,
  `stone` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `units`
--

INSERT INTO `units` (`id`, `name`, `off`, `def`, `booty`, `speed`, `wood`, `or`, `pop`, `stone`, `createdAt`, `updatedAt`) VALUES
(1, 'Combatants à l\'épee', 5, 10, 20, 5, 0, 0, 0, 0, '2020-12-12 14:00:15', '2020-12-12 14:00:15'),
(2, 'Frondeurs', 12, 7, 30, 9, 0, 0, 0, 0, '2020-12-12 14:00:15', '2020-12-12 14:00:15'),
(3, 'Chars', 15, 20, 40, 10, 0, 0, 0, 0, '2020-12-12 14:00:52', '2020-12-12 14:00:52');

-- --------------------------------------------------------

--
-- Structure de la table `users`
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
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `username`, `level`, `createdAt`, `updatedAt`) VALUES
(1, 'ldandoy@gmail.com', '$2b$10$je4YZZy9nHHSI4QiM.tpiOyotSbt7HHwfzIVyZFZKrzi9hOSZWI5y', 'ldandoy', 1, '2020-10-07 19:16:11', '2020-10-07 19:16:11'),
(3, 'a@a.com', '$2b$10$5gt7ixXtw3vxfWJ852TBiOT3sD2.CQcJyUOuQQ2gZ/BVe9keC9N9W', 'a', 1, '2020-12-12 13:11:35', '2020-12-12 13:11:35');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `barracks`
--
ALTER TABLE `barracks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kingdomId` (`kingdomId`),
  ADD KEY `barracks_ibfk_2` (`unitId`);

--
-- Index pour la table `kingdoms`
--
ALTER TABLE `kingdoms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`userId`);

--
-- Index pour la table `ressources`
--
ALTER TABLE `ressources`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kingdomId` (`kingdomId`);

--
-- Index pour la table `units`
--
ALTER TABLE `units`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `barracks`
--
ALTER TABLE `barracks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `kingdoms`
--
ALTER TABLE `kingdoms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `ressources`
--
ALTER TABLE `ressources`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `units`
--
ALTER TABLE `units`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `barracks`
--
ALTER TABLE `barracks`
  ADD CONSTRAINT `barracks_ibfk_1` FOREIGN KEY (`kingdomId`) REFERENCES `kingdoms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `barracks_ibfk_2` FOREIGN KEY (`unitId`) REFERENCES `units` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `kingdoms`
--
ALTER TABLE `kingdoms`
  ADD CONSTRAINT `kingdoms_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `ressources`
--
ALTER TABLE `ressources`
  ADD CONSTRAINT `ressources_ibfk_1` FOREIGN KEY (`kingdomId`) REFERENCES `kingdoms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
