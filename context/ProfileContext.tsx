import React, { createContext, useContext, useEffect, useState } from 'react';
import { saveData, loadData } from '../utils/storage';

export type Profile = {
  name: string;
  bio: string;
  skills: string[];
};

type Ctx = {
  profile: Profile;
  updateProfile: (p: Profile) => void;
};

const ProfileContext = createContext<Ctx | null>(null);

const STORAGE_KEY = '@profile';

const defaultProfile: Profile = {
  name: 'Michał Adamiak',
  bio: 'Student informatyki. Pasjonat jazdy na rowerze oraz dobrej kawy. Specjalista od szybkiej, taniej i dobrej roboty.',
  skills: ['JavaScript', 'React Native', 'HTML', 'Windows', 'PowerShell'],
};

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      const stored = await loadData<Profile>(STORAGE_KEY);

      if (stored) {
        setProfile(stored);
      } else {
        setProfile(defaultProfile);
      }

      setLoaded(true);
    }

    loadProfile();
  }, []);

  useEffect(() => {
    if (loaded) {
      saveData(STORAGE_KEY, profile);
    }
  }, [profile, loaded]);

  const updateProfile = (p: Profile) => {
    setProfile(p);
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const ctx = useContext(ProfileContext);

  if (!ctx) {
    throw new Error('useProfile musi byc uzyty w ProfileProvider');
  }

  return ctx;
}