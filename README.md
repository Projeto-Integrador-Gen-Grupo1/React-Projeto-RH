<div align="center">

<img src="./public/images/logo-ekoa.png" alt="Logo Ekoa" width="160" />


**Soluções em RH para Diversidade**

![Projeto Integrador Generation Brasil](https://img.shields.io/badge/Projeto%20Integrador-Generation%20Brasil-purple?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Concluído-green?style=for-the-badge)

![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-purple?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-cyan?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-7-red?style=for-the-badge&logo=reactrouter&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.18-blue?style=for-the-badge&logo=axios&logoColor=white)

---

Frontend de uma plataforma de gestão de pessoas desenvolvido com React, TypeScript e Vite,
integrado a uma API Spring Boot para autenticação, gestão de departamentos, funcionários e cálculo salarial.

<br/>

**[Frontend](https://react-projeto-rh.vercel.app)** • **[Backend](https://projeto-rh-sqib.onrender.com)** • **[Swagger](https://projeto-rh-sqib.onrender.com/swagger-ui/swagger-ui/index.html)** • **[Repositório Backend](https://github.com/Projeto-Integrador-Gen-Grupo1/Projeto-RH)**

</div>

---

## 📑 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Arquitetura](#-arquitetura)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Rotas](#-rotas)
- [Integração com o Backend](#-integração-com-o-backend)
- [Endpoints Principais](#-endpoints-principais)
- [Como Executar](#-como-executar)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Deploy](#-deploy)
- [Equipe](#-equipe)
- [Licença](#-licença)

---

## 🧩 Sobre o Projeto

O **Ekoa** surgiu durante o Projeto Integrador da Generation Brasil como uma solução para organizar e valorizar a gestão de pessoas dentro de empresas.

O nome é inspirado na palavra **"ecoar"** — e representa o desejo de que diferentes trajetórias, vozes e identidades ressoem com força dentro de uma organização.

A plataforma foi pensada para resolver problemas reais de gestão de RH:

- **Organizar informações** de departamentos e funcionários em um só lugar.
- **Automatizar cálculos salariais**, reduzindo erros manuais.
- **Proteger dados** com autenticação por JWT e rotas privadas.
- **Oferecer visão geral** do quadro de pessoas por meio de um dashboard com indicadores.

O público-alvo são pequenas e médias empresas que buscam uma maneira simples, humana e moderna de gerenciar suas equipes.

O frontend consome uma API REST pública, com autenticação JWT e operações CRUD protegidas por token.

---

## ⚡ Funcionalidades

### Home

- Apresentação institucional com identidade visual do Ekoa.
- Comunicação sobre diversidade e inclusão.
- Acesso direto ao cadastro e à página do produto.

### Autenticação

- Cadastro de novos usuários.
- Login com envio de credenciais à API.
- Context API para gerenciar a sessão do usuário.
- Persistência da sessão via armazenamento local.
- Logout e limpeza de estado.
- Rotas protegidas com redirecionamento automático.

### Dashboard

- Visão geral com indicadores do quadro de pessoas.
- Total de usuários, departamentos e funcionários.
- Folha salarial estimada e média salarial.
- Gráfico de distribuição de funcionários por departamento.
- Últimas contratações.
- Atalhos para ações rápidas.
- Recomendações para completar cadastros.

### Departamentos

- Listar departamentos cadastrados.
- Pesquisar por nome.
- Cadastrar novos departamentos (nome e descrição).
- Editar departamentos existentes.
- Excluir departamentos com confirmação.

### Funcionários

- Listar funcionários cadastrados.
- Pesquisar por cargo.
- Cadastrar novos funcionários com dados profissionais.
- Editar funcionários existentes.
- Excluir funcionários com confirmação.
- Vinculação automática a departamentos.

### Cálculo Salarial

O salário de cada funcionário é calculado pela API com base em:

- Valor por hora informado no cadastro.
- Horas trabalhadas no período.
- Descontos aplicados.

O resultado é retornado automaticamente pela API e exibido no dashboard e na listagem.

### Usuários

- Listagem de usuários cadastrados.
- Edição do próprio perfil.
- Exclusão com confirmação.

---

## 🛠 Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| React | ^19.2.7 | Biblioteca principal para construção de interfaces |
| TypeScript | ~6.0.2 | Tipagem estática |
| Vite | ^8.1.1 | Build tool e servidor de desenvolvimento |
| React Router DOM | ^7.18.1 | Roteamento do frontend |
| Axios | ^1.18.1 | Requisições HTTP para a API |
| Context API | — | Gerenciamento de estado global (autenticação) |
| Tailwind CSS | ^4.3.2 | Estilização utilitária |
| React Toastify | ^11.1.0 | Notificações e feedback visual |
| @phosphor-icons/react | ^2.1.10 | Ícones vetoriais |
| ESLint | ^10.6.0 | Análise e padronização de código |

---

## 🏗 Arquitetura

```
┌──────────────┐
│    Usuário    │
└──────┬───────┘
       │
       ▼
┌──────────────────┐
│  Frontend React   │  (React + TypeScript + Vite)
└──────┬───────────┘
       │  Axios (HTTP)
       ▼
┌──────────────────┐
│  API Spring Boot  │  (Backend REST)
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│   Banco de Dados  │
└──────────────────┘
```

- Frontend e backend estão em **repositórios separados** (não é monorepo).
- O frontend consome uma **API publicada** na internet.
- A autenticação utiliza **JWT**.
- Todas as operações CRUD são **protegidas por token**.

---

## 📁 Estrutura de Pastas

```
src/
├── assets/
│   └── hero.png
├── components/
│   ├── equipe/
│   │   ├── CardIntegrante.tsx
│   │   └── ListaIntegrantes.tsx
│   ├── footer/
│   │   └── Footer.tsx
│   ├── navbar/
│   │   └── Navbar.tsx
│   ├── routes/
│   │   └── ProtectedRoute.tsx
│   └── ui/
│       ├── ConfirmDialog.tsx
│       ├── EmptyState.tsx
│       ├── LoadingSpinner.tsx
│       └── PhotoPicker.tsx
├── contexts/
│   ├── AuthContext.tsx
│   ├── authContextValue.ts
│   └── useAuth.ts
├── models/
│   ├── Departamento.ts
│   ├── Funcionario.ts
│   └── Usuario.ts
├── pages/
│   ├── cadastro/
│   │   └── Cadastro.tsx
│   ├── dashboard/
│   │   └── Dashboard.tsx
│   ├── departamentos/
│   │   └── Departamentos.tsx
│   ├── funcionarios/
│   │   └── Funcionarios.tsx
│   ├── home/
│   │   └── Home.tsx
│   ├── login/
│   │   └── Login.tsx
│   ├── notfound/
│   │   └── NotFound.tsx
│   ├── perfil/
│   │   └── Perfil.tsx
│   ├── produto/
│   │   └── Produto.tsx
│   ├── sobre/
│   │   └── Sobre.tsx
│   └── usuarios/
│       └── Usuarios.tsx
├── services/
│   ├── api.ts
│   ├── authService.ts
│   ├── departamentoService.ts
│   ├── funcionarioService.ts
│   └── usuarioService.ts
├── utils/
│   ├── apiError.ts
│   ├── formatters.ts
│   ├── localCache.ts
│   └── photoUpload.ts
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

---

## 🗺 Rotas

| Rota | Componente | Acesso |
|---|---|---|
| `/` | Home | Público |
| `/home` | Home | Público |
| `/sobre` | Sobre | Público |
| `/produto` | Produto | Público |
| `/login` | Login | Público |
| `/cadastro` | Cadastro | Público |
| `/dashboard` | Dashboard | Protegido |
| `/perfil` | Perfil | Protegido |
| `/usuarios/me/editar` | Usuarios | Protegido |
| `/usuarios` | Usuarios | Protegido |
| `/departamentos` | Departamentos | Protegido |
| `/funcionarios` | Funcionarios | Protegido |
| `*` | NotFound | Público |

---

## 🔗 Integração com o Backend

O frontend consome uma API REST publicada, sem utilizar JSON Server ou banco local.

| Item | Link |
|---|---|
| **Backend** | https://projeto-rh-sqib.onrender.com |
| **Swagger** | https://projeto-rh-sqib.onrender.com/swagger-ui/swagger-ui/index.html |
| **Repositório Backend** | https://github.com/Projeto-Integrador-Gen-Grupo1/Projeto-RH |

- Comunicação via **HTTP/HTTPS** com requisições REST.
- Autenticação por **JWT** enviada no cabeçalho `Authorization`.
- Não existe `db.json` no projeto — todos os dados vêm da API.

---

## 📡 Endpoints Principais

### Usuários

| Método | Rota | Descrição |
|---|---|---|
| POST | `/usuarios/cadastrar` | Cadastrar novo usuário |
| POST | `/usuarios/logar` | Autenticar e obter token |
| GET | `/usuarios` | Listar todos os usuários |
| GET | `/usuarios/{id}` | Buscar usuário por ID |
| GET | `/usuarios/usuario/{usuario}` | Buscar por nome de usuário |
| GET | `/usuarios/cpf/{cpf}` | Buscar por CPF |
| PUT | `/usuarios` | Atualizar usuário |
| DELETE | `/usuarios/{id}` | Excluir usuário |

### Departamentos

| Método | Rota | Descrição |
|---|---|---|
| GET | `/departamentos` | Listar todos |
| GET | `/departamentos/{id}` | Buscar por ID |
| GET | `/departamentos/nome/{nome}` | Buscar por nome |
| POST | `/departamentos` | Cadastrar novo |
| PUT | `/departamentos` | Atualizar |
| DELETE | `/departamentos/{id}` | Excluir |

### Funcionários

| Método | Rota | Descrição |
|---|---|---|
| GET | `/funcionarios` | Listar todos |
| GET | `/funcionarios/{id}` | Buscar por ID |
| GET | `/funcionarios/cargo/{cargo}` | Buscar por cargo |
| POST | `/funcionarios` | Cadastrar novo |
| PUT | `/funcionarios` | Atualizar |
| DELETE | `/funcionarios/{id}` | Excluir |

---

## 🚀 Como Executar

### Pré-requisitos

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (v18 ou superior)
- npm

### Instalação

```bash
git clone https://github.com/Projeto-Integrador-Gen-Grupo1/React-Projeto-RH.git

cd React-Projeto-RH

npm install

npm run dev
```

O servidor de desenvolvimento será iniciado em `http://localhost:5173`.

### Build para Produção

```bash
npm run build
```

### Visualizar Build

```bash
npm run preview
```

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com:

```env
VITE_API_URL=https://projeto-rh-sqib.onrender.com
```

| Variável | Descrição |
|---|---|
| `VITE_API_URL` | URL base da API Spring Boot utilizada pelo Axios |

---

## 🌐 Deploy

| Ambiente | Link |
|---|---|
| **Frontend** | https://react-projeto-rh.vercel.app |
| **Backend** | https://projeto-rh-sqib.onrender.com |
| **Swagger** | https://projeto-rh-sqib.onrender.com/swagger-ui/swagger-ui/index.html |

---

## 👥 Equipe

Projeto desenvolvido com metodologia **Scrum** durante o bootcamp da **Generation Brasil**.

<table>
  <tr>
    <td align="center">
      <img src="./public/images/equipe/talita-oliveira-santos.jpg" width="120" style="border-radius:8px;" /><br/>
      <b>Talita Oliveira Santos</b><br/>
      <sub>Product Owner (PO)</sub>
    </td>
    <td align="center">
      <img src="./public/images/equipe/felipe-marques.jpg" width="120" style="border-radius:8px;" /><br/>
      <b>Felipe Marques</b><br/>
      <sub>Scrum Master</sub>
    </td>
    <td align="center">
      <img src="./public/images/equipe/paulo-gustavo-brito.jpg" width="120" style="border-radius:8px;" /><br/>
      <b>Paulo Gustavo Brito</b><br/>
      <sub>QA / Tester</sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="./public/images/equipe/riane-toscano.jpg" width="120" style="border-radius:8px;" /><br/>
      <b>Riane Toscano</b><br/>
      <sub>Desenvolvedora Full Stack</sub>
    </td>
    <td align="center">
      <img src="./public/images/equipe/danielle-caricati.jpg" width="120" style="border-radius:8px;" /><br/>
      <b>Danielle Caricati</b><br/>
      <sub>Desenvolvedora Full Stack</sub>
    </td>
    <td align="center">
      <img src="./public/images/equipe/kaua-alves-cazemiro.jpg" width="120" style="border-radius:8px;" /><br/>
      <b>Kauã Alves Cazemiro</b><br/>
      <sub>Desenvolvedor Full Stack</sub>
    </td>
  </tr>
</table>

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais no âmbito do **Projeto Integrador da Generation Brasil**.

Não se destina a uso comercial.

---

# Documento de Prototipação das Classes — Ekoa

<div align="center">

**Projeto Integrador Frontend: React + TypeScript**

Grupo 01

</div>

---

## Sumário do Documento

- [1. Título do Projeto e Modelo de Negócio](#1-título-do-projeto-e-modelo-de-negócio)
- [2. Descrição Geral do Projeto](#2-descrição-geral-do-projeto)
- [3. Descrição das Entidades e Atributos](#3-descrição-das-entidades-e-atributos)
- [4. Relacionamentos](#4-relacionamentos)
- [5. Diagrama Entidade-Relacionamento](#5-diagrama-entidade-relacionamento)
- [6. Camadas da Arquitetura Frontend](#6-camadas-da-arquitetura-frontend)
- [7. Autenticação e Segurança](#7-autenticação-e-segurança)
- [8. Fluxos de Interface](#8-fluxos-de-interface)
- [9. Tecnologias Utilizadas](#9-tecnologias-utilizadas)
- [10. Integração com o Backend](#10-integração-com-o-backend)
- [11. Considerações Finais](#11-considerações-finais)

---

## 1. Título do Projeto e Modelo de Negócio

| Item | Descrição |
|---|---|
| **Projeto** | Ekoa — Soluções em RH para Diversidade |
| **Modelo de Negócio** | Plataforma de gestão de pessoas e processos de Recursos Humanos |
| **Escopo** | Frontend consumindo API REST publicada |
| **Stack Principal** | React 19 · TypeScript · Vite · Tailwind CSS |

O Ekoa posiciona-se como uma ferramenta digital para pequenas e médias empresas que buscam organizar informações de colaboradores, departamentos e acessos de forma simples, segura e inclusiva. O nome é inspirado na palavra "ecoar" — representando o desejo de que diferentes trajetórias e vozes ressoem com força dentro de uma organização.

---

## 2. Descrição Geral do Projeto

### 2.1 Finalidade

O Ekoa é uma plataforma web de gestão de pessoas que permite:

- Gerenciar acessos de usuários com autenticação por token JWT.
- Organizar departamentos da empresa.
- Cadastrar e acompanhar funcionários com seus vínculos departamentais.
- Visualizar indicadores de quadro de pessoas em um dashboard.
- Calcular salários automaticamente com base em valor por hora, horas trabalhadas e descontos.

### 2.2 Problema que Resolve

Empresas pequenas e médias frequentemente gerenciam informações de RH em planilhas ou sistemas fragmentados. Isso gera perda de dados, dificuldade de acesso e falta de visão consolidada do quadro de pessoas. O Ekoa centraliza essas informações em uma única plataforma web, com segurança e acessibilidade.

### 2.3 Público-Alvo

- Profissionais de RH que precisam organizar cadastros de funcionários e departamentos.
- Gestores que desejam visualizar indicadores do quadro de pessoas.
- Empresas que buscam uma ferramenta simples e moderna para gestão de pessoas.

### 2.4 Integração Frontend/Backend

O frontend é consumidor de uma API REST pública desenvolvida em Java com Spring Boot. Os repositórios estão separados:

| Camada | Repositório |
|---|---|
| Frontend | https://github.com/Projeto-Integrador-Gen-Grupo1/React-Projeto-RH |
| Backend | https://github.com/Projeto-Integrador-Gen-Grupo1/Projeto-RH |

O frontend não contém banco de dados local, JSON Server ou dados simulados. Todas as informações são obtidas e persistidas por meio de requisições HTTP à API publicada.

### 2.5 Estrutura Geral do Frontend

O projeto é organizado em camadas claras dentro de `src/`:

| Camada | Responsabilidade |
|---|---|
| `models/` | Interfaces TypeScript que definem as entidades de dados |
| `services/` | Módulos de comunicação com a API (Axios) |
| `contexts/` | Gerenciamento de estado global (autenticação) |
| `components/` | Componentes reutilizáveis (navbar, footer, UI) |
| `pages/` | Componentes de página (uma por rota) |
| `utils/` | Funções auxiliares (formatação, tratamento de erros, cache) |
| `assets/` | Imagens e estáticos locais |

---

## 3. Descrição das Entidades e Atributos

As entidades são definidas como interfaces TypeScript em `src/models/`.

### 3.1 Entidade Departamento

**Arquivo:** `src/models/Departamento.ts`

**Finalidade:** Representar uma área ou setor da empresa à qual os funcionários podem ser vinculados.

| Atributo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `id` | `number` | Não (auto-gerado) | Identificador único do departamento na API |
| `nome` | `string` | Sim | Nome do departamento |
| `descricao` | `string` | Não | Descrição detalhada do departamento |

**Interface principal:**

```typescript
export interface Departamento {
  id?: number;
  nome: string;
  descricao?: string;
}
```

**Interface de envio (payload):**

```typescript
export interface DepartamentoPayload {
  id?: number;
  nome: string;
  descricao?: string;
}
```

**Validações no frontend:**

- Nome: mínimo de 3 caracteres.
- Descrição: máximo de 255 caracteres.
- Nome é obrigatório no formulário de cadastro e edição.

### 3.2 Entidade Funcionário

**Arquivo:** `src/models/Funcionario.ts`

**Finalidade:** Representar uma pessoa contratada pela empresa, com dados profissionais e vínculo departamental.

| Atributo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `id` | `number` | Não (auto-gerado) | Identificador único do funcionário |
| `nome` | `string` | Sim | Nome completo do funcionário |
| `cargo` | `string` | Sim | Cargo ou função exercida |
| `salario` | `number` | Não (calculado) | Salário retornado pela API |
| `valorHora` | `number` | Sim | Valor cobrado por hora trabalhada |
| `horasTrabalhadas` | `number` | Sim | Quantidade de horas trabalhadas no período |
| `descontos` | `number` | Sim | Valor total de descontos aplicados |
| `dataContratacao` | `string` | Sim | Data de contratação (formato YYYY-MM-DD) |
| `departamento` | `Partial<Departamento>` | Sim | Departamento ao qual o funcionário está vinculado |

**Interface principal:**

```typescript
export interface Funcionario {
  id?: number;
  nome: string;
  cargo: string;
  salario?: number;
  valorHora?: number;
  horasTrabalhadas?: number;
  descontos?: number;
  dataContratacao?: string;
  departamento?: Partial<Departamento>;
}
```

**Interface de envio (payload):**

```typescript
export interface FuncionarioPayload {
  id?: number;
  nome: string;
  cargo: string;
  valorHora: number;
  horasTrabalhadas: number;
  descontos: number;
  dataContratacao: string;
  departamento: Departamento;
}
```

**Cálculo salarial:**

O salário é calculado pela API com base na fórmula:

```
salario = (valorHora × horasTrabalhadas) − descontos
```

O frontend também exerce esse cálculo localmente no Dashboard para exibir a folha salarial estimada:

```typescript
function getFuncionarioSalary(funcionario: Funcionario): number {
  const valorHora = funcionario.valorHora ?? 0;
  const horasTrabalhadas = funcionario.horasTrabalhadas ?? 0;
  const descontos = funcionario.descontos ?? 0;
  return Math.max(0, valorHora * horasTrabalhadas - descontos);
}
```

**Validações no frontend:**

- Nome: mínimo de 3 caracteres.
- Cargo: mínimo de 3 caracteres.
- Departamento: seleção obrigatória.
- Data de contratação: obrigatória.
- Valor por hora: número positivo.
- Horas trabalhadas: número inteiro positivo.
- Descontos: número positivo (padrão 0).

### 3.3 Entidade Usuário

**Arquivo:** `src/models/Usuario.ts`

**Finalidade:** Representar uma pessoa com acesso à plataforma. O campo `usuario` corresponde ao e-mail utilizado para login.

| Atributo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `id` | `number` | Não (auto-gerado) | Identificador único do usuário |
| `nome` | `string` | Sim | Nome completo do usuário |
| `cpf` | `string` | Não | CPF (formato numérico, 11 dígitos) |
| `usuario` | `string` | Sim | E-mail de acesso (usado como login) |
| `senha` | `string` | Sim | Senha de acesso |
| `foto` | `string` | Não | URL ou base64 da foto de perfil |
| `funcionarios` | `Funcionario[]` | Não | Lista de funcionários associados |

**Interface principal:**

```typescript
export interface Usuario {
  id?: number;
  nome: string;
  cpf?: string;
  usuario: string;
  senha?: string;
  foto?: string;
  funcionarios?: Funcionario[];
}
```

**Interface de cadastro:**

```typescript
export interface UsuarioCadastro {
  nome: string;
  cpf?: string;
  usuario: string;
  senha: string;
  foto?: string;
}
```

**Interface de atualização:**

```typescript
export interface UsuarioAtualizacao extends UsuarioCadastro {
  id: number;
}
```

**Validações no frontend:**

- Nome: obrigatório.
- E-mail: formato válido (regex `^[^\s@]+@[^\s@]+\.[^\s@]+$`).
- Senha: mínimo de 6 caracteres.
- Confirmar senha: deve ser igual à senha.
- CPF: opcional, mas se informado deve ter 11 dígitos válidos.

### 3.4 Entidade UsuarioLogin

**Arquivo:** `src/models/Usuario.ts`

**Finalidade:** Representar as credenciais enviadas para autenticação.

| Atributo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `usuario` | `string` | Sim | E-mail de acesso |
| `senha` | `string` | Sim | Senha de acesso |

```typescript
export interface UsuarioLogin {
  usuario: string;
  senha: string;
}
```

### 3.5 Entidade UsuarioAutenticado

**Arquivo:** `src/models/Usuario.ts`

**Finalidade:** Representar o usuário após autenticação bem-sucedida, contendo o token JWT e dados de sessão.

| Atributo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `id` | `number` | Não | Identificador do usuário |
| `nome` | `string` | Sim | Nome do usuário |
| `usuario` | `string` | Sim | E-mail de acesso |
| `foto` | `string` | Não | URL da foto de perfil |
| `token` | `string` | Sim | Token JWT para autenticação |

```typescript
export interface UsuarioAutenticado {
  id?: number;
  nome: string;
  usuario: string;
  foto?: string;
  token: string;
}
```

O token é armazenado no `localStorage` sob a chave `projeto-rh:usuario` e enviado automaticamente em todas as requisições autenticadas via cabeçalho `Authorization`.

---

## 4. Relacionamentos

### 4.1 Departamento ↔ Funcionário

- Um **departamento** pode ter **vários funcionários** vinculados a ele.
- Cada **funcionário** pertence a **um departamento**.
- O vínculo é estabelecido por meio do atributo `departamento` dentro da entidade `Funcionario`.

### 4.2 Usuário ↔ Autenticação

- Um **usuário** realiza **cadastro** e **login** na plataforma.
- Após o login, a API retorna um **token JWT** que identifica a sessão autenticada.
- O token é armazenado localmente e utilizado em todas as requisições a rotas protegidas.

### 4.3 Usuário ↔ Dados Protegidos

- Todas as operações de CRUD (usuários, departamentos, funcionários) são **protegidas por token**.
- Usuários não autenticados só têm acesso às páginas públicas (Home, Sobre, Plataforma, Login, Cadastro).
- A expiração do token é detectada pelo interceptor de resposta e provoca logout automático.

---

## 5. Diagrama Entidade-Relacionamento

Representação textual das entidades e seus relacionamentos:

```text
┌─────────────────────────────────────────────────────────────┐
│                         USUÁRIO                            │
├─────────────────────────────────────────────────────────────┤
│ id            : number      (PK, auto-gerado)              │
│ nome          : string      (obrigatório)                  │
│ cpf           : string      (opcional, 11 dígitos)         │
│ usuario       : string      (e-mail, login)                │
│ senha         : string      (obrigatório)                  │
│ foto          : string      (URL ou base64, opcional)      │
└─────────────────────────────────────────────────────────────┘
                          │
                          │ 1:N (usuários cadastram e acessam)
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                       DEPARTAMENTO                         │
├─────────────────────────────────────────────────────────────┤
│ id            : number      (PK, auto-gerado)              │
│ nome          : string      (obrigatório, ≥3 caracteres)   │
│ descricao     : string      (opcional, ≤255 caracteres)    │
└─────────────────────────────────────────────────────────────┘
                          │
                          │ 1:N (um departamento, vários funcionários)
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                       FUNCIONÁRIO                          │
├─────────────────────────────────────────────────────────────┤
│ id                : number      (PK, auto-gerado)          │
│ nome              : string      (obrigatório, ≥3 chars)    │
│ cargo             : string      (obrigatório, ≥3 chars)    │
│ salario           : number      (calculado pela API)       │
│ valorHora         : number      (obrigatório)              │
│ horasTrabalhadas  : number      (obrigatório, inteiro)     │
│ descontos         : number      (obrigatório, padrão 0)    │
│ dataContratacao   : string      (obrigatório, YYYY-MM-DD)  │
│ departamento_id   : number      (FK → Departamento)        │
└─────────────────────────────────────────────────────────────┘
```

**Fórmula de cálculo salarial:**

```
salário = (valorHora × horasTrabalhadas) − descontos
```

---

## 6. Camadas da Arquitetura Frontend

### 6.1 Models (`src/models/`)

Definem as interfaces TypeScript que representam as entidades de dados trocadas entre frontend e API.

| Arquivo | Entidades |
|---|---|
| `Departamento.ts` | `Departamento`, `DepartamentoPayload` |
| `Funcionario.ts` | `Funcionario`, `FuncionarioPayload` |
| `Usuario.ts` | `Usuario`, `UsuarioCadastro`, `UsuarioAtualizacao`, `UsuarioLogin`, `UsuarioAutenticado` |

### 6.2 Services (`src/services/`)

Responsáveis pela comunicação HTTP com a API. Cada service encapsula as requisições de uma entidade.

| Arquivo | Responsabilidade |
|---|---|
| `api.ts` | Instância central do Axios, configuração de base URL, interceptores de request/response |
| `authService.ts` | Autenticação (`login`, `cadastrar`) |
| `usuarioService.ts` | CRUD de usuários (listar, buscar, atualizar, excluir) |
| `departamentoService.ts` | CRUD de departamentos (listar, criar, pesquisar, atualizar, excluir) |
| `funcionarioService.ts` | CRUD de funcionários (listar, criar, pesquisar, atualizar, excluir) |

**Configuração do Axios (`api.ts`):**

- Base URL obtida de `VITE_API_URL` (variável de ambiente).
- Interceptor de request: insere token JWT no cabeçalho `Authorization` automaticamente, exceto em endpoints públicos (`/usuarios/logar`, `/usuarios/cadastrar`).
- Interceptor de response: detecta erros 401/403, remove token do localStorage e dispara evento `auth:expired` para logout automático.

### 6.3 Contexts (`src/contexts/`)

Gerenciam o estado global de autenticação utilizando Context API do React.

| Arquivo | Responsabilidade |
|---|---|
| `AuthContext.tsx` | Provider que encapsula a aplicação, gerencia estado do usuário logado |
| `authContextValue.ts` | Definição do contexto e seus tipos |
| `useAuth.ts` | Hook personalizado para acessar o contexto de autenticação |

**Funcionalidades do AuthContext:**

- `login(credenciais)`: autentica o usuário e persiste dados no localStorage.
- `logout()`: remove dados do localStorage e limpa o estado.
- `atualizarUsuarioLogado(dados)`: atualiza parcialmente os dados do usuário logado.
- `usuario`: dados do usuário autenticado.
- `isAuthenticated`: booleano indicando se há sessão ativa.
- Escuta evento `auth:expired` para tratar expiração de sessão.

### 6.4 Components (`src/components/`)

Componentes reutilizáveis compartilhados entre páginas.

| Componente | Arquivo | Função |
|---|---|---|
| `Navbar` | `components/navbar/Navbar.tsx` | Barra de navegação superior com links públicos/privados, menu mobile, botão de logout |
| `Footer` | `components/footer/Footer.tsx` | Rodapé com informações do projeto e links |
| `ProtectedRoute` | `components/routes/ProtectedRoute.tsx` | Rota protegida que redireciona para `/login` se não autenticado |
| `ConfirmDialog` | `components/ui/ConfirmDialog.tsx` | Modal de confirmação para ações de exclusão |
| `EmptyState` | `components/ui/EmptyState.tsx` | Estado vazio quando não há registros |
| `LoadingSpinner` | `components/ui/LoadingSpinner.tsx` | Indicador de carregamento com texto |
| `PhotoPicker` | `components/ui/PhotoPicker.tsx` | Seletor de foto com preview, resize automático e remoção |
| `ListaIntegrantes` | `components/equipe/ListaIntegrantes.tsx` | Grid de cards da equipe no rodapé da página Sobre |
| `CardIntegrante` | `components/equipe/CardIntegrante.tsx` | Card individual de integrante com foto, nome e links |

### 6.5 Pages (`src/pages/`)

Cada página corresponde a uma rota da aplicação.

| Página | Arquivo | Acesso | Descrição |
|---|---|---|---|
| Home | `pages/home/Home.tsx` | Público | Página inicial com apresentação institucional, hero image e chamada para ação |
| Sobre | `pages/sobre/Sobre.tsx` | Público | Página institucional com valores e lista de integrantes |
| Produto | `pages/produto/Produto.tsx` | Público | Apresentação das funcionalidades da plataforma |
| Login | `pages/login/Login.tsx` | Público | Formulário de autenticação com e-mail e senha |
| Cadastro | `pages/cadastro/Cadastro.tsx` | Público | Formulário de criação de conta |
| Dashboard | `pages/dashboard/Dashboard.tsx` | Protegido | Painel com indicadores, gráficos e atalhos |
| Usuários | `pages/usuarios/Usuarios.tsx` | Protegido | Listagem, busca, edição e exclusão de usuários |
| Perfil | `pages/perfil/Perfil.tsx` | Protegido | Edição do perfil do usuário logado |
| Departamentos | `pages/departamentos/Departamentos.tsx` | Protegido | CRUD de departamentos |
| Funcionários | `pages/funcionarios/Funcionarios.tsx` | Protegido | CRUD de funcionários |
| NotFound | `pages/notfound/NotFound.tsx` | Público | Página 404 para rotas inexistentes |

### 6.6 Utils (`src/utils/`)

Funções auxiliares puras, sem dependência de componentes React.

| Arquivo | Funções |
|---|---|
| `formatters.ts` | `formatCurrency`, `formatDate`, `maskCpf`, `isValidCpf`, `generateValidCpf`, `getCpfForApi`, `onlyDigits` |
| `apiError.ts` | `getApiErrorMessage`, `isNotFoundError`, `isServerError` — tratamento centralizado de erros da API |
| `localCache.ts` | `getCachedList`, `mergeCachedList`, `upsertCachedItem`, `removeCachedItem` — operações de cache no localStorage |
| `photoUpload.ts` | `readPhotoFile`, `isEmbeddedPhoto`, `getPhotoForApi` — leitura, validação e resize de fotos (max 640px, 5MB, JPEG/PNG/WebP) |

---

## 7. Autenticação e Segurança

### 7.1 Fluxo de Autenticação

1. O usuário preenche e-mail e senha no formulário de Login.
2. O frontend envia `POST /usuarios/logar` com as credenciais.
3. A API retorna um objeto `UsuarioAutenticado` contendo `id`, `nome`, `usuario`, `foto` e `token`.
4. O token é armazenado no `localStorage` sob a chave `projeto-rh:usuario`.
5. O estado `isAuthenticated` é atualizado no Context.
6. O usuário é redirecionado para `/dashboard`.

### 7.2 Interceptores HTTP

**Request:**

- Antes de cada requisição, o interceptor verifica se existe um token armazenado.
- Se existir e o endpoint não for público, o token é inserido no cabeçalho `Authorization` com o prefixo `Bearer`.
- Endpoints públicos (`/usuarios/logar`, `/usuarios/cadastrar`) não recebem o token.

**Response:**

- Se a API retornar status 401 ou 403 e o usuário possuir token armazenado, o interceptor remove o token do localStorage e dispara o evento `auth:expired`.
- O AuthContext escuta esse evento e faz logout automático com mensagem de sessão expirada.

### 7.3 Rotas Protegidas

O componente `ProtectedRoute` verifica `isAuthenticated` antes de renderizar o conteúdo da rota. Se o usuário não estiver autenticado, é redirecionado para `/login` com preservação da rota original no state.

### 7.4 Tratamento de Sessão

- A sessão é persistida no `localStorage`.
- Na inicialização da aplicação, o `AuthContext` tenta ler os dados do `localStorage`.
- Se os dados estiverem corretos, a sessão é restaurada silenciosamente.
- Se estiverem corrompidos, são removidos automaticamente.

### 7.5 Senhas

- Senhas nunca são exibidas na interface (campo `type="password"` com toggle de visibilidade).
- Senhas nunca são armazenadas no navegador além do envio à API.
- Na edição de perfil, a senha antiga não é reaproveitada — o usuário deve informar a senha novamente para confirmar a alteração.

---

## 8. Fluxos de Interface

### 8.1 Home (`/`)

- Hero section com imagem de capa e chamada para ação.
- Três cards de diferenciais: "Pessoas no centro", "Dados com cuidado", "Gestão integrada".
- Botões para cadastro e para conhecer a plataforma.

### 8.2 Login (`/login`)

- Formulário com campos e-mail e senha.
- Validação client-side antes do envio.
- Toggle para mostrar/ocultar senha.
- Redirecionamento automático para `/dashboard` se já autenticado.
- Feedback visual com toast notifications (sucesso/erro).

### 8.3 Cadastro (`/cadastro`)

- Formulário com nome, CPF (opcional), e-mail, foto, senha e confirmação de senha.
- Validação de formato de e-mail, comprimento mínimo da senha e igualdade de senhas.
- Geração automática de CPF válido se não informado (para fins de demonstração).
- Redirecionamento para `/login` após cadastro bem-sucedido.

### 8.4 Dashboard (`/dashboard`)

- Hero com saudação personalizada e total de registros.
- Quatro cards de indicadores: Usuários, Departamentos, Funcionários, Folha Estimada.
- Seção de atalhos para ações rápidas.
- Seção de recomendações para completar cadastros.
- Gráfico de barras com cadastros por área.
- Gráfico de rosca com distribuição de funcionários por departamento.
- Indicadores rápidos (média por departamento, base de acessos).
- Lista de últimas contratações.

### 8.5 Departamentos (`/departamentos`)

- Layout dividido: formulário à esquerda, listagem à direita.
- Formulário com nome (obrigatório) e descrição (opcional).
- Validação: nome ≥ 3 caracteres, descrição ≤ 255 caracteres.
- Listagem com busca por nome, edição inline e exclusão com confirmação.
- Componentes auxiliares: `LoadingSpinner`, `EmptyState`, `ConfirmDialog`.

### 8.6 Funcionários (`/funcionarios`)

- Layout dividido: formulário à esquerda, listagem à direita.
- Formulário com nome, cargo, departamento (select), data de contratação, valor por hora, horas trabalhadas e descontos.
- Validação completa dos campos numéricos.
- Listagem com busca por cargo, edição inline e exclusão com confirmação.
- Cada card exibe dados profissionais e salário calculado.

### 8.7 Usuários (`/usuarios`)

- Listagem em tabela (desktop) e cards (mobile).
- Busca por e-mail ou CPF.
- Edição inline com formulário completo (nome, e-mail, CPF, foto, senha).
- Exclusão com confirmação.
- Se o usuário excluído for o logado, a sessão é encerrada automaticamente.

### 8.8 Perfil (`/perfil`)

- Layout dividido: preview do perfil à esquerda, formulário à direita.
- Exibição de foto, nome, e-mail e CPF formatado.
- Formulário de edição com todos os campos.
- Senha obrigatória para confirmar alterações.

---

## 9. Tecnologias Utilizadas

| Tecnologia | Versão | Uso no Projeto |
|---|---|---|
| React | ^19.2.7 | Biblioteca principal para construção de interfaces |
| TypeScript | ~6.0.2 | Tipagem estática em todo o código |
| Vite | ^8.1.1 | Build tool e servidor de desenvolvimento |
| React Router DOM | ^7.18.1 | Roteamento do frontend com rotas protegidas |
| Axios | ^1.18.1 | Requisições HTTP com interceptores |
| Context API | — | Gerenciamento de estado global (autenticação) |
| Tailwind CSS | ^4.3.2 | Estilização utilitária com design system customizado |
| React Toastify | ^11.1.0 | Notificações de feedback (sucesso, erro, aviso) |
| @phosphor-icons/react | ^2.1.10 | Ícones vetoriais em toda a interface |
| ESLint | ^10.6.0 | Análise e padronização de código |

**Design System Customizado (Tailwind CSS):**

O projeto define um conjunto de cores próprio no `index.css`utilizando `@theme`:

| Família | Uso |
|---|---|
| `ekoa-paper` | Cor de fundo geral (#f8f6fb) |
| `ekoa-navy` | Cor principal de textos (#18105a) |
| `ekoa-purple` | Cor de destaque e ações (#7d3f98) |
| `ekoa-magenta` | Cor de seções secundárias (#b42b8d) |
| `ekoa-gold` | Cor de destaques e badges (#dda12a) |
| `ekoa-blue` | Cor de elementos informativos (#155a92) |

---

## 10. Integração com o Backend

### 10.1 Endpoints Consumidos

**Autenticação:**

| Método | Rota | Descrição | Autenticação |
|---|---|---|---|
| POST | `/usuarios/logar` | Autenticar e obter token | Não |
| POST | `/usuarios/cadastrar` | Cadastrar novo usuário | Não |

**Usuários:**

| Método | Rota | Descrição | Autenticação |
|---|---|---|---|
| GET | `/usuarios` | Listar todos | Sim |
| GET | `/usuarios/{id}` | Buscar por ID | Sim |
| GET | `/usuarios/usuario/{usuario}` | Buscar por nome de usuário | Sim |
| GET | `/usuarios/cpf/{cpf}` | Buscar por CPF | Sim |
| PUT | `/usuarios` | Atualizar usuário | Sim |
| DELETE | `/usuarios/{id}` | Excluir usuário | Sim |

**Departamentos:**

| Método | Rota | Descrição | Autenticação |
|---|---|---|---|
| GET | `/departamentos` | Listar todos | Sim |
| GET | `/departamentos/{id}` | Buscar por ID | Sim |
| GET | `/departamentos/nome/{nome}` | Buscar por nome | Sim |
| POST | `/departamentos` | Cadastrar novo | Sim |
| PUT | `/departamentos` | Atualizar | Sim |
| DELETE | `/departamentos/{id}` | Excluir | Sim |

**Funcionários:**

| Método | Rota | Descrição | Autenticação |
|---|---|---|---|
| GET | `/funcionarios` | Listar todos | Sim |
| GET | `/funcionarios/{id}` | Buscar por ID | Sim |
| GET | `/funcionarios/cargo/{cargo}` | Buscar por cargo | Sim |
| POST | `/funcionarios` | Cadastrar novo | Sim |
| PUT | `/funcionarios` | Atualizar | Sim |
| DELETE | `/funcionarios/{id}` | Excluir | Sim |

### 10.2 Documentação da API

| Recurso | Link |
|---|---|
| Backend | https://projeto-rh-sqib.onrender.com |
| Swagger | https://projeto-rh-sqib.onrender.com/swagger-ui/swagger-ui/index.html |
| Repositório Backend | https://github.com/Projeto-Integrador-Gen-Grupo1/Projeto-RH |

### 10.3 Variável de Ambiente

```env
VITE_API_URL=https://projeto-rh-sqib.onrender.com
```

A variável `VITE_API_URL` define a base URL da API. Se não estiver definida, o fallback é `https://projeto-rh-sqib.onrender.com/`.

---

## 11. Considerações Finais

O projeto Ekoa foi desenvolvido durante o Projeto Integrador da Generation Brasil com o objetivo de aplicar na prática os conhecimentos adquiridos ao longo do bootcamp.

### Principais decisões técnicas:

- **Separação de repositórios:** frontend e backend estão em repositórios distintos, simulando um ambiente real de desenvolvimento.
- **Consumo de API real:** o frontend não utiliza JSON Server ou banco local — todas as requisições são direcionadas à API publicada.
- **Autenticação JWT:** implementada com interceptores do Axios para garantir que todas as requisições autenticadas sejam tratadas de forma centralizada.
- **Design system customizado:** cores, tipografia e espaçamentos seguem uma identidade visual própria definida via Tailwind CSS.
- **Acessibilidade:** formulários com labels associados, mensagens de erro descritivas, estados de carregamento e componentes com roles semânticos.
- **Experiência do usuário:** feedback visual imediato via toast notifications, estados vazios informativos e confirmação antes de ações destrutivas.

### Papéis da equipe:

| Integrante | Papel |
|---|---|
| Talita Oliveira Santos | Product Owner (PO) |
| Felipe Marques | Scrum Master |
| Paulo Gustavo Pereira de Souza Brito | QA / Tester |
| Danielle Karen Mendes Caricati | Desenvolvedora |
| Riane Toscano | Desenvolvedora |
| Kauã Alves Cazemiro | Desenvolvedor |

---

*São Paulo, Julho de 2026*
