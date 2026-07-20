import { Color, text_Primary, text_Secondary } from '@/thems/color';
import { useRouter } from 'expo-router';
import { Router } from 'expo-router/build/react-navigation';
import React from 'react';
//import { FontAwesome } from '@expo/vector-icons';
//import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default function BtnNivel() {

  return (
    <>
      <TouchableOpacity style={[styles.BtnOne, styles.Btn]} onPress={() => {}}>
        <Text style={[styles.BtnText,styles.BtnOneText]}>Iniciar</Text>
      </TouchableOpacity>
    </>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  containerText:{
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 34,
    color: Color.Primary,
    fontWeight: 'bold',
  },
  subtitle: {
    width: 300,
    textAlign: 'center',
    fontSize: text_Secondary.size,
    color: Color.Secondary,
    opacity: 0.8,
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
