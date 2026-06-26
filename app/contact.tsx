import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ContactScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerBox}>
          <Text style={styles.headerSmall}>Dane kontaktowe</Text>
          <Text style={styles.title}>Kontakt</Text>
          <Text style={styles.headerDescription}>
            Zainteresowany? Zapraszam do kontaktu.
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.contactItem}>
            <View style={styles.iconBox}>
              <Ionicons name="mail-outline" size={22} color="#f97316" />
            </View>

            <View style={styles.contactTextBox}>
              <Text style={styles.label}>E-mail</Text>
              <Text style={styles.value}>michal.adamiak@mail.com</Text>
            </View>
          </View>

          <View style={styles.contactItem}>
            <View style={styles.iconBox}>
              <Ionicons name="logo-github" size={22} color="#f97316" />
            </View>

            <View style={styles.contactTextBox}>
              <Text style={styles.label}>GitHub</Text>
              <Text style={styles.value}>github.com/michmar2002</Text>
            </View>
          </View>

          <View style={styles.contactItem}>
            <View style={styles.iconBox}>
              <Ionicons name="call-outline" size={22} color="#f97316" />
            </View>

            <View style={styles.contactTextBox}>
              <Text style={styles.label}>Telefon</Text>
              <Text style={styles.value}>+48 123 456 789</Text>
            </View>
          </View>

          <View style={styles.contactItem}>
            <View style={styles.iconBox}>
              <Ionicons name="logo-linkedin" size={22} color="#f97316" />
            </View>

            <View style={styles.contactTextBox}>
              <Text style={styles.label}>LinkedIn</Text>
              <Text style={styles.value}>https://linkedin.com/in/michal-adamiak</Text>
            </View>
          </View>

          <View style={styles.contactItem}>
            <View style={styles.iconBox}>
              <Ionicons name="location-outline" size={22} color="#f97316" />
            </View>

            <View style={styles.contactTextBox}>
              <Text style={styles.label}>Lokalizacja</Text>
              <Text style={styles.value}>Polska, Wodzisław Śląski</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Dostępność</Text>
          <Text style={styles.infoText}>
            Jestem dostępny od poniedziałku do piątku w godzinach roboczych. Najlepsza forma kontaktu: e-mail
          </Text>
        </View>

        <TouchableOpacity
          style={styles.emailButton}
          onPress={() => Linking.openURL('mailto:michmar2002@outlook.com')}
        >
          <Ionicons name="send-outline" size={20} color="#ffffff" />
          <Text style={styles.buttonText}>Wyślij wiadomość e-mail</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.phoneButton}
           onPress={() => Linking.openURL('tel:')}
        >
          <Ionicons name="call-outline" size={20} color="#ffffff" />
          <Text style={styles.buttonText}>Zadzwoń</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.githubButton}
          onPress={() => Linking.openURL('https://github.com/michmar2002')}
        >
          <Ionicons name="logo-github" size={20} color="#ffffff" />
          <Text style={styles.buttonText}>Przejdź do GitHuba</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  headerBox: {
    backgroundColor: '#1f2937',
    borderRadius: 18,
    padding: 22,
    marginTop: 40,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#374151',
  },

  headerSmall: {
    color: '#f97316',
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 6,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f9fafb',
    marginBottom: 8,
  },

  headerDescription: {
    fontSize: 15,
    color: '#d1d5db',
    lineHeight: 22,
  },

  card: {
    backgroundColor: '#f9fafb',
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    elevation: 3,

    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },

  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff7ed',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  contactTextBox: {
    flex: 1,
  },

  label: {
    fontSize: 13,
    color: '#6b7280',
    fontWeight: '600',
    marginBottom: 2,
  },

  value: {
    fontSize: 15,
    color: '#111827',
    fontWeight: '500',
  },

  infoBox: {
    backgroundColor: '#172554',
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
    borderLeftWidth: 5,
    borderLeftColor: '#f97316',
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 6,
  },

  infoText: {
    fontSize: 14,
    color: '#dbeafe',
    lineHeight: 21,
  },

  emailButton: {
    backgroundColor: '#f97316',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    flexDirection: 'row',
  },

  phoneButton: {
    backgroundColor: '#f97316',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    flexDirection: 'row',
  },

  githubButton: {
    backgroundColor: '#374151',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    flexDirection: 'row',
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
  },
});