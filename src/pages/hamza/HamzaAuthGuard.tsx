import React, { useState, useEffect } from 'react';
import { Lock, Loader2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// SHA-256 of the invoice password (plain text is never shipped in the bundle).
// To change it: printf 'new-password' | sha256sum  -> paste the hash here.
const PASSWORD_SHA256 = '9fa5848b4241a152b72cac9519156633722fbb0e7de1025d1191f8777d7379f4';

const sha256 = async (text: string) => {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('');
};

// Private area: keep every Hamza page out of search results
const NoIndex = () => (
  <Helmet>
    <meta name="robots" content="noindex, nofollow" />
  </Helmet>
);

export default function HamzaAuthGuard({ children }: { children: React.ReactNode }) {
  // Start as 'loading' — we don't know auth state until localStorage is read client-side
  const [status, setStatus] = useState<'loading' | 'authenticated' | 'unauthenticated'>('loading');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    // Read auth state once mounted on the client (avoids hydration mismatch)
    const auth = localStorage.getItem('hamza_auth_v1');
    setStatus(auth === 'true' ? 'authenticated' : 'unauthenticated');
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((await sha256(password)) === PASSWORD_SHA256) {
      localStorage.setItem('hamza_auth_v1', 'true');
      setStatus('authenticated');
      setError(false);
    } else {
      setError(true);
      setPassword('');
    }
  };

  // While reading localStorage — show a clean spinner, render NOTHING else
  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <NoIndex />
        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
      </div>
    );
  }

  // Authenticated — render the protected page with no wrapper
  if (status === 'authenticated') {
    return <><NoIndex />{children}</>;
  }

  // Unauthenticated — show ONLY the login form (no children rendered at all)
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 font-sans">
      <NoIndex />
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm border border-slate-100">
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
            <Lock className="w-6 h-6 text-white" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-800 text-center mb-1">Invoice System</h2>
        <p className="text-slate-500 text-sm text-center mb-6">Secured Area</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2.5 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
              placeholder="Enter password..."
              autoFocus
            />
            {error && (
              <p className="text-red-500 text-xs mt-1.5 font-medium">
                Incorrect password. Please try again.
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-indigo-700 shadow-sm transition-colors mt-2"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
}
