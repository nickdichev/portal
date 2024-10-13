'use server'

import { cookies } from 'next/headers'
import { createPocketBase, PocketBaseInstance } from '@/lib/pocketbase'

export async function getServerSidePocketBase(): Promise<PocketBaseInstance> {
  return createPocketBase(cookies().get('pb_auth')?.value);
}

export async function login(email: string, password: string) {
  const pb = createPocketBase();
 
  try {
    const authData = await pb.collection('users').authWithPassword(email, password);
   
    // Set the auth cookie
    cookies().set('pb_auth', pb.authStore.exportToCookie(), { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

    return { success: true, user: authData.record };
  } catch (error) {
    console.error('Login failed:', error);
    return { success: false, error: 'Login failed' };
  }
}

export async function logout() {
  cookies().delete('pb_auth');
  return { success: true };
}

