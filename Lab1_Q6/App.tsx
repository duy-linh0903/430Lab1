import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import EmployeeScreen from './components/EmployeeScreen';
import DigitSum from './components/DigitSum';
import MinOfThree from './components/MinOfThree';
import HailstoneSequence from './components/HailstoneSequence';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.headerTitle}>LAB 1 - QUESTION 6</Text>

            <EmployeeScreen onUpdate={() => {}} />

            <DigitSum />

            <MinOfThree />

            <HailstoneSequence />
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1
    , backgroundColor: '#f5f5f5' },
  scrollContainer: { padding: 15 },
  headerTitle: { fontSize: 22
    , fontWeight: 'bold'
    , textAlign: 'center'
    , marginVertical: 15
    , color: '#333' },
  displayCard: { padding: 12
    , backgroundColor: '#e3f2fd'
    , borderRadius: 8
    , marginBottom: 15
    , borderWidth: 1
    , borderColor: '#90caf9' },
  displayText: { fontWeight: 'bold'
    , marginBottom: 4
    , color: '#0d47a1' },
});