import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

// Usamos TextInputProps para que o nosso componente aceite todas as propriedades de um TextInput normal
const Input = (props: TextInputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor="#888"
      {...props} // Passa todas as outras props (como placeholder, value, onChangeText, etc.)
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default Input;