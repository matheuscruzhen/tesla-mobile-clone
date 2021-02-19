import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

  const { type, content, onPress } = props;

  const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
  const color = type === 'primary' ? '#FFFFFF' : '#171A20CC';
  
  return (
    <View style={styles.container}>
      <Pressable 
        style={[styles.button, {backgroundColor}]} 
        onPress={() => console.warn(onPress)}
      >
        <Text style={[styles.text, {color}]}>{content}</Text>
      </Pressable>
    </View>
  )
}

export default StyledButton;