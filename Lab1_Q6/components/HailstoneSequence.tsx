import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function HailstoneSequence() {
  const [inputN, setInputN] = useState('');
  const [sequence, setSequence] = useState<number[]>([]);

  const generateHailstone = () => {
    let n = parseInt(inputN, 10);
    if (isNaN(n) || n <= 0) {
      setSequence([]);
      return;
    }

    const resultArr: number[] = [n];
    while (n > 1) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = n * 3 + 1;
      }
      resultArr.push(n);
    }
    setSequence(resultArr);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Hailstone Sequence (n &gt; 0)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a positive integer"
        keyboardType="numeric"
        value={inputN}
        onChangeText={setInputN}
      />
      <Button title="Generate Sequence" onPress={generateHailstone} color="#2196F3" />
      {sequence.length > 0 && (
        <Text style={styles.resultText}>
          Sequence: {sequence.join(' → ')}
        </Text>
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
    , fontSize: 15
    , lineHeight: 22 },
});