import { View, Text, StyleSheet } from 'react-native'
import MapView from 'react-native-maps';
import React from 'react'

const MapScren = () => {
  return (
    <View style={styles.container}> 
      <MapView  
      initialRegion={{
          latitude: -34.6037,
          longitude: -58.3816,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
  
      }}
      style={styles.mapa}/>
    </View>
  )
}

export default MapScren

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapa: {
    width: '100%',
    height: '100%',
    backgroundColor:'red'
  }
})