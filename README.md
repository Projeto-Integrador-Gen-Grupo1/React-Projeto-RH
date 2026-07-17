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

## 📘 Documento de Prototipação das Classes

A documentação completa do projeto está disponível em:

**[Grupo 01 — Ekoa Documento Prototipação de Classes](https://drive.google.com/file/d/1heBq1ZAsR9qWQ76w3E0GND5EFTUO9yR9/view?usp=sharing)**

---

## 🗂 Diagrama Entidade-Relacionamento

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
