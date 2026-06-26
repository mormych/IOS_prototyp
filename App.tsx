import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Portfolio Studenta</Text>

        <View style={styles.card}>
          <Image source={require('./assets/picture.jpg')} style={styles.image} />

          <Text style={styles.name}>Michał Adamiak</Text>

          <Text style={styles.subtitle}>Informatyka</Text>

          <Text style={styles.sectionTitle}>O mnie</Text>

          <Text style={styles.description}>
            Jestem studentem informatyki i uczę się tworzenia aplikacji mobilnych.
            Interesuję się programowaniem, technologiami mobilnymi oraz bazami danych.
            Chcę rozwijać praktyczne umiejętności i tworzyć aplikacje, które działają w
            prawdziwym użyciu.
          </Text>

          <Text style={styles.sectionTitle}>Umiejętności</Text>

          <Text style={styles.skill}>• JavaScript</Text>
          <Text style={styles.skill}>• React Native</Text>
          <Text style={styles.skill}>• HTML</Text>
          <Text style={styles.skill}>• CSS</Text>
          <Text style={styles.skill}>• SQL</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Alert.alert(
                'Moje portfolio',
                'To jest przykładowa aplikacja mobilna wykonana w React Native.'
              )
            }
          >
            <Text style={styles.buttonText}>Pokaż informacje</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e293b',
  },

  scrollContent: {
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
    color: '#f8fafc',
  },

  card: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 20,
    elevation: 3,

    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 16,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#0f172a',
  },

  subtitle: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
    color: '#2563eb',
  },

  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#334155',
  },

  skill: {
    fontSize: 15,
    marginBottom: 4,
    color: '#334155',
  },

  button: {
    marginTop: 24,
    backgroundColor: '#16a34a',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});