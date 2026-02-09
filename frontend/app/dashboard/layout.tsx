'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import HumanoSidebar from '../components/HumanoSidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050505] text-gray-100">
      {/* Background Effects - Black Piano Premium com Gold Premium */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Gradiente Radial de Profundidade */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#0a0a0a_0%,_#050505_50%,_#000000_100%)]" />
        
        {/* Grid Sutil Dourado com Opacidade 0.02 - Luxo/Private Banking */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(212, 175, 55, 0.02) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(170, 138, 46, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Aurora Effect - Dourado Real (#D4AF37) */}
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] bg-[#D4AF37]/10 blur-[120px]" />
        
        {/* Aurora Effect - Dourado Claro (#F6E05E) */}
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] bg-[#F6E05E]/10 blur-[120px]" />
        
        {/* Aurora Effect - Branco sutil com toque dourado */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] bg-gradient-to-br from-white/5 to-[#D4AF37]/5 blur-[100px]" />
        
        {/* Shimmer Effect - Brilho dourado sutil */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <HumanoSidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden transition-opacity duration-300',
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Sidebar */}
        <div
          className={cn(
            'absolute left-0 top-0 h-full transition-transform duration-300',
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <HumanoSidebar open={true} />
          
          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-4 rounded-lg p-2 hover:bg-white/5 transition-colors"
          >
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={cn(
          'relative z-10 transition-all duration-300',
          sidebarOpen ? 'lg:ml-64' : 'lg:ml-20'
        )}
      >
        {/* Top Bar - Mobile */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-white/5 bg-black/40 backdrop-blur-xl px-4 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="rounded-lg p-2 hover:bg-white/5 transition-colors"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="flex-1">
            <h2 className="text-lg font-semibold text-white font-sans">Humano Saúde</h2>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
