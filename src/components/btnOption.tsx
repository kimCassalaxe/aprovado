import { Color, text_Primary, text_Secondary } from '@/thems/color';
import { useRouter } from 'expo-router';
import { Router } from 'expo-router/build/react-navigation';
import React from 'react';
//import { FontAwesome } from '@expo/vector-icons';
//import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type BtnOptionProps = {
  id: string;
  text: string;
  style?: object;
  onPress?: (id: string) => void;
};

export default function BtnOption(props: BtnOptionProps) {

  return (
    <>
      <TouchableOpacity style={[styles.Btn, props.style]} onPress={() => props.onPress?.(props.id)}>
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
});
