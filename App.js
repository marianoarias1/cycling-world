
import { useFonts } from 'expo-font'
import { fonts } from './src/global/fonts'
import { Navigator } from './src/navigation/ShopStack';
import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import { colors } from './src/global/colors';
import { TabNavigator } from './src/navigation/TabNavigator';
import { Provider } from 'react-redux';
import store from './src/store';
import { MainNavigator } from './src/navigation/MainNavigator';

export default function App() {
  const [fontsLoaded] = useFonts(fonts);


  if (!fontsLoaded) {
    return null
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <MainNavigator />
        <StatusBar style='auto' />
      </SafeAreaView>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryColor,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
});