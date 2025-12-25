
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import WorkoutCard from './components/WorkoutCard';
import AIChatBot from './components/AIChatBot';
import LandingPage from './components/LandingPage';
import Onboarding from './components/Onboarding';
import Login from './components/Login';
import ProfileView from './components/ProfileView';
import MediaAnalyzer from './components/MediaAnalyzer';
import { AppTab, WorkoutSession } from './types';

enum View {
  LANDING,
  ONBOARDING,
  LOGIN,
  DASHBOARD
}

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.LANDING);
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.PLAN);
  
  // Dummy user data
  const [user, setUser] = useState({
    name: "Alex García",
    email: "alex@ejemplo.com",
    goal: "Ganar Músculo",
    joined: "Marzo 2024"
  });

  const handleLogout = () => {
    setCurrentView(View.LANDING);
    setActiveTab(AppTab.PLAN);
  };

  const todaySession: WorkoutSession = {
    day: 1,
    title: "Sesión 1: Fundamentos de Fuerza",
    duration: "45 min",
    focus: "Parte Superior",
    intensity: "Alta Intensidad",
    description: "Comenzaremos con movimientos compuestos para activar los grupos musculares grandes. Enfoque en la técnica y control del movimiento.",
    imageUrl: "" 
  };

  if (currentView === View.LANDING) {
    return (
      <LandingPage 
        onStart={() => setCurrentView(View.ONBOARDING)} 
        onLogin={() => setCurrentView(View.LOGIN)} 
      />
    );
  }

  if (currentView === View.LOGIN) {
    return (
      <Login 
        onBack={() => setCurrentView(View.LANDING)} 
        onLogin={() => setCurrentView(View.DASHBOARD)} 
      />
    );
  }

  if (currentView === View.ONBOARDING) {
    return <Onboarding onBack={() => setCurrentView(View.LANDING)} onFinish={() => setCurrentView(View.DASHBOARD)} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0d1a12] text-white selection:bg-primary selection:text-[#0d1a12]">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onLogout={handleLogout} 
      />
      
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 py-12">
        {activeTab === AppTab.PROFILE ? (
          <ProfileView user={user} onLogout={handleLogout} />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Area */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Header Text */}
              <div className="space-y-4 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
                  <span className="material-symbols-outlined text-[14px]">smart_toy</span>
                  IA Generada por Fitnavi
                </div>
                <h1 className="text-5xl font-black tracking-tight leading-tight">
                  ¡Hola de nuevo, {user.name.split(' ')[0]}!
                </h1>
                <p className="text-gray-400 text-xl font-light">
                  Tu plan personalizado de <span className="text-primary font-bold">hipertrofia</span> está listo para hoy.
                </p>
              </div>

              {/* Hero Session Card */}
              <div className="h-full">
                 <WorkoutCard 
                  session={todaySession} 
                  onStart={() => alert("¡Entrenamiento iniciado! Sigue las instrucciones de la IA.")} 
                />
              </div>

              {/* Metrics Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-3xl bg-[#122419] border border-white/5 space-y-8">
                  <div className="flex justify-between items-center">
                    <div className="size-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <span className="material-symbols-outlined">water_drop</span>
                    </div>
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Hidratación</span>
                  </div>
                  <div>
                    <h4 className="text-4xl font-black mb-1">1.8 / 2.5L</h4>
                    <p className="text-gray-500 text-sm">Progreso diario</p>
                  </div>
                  <div className="w-full bg-black/40 rounded-full h-2">
                    <div className="h-full bg-blue-500 w-[72%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all"></div>
                  </div>
                </div>

                <div className="p-8 rounded-3xl bg-[#122419] border border-white/5 space-y-8">
                  <div className="flex justify-between items-center">
                    <div className="size-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                      <span className="material-symbols-outlined">restaurant</span>
                    </div>
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Nutrición</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <h4 className="text-4xl font-black mb-1">2,400</h4>
                      <p className="text-gray-500 text-sm">Objetivo calórico</p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary font-bold text-sm">Alta Proteína</p>
                      <p className="text-gray-500 text-[10px] uppercase">Plan IA</p>
                    </div>
                  </div>
                  <div className="w-full bg-black/40 rounded-full h-2">
                    <div className="h-full bg-orange-500 w-[65%] rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)] transition-all"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Area */}
            <div className="lg:col-span-4 space-y-8">
              {/* Media Analyzer Integrated */}
              <MediaAnalyzer />

              {/* Summary */}
              <div className="bg-[#122419] rounded-3xl p-8 border border-white/5 space-y-8">
                <h3 className="text-lg font-black flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">analytics</span>
                  Resumen Semanal
                </h3>
                <div className="space-y-6">
                  {[
                    { icon: 'calendar_today', label: 'Frecuencia', val: '4 días/sem' },
                    { icon: 'trending_up', label: 'Dificultad', val: 'Intermedia' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-5">
                      <div className="size-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400">
                        <span className="material-symbols-outlined text-xl">{item.icon}</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-500 mb-0.5">{item.label}</p>
                        <p className="text-xl font-black text-white">{item.val}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <AIChatBot />
    </div>
  );
};

export default App;
