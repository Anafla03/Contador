import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 5) {
      console.log("Contador atingiu o meio do caminho!");
    }
  }, [count]);

  
  const getColor = () => {
    if (count === 5) return 'red';    
    if (count > 5) return 'green';     
    return 'black';                    
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: getColor() }]}>
        Contador: {count}
      </Text>

      <Button title="Adicionar +1" onPress={() => setCount(c => c + 1)} />
      <View style={{ height: 10 }} />
      <Button title="Reset" onPress={() => setCount(0)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
  },

});
