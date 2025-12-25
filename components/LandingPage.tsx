
import React from 'react';

interface LandingPageProps {
  onStart: () => void;
  onLogin: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart, onLogin }) => {
  return (
    <div className="min-h-screen bg-[#0d1a12] text-white flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <nav className="max-w-[1280px] w-full mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 text-primary">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
              <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">Fitnavi</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={onLogin}
            className="text-gray-400 hover:text-white font-bold py-2.5 px-4 text-sm transition-all"
          >
            Iniciar Sesión
          </button>
          <button 
            onClick={onStart}
            className="bg-primary hover:bg-[#0fd660] text-[#0d1a12] font-bold py-2.5 px-8 rounded-xl text-sm transition-all active:scale-95 shadow-lg shadow-primary/20"
          >
            Comenzar
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-[1280px] w-full mx-auto px-6 pt-12 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
            Tu viaje <br />
            fitness, <br />
            <span className="text-primary">hiperpersonalizado</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
            Hiperpersonalización inteligente. Bienestar holístico. Motivación real. Entrenamientos que se adaptan a ti en tiempo real.
          </p>
          <div>
            <button 
              onClick={onStart}
              className="bg-primary hover:bg-[#0fd660] text-[#0d1a12] font-bold py-4 px-10 rounded-xl text-base transition-all active:scale-95 shadow-xl shadow-primary/30"
            >
              Comenzar Ahora
            </button>
          </div>
        </div>
        <div className="relative animate-fade-in-up [animation-delay:0.2s]">
          <img 
            src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1200" 
            alt="Fitness Runner" 
            className="rounded-3xl shadow-2xl border border-white/10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a12]/50 to-transparent rounded-3xl"></div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="bg-[#102218] py-24">
        <div className="max-w-[1280px] w-full mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-black mb-4">Nuestros Pilares</h2>
            <p className="text-gray-400">Descubre cómo Fitnavi transforma tu bienestar con tecnología avanzada.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#193324] p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
              <div className="size-12 bg-black/40 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">psychology</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Smart AI</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Entrenamientos que se adaptan a ti en tiempo real usando algoritmos predictivos de última generación.
              </p>
            </div>
            <div className="bg-[#193324] p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
              <div className="size-12 bg-black/40 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">eco</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Bienestar Holístico</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Mente y cuerpo en perfecta sincronía. Integra meditación y recuperación en tu rutina diaria.
              </p>
            </div>
            <div className="bg-[#193324] p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
              <div className="size-12 bg-black/40 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">groups</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Comunidad</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Conecta y compite con tu tribu. Comparte logros y encuentra motivación en grupo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-black mb-6">¿Listo para empezar?</h2>
        <p className="text-gray-400 mb-12 max-w-2xl text-lg">
          Únete a la comunidad Fitnavi hoy mismo y toma el control de tu evolución física y mental.
        </p>
        <button 
          onClick={onStart}
          className="bg-primary hover:bg-[#0fd660] text-[#0d1a12] font-black py-4 px-12 rounded-xl text-lg shadow-[0_0_40px_rgba(19,236,109,0.3)] transition-all active:scale-95"
        >
          Empieza tu Viaje
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 pt-16 pb-12 border-t border-white/5">
        <div className="max-w-[1280px] w-full mx-auto px-6 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-8 opacity-80">
            <div className="size-6 text-primary">
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
                <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <span className="font-bold tracking-tight">Fitnavi</span>
          </div>
          <p className="text-gray-600 text-[10px] tracking-widest uppercase">
            © 2024 Fitnavi. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
