import BtnOption from '@/components/btnOption';
import { Color, OptionSuch, OptionWrong, text_Primary, text_Secondary } from '@/thems/color';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
//import { FontAwesome } from '@expo/vector-icons';
//import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, requireNativeComponent, ActivityIndicator} from 'react-native';

import data from '@/base/opara.json';
import { Answer, Question } from '@/types/login';
import Score from '../../components/score';
import { Questions } from '../../types/login';



export default function Quiz() {
  
  const router = useRouter();
  // idUsed guarda todos os ids as presgintas ja sorteadas
  const [idUsed,setIdUsed] = useState<number[]>([]);
  const [selectedOption,setSelectedOption]=useState<string>('');
  const [answered,setAnswered]=useState(false);
  const [points,setPoints]= useState(0);
  const [questionList, setQuestionList] = useState<Questions[]>([]);
  const [question, setQuestion] = useState<Question>();

  //diz qual opcao foi clicada
  const handleOptionPress = (id:string)=>{
    if(answered) return;
    setSelectedOption(id);
  }

//gera a proxima pergunta
const loadQuestion = (list: Question[]) => {

  const availableQuestions = list.filter(
    (_, index) => !idUsed.includes(index)
);
    if (list.length === 0) return;

    if (availableQuestions.length === 0) {
    alert('Fim do jogo!');
    return;
}


    let randomId: number;

    do {
        randomId = Math.floor(Math.random() * list.length);
    } while (idUsed.includes(randomId));

    const next = {
        ...list[randomId],
        id: randomId,
    };

    setQuestion(next);

    setIdUsed((prev) => [...prev, randomId]);
};


const handleOptionValidate = () => {
   console.log('2')
    if (!question) return;

    if (!selectedOption) {
        alert('Selecione uma opção.');
        return;
    }

    setAnswered(true);

    if (selectedOption === question.resposta_correta) {
        setPoints((prev) => prev + 1);
    }
};
const nextQuestion = () => {
  console.log('1')
    setSelectedOption('');
    setAnswered(false);

    loadQuestion(questionList);

}
useEffect(() => {

    const questions = data.slice(0, 10);

    setQuestionList(questions);

    loadQuestion(questions);

}, []);
  
  if (!question) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={Color.Primary}/>
      </View>
    );
  }
  return ( 
    <View style={styles.container}>
      <Score ponts={points} />
    
      <View style={styles.containerText}>
        <Text style={styles.header}>APERGUNTA</Text>
        <Text style={styles.quiz}>{question.pergunta}</Text>
      </View>
      <View style={styles.containerOptions}>
        {question?.alternativa && Object.entries(question.alternativa).map(([key, value]) => (
          <BtnOption
            selected={selectedOption}
            correct={question.resposta_correta}
            answered={answered}
            id={key}
            text={value}
            onPress={handleOptionPress}
          />
        ))}
    </View>
      
    <View style={styles.containerBtn}>
<TouchableOpacity
    style={styles.Btn}
    disabled={!selectedOption && !answered}
    onPress={answered ? nextQuestion : handleOptionValidate}
>
    <Text style={[styles.BtnText, styles.BtnOneText]}>

        {answered ? 'Continuar' : 'Confirmar'}

    </Text>

</TouchableOpacity>
    </View>
    </View>
     
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
  
});
