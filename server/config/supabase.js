
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = "https://lhwqdtmtxnpyiejrwrpw.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxod3FkdG10eG5weWllanJ3cnB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0OTkxNTUsImV4cCI6MjA0NzA3NTE1NX0.Ln-w_IDhpKIpR5APiu48Bgz1ml9REkLZwk37QTYRGlg"


module.exports = { supabase: createClient(supabaseUrl, supabaseAnonKey) }
