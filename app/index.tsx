import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  TextInput,
} from 'react-native';
import { useProfile } from '../context/ProfileContext';

export default function ProfileScreen() {
  const { profile, updateProfile } = useProfile();

  const [editing, setEditing] = useState(false);

  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);
  const [skillsText, setSkillsText] = useState(profile.skills.join(', '));

  const [errors, setErrors] = useState<Record<string, string>>({});

  const startEdit = () => {
    setName(profile.name);
    setBio(profile.bio);
    setSkillsText(profile.skills.join(', '));
    setErrors({});
    setEditing(true);
  };

  const cancelEdit = () => {
    setEditing(false);
    setErrors({});
  };

  const saveProfile = () => {
    const e: Record<string, string> = {};

    if (name.trim().length < 2) {
      e.name = 'Imię musi mieć minimum 2 znaki';
    }

    if (bio.trim().length < 10) {
      e.bio = 'Opis musi mieć minimum 10 znaków';
    }

    const skills = skillsText
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    if (skills.length === 0) {
      e.skills = 'Podaj minimum jedną umiejętność';
    }

    setErrors(e);

    if (Object.keys(e).length > 0) {
      return;
    }

    updateProfile({
      name: name.trim(),
      bio: bio.trim(),
      skills,
    });

    setEditing(false);
    Alert.alert('Sukces', 'Profil zapisany!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Portfolio Studenta</Text>

        <View style={styles.card}>
          <Image source={require('../assets/picture.jpg')} style={styles.image} />

          {!editing ? (
            <>
              <Text style={styles.name}>{profile.name}</Text>

              <Text style={styles.subtitle}>Student informatyki</Text>

              <Text style={styles.sectionTitle}>O mnie</Text>

              <Text style={styles.description}>{profile.bio}</Text>

              <Text style={styles.sectionTitle}>Cel zawodowy</Text>

              <Text style={styles.description}>
                Chciałbym rozwijać się w kierunku administracji systemami Windows. Tworzę skrypty z wykorzystaniem m.in jezyka Powershell. Dąże do tego aby zostać Windows Administrator.
              </Text>

<Text style={styles.sectionTitle}>Umiejętności</Text>

              {profile.skills.map((skill) => (
                <Text key={skill} style={styles.skill}>
                  • {skill}
                </Text>
              ))}

              <TouchableOpacity style={styles.button} onPress={startEdit}>
                <Text style={styles.buttonText}>Edytuj profil</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.sectionTitle}>Edycja profilu</Text>

              <Text style={styles.label}>Imię i nazwisko</Text>
              <TextInput
                style={[styles.input, errors.name && styles.inputError]}
                value={name}
                onChangeText={setName}
                placeholder="Wpisz imię i nazwisko"
                placeholderTextColor="#94a3b8"
              />
              {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

              <Text style={styles.label}>Opis</Text>
              <TextInput
                style={[styles.input, styles.textArea, errors.bio && styles.inputError]}
                value={bio}
                onChangeText={setBio}
                placeholder="Napisz coś o sobie"
                placeholderTextColor="#94a3b8"
                multiline
              />
              {errors.bio && <Text style={styles.errorText}>{errors.bio}</Text>}

              <Text style={styles.label}>Umiejętności</Text>
              <TextInput
                style={[styles.input, errors.skills && styles.inputError]}
                value={skillsText}
                onChangeText={setSkillsText}
                placeholder="JavaScript, React Native, SQL"
                placeholderTextColor="#94a3b8"
              />
              {errors.skills && <Text style={styles.errorText}>{errors.skills}</Text>}

              <TouchableOpacity style={styles.saveButton} onPress={saveProfile}>
                <Text style={styles.buttonText}>Zapisz</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cancelButton} onPress={cancelEdit}>
                <Text style={styles.buttonText}>Anuluj</Text>
              </TouchableOpacity>
            </>
          )}
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

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
    color: '#f9fafb',
  },

  
  card: {
  backgroundColor: '#f9fafb',
  borderRadius: 18,
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
    color: '#f97316',
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
    backgroundColor: '#f97316',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },

  saveButton: {
    marginTop: 24,
    backgroundColor: '#10b981',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },

  cancelButton: {
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
});