import React from 'react';
import { motion } from 'motion/react';
import { Apple, Chrome, ArrowLeft, UserCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LoginScreen() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="bg-surface font-sans text-on-surface min-h-screen flex flex-col items-center">
      <header className="bg-white/70 backdrop-blur-xl fixed top-0 w-full z-50 shadow-[0_32px_64px_-15px_rgba(0,6,102,0.04)]">
        <div className="flex justify-between items-center w-full px-6 h-16">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="text-primary">
              <ArrowLeft size={24} />
            </button>
            <span className="font-headline font-black tracking-widest text-primary">AZURE RESERVE</span>
          </div>
          <div className="flex items-center">
            <UserCircle className="text-outline" size={24} />
          </div>
        </div>
      </header>

      <main className="w-full max-w-[1440px] flex-grow flex items-center justify-center pt-24 pb-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full max-w-6xl items-center">
          {/* Left Side: Editorial Image Module */}
          <div className="hidden md:block md:col-span-6 relative h-[700px]">
            <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl">
              <img
                alt="Luxury hotel entrance"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKZVcxUW5cT-zQ6pY7MYL7MupbG2GinMm8MyopQd3kqL11zEAM5FSkxd70_aMhLx0jxYJuVHmjZruhPS_B4diPIwjL1uwaNsBAEaYGOWmkJcBxyiVicNio4lzMrxJ9l3t2pQNIKwmofAZP7o1Ysi9weDq7X1R_oGlvvxd0WFisk4Mnqyhvz7QhntgKJisY-BJns3xDl982xxXJ-wG-705LNAessvhDZklscknPWZA0Cl0Xngovmsg7zkieedOf5SCfxcR_NUW_fr81"
              />
            </div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-6 -right-6 glass-panel p-8 rounded-xl shadow-2xl max-w-xs"
            >
              <p className="font-headline font-bold text-primary text-xl mb-2">The Digital Concierge</p>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Experience a new standard of bespoke travel curation and effortless hospitality.
              </p>
            </motion.div>
          </div>

          {/* Right Side: Login Form */}
          <div className="col-span-1 md:col-span-6 flex flex-col md:pl-12 lg:pl-20">
            <div className="mb-12">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-headline font-extrabold text-4xl lg:text-5xl tracking-tight text-primary mb-3"
              >
                Welcome Back
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-on-surface-variant text-lg"
              >
                Sign in to your account
              </motion.p>
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="space-y-1">
                <label className="font-sans text-sm font-semibold tracking-wide text-on-surface-variant uppercase ml-1" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 rounded-md py-4 px-4 text-on-surface placeholder:text-outline transition-colors"
                  id="email"
                  placeholder="concierge@azurereserve.com"
                  type="email"
                  required
                />
              </div>
              <div className="space-y-1 relative">
                <div className="flex justify-between items-center px-1">
                  <label className="font-sans text-sm font-semibold tracking-wide text-on-surface-variant uppercase" htmlFor="password">
                    Password
                  </label>
                  <a className="text-secondary font-semibold text-sm hover:opacity-80 transition-opacity" href="#">
                    Forgot Password?
                  </a>
                </div>
                <input
                  className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 rounded-md py-4 px-4 text-on-surface placeholder:text-outline transition-colors"
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  required
                />
              </div>
              <motion.button
                whileHover={{ opacity: 0.9 }}
                whileTap={{ scale: 0.98 }}
                className="w-full editorial-gradient text-white font-headline font-bold py-5 rounded-xl shadow-lg transition-all duration-150 mt-4 text-lg"
                type="submit"
              >
                Login
              </motion.button>
            </form>

            <div className="mt-10 mb-8 flex items-center gap-4">
              <div className="h-px bg-outline-variant/30 flex-grow"></div>
              <span className="text-outline text-xs font-bold uppercase tracking-widest">Or continue with</span>
              <div className="h-px bg-outline-variant/30 flex-grow"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => alert('Social login is coming soon!')}
                className="flex items-center justify-center gap-3 bg-surface-container-lowest border border-outline-variant/15 py-3 rounded-xl font-medium text-on-surface-variant hover:bg-surface-container-low transition-colors active:scale-95 duration-150"
              >
                <Chrome size={18} />
                Google
              </button>
              <button 
                onClick={() => alert('Social login is coming soon!')}
                className="flex items-center justify-center gap-3 bg-surface-container-lowest border border-outline-variant/15 py-3 rounded-xl font-medium text-on-surface-variant hover:bg-surface-container-low transition-colors active:scale-95 duration-150"
              >
                <Apple size={18} />
                Apple
              </button>
            </div>

            <div className="mt-12 text-center">
              <p className="text-on-surface-variant">
                Don't have an account?
                <a className="text-primary font-bold ml-1 hover:underline underline-offset-4 decoration-2" href="#">
                  Create one
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full py-8 text-center text-outline text-xs tracking-widest font-sans">
        © 2024 AZURE RESERVE. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
