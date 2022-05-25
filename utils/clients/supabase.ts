import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 
'https://gnkisdbcryyxrvglzjyk.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdua2lzZGJjcnl5eHJ2Z2x6anlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0NjkzNjIsImV4cCI6MTk2OTA0NTM2Mn0.TqbKWRYNeB7iOpiJeAZvCA1Jf8VfS_XxLPllSF8tzNo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
