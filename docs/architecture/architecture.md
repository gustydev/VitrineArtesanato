# Arquitetura do Sistema

O projeto segue uma arquitetura **Cliente-Servidor** (Client-Server), separando claramente as responsabilidades de interface e processamento de dados.

## Diagrama de Componentes

```mermaid
graph TD
    Client[Frontend (React)] <-->|HTTP/JSON| Server[Backend (Node/Express)]
    Server -->|Leitura/Escrita| Mock[Dados em Memória (Array JS)]
````
## Descrição dos Componentes

### 1\. Frontend (Camada de Apresentação)

  * **Tecnologia:** React.js
  * **Responsabilidade:** Renderizar a interface, gerenciar o estado da vitrine e redirecionar o usuário para o WhatsApp.
  * **Comunicação:** Consome a API REST disponibilizada pelo Backend.

### 2\. Backend (Camada de Aplicação)

  * **Tecnologia:** Node.js com Express
  * **Responsabilidade:** Fornecer os dados dos produtos via endpoints JSON e gerenciar as regras de negócio.
  * **Serviço:** Roda na porta padrão 3001.

### 3\. Camada de Dados (Simulação)

  * **Tecnologia:** Array de Objetos (JavaScript).
  * **Justificativa:** Para esta etapa de validação (N708), optou-se por dados voláteis para garantir a portabilidade e facilidade de execução por parte dos avaliadores, eliminando a necessidade de configuração de ambiente PostgreSQL local.
  * **Modelo Relacional:** A estrutura final para produção já está modelada no arquivo `database/schema.sql`.