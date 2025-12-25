
import React, { useState } from 'react';

interface OnboardingProps {
  onBack: () => void;
  onFinish: () => void;
}

type Objective = 'weight' | 'muscle' | 'wellness' | 'performance';

const Onboarding: React.FC<OnboardingProps> = ({ onBack, onFinish }) => {
  const [step, setStep] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState<Objective>('muscle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const objectives = [
    {
      id: 'weight' as Objective,
      icon: 'scale',
      title: 'Perder Peso',
      description: 'Reduce grasa corporal de forma saludable y sostenible.'
    },
    {
      id: 'muscle' as Objective,
      icon: 'fitness_center',
      title: 'Ganar Músculo',
      description: 'Aumenta tu fuerza, potencia y volumen muscular.'
    },
    {
      id: 'wellness' as Objective,
      icon: 'self_care',
      title: 'Bienestar',
      description: 'Enfoque holístico: mejor sueño, menos estrés y movilidad.'
    },
    {
      id: 'performance' as Objective,
      icon: 'bolt',
      title: 'Rendimiento',
      description: 'Prepárate para una competición o mejora en tu deporte.'
    }
  ];

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      onFinish();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onBack();
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1a12] text-white flex flex-col font-display selection:bg-primary selection:text-[#0d1a12]">
      {/* Header */}
      <nav className="max-w-[1280px] w-full mx-auto px-6 h-20 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="size-8 text-primary">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
              <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">Fitnavi</span>
        </div>
      </nav>

      <main className="max-w-[1100px] w-full mx-auto px-6 flex-1 py-12 flex flex-col">
        {/* Progress Bar Area */}
        <div className="mb-16">
          <div className="flex justify-between items-end mb-4 text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="text-primary">Paso {step} de 2</span>
            <span className="text-gray-500">Configuración de Perfil</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-700 ease-out shadow-[0_0_15px_rgba(19,236,109,0.4)]"
              style={{ width: `${(step / 2) * 100}%` }}
            ></div>
          </div>
        </div>

        {step === 1 ? (
          <div className="animate-fade-in-up">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">¿Cuál es tu objetivo principal?</h1>
              <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                Personalizaremos tu experiencia en Fitnavi basándonos en tu elección. Puedes ajustar esto más tarde en tu perfil.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {objectives.map((obj) => (
                <button
                  key={obj.id}
                  onClick={() => setSelectedGoal(obj.id)}
                  className={`relative flex flex-col items-start p-6 text-left rounded-2xl transition-all border-2 group ${
                    selectedGoal === obj.id 
                      ? "bg-[#13261b] border-primary shadow-[0_0_40px_rgba(19,236,109,0.1)]" 
                      : "bg-[#13261b]/40 border-white/5 hover:border-white/10"
                  }`}
                >
                  {selectedGoal === obj.id && (
                    <div className="absolute top-4 right-4 text-primary animate-fade-in-up">
                      <span className="material-symbols-outlined fill text-2xl">check_circle</span>
                    </div>
                  )}
                  <div className={`size-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    selectedGoal === obj.id ? "bg-primary text-[#0d1a12]" : "bg-white/5 text-primary group-hover:scale-110"
                  }`}>
                    <span className="material-symbols-outlined text-2xl">{obj.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">{obj.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {obj.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="animate-fade-in-up max-w-lg">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Crea tu cuenta</h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                Únete a Fitnavi para guardar tu progreso y desbloquear tu plan de entrenamiento personalizado con IA.
              </p>
            </div>

            <div className="space-y-6 mb-16">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Nombre Completo</label>
                <input 
                  type="text" 
                  placeholder="Ej. Alex García"
                  className="w-full bg-[#13261b]/40 border-2 border-white/5 rounded-xl px-5 py-4 text-white focus:border-primary focus:bg-[#13261b] focus:ring-0 outline-none transition-all placeholder:text-gray-600"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Correo Electrónico</label>
                <input 
                  type="email" 
                  placeholder="alex@ejemplo.com"
                  className="w-full bg-[#13261b]/40 border-2 border-white/5 rounded-xl px-5 py-4 text-white focus:border-primary focus:bg-[#13261b] focus:ring-0 outline-none transition-all placeholder:text-gray-600"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Contraseña</label>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-[#13261b]/40 border-2 border-white/5 rounded-xl px-5 py-4 text-white focus:border-primary focus:bg-[#13261b] focus:ring-0 outline-none transition-all placeholder:text-gray-600"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
          <button 
            onClick={handleBack}
            className="text-gray-500 hover:text-white font-bold transition-colors text-lg flex items-center gap-2 group"
          >
            <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1">arrow_back</span>
            Atrás
          </button>
          <button 
            onClick={handleNext}
            className="bg-primary hover:bg-[#0fd660] text-[#0d1a12] font-black py-4 px-10 rounded-xl text-lg flex items-center gap-3 transition-all active:scale-95 shadow-xl shadow-primary/20"
          >
            {step === 2 ? 'Crear mi cuenta' : 'Continuar'}
            <span className="material-symbols-outlined font-black">arrow_forward</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Onboarding;
