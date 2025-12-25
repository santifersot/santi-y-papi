
import React from 'react';
import { WorkoutSession } from '../types';

interface WorkoutCardProps {
  session: WorkoutSession;
  onStart: () => void;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ session, onStart }) => {
  return (
    <div className="bg-[#122419] rounded-3xl overflow-hidden border border-white/5 shadow-2xl flex flex-col md:flex-row h-full">
      {/* Image Side */}
      <div className="md:w-5/12 relative aspect-[4/5] md:aspect-auto">
        <img 
          src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800" 
          alt="Workout" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#122419]/20 to-[#122419]"></div>
        <div className="absolute top-6 left-6">
          <span className="bg-black/80 text-white text-[10px] font-black px-3 py-1.5 rounded-md border border-white/10 uppercase tracking-widest">
            Día {session.day}
          </span>
        </div>
      </div>

      {/* Content Side */}
      <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-between">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-primary text-xs font-black tracking-widest uppercase">Enfoque de Hoy</p>
            <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
              {session.title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-3 text-xs font-bold">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2.5 rounded-lg text-gray-300 border border-white/5">
              <span className="material-symbols-outlined text-[18px]">timer</span>
              <span>{session.duration}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2.5 rounded-lg text-gray-300 border border-white/5">
              <span className="material-symbols-outlined text-[18px]">fitness_center</span>
              <span>{session.focus}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2.5 rounded-lg text-gray-300 border border-white/5">
              <span className="material-symbols-outlined text-[18px]">local_fire_department</span>
              <span>{session.intensity}</span>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {session.description}
          </p>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5">
          <button 
            onClick={onStart}
            className="w-full bg-primary hover:bg-[#0fd660] text-[#0d1a12] font-black py-4 px-6 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined fill">play_arrow</span>
            Iniciar entrenamiento
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
