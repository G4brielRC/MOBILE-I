import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { styles } from './css/style.js';

const App = () => {
  const [nota_1, setNota_1] = useState('');
  const [nota_2, setNota_2] = useState('');
  const [nota_3, setNota_3] = useState('');
  const [nota_4, setNota_4] = useState('');
  const [resultado, setResultado] = useState('');
  const [mensagem, setMensagem] = useState('');

  const verificar_nota = () => {
    
  const n1 = parseFloat(nota_1);
  const n2 = parseFloat(nota_2);
  const n3 = parseFloat(nota_3);
  const n4 = parseFloat(nota_4);
  const resultado = ((n1+n2+n3+n4)/ 4);

    if (!isNaN (resultado)) {
      if (resultado >= 6 ) {
        setMensagem ("Você esta aprovado");
      } if ((resultado > 4) && (resultado < 6)) {
        setMensagem ("Você esta de recuperação");
      } if (resultado < 4) {
        setMensagem("Você está reprovado")
      } 
  }
  };
  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite sua nota"
        keyboardType="numeric"
        value={nota_1}
        onChangeText={setNota_1}
      />

      
      <TextInput
        style={styles.input}
        placeholder="Digite sua nota"
        keyboardType="numeric"
        value={nota_2}
        onChangeText={setNota_2}
      />

      
      <TextInput
        style={styles.input}
        placeholder="Digite sua nota"
        keyboardType="numeric"
        value={nota_3}
        onChangeText={setNota_3}
      />

       
      <TextInput
        style={styles.input}
        placeholder="Digite sua nota"
        keyboardType="numeric"
        value={nota_4}
        onChangeText={setNota_4}
      />


      <Button title="Verificar notas" onPress={verificar_nota} />
      <Text style = {styles.mensagem}>{mensagem}</Text>

      
    </View>
  );
};

export default App; // Exportação correta do componente
