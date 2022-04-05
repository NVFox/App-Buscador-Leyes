-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-04-2022 a las 11:27:38
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
  `artNombre` varchar(60) NOT NULL,
  `artDescripcion` text DEFAULT NULL,
  `artPalabrasClave` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`artId`, `tit_artId`, `artNombre`, `artDescripcion`, `artPalabrasClave`) VALUES
(1, 1, 'Articulo 1', 'Los autores de obras literarias, científicas y artísticas gozarán de\r\nprotección para sus obras en la forma prescrita por la presente Ley y, en cuanto\r\nfuere compatible con ella, por el derecho común. También protege esta Ley a\r\nlos interpretes o ejecutantes, a los productores de programas y a los\r\norganismos de radiodifusión, en sus derechos conexos a los del autor.\r\n', 'obras, programas, autor'),
(2, 1, 'Articulo 2', 'Los derechos de autor recaen sobre las obras científicas literarias\r\ny artísticas las cuales se comprenden todas las creaciones del espíritu en el\r\ncampo científico, literario y artístico, cualquiera que sea el modo o forma de\r\nexpresión y cualquiera que sea su destinación, tales como: los libros, folletos y otros escritos; las conferencias, alocuciones, sermones y otras obras de la misma naturaleza; las obras dramáticas o dramático-musicales; las obras coreográficas y las pantomimas; las composiciones musicales con letra o sin ella; las obras cinematográficas, a las cuales se asimilan las obras expresadas por procedimiento análogo a la cinematografía, inclusive los videogramas; las obras de dibujo, pintura, arquitectura, escultura, grabado, litografía; las obras fotográficas o las cuales se asimilan las expresadas por procedimiento análogo\r\na la fotografía; las obras de arte aplicadas; las ilustraciones, mapas, planos, croquis y obras plásticas relativas a la geografía, a la topografía, a la arquitectura o a las ciencias y, en fin, toda producción del dominio científico, literario o artístico que pueda reproducirse, o definirse por cualquier forma de impresión o de reproducción, por fonografía, radiotelefonía o cualquier otro medio conocido o por conocer.', 'autor, dominio, reproducción'),
(3, 1, 'Articulo 3', 'Los derechos de autor comprenden para sus titulares las facultades exclusivas:', 'autor, lucro, reproducción');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `leyes`
--

CREATE TABLE `leyes` (
  `leyId` int(11) NOT NULL,
  `leyNombre` varchar(60) NOT NULL,
  `leyDescripcion` varchar(255) DEFAULT NULL,
  `leyFecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `leyes`
--

INSERT INTO `leyes` (`leyId`, `leyNombre`, `leyDescripcion`, `leyFecha`) VALUES
(1, 'Ley de Derechos de Autor', NULL, '1982-01-28');

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
  `titDescripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `titulos`
--

INSERT INTO `titulos` (`titId`, `tit_leyId`, `titNumero`, `titDescripcion`) VALUES
(1, 1, 'CAPITULO I', NULL);

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
