import { Color, text_Primary, text_Secondary } from '@/thems/color';
import { StyleSheet, Text, View, } from 'react-native';

type Props = {
  ponts: number;
};

export default function Score(props: Props) {

  
  return (
    <>
      <Text style={styles.text}>Pontos: {props.ponts}</Text>
    </>
  );
  
}

const styles = StyleSheet.create({
  text:{
    width:"100%",
    padding:20,
    fontSize: 18,
    color: text_Secondary.color,
    fontWeight:'bold',
  },
});
