# Challenge - Culinary Recipes

## Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- IDE (recomendada: [VSCode](https://code.visualstudio.com/))

## Como Rodar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/iuriyuri/Challenge-Cullinary-Recipes.git
   
2. **Verifique o formato do arquivo entrypoint.sh:**

No VSCode, abra o arquivo backend/entrypoint.sh.

Verifique no canto inferior direito se o formato de final de linha está como LF.

Caso esteja CRLF, altere para LF clicando sobre ele.

3. **Construa os Containers:**
  ```bash
  docker-compose build --no-cache
```
4. **Inicie os Serviços:**
  ```bash
  docker-compose up
```
## Acessos:
### Frontend pode ser acessado em http://localhost:5173
### Backend pode ser acessado em http://localhost:3000
