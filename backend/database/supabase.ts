import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lwkmlooalsnjgtavtcoo.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3a21sb29hbHNuamd0YXZ0Y29vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExMTE0MTQsImV4cCI6MTk4NjY4NzQxNH0._XW_FM7LrUHgIJsJb1wp-dA5CYVVniQ53DGZsjdq6TI"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;