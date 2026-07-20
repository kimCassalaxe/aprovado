import { Color, text_Secondary } from "@/thems/color";
import { LoginProps } from "@/types/login";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { View,Text,StyleSheet, TextInput, TouchableOpacity } from "react-native";



function handleLogin(login:LoginProps, router:any){
  if(login.email && login.senha){
    router.push('/(tabs)/Quiz');
  }else{
    console.log('Preencha todos os campos');
  }

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
export default function Login(){
  const router = useRouter();
  const [validateEmail,setValidateEmail] = useState(false);
  const [email, setEmail] = useState(''); 
  const [senha, setSenha] = useState('');

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}> 
        <Text style={styles.inputLabel}>Email </Text>   
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(text) => { setEmail(text); handleValidadeEmail(email, setValidateEmail); }} />
        
      </View>
      <View style={styles.inputContainer}> 
        <Text style={styles.inputLabel}>Senha</Text>   
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} value={senha} onChangeText={setSenha} />

      </View>
    <Text style={styles.validateInput}>{validateEmail?" ":""}</Text> 

    <View style={styles.containerBtn}>
      <TouchableOpacity style={[styles.BtnOne, styles.Btn]} onPress={() => handleLogin({email, senha},router)}>
                <Text style={[styles.BtnText,styles.BtnOneText]}>Iniciar</Text>
      </TouchableOpacity>
      <Text >Uo</Text>
       <TouchableOpacity style={[styles.BtnTwe, styles.Btn]} onPress={() =>{ console.log('Login com o google pressed')}}>
        <Text style={[styles.BtnText,styles.BtnTweText]}>Login com o google</Text>
      </TouchableOpacity>
    </View>
    <Link href="/sigin"><Text>Não tem uma conta? <Text style={{fontWeight: 'bold',color:Color.btn}}>Crie uma</Text></Text></Link>
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