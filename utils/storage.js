import { getItem, setItem, removeItem } from "@zos/storage";

const PROVIDER_KEY = "ztune_provider";

export function saveProvider(provider) {
  setItem(PROVIDER_KEY, provider);
}

export function loadProvider() {
  return getItem(PROVIDER_KEY);
}

export function clearProvider() {
  removeItem(PROVIDER_KEY);
}
