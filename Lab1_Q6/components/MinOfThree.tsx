import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function MinOfThree() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [num3, setNum3] = useState('');
    const [minResult, setMinResult] = useState<number | null>(null);

    const findMin = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        const n3 = parseFloat(num3);

        if (isNaN(n1) || isNaN(n2) || isNaN(n3)) return;

        const min = Math.min(n1, n2, n3);
        setMinResult(min);
    };

    return (
        <View style={styles.card}>
            <Text style={styles.title}>Min of Three</Text>
            <View style={styles.row}>
                <TextInput style={styles.inputRow} placeholder="Number 1" keyboardType="numeric" value={num1} onChangeText={setNum1} />
                <TextInput style={styles.inputRow} placeholder="Number 2" keyboardType="numeric" value={num2} onChangeText={setNum2} />
                <TextInput style={styles.inputRow} placeholder="Number 3" keyboardType="numeric" value={num3} onChangeText={setNum3} />
            </View>
            <Button title="Find Minimum" onPress={findMin} color="#2196F3" />
            {minResult !== null && (
                <Text style={styles.resultText}>The minimum is: {minResult}</Text>
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
    row: { flexDirection: 'row'
        , justifyContent: 'space-between'
        , marginBottom: 12 },
    inputRow: { borderBottomWidth: 1
        , borderColor: '#ccc'
        , width: '30%'
        , padding: 6
        , textAlign: 'center' },
    resultText: { marginTop: 10
        , fontSize: 16
        , fontWeight: 'bold' },
});