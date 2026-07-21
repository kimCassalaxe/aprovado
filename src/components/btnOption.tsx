import { Color, OptionSuch, OptionWrong, text_Primary, text_Secondary } from '@/thems/color';
import { useRouter } from 'expo-router';
import { Router } from 'expo-router/build/react-navigation';
import React, { useState } from 'react';
//import { FontAwesome } from '@expo/vector-icons';
//import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type BtnOptionProps = {
  id: string;
  text: string;
  selected: string;
  correct: string;
  answered:boolean;
  onPress?: (id: string) => void;
};

export default function BtnOption(props: BtnOptionProps) {

const isSelected = props.selected === props.id;
const isCorrect = props.correct === props.id;
let borderColor="#ccc";

if(!props.answered && isSelected){
 borderColor="#90ee90"; // verde claro
}

if(props.answered && isCorrect){

 borderColor="#00c853"; // verde forte

}


if(props.answered && isSelected && !isCorrect){

 borderColor="#ff5252"; // vermelho

}
 

  return (
    <>
      <TouchableOpacity  style={[styles.Btn]} onPress={() => props.onPress?.(props.id)}>
        <Text style={styles.id}>{props.id}</Text>
        <Text style={styles.BtnText}>{props.text}</Text>
      </TouchableOpacity>
    </>
  );
  
}

const styles = StyleSheet.create({
  Btn:{
    width:"100%",
    flexDirection: 'row',
    justifyContent:"flex-start",
    columnGap: 10,
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.borderColor,
    textAlign: 'center',
    boxShadow: Color.boxShadow,
  },
  id:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    color: text_Secondary.color,
    fontWeight: 'bold',
  },
  
  BtnText:{
    fontSize: 16,
    color: text_Secondary.color,
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
