import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { MainScreen } from './components/MainScreen/MainScreen';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    Pokemon: require('./assets/fonts/Pokemon.ttf')
  });

  if (!loaded) {
    return null;
  }
  
  return (
    <View>
      <MainScreen/>
      <StatusBar style="auto" />
    </View>
  );
}
