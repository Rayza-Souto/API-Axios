import axios from "axios"; //Importamos o Axios da biblioteca axios.

const api = axios.create({ //Criamos a variável chamada apie atribuímos a ela axios, que será o início e a estrutura base do serviço de API que consumiremos.
  baseURL: "https://api.github.com", //Dentro da criação do Axios, temos uma propriedade chamada baseURL. Ela recebe o endpoint de sua aplicação, ou seja, a URL da API que será acessada. Neste exemplo está o serviço do GitHub.
});

api.interceptors.request.use(async config => { //Aqui criamos um interceptor para a requisição. Ele é responsável por interceptar a requisição antes de ser enviada e adicionar o token de autenticação no cabeçalho da requisição.
  // Declaramos um token manualmente para teste.
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9"; //Em um projeto real, você deve buscar o token do usuário logado no localStorage ou em um contexto de autenticação.

  if (token) { //Verificamos se o token existe.
    api.defaults.headers.authorization = `Bearer ${token}`; //Se existir, adicionamos o token no cabeçalho da requisição.
  }

  return config; //Retornamos a configuração da requisição.
});

export default api; //Nesta parte do código exportaremos nossa variável apipara ser importada em qualquer parte do nosso projeto.