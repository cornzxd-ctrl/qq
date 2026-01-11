import { BusinessProfile } from "./businessProfile";

const STORAGE_KEY = "qq_business_profile";

export function saveProfile(profile: BusinessProfile) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch (e) {
    console.error("Failed to save profile", e);
  }
}

export function loadProfile(): BusinessProfile | null {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error("Failed to load profile", e);
    return null;
  }
}

export function clearProfile() {
  localStorage.removeItem(STORAGE_KEY);
}

export function exportProfile(profile: BusinessProfile) {
  const blob = new Blob([JSON.stringify(profile, null, 2)], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "qq-business-profile.json";
  a.click();
  URL.revokeObjectURL(url);
}
