import { getItem, setItem, removeItem } from "@zos/storage";

const PROVIDER_KEY = "ztune_provider";
const AUTH_KEY = "user_authorized";
const PREMIUM_KEY = "user_premium";

export function saveProvider(provider) {
  setItem(PROVIDER_KEY, provider);
}

export function loadProvider() {
  return getItem(PROVIDER_KEY);
}

export function clearProvider() {
  removeItem(PROVIDER_KEY);
}

export function setAuthorized() {
  setItem(AUTH_KEY, true);
}

export function clearAuthorization() {
  removeItem(AUTH_KEY);
}

export function isAuthorized() {
  return getItem(AUTH_KEY) === true;
}

export function setPremium() {
  setItem(PREMIUM_KEY, true);
}

export function clearPremium() {
  removeItem(PREMIUM_KEY);
}

export function isPremium() {
  return getItem(PREMIUM_KEY) === true;
}