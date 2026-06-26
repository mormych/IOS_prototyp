import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useProjects } from '../../context/ProjectsContext';

export default function NewProjectScreen() {
  const router = useRouter();
  const { addProject } = useProjects();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [year, setYear] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};

    if (name.trim().length < 3) {
      e.name = 'Nazwa musi mieć minimum 3 znaki';
    }

    if (description.trim().length < 10) {
      e.description = 'Opis musi mieć minimum 10 znaków';
    }

    const techs = technologies
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    if (techs.length === 0) {
      e.technologies = 'Podaj minimum jedną technologię';
    }

    const y = parseInt(year, 10);

    if (isNaN(y) || y < 2000 || y > 2030) {
      e.year = 'Rok musi być liczbą od 2000 do 2030';
    }

    setErrors(e);

    return Object.keys(e).length === 0;
  };

  const saveProject = () => {
    if (!validate()) {
      return;
    }

    const techs = technologies
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    addProject({
      name: name.trim(),
      description: description.trim(),
      technologies: techs,
      year: parseInt(year, 10),
    });

    Alert.alert('Sukces', 'Projekt dodany!');
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.title}>Nowy projekt</Text>

          <View style={styles.card}>
            <Text style={styles.label}>Nazwa projektu</Text>
            <TextInput
              style={[styles.input, errors.name && styles.inputError]}
              value={name}
              onChangeText={setName}
              placeholder="Np. Aplikacja mobilna"
              placeholderTextColor="#94a3b8"
            />
            {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

            <Text style={styles.label}>Opis projektu</Text>
            <TextInput
              style={[
                styles.input,
                styles.textArea,
                errors.description && styles.inputError,
              ]}
              value={description}
              onChangeText={setDescription}
              placeholder="Krótki opis projektu"
              placeholderTextColor="#94a3b8"
              multiline
            />
            {errors.description && (
              <Text style={styles.errorText}>{errors.description}</Text>
            )}

            <Text style={styles.label}>Technologie</Text>
            <TextInput
              style={[styles.input, errors.technologies && styles.inputError]}
              value={technologies}
              onChangeText={setTechnologies}
              placeholder="React Native, Expo, TypeScript"
              placeholderTextColor="#94a3b8"
            />
            {errors.technologies && (
              <Text style={styles.errorText}>{errors.technologies}</Text>
            )}

            <Text style={styles.label}>Rok realizacji</Text>
            <TextInput
              style={[styles.input, errors.year && styles.inputError]}
              value={year}
              onChangeText={setYear}
              placeholder="2026"
              placeholderTextColor="#94a3b8"
              keyboardType="numeric"
            />
            {errors.year && <Text style={styles.errorText}>{errors.year}</Text>}

            <TouchableOpacity style={styles.saveButton} onPress={saveProject}>
              <Text style={styles.buttonText}>Zapisz projekt</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
              <Text style={styles.buttonText}>Anuluj</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },

  keyboard: {
    flex: 1,
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

  label: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 6,
    color: '#0f172a',
  },

  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#0f172a',
  },

  textArea: {
    minHeight: 90,
    textAlignVertical: 'top',
  },

  inputError: {
    borderColor: '#ef4444',
  },

  errorText: {
    color: '#ef4444',
    fontSize: 12,
    marginTop: 4,
  },

  saveButton: {
    backgroundColor: '#10b981',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },

  cancelButton: {
    backgroundColor: '#64748b',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});