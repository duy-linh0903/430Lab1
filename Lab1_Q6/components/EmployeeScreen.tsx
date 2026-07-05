import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

interface EmployeeProps {
    onUpdate: (info: { name: string; age: string; occupation: string }) => void;
}

export default function EmployeeScreen({ onUpdate }: EmployeeProps) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [occupation, setOccupation] = useState('');

    const [isUpdated, setIsUpdated] = useState(false);

    const handleUpdate = () => {
        if (!name || !age || !occupation) {
        Alert.alert('Notification', 'Please fill in all information!');
        return;
        }
        onUpdate({ name, age, occupation });
        setIsUpdated(true);
        Alert.alert('Success', 'Employee information updated successfully!');
    };

  return (
    <View style={styles.card}>
        <Text style={styles.title}>Employee Information</Text>
        <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
        />
        <TextInput
            style={styles.input}
            placeholder="Age"
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
        />
        <TextInput
            style={styles.input}
            placeholder="Occupation"
            value={occupation}
            onChangeText={setOccupation}
        />
        <Button title="Update" onPress={handleUpdate} color="#2196F3" />
        {isUpdated && (
            <View style={{ marginTop: 20 }}>
                <Text style={styles.resultTitle}>Updated Employee Information:</Text>
                <Text style={styles.resultText}>Name: {name}</Text>
                <Text style={styles.resultText}>Age: {age}</Text>
                <Text style={styles.resultText}>Occupation: {occupation}</Text>
            </View>
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
        , padding: 6
        , fontSize: 16 },
    resultTitle: { fontSize: 16
        , fontWeight: 'bold'
        , marginBottom: 5
        , color: '#333' },
    resultText: { fontSize: 14
        , marginBottom: 3
        , color: '#555' },
});