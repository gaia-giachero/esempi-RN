import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [statoSchermata, setStatoSchermata] = useState('idle');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        
        {/* ========================================================== */}
        {/* PANNELLO DEI BOTTONI (Simulatore per il Laboratorio) */}
        {/* ========================================================== */}
        <View style={styles.pannelloTest}>
          <Text style={styles.testoInfo}>PANNELLO DI TEST SVILUPPATORE</Text>
          <View style={styles.rigaBottoni}>
            {/* Usiamo Pressable al posto di Button per avere totale controllo dello stile */}
            <Pressable style={[styles.btnTest, { backgroundColor: '#ff9900' }]} onPress={() => setStatoSchermata('loading')}>
              <Text style={styles.btnTestTesto}>Loading</Text>
            </Pressable>
            <Pressable style={[styles.btnTest, { backgroundColor: '#10b981' }]} onPress={() => setStatoSchermata('success')}>
              <Text style={styles.btnTestTesto}>Success</Text>
            </Pressable>
            <Pressable style={[styles.btnTest, { backgroundColor: '#6b7280' }]} onPress={() => setStatoSchermata('empty')}>
              <Text style={styles.btnTestTesto}>Empty</Text>
            </Pressable>
            <Pressable style={[styles.btnTest, { backgroundColor: '#ef4444' }]} onPress={() => setStatoSchermata('error')}>
              <Text style={styles.btnTestTesto}>Error</Text>
            </Pressable>
          </View>
        </View>

        {/* ========================================================== */}
        {/* CONTENUTO DELLA SCHERMATA */}
        {/* ========================================================== */}
        <View style={styles.contenutoCentro}>

          {/* CASO 1: IDLE */}
          {statoSchermata === 'idle' && (
            <View style={styles.card}>
              <Text style={styles.emojiIcon}>👋</Text>
              <Text style={styles.titoloStato}>Benvenuta nel Lab</Text>
              <Text style={styles.descrizione}>
                Seleziona uno stato dal pannello in alto per testare la reattività dell'interfaccia utente.
              </Text>
            </View>
          )}

          {/* CASO 2: LOADING */}
          {statoSchermata === 'loading' && (
            <View style={styles.card}>
              <Text style={styles.emojiIcon}>⏳</Text>
              <Text style={styles.titoloStato}>Sincronizzazione...</Text>
              <Text style={styles.descrizione}>
                Download dei dati dall'API locale in corso. Attendi qualche istante.
              </Text>
            </View>
          )}

          {/* CASO 3: SUCCESS (Happy Path) */}
          {statoSchermata === 'success' && (
            <View style={[styles.card, styles.cardSuccesso]}>
              <View style={styles.badgeSuccesso}>
                <Text style={styles.badgeTesto}>DISPONIBILE</Text>
              </View>
              <Text style={styles.prodottoNome}>MacBook Pro M4</Text>
              <Text style={styles.prodottoPrezzo}>2.449,00 €</Text>
              <Text style={styles.descrizione}>
                Configurazione hardware standard per studenti ITS Piemonte della sezione Mobile.
              </Text>
            </View>
          )}

          {/* CASO 4: EMPTY STATE */}
          {statoSchermata === 'empty' && (
            <View style={styles.card}>
              <Text style={styles.emojiIcon}>📦</Text>
              <Text style={styles.titoloStato}>Nessun elemento</Text>
              <Text style={styles.descrizione}>
                La richiesta ha avuto successo, ma il database ha restituito un array vuoto.
              </Text>
            </View>
          )}

          {/* CASO 5: ERROR STATE */}
          {statoSchermata === 'error' && (
            <View style={[styles.card, styles.cardErrore]}>
              <Text style={styles.emojiIcon}>⚠️</Text>
              <Text style={styles.titoloErrore}>Errore di Rete</Text>
              <Text style={styles.descrizione}>
                Impossibile stabilire una connessione stabile con il server di sviluppo Metro.
              </Text>
              
              {/* Bottone di ripristino con design personalizzato */}
              <Pressable style={styles.btnAzione} onPress={() => setStatoSchermata('idle')}>
                <Text style={styles.btnAzioneTesto}>Riconnetti</Text>
              </Pressable>
            </View>
          )}

        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
    backgroundColor: '#f3f4f6' // Grigio chiarissimo di sfondo (moderno, stile iOS/Material)
  },
  // Pannello sviluppatore superiore
  pannelloTest: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#e5e7eb',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  testoInfo: {
    fontSize: 11,
    fontWeight: '800',
    color: '#9ca3af',
    marginBottom: 10,
    letterSpacing: 1,
    textAlign: 'center'
  },
  rigaBottoni: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btnTest: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    minWidth: 75,
    alignItems: 'center'
  },
  btnTestTesto: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600'
  },
  // Area Contenuto Principale
  contenutoCentro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24
  },
  // Struttura Card Moderna
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    alignItems: 'center',
    // Ombra nativa per iOS e Android
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
  },
  cardSuccesso: {
    alignItems: 'flex-start', // Allineamento a sinistra per i dati del prodotto
    borderLeftWidth: 5,
    borderLeftColor: '#10b981'
  },
  cardErrore: {
    borderTopWidth: 4,
    borderTopColor: '#ef4444'
  },
  emojiIcon: {
    fontSize: 40,
    marginBottom: 12
  },
  titoloStato: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 8,
    textAlign: 'center'
  },
  titoloErrore: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ef4444',
    marginBottom: 8,
    textAlign: 'center'
  },
  descrizione: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 20
  },
  // Elementi specifici del successo (Prodotto)
  badgeSuccesso: {
    backgroundColor: '#d1fae5',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginBottom: 12
  },
  badgeTesto: {
    color: '#065f46',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5
  },
  prodottoNome: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1f2937',
    marginBottom: 4
  },
  prodottoPrezzo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2563eb', // Colore d'accento Blu
    marginBottom: 12
  },
  // Bottone Azione Personalizzato
  btnAzione: {
    backgroundColor: '#1f2937',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
    alignItems: 'center'
  },
  btnAzioneTesto: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600'
  }
});