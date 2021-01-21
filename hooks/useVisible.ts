import { useState, useRef, useEffect, SetStateAction, Dispatch } from 'react';

interface ReturnProps {
  ref: React.Ref<any>;
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<ReturnProps["isVisible"]>>
}

export default function useVisible(initialIsVisible: boolean): ReturnProps {
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref, isVisible, setIsVisible };
}
