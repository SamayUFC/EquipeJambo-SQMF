-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 05/06/2023 às 12:57
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `cursos`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `disciplinas`
--

CREATE TABLE `disciplinas` (
  `ID` int(11) NOT NULL,
  `CODIGO` varchar(20) DEFAULT NULL,
  `COMPONENTE` varchar(255) DEFAULT NULL,
  `CARGAHORARIA` int(11) DEFAULT NULL,
  `NATUREZA` varchar(50) DEFAULT NULL,
  `SEMESTRE` int(11) DEFAULT NULL,
  `IDMATRIZ` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `disciplinas`
--

INSERT INTO `disciplinas` (`ID`, `CODIGO`, `COMPONENTE`, `CARGAHORARIA`, `NATUREZA`, `SEMESTRE`, `IDMATRIZ`) VALUES
(1, 'SMD0088', 'AUTORACAO MULTIMIDIA I', 64, 'OBRIGATÓRIA', 1, 1),
(2, 'SMD0089', 'DESENHO I', 64, 'OBRIGATÓRIA', 1, 1),
(3, 'SMD0091', 'HISTÓRIA DO DESIGN', 64, 'OBRIGATÓRIA', 1, 1),
(4, 'SMD0094', 'INTRODUÇÃO A SISTEMAS E MÍDIAS DIGITAIS', 64, 'OBRIGATÓRIA', 1, 1),
(5, 'SMD0095', 'PROGRAMAÇÃO I', 64, 'OBRIGATÓRIA', 1, 1),
(6, 'SMD0107', 'COGNIÇÃO E TECNOLOGIAS DIGITAIS', 64, 'OBRIGATÓRIA', 2, 1),
(7, 'SMD0105', 'COMUNICAÇÃO VISUAL I', 64, 'OBRIGATÓRIA', 2, 1),
(8, 'SMD0106', 'MATEMÁTICA APLICADA À MULTIMÍDIA I', 64, 'OBRIGATÓRIA', 2, 1),
(9, 'SMD0093', 'NARRATIVAS MULTIMÍDIA', 64, 'OBRIGATÓRIA', 2, 1),
(10, 'SMD0096', 'PROGRAMAÇÃO II', 64, 'OBRIGATÓRIA', 2, 1),
(11, 'SMD0097', 'AUTORAÇÃO MULTIMÍDIA II', 64, 'OBRIGATÓRIA', 3, 1),
(12, 'SMD0015', 'DESIGN DE INTERFACES GRÁFICAS', 64, 'OBRIGATÓRIA', 3, 1),
(13, 'SMD0108', 'INTERAÇÃO HUMANO-COMPUTADOR I', 64, 'OBRIGATÓRIA', 3, 1),
(14, 'SMD0109', 'INTRODUÇÃO À CIBERCULTURA', 64, 'OBRIGATÓRIA', 3, 1),
(15, 'SMD0092', 'PROJETO INTEGRADO I', 64, 'OBRIGATÓRIA', 3, 1),
(17, 'SMD0102', 'METODOLOGIA DE PESQUISA CIENTÍFICA', 64, 'OBRIGATÓRIA', 4, 1),
(18, 'SMD0025', 'ÉTICA E POLÍTICA AUTORAL', 64, 'OBRIGATÓRIA', 6, 1),
(19, 'SMD0100', 'GESTÃO DE PROJETOS MULTIMÍDIA', 64, 'OBRIGATÓRIA', 6, 1),
(20, 'SMD0111', 'PROJETO DE TRABALHO FINAL', 64, 'OBRIGATÓRIA', 7, 1),
(21, 'SMD0101', 'PROJETO INTEGRADO II', 64, 'OBRIGATÓRIA', 7, 1),
(22, 'SMDG0001', 'ATIVIDADES COMPLEMENTARES', 192, 'OBRIGATÓRIA', 8, 1),
(23, 'SMD0103', 'SEMINÁRIOS EM MULTIMÍDIA', 64, 'OBRIGATÓRIA', 8, 1),
(24, 'SMD0077', 'TRABALHO DE CONCLUSÃO DE CURSO	', 128, 'OBRIGATÓRIA', 8, 1),
(25, 'SMD0030', 'ANÁLISE E PROJETO DE SISTEMAS', 64, 'ELETIVA', 4, 1),
(26, 'SMD0098', 'DESENHO II', 64, 'ELETIVA', 4, 1),
(27, 'SMD0033', 'ESTRUTURA DE DADOS', 64, 'ELETIVA', 4, 1),
(28, 'SMD0086', 'FOTOGRAFIA DIGITAL', 64, 'ELETIVA', 4, 1),
(29, 'SMD0037', 'REDES DE COMPUTADORES', 64, 'ELETIVA', 4, 1),
(30, 'SMD0090', 'SEMIÓTICA APLICADA', 64, 'ELETIVA', 4, 1),
(31, 'SMD0099', 'BANCO DE DADOS I', 64, 'ELETIVA', 5, 1),
(32, 'SMD0110', 'COMUNICAÇÃO VISUAL II', 64, 'ELETIVA', 5, 1),
(33, 'SMD0032', 'DESIGN DE SOM', 64, 'ELETIVA', 5, 1),
(34, 'SMD0055', 'ENGENHARIA DE SOFTWARE', 64, 'ELETIVA', 5, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `matrizcurricular`
--

CREATE TABLE `matrizcurricular` (
  `ID` int(11) NOT NULL,
  `CARGAHORARIATOTAL` int(11) DEFAULT NULL,
  `CARGAOBRIG` int(11) DEFAULT NULL,
  `CARGAOPTATIVA` int(11) DEFAULT NULL,
  `CARGAOPTATIVALIVRE` int(11) DEFAULT NULL,
  `MATRIZ` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `matrizcurricular`
--

INSERT INTO `matrizcurricular` (`ID`, `CARGAHORARIATOTAL`, `CARGAOBRIG`, `CARGAOPTATIVA`, `CARGAOPTATIVALIVRE`, `MATRIZ`) VALUES
(1, 2880, 1664, 1216, 128, 78);

-- --------------------------------------------------------

--
-- Estrutura para tabela `prerequisitos`
--

CREATE TABLE `prerequisitos` (
  `ID` int(11) NOT NULL,
  `DISC` int(11) NOT NULL,
  `REQUISITO` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `prerequisitos`
--

INSERT INTO `prerequisitos` (`ID`, `DISC`, `REQUISITO`) VALUES
(1, 15, 7),
(2, 15, 10),
(3, 7, 1),
(4, 8, 5);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `disciplinas`
--
ALTER TABLE `disciplinas`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_MATRIZ` (`IDMATRIZ`);

--
-- Índices de tabela `matrizcurricular`
--
ALTER TABLE `matrizcurricular`
  ADD PRIMARY KEY (`ID`);

--
-- Índices de tabela `prerequisitos`
--
ALTER TABLE `prerequisitos`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_DISC` (`DISC`),
  ADD KEY `fk_REQUI` (`REQUISITO`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `disciplinas`
--
ALTER TABLE `disciplinas`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de tabela `matrizcurricular`
--
ALTER TABLE `matrizcurricular`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `disciplinas`
--
ALTER TABLE `disciplinas`
  ADD CONSTRAINT `fk_MATRIZ` FOREIGN KEY (`IDMATRIZ`) REFERENCES `matrizcurricular` (`ID`);

--
-- Restrições para tabelas `prerequisitos`
--
ALTER TABLE `prerequisitos`
  ADD CONSTRAINT `fk_DISC` FOREIGN KEY (`DISC`) REFERENCES `disciplinas` (`ID`),
  ADD CONSTRAINT `fk_REQUI` FOREIGN KEY (`REQUISITO`) REFERENCES `disciplinas` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
