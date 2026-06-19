import React, { useState, useRef, useEffect } from 'react';

// Hook qaytaradigan ob'ekt uchun interfeys
interface UseOutsideClickReturn {
  ref: any;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Tashqi kliklarni aniqlash uchun custom hook
 * @returns { ref, isOpen, setIsOpen } - DOM ref, dropdown holati va holat o'zgartiruvchi
 */
const useOutsideClick = (): UseOutsideClickReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    // Agar dropdown yopiq bo'lsa, hodisani tinglashni boshlamaymiz
    if (!isOpen) return;

    // Klik hodisasini boshqaruvchi funksiya
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false); // Tashqi klikda dropdownni yopish
      }
    };

    // Hodisani tinglashni boshlash
    document.addEventListener('mousedown', handleClickOutside);

    // Komponent o'chirilganda yoki isOpen o'zgarganda hodisani tozalash
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]); // isOpen o'zgarganda qayta ishlaydi

  return { ref, isOpen, setIsOpen };
};

export default useOutsideClick;
