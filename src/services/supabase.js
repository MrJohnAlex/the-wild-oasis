import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qrfhcpyfwhubkfvsxnpn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFyZmhjcHlmd2h1YmtmdnN4bnBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3MTM1MTAsImV4cCI6MjA1MzI4OTUxMH0.tZR3yMCpIDxl2oln0jC0LIJKIbRTvgUgS4Ttt4o7eA4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
