
import React, { useState } from 'react';
import { analyzeMedia } from '../services/gemini';

const MediaAnalyzer: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setResult(null);
    setPreview(URL.createObjectURL(file));
    setIsAnalyzing(true);

    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = (reader.result as string).split(',')[1];
        const mimeType = file.type;
        const prompt = mimeType.startsWith('image/') 
          ? "Analiza esta imagen. Si es comida, estima calorías y macros. Si es un ejercicio, evalúa la forma técnica y sugiere mejoras." 
          : "Analiza este video de entrenamiento. Evalúa la técnica, rango de movimiento e intensidad.";
        
        const analysis = await analyzeMedia(prompt, base64, mimeType);
        setResult(analysis);
        setIsAnalyzing(false);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      setResult("Error al procesar el archivo.");
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="rounded-3xl bg-[#122419] border border-white/5 p-6 space-y-4">
      <h3 className="text-lg font-black text-white flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">camera</span>
        Análisis IA
      </h3>
      <p className="text-xs text-gray-400">
        Sube una foto de tu plato o un video de tu serie para que Fitnavi lo analice.
      </p>
      
      <div className="space-y-4">
        <div className="relative group">
          <input 
            type="file" 
            accept="image/*,video/*"
            onChange={handleFileChange}
            className="absolute inset-0 opacity-0 cursor-pointer z-10"
          />
          <div className="border-2 border-dashed border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 group-hover:border-primary/40 transition-all bg-black/20">
            <span className="material-symbols-outlined text-3xl text-gray-500">upload_file</span>
            <span className="text-xs font-bold text-gray-400">Subir Media</span>
          </div>
        </div>

        {preview && (
          <div className="rounded-xl overflow-hidden border border-white/5 bg-black/40">
            <img src={preview} alt="Preview" className="w-full h-32 object-cover opacity-60" />
          </div>
        )}

        {isAnalyzing && (
          <div className="flex items-center justify-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20">
            <div className="size-3 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            <span className="text-xs font-bold text-primary animate-pulse italic">Gemini está analizando...</span>
          </div>
        )}

        {result && (
          <div className="p-4 bg-black/40 rounded-xl border border-white/5 text-[13px] leading-relaxed text-gray-300 max-h-60 overflow-y-auto scrollbar-hide">
            <div className="flex items-center gap-2 mb-2 text-primary">
              <span className="material-symbols-outlined text-sm">info</span>
              <span className="font-black uppercase text-[10px] tracking-widest">Resultado</span>
            </div>
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaAnalyzer;
