-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Ago 22, 2020 alle 18:07
-- Versione del server: 10.3.16-MariaDB
-- Versione PHP: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fumetti`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `categorie`
--

CREATE TABLE `categorie` (
  `idcat` int(11) NOT NULL,
  `nomecat` varchar(256) NOT NULL,
  `descrizionecat` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `categorie`
--

INSERT INTO `categorie` (`idcat`, `nomecat`, `descrizionecat`) VALUES
(1, 'Tex', 'Collezione Tex classico'),
(2, 'Dylan Dog', 'Tutto Dylan Dog'),
(3, 'Topolino', 'I classici di Topolino e Paperino');

-- --------------------------------------------------------

--
-- Struttura della tabella `prodotti`
--

CREATE TABLE `prodotti` (
  `id` int(11) NOT NULL,
  `nome` varchar(64) NOT NULL,
  `descrizione` text NOT NULL,
  `prezzo` decimal(10,0) NOT NULL,
  `cat_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `prodotti`
--

INSERT INTO `prodotti` (`id`, `nome`, `descrizione`, `prezzo`, `cat_id`) VALUES
(1, 'L alba dei morti viventi', 'Dylan Dog numero 1 (1986)', '90', 2),
(2, 'Il fantasma di Anna Never', 'Dylan Dog numero 4 (1987)', '30', 2),
(3, 'Il castello della paura', 'Dylan Dog numero 16 (1988)', '10', 2),
(4, 'La mano rossa', 'Tex numero 1 (1958)', '250', 1),
(5, 'Fuorilegge', 'Tex numero 3 (1959)', '120', 1),
(6, 'Il patto di sangue', 'Tex numero 7 (1960)', '40', 1),
(7, 'Topolino e il mistero di Macchia', 'Topolino detective', '55', 3),
(8, 'Paperinik il diabolico vendicatore', 'Storia di Paperinik', '35', 3),
(9, 'Eta Beta e la spia', 'Storia di Eta Beta', '15', 3);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`idcat`);

--
-- Indici per le tabelle `prodotti`
--
ALTER TABLE `prodotti`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `categorie`
--
ALTER TABLE `categorie`
  MODIFY `idcat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT per la tabella `prodotti`
--
ALTER TABLE `prodotti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
