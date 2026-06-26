import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ProjectsProvider } from '../context/ProjectsContext';
import { ProfileProvider } from '../context/ProfileContext';

export default function RootLayout() {
  return (
    <ProjectsProvider>
      <ProfileProvider>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: '#f97316',
            tabBarInactiveTintColor: '#94a3b8',
            tabBarStyle: {
              backgroundColor: '#111827',
            borderTopColor: '#374151',
            },
            headerShown: false,
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: 'Profil',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" size={size} color={color} />
              ),
            }}
          />

          <Tabs.Screen
            name="projects"
            options={{
              title: 'Projekty',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="code-slash" size={size} color={color} />
              ),
            }}
          />

          <Tabs.Screen
            name="contact"
            options={{
              title: 'Kontakt',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="mail" size={size} color={color} />
              ),
            }}
          />
        </Tabs>
      </ProfileProvider>
    </ProjectsProvider>
  );
}