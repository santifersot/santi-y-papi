
import React, { useState } from 'react';

interface LoginProps {
  onBack: () => void;
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onBack, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-[#0d1a12] text-white flex flex-col font-display selection:bg-primary selection:text-[#0d1a12]">
      {/* Header */}
      <nav className="max-w-[1280px] w-full mx-auto px-6 h-20 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
          <div className="size-8 text-primary">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
              <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">Fitnavi</span>
        </div>
      </nav>

      <main className="max-w-[1100px] w-full mx-auto px-6 flex-1 flex flex-col items-center justify-center py-12">
        <div className="w-full max-w-md animate-fade-in-up">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Bienvenido de nuevo</h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Inicia sesión para continuar con tu progreso y tu plan personalizado.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Correo Electrónico</label>
              <input 
                type="email" 
                placeholder="alex@ejemplo.com"
                className="w-full bg-[#13261b]/40 border-2 border-white/5 rounded-xl px-5 py-4 text-white focus:border-primary focus:bg-[#13261b] focus:ring-0 outline-none transition-all placeholder:text-gray-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Contraseña</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-[#13261b]/40 border-2 border-white/5 rounded-xl px-5 py-4 text-white focus:border-primary focus:bg-[#13261b] focus:ring-0 outline-none transition-all placeholder:text-gray-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-primary hover:bg-[#0fd660] text-[#0d1a12] font-black py-4 px-10 rounded-xl text-lg flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-primary/20"
            >
              Iniciar Sesión
              <span className="material-symbols-outlined font-black">login</span>
            </button>
          </form>

          <div className="mt-8 text-center">
            <button 
              onClick={onBack}
              className="text-gray-500 hover:text-white font-bold transition-colors text-sm flex items-center justify-center gap-2 mx-auto group"
            >
              <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1 text-base">arrow_back</span>
              Volver al inicio
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
