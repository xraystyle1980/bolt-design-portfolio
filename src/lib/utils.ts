import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Manages scrollbar width to prevent content shift
 * Call this when opening/closing components that affect the scrollbar
 */
export function manageScrollbarWidth(isOpen: boolean) {
  if (typeof window === 'undefined') return;

  if (isOpen) {
    // Calculate and set scrollbar width
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
    document.body.classList.add('overflow-hidden');
  } else {
    // Reset scrollbar width
    document.documentElement.style.setProperty('--scrollbar-width', '0px');
    document.body.classList.remove('overflow-hidden');
  }
}
