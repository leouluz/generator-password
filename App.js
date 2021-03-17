import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider'

import BlockIcon from './src/img/blocIcon.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={BlockIcon} style={styles.imageIcon} />
      <View
        style={styles.areaSlider}
      >
        <Slider
          style={{ height: 50, width: '100%' }}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor={"#FF0000"}
          maximumTrackTintColor={"#000"}
        />
      </View>
      <View
        style={styles.buttonGeneratorView}
      >
        <TouchableOpacity
          style={styles.buttonGenerator}
        >
          <Text style={styles.textButton}>GERAR SENHA</Text>
        </TouchableOpacity>

        <View style={styles.textGeneratorView} >
          <TouchableOpacity>
            <Text style={styles.textGenerator}>VALOR GERADO</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageIcon: {
    height: 180,
    width: 180
  },
  areaSlider: {
    backgroundColor: '#fafafa',
    borderRadius: 15,
    width: '80%',
    elevation: 5,
    marginBottom: 10
  },
  buttonGeneratorView: {
    width: '80%',
    marginTop: 30,
    justifyContent: 'center'
  },
  buttonGenerator: {
    marginTop: 20,
    height: 60,
    width: '100%',
    backgroundColor: '#EB6E23',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 8
  },
  textButton: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  textGeneratorView: {
    height: 50,
    width: '100%',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    elevation: 5
  },
  textGenerator: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});
