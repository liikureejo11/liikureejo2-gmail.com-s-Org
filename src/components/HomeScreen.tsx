import { motion, AnimatePresence } from 'motion/react';
import { Search, Calendar, Users, UserCircle, ArrowLeft, Compass, Briefcase, User, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MOCK_ROOMS, Room } from '../types';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { getSupabase } from '../lib/supabase';

export default function HomeScreen() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>('All Rooms');
  const [isSearching, setIsSearching] = useState(false);
  const [displayRooms, setDisplayRooms] = useState<Room[]>(MOCK_ROOMS);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      const supabase = getSupabase();
      if (supabase) {
        const { data, error } = await supabase.from('rooms').select('*');
        if (!error && data && data.length > 0) {
          setDisplayRooms(data as Room[]);
        }
      }
      setIsLoading(false);
    };
    fetchRooms();
  }, []);

  const handleSearch = () => {
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      const filtered = filter === 'All Rooms' 
        ? MOCK_ROOMS 
        : MOCK_ROOMS.filter(room => room.type === filter);
      setDisplayRooms(filtered);
      setIsSearching(false);
    }, 1500);
  };

  useEffect(() => {
    // Update list immediately when filter changes if not searching
    if (!isSearching) {
      const filtered = filter === 'All Rooms' 
        ? MOCK_ROOMS 
        : MOCK_ROOMS.filter(room => room.type === filter);
      setDisplayRooms(filtered);
    }
  }, [filter]);

  return (
    <div className="bg-surface font-sans text-on-surface min-h-screen">
      {/* TopAppBar */}
      <header className="bg-white/70 backdrop-blur-xl sticky top-0 z-50 shadow-[0_32px_64px_-15px_rgba(0,6,102,0.04)]">
        <div className="flex justify-between items-center w-full px-6 h-16">
          <div className="flex items-center gap-2">
            <ArrowLeft className="text-primary" size={24} />
          </div>
          <h1 className="font-headline font-black tracking-widest text-primary">AZURE RESERVE</h1>
          <div className="flex items-center">
            <UserCircle className="text-primary" size={24} />
          </div>
        </div>
      </header>

      <main className="pb-32">
        {/* Hero & Search Section */}
        <section className="px-6 pt-8 pb-4">
          <div className="mb-8">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-headline text-3xl font-extrabold tracking-tight text-primary leading-tight"
            >
              Find Your <span className="text-secondary-gold">Sanctuary</span>
            </motion.h2>
            <p className="text-on-surface-variant text-sm mt-2">Curated luxury stays at Azure Reserve.</p>
          </div>

          {/* Search Console */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-surface-container-lowest rounded-3xl p-5 shadow-[0_32px_64px_-15px_rgba(0,6,102,0.06)] border border-outline-variant/10"
          >
            <div className="space-y-4">
              {/* Search Input */}
              <div className="relative flex items-center">
                <Search className="absolute left-4 text-outline" size={20} />
                <input
                  className="w-full pl-12 pr-4 py-4 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/10 font-medium text-on-surface placeholder:text-outline/60"
                  placeholder="Where to?"
                  type="text"
                />
              </div>
              {/* Dates & Guests */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-surface-container-low p-4 rounded-2xl flex flex-col justify-center">
                  <span className="text-[10px] font-bold text-outline uppercase tracking-wider mb-1">Check-in / Out</span>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <Calendar size={14} />
                    Oct 12 — 15
                  </div>
                </div>
                <div className="bg-surface-container-low p-4 rounded-2xl flex flex-col justify-center">
                  <span className="text-[10px] font-bold text-outline uppercase tracking-wider mb-1">Guests</span>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <Users size={14} />
                    2 Guests
                  </div>
                </div>
              </div>
              {/* Search Button */}
              <button 
                onClick={handleSearch}
                disabled={isSearching}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-white font-bold tracking-wide shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform flex items-center justify-center gap-2 disabled:opacity-80"
              >
                {isSearching ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Searching...
                  </>
                ) : (
                  'Explore Availability'
                )}
              </button>
            </div>
          </motion.div>
        </section>

        {/* Filters */}
        <section className="mt-4">
          <div className="flex overflow-x-auto gap-3 px-6 pb-2 hide-scrollbar">
            {['All Rooms', 'Standard', 'Deluxe', 'Suite', 'Villa'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={cn(
                  "whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all",
                  filter === type 
                    ? "bg-primary text-white shadow-md" 
                    : "bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high"
                )}
              >
                {type}
              </button>
            ))}
          </div>
        </section>

        {/* Room List */}
        <section className="px-6 mt-8 space-y-10 min-h-[400px]">
          <AnimatePresence mode="wait">
            {displayRooms.length > 0 ? (
              <motion.div 
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-10"
              >
                {displayRooms.map((room, index) => (
                  <motion.div
                    key={room.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => navigate(`/room/${room.id}`)}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-[2rem] bg-surface-container-low transition-all duration-500">
                      <img
                        className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                        src={room.image}
                        alt={room.name}
                      />
                      {/* Availability Badge */}
                      <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full flex items-center gap-2 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span className="text-[10px] font-bold text-primary tracking-widest uppercase">Available</span>
                      </div>
                      {/* Room Info Overlap */}
                      <div className="absolute bottom-6 inset-x-6">
                        <div className="bg-surface-container-lowest/90 backdrop-blur-2xl p-6 rounded-3xl shadow-xl shadow-primary/5">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="font-headline text-xl font-bold text-primary">{room.name}</h3>
                              <p className="text-sm font-medium text-outline flex items-center gap-1.5 mt-1">
                                <Users size={16} />
                                Up to {room.guests} guests
                              </p>
                            </div>
                            <div className="text-right">
                              <span className="block font-headline text-xl font-black text-secondary-gold">${room.price}</span>
                              <span className="text-[10px] font-bold text-outline uppercase tracking-tighter">per night</span>
                            </div>
                          </div>
                          <div className="flex gap-2 pt-4 border-t border-outline-variant/20">
                            <span className="px-3 py-1.5 bg-surface-container-high rounded-full text-[10px] font-bold text-primary">King Bed</span>
                            <span className="px-3 py-1.5 bg-surface-container-high rounded-full text-[10px] font-bold text-primary">{room.view}</span>
                            {room.amenities.includes('Breakfast') && (
                              <span className="px-3 py-1.5 bg-secondary-gold/10 rounded-full text-[10px] font-bold text-secondary-gold">Free Breakfast</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-20 h-20 bg-surface-container rounded-full flex items-center justify-center text-outline mb-4">
                  <Search size={32} />
                </div>
                <h3 className="font-headline text-xl font-bold text-primary">No rooms found</h3>
                <p className="text-on-surface-variant text-sm mt-2">Try adjusting your filters or search criteria.</p>
                <button 
                  onClick={() => setFilter('All Rooms')}
                  className="mt-6 text-primary font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center pt-3 pb-6 px-4 bg-white/80 backdrop-blur-2xl z-50 rounded-t-[1.5rem] shadow-[0_-8px_30px_rgba(0,6,102,0.04)]">
        <button className="flex flex-col items-center justify-center text-primary font-bold active:scale-90 transition-transform duration-200">
          <Compass size={24} fill="currentColor" />
          <span className="text-[11px] font-medium tracking-wide">Explore</span>
        </button>
        <button className="flex flex-col items-center justify-center text-outline hover:text-secondary-gold transition-colors active:scale-90 duration-200">
          <Briefcase size={24} />
          <span className="text-[11px] font-medium tracking-wide">Bookings</span>
        </button>
        <button className="flex flex-col items-center justify-center text-outline hover:text-secondary-gold transition-colors active:scale-90 duration-200">
          <User size={24} />
          <span className="text-[11px] font-medium tracking-wide">Account</span>
        </button>
      </nav>
    </div>
  );
}
