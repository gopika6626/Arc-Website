import { useEffect, useRef } from 'react';

const useSwipe = (onSwipeLeft, onSwipeRight) => {
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
  
    const handleTouchStart = (e) => {
      touchStartX.current = e.changedTouches[0].screenX;
    };
  
    const handleTouchMove = (e) => {
      touchEndX.current = e.changedTouches[0].screenX;
    };
  
    const handleTouchEnd = () => {
      if (touchStartX.current - touchEndX.current > 50) {
        onSwipeLeft();
      }
      if (touchEndX.current - touchStartX.current > 50) {
        onSwipeRight();
      }
    };
  
    useEffect(() => {
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
  
      return () => {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      };
    }, []);
  };
  
  export default useSwipe;
  