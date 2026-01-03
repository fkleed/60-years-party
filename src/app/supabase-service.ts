import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { Database } from '../../database.types';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {

  private supabaseUrl = import.meta.env.NG_APP_PUBLIC_SUPABASE_URL ?? '';
  private supabaseKey = import.meta.env.NG_APP_PUBLIC_SUPABASE_ANON_KEY ?? '';

  private supabase = createClient<Database>(
    this.supabaseUrl,
    this.supabaseKey
  );

  async saveAcceptance(nameToInsert: string, numberOfPersonsToInsert: number) {
    const { error } = await this.supabase.from('acceptance')
      .insert({ name: nameToInsert, number_of_persons: numberOfPersonsToInsert })
      .select()

    if (error) {
      throw error;
    }
  }
}
