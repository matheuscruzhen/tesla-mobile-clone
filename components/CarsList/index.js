import React from 'react'
import { View, FlatList, Dimensions } from 'react-native'

import styles from './styles';

import cars from './cars';
import CarItem from '../CarItem';

const CarList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={cars}
        renderItem={({item}) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('screen').height}
      />
    </View>
  )
}

export default CarList;