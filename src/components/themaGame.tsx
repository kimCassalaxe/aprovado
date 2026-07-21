import { Color, text_Primary, text_Secondary } from '@/thems/color';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
//import { FontAwesome } from '@expo/vector-icons';
//import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type Prop ={
  text:string;
  iconText:any;
  onPress:()=> void;
}
export default function ThemaGame(props:Prop) {

  return (
    <>
      <TouchableOpacity style={styles.Btn} onPress={props.onPress}>
        <MaterialIcons name={props.iconText} size={24} color="white" />
        <Text style={styles.BtnText}>{props.text}</Text>
      </TouchableOpacity>
    </>
  );
  
}

const styles = StyleSheet.create({


  Btn:{
    width:"100%",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.btn,
    boxShadow: '2px 4px 4px rgba(16, 22, 83, 0.1)',
    flexDirection:'row',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.btn,
    color:"#fff",
  },
  BtnText:{
    marginLeft:20,
    fontWeight: 'bold',
    fontSize: 18,
    color:"#fff",
  },
  
});
