import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ginmgicgebdjcbloitka.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdpbm1naWNnZWJkamNibG9pdGthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0NTEyNzAsImV4cCI6MjA2NjAyNzI3MH0.uR8SRSis3oWxaCKDK5fq05T1ZGSpjlic6T9m0PQqmd0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)