import { Keyframes, keyframes } from 'styled-components';

const scaleAnimation = (
  initialScale: number,
  finalScale: number
): Keyframes => {
  const scaleKeyframes = keyframes`
    from {
      transform: scale(${initialScale});
    }
    to {
      transform: scale(${finalScale});
    }
  `;
  return scaleKeyframes;
};
export default scaleAnimation;
