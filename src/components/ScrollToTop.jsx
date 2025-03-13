import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation()

  // Scrolls to top when route <Link> changes, ONLY FOR THE VIEW MORE A TAG AND FOR POSSIBLE FUTURE TAGS
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);

  
}

export default ScrollToTop;
