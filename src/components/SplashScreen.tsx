import { motion } from 'motion/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main className="relative h-screen w-full flex flex-col items-center justify-between py-16 px-8 overflow-hidden bg-surface">
      {/* Atmospheric Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          alt=""
          className="w-full h-full object-cover opacity-15 mix-blend-multiply"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkxPTcffIBrAQC8l05z6FKIwLG63YsRp-w6Tx6YU6QfmimgLepJtWJMMuB_96YogYyj3s4MP1tDyz_UsZ60hIAAYaRxWBBzXos7JVtY5x-TdyJ1Uk9L1vsV2_scXG9Pg8yp0VatSBeFHlxcFulTR0VtBfX1oQkv7pj5WOoOwDGWiARioi5OmWGARq3_pxaa7iZTpO9laqiNAs6UoNIRtdcC7jRJWEFymGn4bfMl6_zQjiVwnZXd00S80eOCF98IPLxnru2w0NTbD8L"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface-container-low"></div>
      </div>

      {/* Header/Status Spacer */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 w-full flex justify-center"
      >
        <span className="font-headline tracking-[0.4em] text-outline text-[10px] font-bold uppercase">
          The Digital Concierge
        </span>
      </motion.div>

      {/* Center Brand Identity */}
      <div className="z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative mb-8 group"
        >
          <div className="absolute inset-0 bg-primary/5 rounded-full scale-150 blur-3xl"></div>
          <div className="relative w-24 h-24 flex items-center justify-center">
            <svg className="w-full h-full drop-shadow-2xl" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="logoGradient" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#000666', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#1A237E', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path d="M50 15 L85 85 L65 85 L50 50 L35 85 L15 85 Z" fill="url(#logoGradient)"></path>
              <path d="M30 65 Q50 55 70 65" fill="none" stroke="#C5A059" strokeLinecap="round" strokeWidth="4"></path>
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-2"
        >
          <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-primary leading-none">
            Azure <span className="text-secondary-gold">Reserve</span>
          </h1>
          <p className="font-body text-sm tracking-[0.2em] text-outline-variant font-medium">
            BEYOND THE EXTRAORDINARY
          </p>
        </motion.div>
      </div>

      {/* Modern Loading Indicator & Footer */}
      <div className="z-10 w-full max-w-xs flex flex-col items-center gap-8">
        <div className="w-full h-[2px] bg-outline-variant/20 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="loading-bar-gradient absolute inset-0 w-1/3 rounded-full shadow-[0_0_15px_rgba(197,160,89,0.4)]"
          ></motion.div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="font-label text-[11px] text-on-surface-variant font-semibold tracking-widest opacity-60">
            PREPARING YOUR JOURNEY
          </p>
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="material-symbols-outlined text-secondary-gold text-lg"
          >
            waves
          </motion.span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
    </main>
  );
}
