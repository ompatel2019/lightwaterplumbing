// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Change to 'auto' if you prefer instant scrolling.
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
