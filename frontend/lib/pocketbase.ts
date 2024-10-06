import PocketBase from 'pocketbase';

let pb: PocketBase | null = null;

export function getPocketBase(): PocketBase {
  if (!pb) {
    const apiUrl = process.env.API_URL || 'http://127.0.0.1:8090';
    pb = new PocketBase(apiUrl);
  }
  return pb;
}