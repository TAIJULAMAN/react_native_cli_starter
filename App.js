import './global.css';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/root/AppNavigator';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView className="flex-1">
          <AppNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
