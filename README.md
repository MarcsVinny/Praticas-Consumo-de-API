# Práticas de Consumo de API — ADS

Este repositório contém as atividades práticas de consumo de API desenvolvidas para a disciplina de Programação para Web do curso de Análise e Desenvolvimento de Sistemas.

## 🚀 Tecnologias Utilizadas

- **React.js**: Biblioteca principal para construção da interface.
- **TypeScript**: Superset do JavaScript para tipagem estática e segurança do código.
- **Axios**: Cliente HTTP para realizar requisições às APIs externas.
- **Vite**: Ferramenta de build e servidor de desenvolvimento.
- **CSS3**: Estilização customizada com Grid e Flexbox.

## 📋 Atividades Desenvolvidas

### Atividade 1: Gestão de Usuários
- **Objetivo**: Listar usuários de uma API e exibir detalhes ao selecionar.
- **Implementação**: 
  - Uso do endpoint `https://jsonplaceholder.typicode.com/users`.
  - Componentização: `CardUsuario` (lista) e `DetalhesUsuario` (informações gerais).
  - Gerenciamento de estado com `useState` e `useEffect`.

### Atividade 2: Galeria de Fotos
- **Objetivo**: Criar um grid de fotos com tratamento de carregamento e erro.
- **Implementação**:
  - Uso do endpoint `https://jsonplaceholder.typicode.com/photos?_limit=10`.
  - Layout responsivo em Grid.
  - Tratamento visual para estados de "Carregando" e "Erro na requisição".

## 🛠️ Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/MarcsVinny/Praticas-Consumo-de-API.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

---
**Desenvolvido por:** [MarcsVinny](https://github.com/MarcsVinny)
