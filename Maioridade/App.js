import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { styles } from './css/style.js';

const App = () => {
  const [sua_idade, setSuaIdade] = useState('');
  const [mensagem, setMensagem] = useState('');

  const verificar_idade = () => {
    const idade = parseFloat(sua_idade);

    if (!isNaN (idade)) {
      if (idade>= 18)   {
        setMensagem ("Você é maior de idade");
    } else {
      setMensagem("Você é menor de idade");
    }
  } else {
    setMensagem("Entrada inválida. Digite um número.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite sua Idade"
        keyboardType="numeric"
        value={sua_idade}
        onChangeText={setSuaIdade}
      />

      <Button title="Verificar Idade" onPress={verificar_idade} />
      <Text style = {styles.mensagem}>{mensagem}</Text>
    </View>
  );
};

export default App; // Exportação correta do componente
