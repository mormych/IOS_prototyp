import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useProjects } from '../../context/ProjectsContext';

export default function ProjectDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const { projects, removeProject } = useProjects();

  const project = projects.find((p) => p.id === id);

  const confirmDelete = () => {
    if (!project) {
      return;
    }

    Alert.alert(
      'Usuń projekt',
      `Czy na pewno chcesz usunąć projekt "${project.name}"?`,
      [
        {
          text: 'Anuluj',
          style: 'cancel',
        },
        {
          text: 'Usuń',
          style: 'destructive',
          onPress: () => {
            removeProject(project.id);
            router.back();
          },
        },
      ]
    );
  };

  if (!project) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.card}>
            <Text style={styles.projectName}>Nie znaleziono projektu</Text>

            <Text style={styles.projectDesc}>
              Wybrany projekt nie istnieje albo został usunięty.
            </Text>

            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
              <Text style={styles.buttonText}>Wróć do listy</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <Text style={styles.projectName}>{project.name}</Text>

          <Text style={styles.projectDesc}>{project.description}</Text>

          <Text style={styles.sectionTitle}>Technologie</Text>

          {project.technologies.map((technology) => (
            <Text key={technology} style={styles.technology}>
              • {technology}
            </Text>
          ))}

          <Text style={styles.sectionTitle}>Rok realizacji</Text>

          <Text style={styles.projectDesc}>{project.year}</Text>

          <TouchableOpacity style={styles.deleteButton} onPress={confirmDelete}>
            <Text style={styles.buttonText}>Usuń projekt</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.buttonText}>Wróć do listy</Text>
          </TouchableOpacity>
        </View>
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
  },

  card: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 20,
    marginTop: 40,
    elevation: 3,

    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  projectName: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#0f172a',
  },

  projectDesc: {
    fontSize: 16,
    lineHeight: 24,
    color: '#334155',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 8,
    color: '#2563eb',
  },

  technology: {
    fontSize: 15,
    marginBottom: 4,
    color: '#333333',
  },

  deleteButton: {
    marginTop: 24,
    backgroundColor: '#ef4444',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },

  backButton: {
    marginTop: 12,
    backgroundColor: '#64748b',
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