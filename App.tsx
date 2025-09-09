import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 1. Importa as nossas telas
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

// 2. Cria o nosso navegador do tipo "pilha"
const Stack = createNativeStackNavigator();

function App() {
  return (
    // 3. O NavigationContainer envolve toda a aplicação
    <NavigationContainer>
      {/* 4. O Stack.Navigator gere as nossas telas */}
      <Stack.Navigator
        initialRouteName="Login" // Define a tela inicial
        screenOptions={{
          headerShown: false, // Oculta o cabeçalho padrão
        }}
      >
        {/* 5. Cada Stack.Screen representa uma tela na navegação */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;