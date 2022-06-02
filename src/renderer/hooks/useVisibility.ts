import { useState } from 'react';

const useVisibility = (initialValue = false) => {
  const [visibility, setVisibility] = useState(initialValue);
  const handleVisibility = () => {
    if (visibility === false) {
      setVisibility(true);
    } else if (visibility === true) {
      setVisibility(false);
    }
  };
  return { visibility, handleVisibility };
};

export default useVisibility;
