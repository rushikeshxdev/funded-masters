import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { logout } from '@/app/auth/login/actions'

export default async function DashboardPage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/auth/login')
  }

  return (
    <div className="min-h-screen bg-[#030704] text-white p-8 font-figtree">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome, {data.user.user_metadata.full_name || 'Trader'}!</h1>
            <p className="text-white/60">Manage your accounts and track your performance.</p>
          </div>
          <form action={logout}>
            <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all">
              Sign Out
            </button>
          </form>
        </div>

        {/* Dashboard Grid Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#060D08] border border-white/5 p-8 rounded-3xl">
            <h3 className="text-white/60 text-sm uppercase tracking-wider mb-2">Total Balance</h3>
            <p className="text-3xl font-bold">$0.00</p>
          </div>
          <div className="bg-[#060D08] border border-white/5 p-8 rounded-3xl">
            <h3 className="text-white/60 text-sm uppercase tracking-wider mb-2">Active Challenges</h3>
            <p className="text-3xl font-bold">0</p>
          </div>
          <div className="bg-[#060D08] border border-white/5 p-8 rounded-3xl">
            <h3 className="text-white/60 text-sm uppercase tracking-wider mb-2">Next Payout</h3>
            <p className="text-3xl font-bold">--</p>
          </div>
        </div>

        <div className="mt-12 p-12 border-2 border-dashed border-white/5 rounded-[40px] flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mb-6">
             <div className="w-8 h-8 bg-brand rounded-lg animate-pulse" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">No Active Accounts</h2>
          <p className="text-white/60 max-w-md mb-8">
            You haven't started any challenges yet. Proving your edge is just one click away.
          </p>
          <button className="px-10 py-4 bg-brand text-black rounded-full font-bold hover:scale-105 transition-all">
            Get Funded Now
          </button>
        </div>
      </div>
    </div>
  )
}
