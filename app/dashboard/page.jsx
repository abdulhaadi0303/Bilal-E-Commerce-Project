import { createServerSupabase } from "@/lib/supabaseServer";

export default async function DashboardPage() {
  const supabase = createServerSupabase();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <main style={{ padding: "40px" }}>
      <h1>Dashboard</h1>
      <p>Welcome, <strong>{user?.email}</strong></p>
    </main>
  );
}
