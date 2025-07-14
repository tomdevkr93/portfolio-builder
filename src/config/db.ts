import { createClient } from "@supabase/supabase-js";

const dbUrl = process.env.DB_PROJECT_URL || "";
const dbApiKey = process.env.DB_API_KEY || "";
const db = createClient(dbUrl, dbApiKey);

export default db;
