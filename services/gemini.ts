
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const askGemini = async (prompt: string): Promise<string> => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        systemInstruction: "You are Fitnavi, a world-class AI fitness coach. You are encouraging, expert in sports science, and professional. Keep answers concise and motivating in Spanish.",
      }
    });
    return response.text || "Lo siento, no pude procesar eso.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Hubo un error al conectar con el entrenador AI.";
  }
};

export const analyzeMedia = async (prompt: string, base64Data: string, mimeType: string): Promise<string> => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: {
        parts: [
          { inlineData: { data: base64Data, mimeType } },
          { text: prompt }
        ]
      },
      config: {
        systemInstruction: "You are an expert fitness and nutrition analyst. Analyze the provided media and provide insightful advice in Spanish.",
      }
    });
    return response.text || "No pude analizar el medio proporcionado.";
  } catch (error) {
    console.error("Gemini Media Error:", error);
    return "Error al analizar el archivo.";
  }
};
