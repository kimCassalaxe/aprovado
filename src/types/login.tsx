export type LoginProps = {
  email: string;
  senha: string;
};
export type UserProps = {
  email: string;
  password: string;
  name: string;
};
export type Question = {
    categoria:string,
    pergunta: string,
    alternativa: {
      A:string,
      B:string,
      C:string,
      D:string,
    },
    resposta_correta:string,
  }