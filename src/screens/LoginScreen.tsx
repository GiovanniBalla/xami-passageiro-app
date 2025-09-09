import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

// Importamos os nossos dois componentes customizados
import Input from '../components/Input';
import Button from '../components/Button';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* --- Seção do Logo --- */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Bem-vindo de volta!</Text>
        <Text style={styles.subtitle}>Entre para continuar</Text>
      </View>

      {/* --- Seção do Formulário --- */}
      <View style={styles.formContainer}>
        <Input
          placeholder="Email ou telefone"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          placeholder="Senha"
          secureTextEntry
        />
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>

      {/* --- Seção dos Botões --- */}
      <View style={styles.footerContainer}>
        {/* Usamos o nosso novo componente de botão */}
        <Button title="Entrar" />
        <TouchableOpacity>
          <Text style={styles.signUpText}>Não tem uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Note que os estilos "loginButton" e "loginButtonText" foram removidos
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