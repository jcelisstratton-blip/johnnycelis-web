import { supabase } from "@/lib/supabaseClient";

type StorageResult = { key: string; value: string } | null;

export const storage = {
  async get(key: string): Promise<StorageResult> {
    const { data, error } = await supabase
      .from("panel_state")
      .select("value")
      .eq("key", key)
      .maybeSingle();

    if (error || !data) return null;
    return { key, value: JSON.stringify(data.value) };
  },

  async set(key: string, value: string): Promise<StorageResult> {
    const parsed = JSON.parse(value);
    const { error } = await supabase
      .from("panel_state")
      .upsert({ key, value: parsed, updated_at: new Date().toISOString() });

    if (error) {
      console.error("Error guardando en Supabase:", error.message);
      return null;
    }
    return { key, value };
  },
};
