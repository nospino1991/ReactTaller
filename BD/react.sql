-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-12-2019 a las 20:24:35
-- Versión del servidor: 10.1.22-MariaDB
-- Versión de PHP: 7.0.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `react`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante`
--

CREATE TABLE `estudiante` (
  `estudiante` int(11) NOT NULL,
  `nombre_completo` varchar(50) COLLATE utf32_spanish_ci NOT NULL,
  `dni` int(11) NOT NULL,
  `direccion` varchar(100) COLLATE utf32_spanish_ci NOT NULL,
  `tlf` int(11) NOT NULL,
  `correo` varchar(50) COLLATE utf32_spanish_ci NOT NULL,
  `carrera` varchar(50) COLLATE utf32_spanish_ci NOT NULL,
  `estadocivil` varchar(19) COLLATE utf32_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

--
-- Volcado de datos para la tabla `estudiante`
--

INSERT INTO `estudiante` (`estudiante`, `nombre_completo`, `dni`, `direccion`, `tlf`, `correo`, `carrera`, `estadocivil`) VALUES
(2, 'Jesus Marquez', 118861264, 'Venezuela', 918993232, 'correo@gmail.com', 'Ing. Industrial', ''),
(3, 'Jose Martinez', 118861265, 'Venezela', 918993253, 'correo@gmail.com', 'Sistemas', ''),
(4, 'Jose Martinez', 118861265, 'Venezela', 856389442, 'correo@gmail.com', 'Sistemas', ''),
(5, 'Jose Martinez', 118861265, 'Venezeuelaaaaaaaa', 856389442, 'correo@gmail.com', 'Sistemas', 'Casado'),
(6, 'Jose Martinez', 118861265, 'Venezeuelaaaaaaaa', 856389442, 'correo@gmail.com', 'Sistemas', 'Casado');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD PRIMARY KEY (`estudiante`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  MODIFY `estudiante` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
