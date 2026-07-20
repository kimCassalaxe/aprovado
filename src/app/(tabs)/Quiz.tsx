import BtnOption from '@/components/btnOption';
import { Color, OptionSuch, OptionWrong, text_Primary, text_Secondary } from '@/thems/color';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
//import { FontAwesome } from '@expo/vector-icons';
//import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';

import data from '@/base/opara.json';
import { Question } from '@/types/login';

async function handleGetQuiz(data:any) {
 const quizs = await data;
  return quizs.slice(0, 10);
}


export default function Quiz() {
  
const router = useRouter();
const [req, setReq]= useState('');
const [clicked, setClicked]= useState(false);
const [points,setPoints]= useState(0);
const [questionList, setQuestionList] = useState([]);
const [question, setQuestion] = useState<Question>();


const handleOptionPress = (id: string) => {
  setReq(id);
  clicked ? setClicked(false) : setClicked(true);
}
const handleOptionStatus = (id: string,correct:string) => {
  if(clicked && req === id) {
    return styles.selectedOption;
  }
  if(clicked && req === id && id !== correct) {
    return styles.optionWrong;
  }
  if(clicked && req === id && id === correct) {
    return styles.optionSuch;
  }
  return {};
}
const next = (list: Question[])=>{
  const aux = Math.floor(Math.random()*10)
  setQuestion(list[aux])
  console.log("+++++++++++++++++++++++++++++");
  console.log(question);
  console.log(aux);
}
const handleOptionValidate = (id: string,correct:string) => {
  if(!clicked) {
    alert("Selecione uma opção");
    return;
  }
  if(clicked && id === correct) {
    setPoints(points + 1);
    next(questionList);
  } 
}

useEffect(() => {
    handleGetQuiz(data).then((data)=>setQuestionList(data));
    console.log(questionList);
    next(questionList);
    
  },[]);

  return ( 
    <>
    {
      question ?
    <View style={styles.container}>
    
    
      <View style={styles.containerText}>
        <Text style={styles.header}>APERGUNTA</Text>
        <Text style={styles.quiz}>{question.pergunta}</Text>
      </View>
        <View style={styles.containerOptions}>
        
        
        <BtnOption id={"A"} text={question.alternativa.A} style={handleOptionStatus(question.alternativa.A,"A")} onPress={(id)=>handleOptionPress(id)} />
        <BtnOption id={"B"} text="Luanda" style={handleOptionStatus("B","A")} onPress={(id)=>handleOptionPress(id)} />
        <BtnOption id={"C"} text="Luanda" style={handleOptionStatus("C","A")} onPress={(id)=>handleOptionPress(id)} />
        <BtnOption id={"D"} text="Luanda" style={handleOptionStatus("D","A")} onPress={(id)=>handleOptionPress(id)} />
        </View>
      
    <View style={styles.containerBtn}>
      <TouchableOpacity style={[styles.Btn]} onPress={() => handleOptionValidate(req,question.resposta_correta)}>
                <Text style={[styles.BtnText,styles.BtnOneText]}>Confirmar</Text>
      </TouchableOpacity>
    </View>
    </View>
     :<></>
      }
    </>
  );}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
  },
  containerText:{
    width: "100%",
    marginBottom: 20,
  },
 header: {
    fontSize: 12,
    color: Color.Primary,
  },
  quiz: {
    fontSize: text_Secondary.size,
    color: Color.Secondary,
    opacity: 0.8,
    fontWeight: 'bold',
  },
  containerOptions:{
    width:"100%",
    gap:20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Color.borderColor,
    paddingVertical: 20,
    marginBottom: 20,
  },
  containerBtn:{
    width:"100%",
    gap:20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Btn:{
    width:"100%",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: text_Secondary.color,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: text_Secondary.color,
  },
  
  BtnText:{
    fontWeight: 'bold',
    fontSize: 18,
  },
  BtnOneText:{
    color:"#fff",
  },
  selectedOption:{
    borderColor: Color.btnSelected,
    boxShadow: Color.boxShadowSelected,
  },
  optionWrong:{
    borderColor:  OptionWrong.borderColor,
    boxShadow: OptionWrong.boxShadow,
  },
  optionSuch:{
    borderColor: OptionSuch.borderColor,
    boxShadow: OptionSuch.boxShadow,
  }
  
});
