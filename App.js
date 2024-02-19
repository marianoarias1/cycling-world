import { StatusBar } from 'expo-status-bar';
import {useFonts} from 'expo-font'
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants'
import { Home } from './src/screens/Home/Home';
import { useState } from 'react';
import { ItemListCategory } from './src/screens/ItemListCategory/ItemListCategory';
import {fonts} from './src/global/fonts'
import { colors } from './src/global/colors';
import { ItemDetail } from './src/screens/ItemDetail/ItemDetail';
import { Navigator } from './src/navigation/Navigator';

export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  const [categorySelected, setCategorySelected] = useState('');
  const [productDetailId, setProductDetailId] = useState(null);

  if(!fontsLoaded){
    return null
  }

  return <Navigator/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: colors.bgColor

  },
});
