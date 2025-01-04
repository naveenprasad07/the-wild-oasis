import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://prrckccbsivabzfldlpb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBycmNrY2Nic2l2YWJ6ZmxkbHBiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1Nzc5MTcsImV4cCI6MjA1MTE1MzkxN30.jfvxsrRTR5Kx9t3MT6QQxbJAZTf0Z6wfptC_rHV4jIQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
