-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-10-2021 a las 03:42:43
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crud_audiovam`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aparatos`
--

CREATE TABLE `aparatos` (
  `id_aparato` int(11) NOT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `alias` varchar(20) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `fecha_recepcion` varchar(25) NOT NULL,
  `aparato` varchar(20) NOT NULL,
  `marca` varchar(50) NOT NULL,
  `falla` varchar(25) NOT NULL,
  `observaciones` varchar(50) DEFAULT NULL,
  `presupuesto` float DEFAULT NULL,
  `notas` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `aparatos`
--

INSERT INTO `aparatos` (`id_aparato`, `nombre`, `apellido`, `alias`, `telefono`, `fecha_recepcion`, `aparato`, `marca`, `falla`, `observaciones`, `presupuesto`, `notas`) VALUES
(2, 'Luis Enrique', 'Mincitar', 'luen', '+524525940016', '2021-09-24', 'tv', 'sony', 'no prende', 'sin base', 1500, 'cambio de fuente'),
(3, 'juan', 'perez', 'luen 2', '+524525940016', '2021-09-24', 'tv', 'sony', 'no prende', 'sin base', 1660, 'fuente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entradas_salidas`
--

CREATE TABLE `entradas_salidas` (
  `id` int(11) NOT NULL,
  `razon` varchar(50) NOT NULL,
  `cantidad` float NOT NULL,
  `usuario` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `entradas_salidas`
--

INSERT INTO `entradas_salidas` (`id`, `razon`, `cantidad`, `usuario`) VALUES
(6, 'reparacion tv', 1500, 'gerente');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `aparatos`
--
ALTER TABLE `aparatos`
  ADD PRIMARY KEY (`id_aparato`);

--
-- Indices de la tabla `entradas_salidas`
--
ALTER TABLE `entradas_salidas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `aparatos`
--
ALTER TABLE `aparatos`
  MODIFY `id_aparato` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `entradas_salidas`
--
ALTER TABLE `entradas_salidas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
