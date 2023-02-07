import { useMediaQueries } from '@react-hook/media-query';

export default function useDetectDevice() {
  const { matchesAll: isMobile } = useMediaQueries({
    screen: 'screen',
    width: '(max-width: 640px)',
  });
  const { matchesAll: isTablet } = useMediaQueries({
    screen: 'screen',
    width: '(min-width: 641px) and (max-width: 768px)',
  });
  const { matchesAll: isLaptop } = useMediaQueries({
    screen: 'screen',
    width: '(min-width: 769px) and (max-width: 1024px)',
  });
  const { matchesAll: isDesktop } = useMediaQueries({
    screen: 'screen',
    width: '(min-width: 1025px) and (max-width: 1280px)',
  });
  const { matchesAll: isWidescreen } = useMediaQueries({
    screen: 'screen',
    width: '(min-width: 1281px) and (max-width: 1536px)',
  });
  const { matchesAll: isFullHD } = useMediaQueries({
    screen: 'screen',
    width: '(min-width: 1536px)',
  });

  return {
    isMobile,
    isTablet,
    isTouch: isMobile || isTablet,
    isLaptop,
    isDesktop,
    isWidescreen,
    isFullHD,
  };
}
