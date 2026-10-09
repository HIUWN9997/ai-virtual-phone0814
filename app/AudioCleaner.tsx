'use client';

import { useEffect } from 'react';
import { destroyMixAudioInstance } from '@/lib/mixology/audio-player';

export function AudioCleaner() {
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        destroyMixAudioInstance();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return null;
}
