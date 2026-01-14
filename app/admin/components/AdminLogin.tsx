'use client';

import { useState } from 'react';
import { LogIn, Eye, EyeOff } from 'lucide-react';
import { toast } from 'react-toastify';
import { useTranslations } from '@/app/lib/translations';

interface AdminLoginProps {
  onLoginSuccess: () => void;
}

export function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const t = useTranslations();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error(t.admin.login.loginError, {
        position: 'top-center',
        style: { background: '#dc2626', color: 'white' }
      });
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(t.admin.login.loginSuccess, {
          position: 'top-center',
          style: { background: '#16a34a', color: 'white' }
        });
        onLoginSuccess();
      } else {
        toast.error(data.error || 'Login failed', {
          position: 'top-center',
          style: { background: '#dc2626', color: 'white' }
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed', {
        position: 'top-center',
        style: { background: '#dc2626', color: 'white' }
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F2ED] px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-lg shadow-lg p-8 border border-zinc-200">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 bg-[#9D7F5F] rounded-lg flex items-center justify-center mb-4">
              <LogIn className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-serif font-semibold text-zinc-900 mb-2">
              {t.admin.login.title}
            </h2>
            <p className="text-zinc-600 text-sm">
              {t.admin.login.subtitle}
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-zinc-700 mb-2">
                  {t.admin.login.username}
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent transition-colors"
                  placeholder={t.admin.login.usernamePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-zinc-700 mb-2">
                  {t.admin.login.password}
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent transition-colors"
                    placeholder={t.admin.login.passwordPlaceholder}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-zinc-400 hover:text-zinc-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-zinc-400 hover:text-zinc-600" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center px-6 py-3 rounded-lg bg-[#9D7F5F] text-white font-medium transition-colors hover:bg-[#8B6F47] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <LogIn className="w-5 h-5 mr-2" />
                  {t.admin.login.loginButton}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}