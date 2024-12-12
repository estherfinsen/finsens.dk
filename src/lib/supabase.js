import React from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jhgcdsutaztszxtyehtm.supabase.co"; // Erstat med din Supabase URL
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoZ2Nkc3V0YXp0c3p4dHllaHRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMTg0NTgsImV4cCI6MjA0NzU5NDQ1OH0.VVF1QVqChKO2sUcYjYOuaUFdGCe68Sj3B2ZxG05mQiI"; // Erstat med din API nøgle
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
