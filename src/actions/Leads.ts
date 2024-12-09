'use server';

import { createClient } from '@/utils/supabase/server';

interface LeadValues {
  name: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  has_digital_product: boolean;
  interest_in?: string;
  terms: boolean;
}

export async function Add(values: LeadValues) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('leads')
    .insert([values])
    .select();

  if (error) {
    console.error('Error inserting lead:', error);
    throw new Error(error.message);
  }
  console.log('🚀 ~ Add ~ data:', data);

  return data?.[0]?.id || false;
}

export async function get() {
  const supabase = await createClient();
  const { data, error } = await supabase.from('leads').select('*');

  if (error) {
    console.error('Error Reading lead:', error);
    throw new Error(error.message);
  }

  return data || [];
}
