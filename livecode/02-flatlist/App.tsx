import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Pressable
} from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// 1. I nostri dati di partenza (Mock Data)
const CONTATTI_MOCK = [
  { id: "usr-1", nome: "Alice", ruolo: "Studente" },
  { id: "usr-2", nome: "Bob", ruolo: "Docente" },
  { id: "usr-3", nome: "Charlie", ruolo: "Tutor" },
  { id: "usr-4", nome: "David", ruolo: "Studente" },
];

export default function ListaContattiScreen() {
  // 2. Questa funzione definisce COME renderizzare la singola riga
  // any solo per velocizzare -> sconsigliato <- meglio tipizzazione prima 
  const renderRigaContatto = ({ item }: any) => {
    return (
      <Pressable
        style={({ pressed }) => [styles.riga, pressed && styles.rigaPremuta]}
        onPress={() => console.log(`Hai premuto su ${item.nome}`)}
      >
        <Text style={styles.nomeText}>{item.nome}</Text>
        <Text style={styles.ruoloText}>{item.ruolo}</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.titolo}>Contatti ITS Piemonte</Text>

          {/* 3. Configurazione della FlatList */}
          <FlatList
            data={CONTATTI_MOCK}
            renderItem={renderRigaContatto}
            keyExtractor={(item) => item.id} // Regola d'oro: usare ID stabili e univoci
            contentContainerStyle={styles.listaSpaziatura}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", paddingTop: 20 },
  titolo: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginBottom: 10,
  },
  listaSpaziatura: { paddingHorizontal: 16 },
  riga: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1,
  },
  rigaPremuta: { opacity: 0.7 },
  nomeText: { fontSize: 16, fontWeight: "bold" },
  ruoloText: { fontSize: 14, color: "#666", marginTop: 2 },
});
