import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { styles } from './css/styles.js';

const App = () => {
  const [n1, setn1] = useState('');
  const [n2, setn2] = useState('');
  const [resultado, setresultado] = useState('');

  const calcular_soma = () => {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);

    if (!isNaN(num1) && !isNaN(num2)) {
      setresultado((num1 + num2).toString());
    } else {
      setresultado('Entrada inválida');
    }
  };

  const calcular_subtracao = () => {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);

    if (!isNaN(num1) && !isNaN(num2)) {
      setresultado((num1 - num2).toString());
    } else {
      setresultado('Entrada inválida');
    }
  };

  const calcular_multiplicacao = () => {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);

    if (!isNaN(num1) && !isNaN(num2)) {
      setresultado((num1 * num2).toString());
    } else {
      setresultado('Entrada inválida');
    }
  };

  const calcular_divisao = () => {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);

    if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
      setresultado((num1 / num2).toString());
    } else {
      setresultado('Erro: divisão por zero ou entrada inválida');
    }
  };

  return (
    
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Digite um número"
        keyboardType="numeric"
        value={n1}
        onChangeText={setn1}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite um número"
        keyboardType="numeric"
        value={n2}
        onChangeText={setn2}
      />

      <View style={styles.buttonContainer}>
        <Button title="+" onPress={calcular_soma} />
        <Button title="-" onPress={calcular_subtracao} />
        <Button title="×" onPress={calcular_multiplicacao} />
        <Button title="÷" onPress={calcular_divisao} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Resultado"
        value={resultado}
        editable={false}
      />
    </View>
  );
};

export default App;
