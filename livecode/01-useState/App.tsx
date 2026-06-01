import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default function ProfiloScreen() {
  // 1. Dichiariamo lo stato per il nome
  const [name, setName] = React.useState(""); // 

  // 2. Calcoliamo i dati derivati.
  // IMPORTANTE: Non duplicare lo stato creando un altro useState per "isValid"!
  // Lascia che la UI derivi direttamente dallo stato minimale. [cite: 8, 11]
  const isValid = name.trim().length >= 2; // 

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Inserisci il tuo nome:</Text>
      
      {/* Input Controllato */}
      <TextInput 
        style={styles.input}
        value={name}                 // Il valore proviene dallo stato 
        onChangeText={setName}       // Ogni modifica aggiorna lo stato 
        placeholder="Es. Mario"
        autoCapitalize="words"     
      />

      {/* Feedback di validazione esplicito in tempo reale */}
      <Text style={isValid ? styles.successText : styles.errorText}>
        {isValid ? "Nome valido" : "Il nome deve contenere almeno 2 caratteri"} 
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, justifyContent: 'center', flex: 1 },
  label: { fontSize: 16, marginBottom: 8, fontWeight: 'bold' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 6, marginBottom: 8 },
  successText: { color: 'green' },
  errorText: { color: 'red' }
});