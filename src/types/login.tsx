export type LoginProps = {
  email: string;
  senha: string;
};
export type UserProps = {
  email: string;
  password: string;
  name: string;
};
export type User = {
  id:number;
  email: string;
  password: string;
  name: string;
};
export type Questions = {
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
export type Question = {
  id?:number;
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
  export type Answer = {
    resposta:number,
    resposta_do_Usuario:string,
  }