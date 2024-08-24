---
sidebar_position: 15
id: documentacao
title: Documentação Completa
description: Aqui será possível entender como funcionará todo o sistema de ordem de serviço.
slug: /documentacao
---



## O que falta?

### PM Canva
Cada pasta vai ser um item do PM Canva.

#### Pasta com Justificativas/Dores
Identificamos piriri pororo porque a dor é essa priri pororo...

#### AS-IS (Fluxograma)
- Desenho: Desenhar o processo que tem hoje, que é ruim (figma, canva, draw.io...)

#### Pasta com os Objetivos
- A, B, C, D, E...

#### Pasta com o TO-BE (Produto)
- Desenho de como vai ser

#### Pasta Arquitetura (Requisitos)
- Desenho de Arquitetura
- Modelagem (Em desenho)
- Modelagem Conceitual/Lógica

#### MVP (Protótipo-Produto)
- Desenho Figma
- MVP: O que vai ser o MVP?
- Descrição do que vai ser a tela (o que faz cada botão, etc)

### Cronograma (Linha do Tempo)
- Até dia que termina a prova
- Dividir em 3 sprints
- Com o backlog, dividir as atividades por TM/PM/TL

### Backlog
- Lista de atividades até o MVP

#### Sprint 1
- Desenhar o figma
- Iniciar planejamento do projeto ...

#### Sprint 2
- Desenvolver X função no Angular
- Criar banco de dados ...

#### Sprint 3
- MVP

### Configuração do Ambiente de Desenvolvimento (TL)
- Subir o ambiente de desenvolvimento, incluindo onde o backend, frontend e banco de dados serão hospedados.
- Inclui o Docusaurus para a documentação.

### Levantamento de Requisitos e Criação do Backlog (PA)
- Com a arquitetura definida, o PA pode detalhar as user stories e gerar o backlog.

### Planejamento do Frontend (PA)
- Com o backlog em mãos, iniciar o planejamento no Figma.

### Implementação das Funcionalidades do Frontend (TM)
- Implementação das tarefas do frontend.

### Desenvolvimento e Integração
- Desenvolvimento do backend, frontend e integração com o banco de dados em paralelo.

### Definição da Arquitetura e Modelagem (TL)
- Arquitetura bem definida e modelagem dos dados.

#### Escolha da Arquitetura
- Arquitetura monolítica.
- Frontend: Angular com TypeScript e Tailwind CSS.
- Backend: Java com Spring Boot.
- Banco de Dados: MySQL.

### Modelagem do Banco de Dados

#### Entidades principais:

**Equipamento**
- ID (Primary Key)
- Nome
- Modelo
- Marca
- Tensão
- Corrente
- Potência
- Número de Série
- Foto (URL ou caminho)
- Etc...

**Ordem de Serviço (OS)**
- ID (Primary Key)
- ID do Equipamento (Foreign Key)
- Data de Criação
- Status (em análise, liberado, aguardando análise, etc.)
- Localização (ex.: A-12)
- QR Code (gerado automaticamente para rastreamento)

**Laudo Técnico**
- ID (Primary Key)
- ID do Equipamento (Foreign Key)
- Data de Emissão
- Descrição das Avarias
- Nome do Técnico Responsável

**Localização**
- ID (Primary Key)
- Nome da Sala (ex.: Sala de Triagem, Sala de Espera)
- Prateleira (ex.: A-12)
- ID do Equipamento (Foreign Key)
