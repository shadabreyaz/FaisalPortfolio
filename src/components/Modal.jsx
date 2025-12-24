import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { RxCross1 } from "react-icons/rx";

export default function Modal({ isOpen, onClose}) {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";  // Disable scroll
    } else {
      document.body.style.overflow = "auto";    // Enable scroll again
    }
  
    // Cleanup to avoid issues when modal unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

    const handleBackdropClick = (e) => {
      // If the clicked element is the backdrop itself, close the modal
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

      return (
        <AnimatePresence>
          {isOpen && (
            <div onClick={handleBackdropClick} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
              <motion.div
                key="modal"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md md:max-w-lg relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-[rgb(var(--brand-white))] bg-[#2E559B] rounded-full p-1 hover:bg-[#2E559B]/85 cursor-pointer"
                  aria-label="Close"
                >
                  <RxCross1 size={16} />
                </button>
    
                {/* Form Heading */}
                <h2 className="text-2xl font-bold mb-8 text-[rgb(var(--brand-teal))] text-center">Schedule a Call</h2>
    
                <form className="space-y-4" >
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name*
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[rgb(var(--brand-teal))] outline-none transition-all"
                            required
                        />
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[rgb(var(--brand-teal))] outline-none transition-all"
                            required
                        />
                        </div>
                    </div>

                    {/* Email Address */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address*
                        </label>
                        <input
                        type="email"
                        name="email"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[rgb(var(--brand-teal))] outline-none transition-all"
                        required
                        />
                    </div>
                    {/* Number */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number*
                        </label>
                        <input
                        type="number"
                        name="number"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[rgb(var(--brand-teal))] outline-none transition-all"
                        required
                        />
                    </div>

                    {/* Text Area */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                         Message
                        </label>
                        <textarea name="textarea" cols="10" rows="2"
                           className="w-full text-base px-4 py-2 rounded-lg border border-gray-300 focus:border-[rgb(var(--brand-teal))] outline-none transition-all"
                          >

                        </textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#2E559B] text-white font-semibold rounded-4xl hover:bg-[#2E559B]/80 transition mt-2 cursor-pointer"
                    >
                        Send Message
                    </button>
                </form>

              </motion.div>
            </div>
          )}
        </AnimatePresence>
      );  
}
