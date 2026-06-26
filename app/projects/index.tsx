import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useProjects } from '../../context/ProjectsContext';

export default function ProjectsScreen() {
  const router = useRouter();
  const { projects, removeProject } = useProjects();

  const [search, setSearch] = useState('');

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  const confirmDelete = (id: string, name: string) => {
    Alert.alert(
      'Usuń projekt',
      `Czy na pewno chcesz usunąć projekt "${name}"?`,
      [
        {
          text: 'Anuluj',
          style: 'cancel',
        },
        {
          text: 'Usuń',
          style: 'destructive',
          onPress: () => removeProject(id),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Moje projekty</Text>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push('/projects/new')}
      >
        <Text style={styles.addButtonText}>+ Dodaj projekt</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.searchInput}
        value={search}
        onChangeText={setSearch}
        placeholder="Szukaj projektu..."
        placeholderTextColor="#94a3b8"
      />

      <FlatList
        data={filteredProjects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.projectCard}
            onPress={() => router.push(`/projects/${item.id}`)}
          >
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => confirmDelete(item.id, item.name)}
            >
              <Text style={styles.deleteButtonText}>Usuń</Text>
            </TouchableOpacity>

            <View style={styles.projectHeader}>
              <Ionicons name="folder-open" size={24} color="#2563eb" />
              <Text style={styles.projectName}>{item.name}</Text>
            </View>

            <Text style={styles.projectDesc}>{item.description}</Text>

            <Text style={styles.projectYear}>Rok: {item.year}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Brak projektów do wyświetlenia.</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
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

  addButton: {
    backgroundColor: '#10b981',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },

  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },

  searchInput: {
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 16,
    color: '#0f172a',
  },

  projectCard: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    position: 'relative',

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },

  deleteButton: {
    position: 'absolute',
    right: 12,
    top: 12,
    backgroundColor: '#ef4444',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 6,
    zIndex: 1,
  },

  deleteButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },

  projectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingRight: 60,
  },

  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#0f172a',
  },

  projectDesc: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },

  projectYear: {
    marginTop: 8,
    fontSize: 13,
    color: '#2563eb',
    fontWeight: '600',
  },

  emptyText: {
    color: '#f8fafc',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 15,
  },
});