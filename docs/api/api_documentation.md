# Documentação da API

A API segue o padrão RESTful e retorna dados em formato JSON.

**Base URL (Dev):** `http://localhost:3001`

---

## Endpoints

### 1. Listar Produtos

Retorna a lista completa de produtos disponíveis na vitrine.

* **URL:** `/api/products`
* **Método:** `GET`
* **Resposta de Sucesso (200 OK):**

```json
[
  {
    "id": 1,
    "title": "Vaso de Cerâmica",
    "price": 45.00,
    "artisan": "Dona Maria",
    "image": "url_da_imagem..."
  },
  {
    "id": 2,
    "title": "Tapete de Crochê",
    "price": 120.00,
    "artisan": "Sr. João",
    "image": "url_da_imagem..."
  }
]
````

### 2\. Health Check

Verifica se a API está online.

  * **URL:** `/`
  * **Método:** `GET`
  * **Resposta:** String simples confirmando status.