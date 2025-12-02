# Arquitetura do Sistema

O projeto segue uma arquitetura **Cliente-Servidor** (Client-Server), separando claramente as responsabilidades de interface e processamento de dados.

## Diagrama de Componentes

```mermaid
graph TD
    Client[Frontend (React)] <-->|HTTP/JSON| Server[Backend (Node/Express)]
    Server <-->|SQL| DB[(Database PostgreSQL)]
```

## Descrição dos Componentes

### 1\. Frontend (Camada de Apresentação)

  * **Tecnologia:** React.js
  * **Responsabilidade:** Renderizar a interface, gerenciar o estado da vitrine e redirecionar o usuário para o WhatsApp.
  * **Comunicação:** Consome a API REST disponibilizada pelo Backend.

### 2\. Backend (Camada de Aplicação)

  * **Tecnologia:** Node.js com Express
  * **Responsabilidade:** Fornecer os dados dos produtos via endpoints JSON e gerenciar as regras de negócio.
  * **Serviço:** Roda na porta padrão 3001.

### 3\. Banco de Dados (Camada de Dados)

  * **Tecnologia:** PostgreSQL
  * **Responsabilidade:** Persistência dos dados de produtos e artesãos.
  * **Estrutura:** Tabelas relacionais definidas em `database/schema.sql`.