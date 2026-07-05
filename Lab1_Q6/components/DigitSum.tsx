import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function DigitSum() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateSum = () => {
    if (!number) return;
    const numStr = Math.abs(parseInt(number, 10)).toString();
    const firstDigit = parseInt(numStr[0], 10);
    const lastDigit = parseInt(numStr[numStr.length - 1], 10);
    setResult(firstDigit + lastDigit);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Sum of First and Last Digits</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter an integer"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />
      <Button title="Calculate Sum" onPress={calculateSum} color="#2196F3" />
      {result !== null && (
        <Text style={styles.resultText}>Result: {result}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 15
    , backgroundColor: '#fff'
    , borderRadius: 8
    , marginBottom: 15
    , elevation: 2 },
  title: { fontSize: 18
    , fontWeight: 'bold'
    , marginBottom: 10
    , color: '#333' },
  input: { borderBottomWidth: 1
    , borderColor: '#ccc'
    , marginBottom: 12
    , padding: 6 },
  resultText: { marginTop: 10
    , fontSize: 16
    , fontWeight: 'bold' },
});