import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';

interface BookingSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomName: string;
}

export default function BookingSuccessModal({ isOpen, onClose, roomName }: BookingSuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-sm bg-surface-container-lowest rounded-3xl p-8 shadow-2xl text-center"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-outline hover:text-primary transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.2 }}
                className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center"
              >
                <CheckCircle2 size={48} />
              </motion.div>
            </div>

            <h3 className="font-headline text-2xl font-bold text-primary mb-2">Booking Confirmed!</h3>
            <p className="text-on-surface-variant text-sm mb-8">
              Your stay at <span className="font-bold text-primary">{roomName}</span> has been successfully reserved. A confirmation email has been sent to your inbox.
            </p>

            <button
              onClick={onClose}
              className="w-full py-4 editorial-gradient text-white font-headline font-bold rounded-2xl shadow-lg active:scale-95 transition-transform"
            >
              Done
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
