import { StatusBar } from 'expo-status-bar';
import {useFonts} from 'expo-font'
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants'
import { Home } from './src/screens/Home/Home';
import { useState } from 'react';
import { ItemListCategory } from './src/screens/ItemListCategory/ItemListCategory';
import {fonts} from './src/global/fonts'

export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  const [categorySelected, setCategorySelected] = useState('');

  if(!fontsLoaded){
    return null
  }

  return (
    <View style={styles.container}>
      {
        categorySelected ? 
        (
          <ItemListCategory category={categorySelected}/>
        )
          :
        (
          <Home setCategorySelected={setCategorySelected}/> 
        )
      }
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
    paddingTop: Constants.statusBarHeight + 20
  },
});
