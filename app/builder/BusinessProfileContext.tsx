"use client";

import { createContext, useContext, useState, useEffect } from "react";
import {
  BusinessProfile,
  defaultBusinessProfile,
} from "@/lib/businessProfile";
import {
  saveProfile,
  loadProfile,
  clearProfile,
  exportProfile,
} from "@/lib/profileStorage";

const BusinessProfileContext = createContext<any>(null);

export function BusinessProfileProvider({ children }: { children: any }) {
  const [profile, setProfile] = useState<BusinessProfile>(
    defaultBusinessProfile
  );

  useEffect(() => {
    const existing = loadProfile();
    if (existing) setProfile(existing);
  }, []);

  function updateProfile(partial: Partial<BusinessProfile>) {
    const updated = { ...profile, ...partial };
    setProfile(updated);
    saveProfile(updated);
  }

  function resetProfile() {
    setProfile(defaultBusinessProfile);
    clearProfile();
  }

  return (
    <BusinessProfileContext.Provider
      value={{
        profile,
        setProfile,
        updateProfile,
        resetProfile,
        exportProfile: () => exportProfile(profile),
      }}
    >
      {children}
    </BusinessProfileContext.Provider>
  );
}

export function useBusinessProfile() {
  return useContext(BusinessProfileContext);
}
