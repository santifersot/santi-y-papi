
export interface WorkoutSession {
  day: number;
  title: string;
  duration: string;
  focus: string;
  intensity: string;
  description: string;
  imageUrl: string;
}

export interface UserMetric {
  value: string;
  label: string;
  icon: string;
  progress: number;
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export enum AppTab {
  PLAN = 'Mi Plan',
  PROFILE = 'Perfil'
}
