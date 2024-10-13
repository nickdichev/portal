import PocketBase, { BaseAuthStore } from 'pocketbase';

export type PocketBaseInstance = PocketBase;
export type AuthStore = BaseAuthStore;

export function createPocketBase(cookieHeader?: string) {
  const pb = new PocketBase(process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8090');
  
  if (cookieHeader) {
    // Load auth store from cookie header
    pb.authStore.loadFromCookie(cookieHeader);
  }
  
  return pb;
}