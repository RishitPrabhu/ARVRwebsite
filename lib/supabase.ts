import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export function subscribeToTable<T>(
  table: string,
  onData: (rows: T[]) => void,
  options?: {
    select?: string;
    eq?: Record<string, string | number | boolean>;
    in?: Record<string, Array<string | number | boolean>>;
    order?: { column: string; ascending?: boolean };
  }
) {
  const fetchData = async () => {
    let query = supabase.from(table).select(options?.select ?? "*");

    if (options?.eq) {
      Object.entries(options.eq).forEach(([column, value]) => {
        query = query.eq(column, value as never);
      });
    }

    if (options?.in) {
      Object.entries(options.in).forEach(([column, value]) => {
        query = query.in(column, value as never);
      });
    }

    if (options?.order) {
      query = query.order(options.order.column, {
        ascending: options.order.ascending ?? true,
      });
    }

    const { data, error } = await query;

    if (error) {
      console.error(`Error fetching ${table}:`, error);
      return;
    }

    onData((data ?? []) as T[]);
  };

  fetchData();

  const channel = supabase
    .channel(`${table}-changes`)
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table },
      () => {
        fetchData();
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}