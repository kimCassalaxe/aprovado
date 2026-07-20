import { Color, text_Secondary } from "@/thems/color";
import { LoginProps, UserProps } from "@/types/login";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { View,Text,StyleSheet, TextInput, TouchableOpacity } from "react-native";



function handleSigin(user:UserProps, router:any){
  if(user.email){
    return "email invalido";
  }if(user.name.length<3){
    return "nome invalido";
  }if(user.password.length<6){
    return "senha invalida";
  }
  if(!user.email || !user.name || !user.password){
    return('Preencha todos os campos');
  }
  router.push('/home');
  return user
}
function handleValidadeEmail(email:string,setValidateEmail:(valuer:boolean)=>void) {
  console.log(email);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(emailRegex.test(email)){
    setValidateEmail(true);
  }else{
    setValidateEmail(false);
  }
}
export default function SignIn(){
  const router = useRouter();
  const [validateEmail,setValidateEmail] = useState(false);
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Sig In</Text>
      <View style={styles.inputContainer}> 
        <Text style={styles.inputLabel}>Name Completo</Text>   
        <TextInput style={styles.input} placeholder="ex: Luis Silva" value={name} onChangeText={(text) => { setName(text); }} />
      </View>
      <View style={styles.inputContainer}> 
        <Text style={styles.inputLabel}>Email </Text>   
        <TextInput style={styles.input} placeholder="ex: luis.silva@email.com" value={email} onChangeText={(text) => { setEmail(text); handleValidadeEmail(email, setValidateEmail); }} />

      </View>
      <View style={styles.inputContainer}> 
        <Text style={styles.inputLabel}>Senha</Text>   
        <TextInput style={styles.input} placeholder="senha" value={password} onChangeText={(text) => { setPassword(text); }} />
      </View>

    <Text style={styles.validateInput}>{validateEmail?"email valido":"email invalido"}</Text> 

    <View style={styles.containerBtn}>
      <TouchableOpacity style={[styles.BtnOne, styles.Btn]} onPress={() => handleSigin({name, email, password},router)}>
                <Text style={[styles.BtnText,styles.BtnOneText]}>Criar minha conta</Text>
      </TouchableOpacity>
      <Text >Uo</Text>
       <TouchableOpacity style={[styles.BtnTwe, styles.Btn]} onPress={() =>{ console.log('Login com o google pressed')}}>
        <Text style={[styles.BtnText,styles.BtnTweText]}>Criar com o google</Text>
      </TouchableOpacity>
    </View>
    <Text>Ja tem uma conta <Link href="/login"style={{fontWeight: 'bold',color:Color.btn}}>Logar</Link></Text>
    </View>
  );

  
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    color: Color.Primary,
    fontWeight: 'bold',
  },
  inputContainer:{
    width: '100%',
    marginTop: 20,
  },
  inputLabel:{
    marginBottom: 5,
    color: text_Secondary.color,
    fontSize: text_Secondary.size,
    fontFamily: text_Secondary.fontType,
  },

  input: {
    height: 40,
    borderColor: Color.borderColor,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    color:text_Secondary.color,
  },
  validateInput:{
    width:"100%",
    marginTop: 5,
    textAlign: 'left',
    color: 'red',
    fontSize:10,
    marginBottom: 5,
  },
  containerBtn:{
    width:"100%",
    marginTop: 20,
    marginBottom: 20,
    gap:20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Btn:{
    width:"100%",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.btn,
    boxShadow: '2px 4px 4px rgba(16, 22, 83, 0.1)',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BtnOne:{
    backgroundColor: Color.btn,
    color:"#fff",
  },
  BtnTwe:{
    backgroundColor: Color.white,
    color:"#fff",
  },
  BtnText:{
    fontWeight: 'bold',
    fontSize: 18,
  },
  BtnOneText:{
    color:"#fff",
  },
  BtnTweText:{
    color:Color.btn,
  }
});