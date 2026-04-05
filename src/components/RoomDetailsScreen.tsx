import { motion } from 'motion/react';
import { ArrowLeft, Heart, Star, Wifi, Wind, Tv, Wine, Utensils, ShowerHead, Info } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { MOCK_ROOMS } from '../types';
import { useState } from 'react';
import BookingSuccessModal from './BookingSuccessModal';

export default function RoomDetailsScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const room = MOCK_ROOMS.find(r => r.id === id);
  const [isBooked, setIsBooked] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!room) return <div>Room not found</div>;

  const amenityIcons: Record<string, any> = {
    'Free WiFi': <Wifi size={20} />,
    'Climate Control': <Wind size={20} />,
    'Smart TV': <Tv size={20} />,
    'Mini Bar': <Wine size={20} />,
    'Breakfast': <Utensils size={20} />,
    'Rain Shower': <ShowerHead size={20} />,
  };

  return (
    <div className="bg-surface text-on-surface font-sans selection:bg-secondary-gold/20">
      <header className="fixed top-0 left-0 w-full z-40 bg-white/70 backdrop-blur-xl px-6 h-16 flex justify-between items-center shadow-[0_32px_64px_-15px_rgba(0,6,102,0.04)]">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-lowest text-primary hover:opacity-80 transition-opacity active:scale-95"
        >
          <ArrowLeft size={20} />
        </button>
        <span className="font-headline font-bold text-lg tracking-tight text-primary">Room Details</span>
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-lowest text-primary hover:opacity-80 transition-opacity active:scale-95"
        >
          <Heart size={20} fill={isFavorite ? "currentColor" : "none"} className={isFavorite ? "text-red-500" : ""} />
        </button>
      </header>

      <main className="pb-32">
        {/* Hero Carousel Section */}
        <section className="relative w-full h-[530px] overflow-hidden">
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar h-full">
            <div className="snap-center shrink-0 w-full h-full relative">
              <img className="w-full h-full object-cover" src={room.image} alt={room.name} />
            </div>
          </div>
          {/* Carousel Indicators */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
          </div>
        </section>

        {/* Room Header Card */}
        <div className="container mx-auto px-6 -mt-20 relative z-20">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_32px_64px_-15px_rgba(0,6,102,0.04)]"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-bold tracking-widest text-secondary uppercase">Premium Stay</span>
                  <span className="px-3 py-1 bg-tertiary-fixed text-primary text-[10px] font-bold rounded-full uppercase tracking-tighter">
                    Available
                  </span>
                </div>
                <h1 className="font-headline text-3xl font-extrabold text-primary tracking-tight">{room.name}</h1>
                <p className="text-outline font-medium text-sm mt-1">
                  Room 402 • {room.size} m² • {room.view}
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-secondary-gold justify-end">
                  <Star size={16} fill="currentColor" />
                  <span className="font-bold text-lg">{room.rating}</span>
                </div>
                <p className="text-outline text-xs">{room.reviews} reviews</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Description & Amenities */}
        <section className="container mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8 space-y-10">
            <article>
              <h2 className="font-headline text-xl font-bold text-primary mb-4">The Experience</h2>
              <p className="text-on-surface-variant leading-relaxed font-light">
                {room.description}
              </p>
            </article>

            <div>
              <h2 className="font-headline text-xl font-bold text-primary mb-6">World-Class Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {room.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary-gold group-hover:bg-secondary-gold/10 transition-colors">
                      {amenityIcons[amenity] || <Info size={20} />}
                    </div>
                    <span className="font-medium text-sm text-on-surface">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Price Breakdown Side Card */}
          <div className="md:col-span-4">
            <div className="bg-surface-container-low rounded-xl p-6 sticky top-24">
              <h3 className="font-headline text-lg font-bold text-primary mb-6">Price Summary</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-on-surface-variant">Standard Rate (${room.price} x 2 nights)</span>
                  <span className="font-semibold text-primary">${room.price * 2}.00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-on-surface-variant">Taxes & Fees</span>
                  <span className="font-semibold text-primary">$32.00</span>
                </div>
                <div className="pt-4 border-t border-outline-variant/30 flex justify-between items-center">
                  <span className="font-headline font-bold text-primary">Total Amount</span>
                  <span className="font-headline font-extrabold text-2xl text-primary">${room.price * 2 + 32}.00</span>
                </div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg flex gap-3 items-start">
                <Info className="text-primary text-lg shrink-0" size={18} />
                <p className="text-xs text-primary leading-relaxed">
                  Includes complementary airport shuttle and 24/7 concierge service.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Booking Bar */}
      <footer className="fixed bottom-0 left-0 w-full z-50 bg-white/80 backdrop-blur-2xl px-6 py-6 flex items-center justify-between shadow-[0_-8px_30px_rgba(0,6,102,0.04)] rounded-t-[1.5rem]">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-outline font-bold">Total Price</span>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-extrabold text-primary font-headline">${room.price * 2 + 32}</span>
            <span className="text-xs text-outline font-medium">/ 2 nights</span>
          </div>
        </div>
        <motion.button 
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsBooked(true)}
          className="px-10 py-4 bg-gradient-to-br from-primary to-primary-container text-white rounded-full font-headline font-bold text-base shadow-lg shadow-primary/20 transition-transform duration-200"
        >
          Book Now
        </motion.button>
      </footer>

      <BookingSuccessModal 
        isOpen={isBooked} 
        onClose={() => setIsBooked(false)} 
        roomName={room.name} 
      />
    </div>
  );
}
