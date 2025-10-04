import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ContadorSimples() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 5) {
      console.log('Contador atingiu o meio do caminho!');
    }
    
  }, [count]); 
  return (
    <View style={styles.container}>
      {/* 3. Componente Text exibindo o valor atual do count */}
      <Text style={styles.countText}>{count}</Text>

      {/* 4. Botão que incrementa o state ao ser pressionado */}
      <Button
        title="Incrementar"
        onPress={() => setCount(prev => prev + 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 40,
  },
  countText: {
    fontSize: 48,
    marginBottom: 16,
  },
});
