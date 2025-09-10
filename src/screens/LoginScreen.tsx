import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';
import api from '../services/api';

// 1. Importamos os tipos necessários para a navegação
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// 2. Definimos a "forma" da nossa pilha de navegação
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

// 3. O componente agora recebe a propriedade { navigation }
const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = async () => {
    if (!email || !password) {
      Alert.alert('Atenção', 'Por favor, preencha o email e a senha.');
      return;
    }

    try {
      const response = await api.post('/auth/login', {
        email: email,
        senha_plana: password,
      });

      console.log('Token de acesso:', response.data.access_token);
      // 4. Em vez de um alerta, agora navegamos para a tela Home!
      navigation.navigate('Home');
    } catch (error) {
      console.error('Falha no login:', error);
      Alert.alert('Erro de Login', 'O email ou a senha estão incorretos.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.headerContainer}>
        <Text style={styles.title}>Bem-vindo de volta!</Text>
        <Text style={styles.subtitle}>Entre para continuar</Text>
      </View>

      <View style={styles.formContainer}>
        <Input
          placeholder="Email ou telefone"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <Button title="Entrar" onPress={handleLoginPress} />
        <TouchableOpacity>
          <Text style={styles.signUpText}>Não tem uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// ... (os estilos permanecem os mesmos)
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 24,
  },
  headerContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  formContainer: {
    flex: 3,
  },
  forgotPasswordText: {
    textAlign: 'right',
    color: '#007AFF',
    fontWeight: '600',
  },
  footerContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  signUpText: {
    textAlign: 'center',
    color: '#007AFF',
    fontWeight: '600',
    marginTop: 16,
  },
});

export default LoginScreen;