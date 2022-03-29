-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-03-2022 a las 04:13:39
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 7.4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `leyes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE `articulos` (
  `artId` int(11) NOT NULL,
  `tit_artId` int(11) NOT NULL,
  `artNombre` int(11) NOT NULL,
  `artDescripcion` int(11) NOT NULL,
  `artPalabrasClave` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `leyes`
--

CREATE TABLE `leyes` (
  `leyId` int(11) NOT NULL,
  `leyNombre` varchar(60) NOT NULL,
  `leyDescripcion` varchar(255) NOT NULL,
  `leyFecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parrafos`
--

CREATE TABLE `parrafos` (
  `parId` int(11) NOT NULL,
  `art_parId` int(11) NOT NULL,
  `parNombre` varchar(255) NOT NULL,
  `parTexto` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `titulos`
--

CREATE TABLE `titulos` (
  `titId` int(11) NOT NULL,
  `tit_leyId` int(11) NOT NULL,
  `titNumero` varchar(10) NOT NULL,
  `titDescripcion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`artId`),
  ADD KEY `tit_artId` (`tit_artId`);

--
-- Indices de la tabla `leyes`
--
ALTER TABLE `leyes`
  ADD PRIMARY KEY (`leyId`);

--
-- Indices de la tabla `parrafos`
--
ALTER TABLE `parrafos`
  ADD PRIMARY KEY (`parId`),
  ADD KEY `art_parId` (`art_parId`);

--
-- Indices de la tabla `titulos`
--
ALTER TABLE `titulos`
  ADD PRIMARY KEY (`titId`),
  ADD KEY `tit_leyId` (`tit_leyId`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD CONSTRAINT `articulos_ibfk_1` FOREIGN KEY (`tit_artId`) REFERENCES `titulos` (`titId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `parrafos`
--
ALTER TABLE `parrafos`
  ADD CONSTRAINT `parrafos_ibfk_1` FOREIGN KEY (`art_parId`) REFERENCES `articulos` (`artId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `titulos`
--
ALTER TABLE `titulos`
  ADD CONSTRAINT `titulos_ibfk_1` FOREIGN KEY (`tit_leyId`) REFERENCES `leyes` (`leyId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
