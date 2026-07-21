import dados from '@/base/user.json';
import { User } from '@/types/login';
import { useState } from 'react';
export function UserController(){

  const getAllUser= ()=>{
    const [userList,setUserList] = useState<User[]>([]);
    try {
      if( dados) setUserList(dados.User);
      return userList; 
    } catch (error) {
      return console.log(error);
    }
    return "lista vazia"; 
  }
  const getUser= (password:string,email:string)=>{
    try {
      const list = dados.User 
      if(!list) return "lista vazia";
      list.forEach(el => {
        if(el.email === email && el.password === password)
          return el;
        
      });
      return null;
    } catch (error) {
      console.log(error)
    }
  }

}