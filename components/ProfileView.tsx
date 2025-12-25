
import React from 'react';

interface ProfileViewProps {
  user: {
    name: string;
    email: string;
    goal: string;
    joined: string;
  };
  onLogout: () => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ user, onLogout }) => {
  return (
    <div className="animate-fade-in-up space-y-10">
      {/* Profile Header Card */}
      <div className="relative rounded-3xl overflow-hidden bg-[#122419] border border-white/5 p-8 md:p-12">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-primary/20 to-transparent"></div>
        
        <div className="relative flex flex-col md:flex-row items-center md:items-end gap-8">
          <div className="size-32 md:size-40 rounded-full border-4 border-primary/30 p-1 bg-[#0d1a12]">
            <img 
              src="https://picsum.photos/seed/alex/200/200" 
              alt="User" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          
          <div className="flex-1 text-center md:text-left space-y-2">
            <h1 className="text-4xl font-black">{user.name}</h1>
            <p className="text-gray-400 font-medium">{user.email}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
              <span className="bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-primary/20">
                Miembro desde {user.joined}
              </span>
              <span className="bg-white/5 text-gray-400 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-white/10">
                Nivel Intermedio
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Goals & Focus */}
        <div className="lg:col-span-3 space-y-8">
          <div className="bg-[#122419] rounded-3xl p-8 border border-white/5">
            <h3 className="text-xl font-black mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">target</span>
              Objetivos Actuales
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#193324] p-6 rounded-2xl border border-white/5 space-y-4">
                <div className="size-10 rounded-xl bg-primary text-[#0d1a12] flex items-center justify-center">
                  <span className="material-symbols-outlined">fitness_center</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Meta Principal</p>
                  <p className="text-xl font-black text-white">{user.goal}</p>
                </div>
                <div className="w-full bg-black/40 rounded-full h-1.5">
                  <div className="h-full bg-primary w-[75%] rounded-full shadow-[0_0_10px_rgba(19,236,109,0.3)]"></div>
                </div>
                <p className="text-[10px] text-gray-400 font-bold uppercase">75% Completado</p>
              </div>

              <div className="bg-[#193324] p-6 rounded-2xl border border-white/5 space-y-4">
                <div className="size-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Bienestar Mental</p>
                  <p className="text-xl font-black text-white">Manejo de Estrés</p>
                </div>
                <div className="w-full bg-black/40 rounded-full h-1.5">
                  <div className="h-full bg-blue-500 w-[60%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)]"></div>
                </div>
                <p className="text-[10px] text-gray-400 font-bold uppercase">60% Completado</p>
              </div>
            </div>
          </div>

          <div className="bg-[#122419] rounded-3xl p-8 border border-white/5">
            <h3 className="text-xl font-black mb-8">Logros Recientes</h3>
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {[
                { label: 'Racha 7 días', icon: 'local_fire_department', color: 'text-orange-500' },
                { label: 'Madrugador', icon: 'wb_sunny', color: 'text-yellow-500' },
                { label: 'Guerrero Pesas', icon: 'weight', color: 'text-primary' },
                { label: 'Hidratación OK', icon: 'water_drop', color: 'text-blue-500' }
              ].map((badge, i) => (
                <div key={i} className="flex flex-col items-center gap-3 min-w-[100px]">
                  <div className={`size-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center ${badge.color}`}>
                    <span className="material-symbols-outlined text-3xl">{badge.icon}</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-center text-gray-400">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Account Logout Action */}
          <div className="pt-8 flex justify-center">
            <button 
              onClick={onLogout}
              className="flex items-center gap-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 font-black py-4 px-10 rounded-2xl transition-all active:scale-95 border border-red-500/20"
            >
              <span className="material-symbols-outlined">logout</span>
              Cerrar Sesión de Fitnavi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
