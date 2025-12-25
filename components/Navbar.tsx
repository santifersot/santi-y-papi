
import React from 'react';
import { AppTab } from '../types';

interface NavbarProps {
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onLogout }) => {
  return (
    <div className="w-full bg-[#0d1a12] border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <header className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab(AppTab.PLAN)}>
            <div className="size-8 text-primary">
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
                <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-white">Fitnavi</h2>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-10">
            <button
              onClick={() => setActiveTab(AppTab.PLAN)}
              className={`text-sm font-medium transition-all pb-1 border-b-2 ${
                activeTab === AppTab.PLAN 
                  ? "text-primary border-primary" 
                  : "text-gray-400 border-transparent hover:text-white"
              }`}
            >
              Mi Plan
            </button>
            <button 
              onClick={onLogout}
              className="text-gray-400 hover:text-red-400 font-bold text-xs transition-all flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">logout</span>
              Cerrar Sesión
            </button>
          </nav>

          {/* User Profile */}
          <div 
            onClick={() => setActiveTab(AppTab.PROFILE)}
            className={`bg-center bg-no-repeat bg-cover rounded-full size-11 border-2 cursor-pointer transition-all ${
              activeTab === AppTab.PROFILE ? 'border-primary' : 'border-primary/20 hover:border-primary'
            }`} 
            style={{ backgroundImage: 'url("https://picsum.photos/seed/alex/100/100")' }}
          ></div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
