import { redirect } from "next/navigation";
import { createServerSupabase } from "@/lib/supabaseServer";

export default async function DashboardLayout({ children }) {
  const supabase = createServerSupabase();
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      {children}
    </div>
  );
}
