import { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../config/siteConfig';

/**
 * Custom hook to safely manage background audio playback.
 * Gracefully handles missing audio files (404), format errors, and browser autoplay policies.
 */
export function useAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    // Instantiate audio object safely
    const audio = new Audio(siteConfig.audioPath);
    audio.loop = true;
    audio.preload = 'none';

    const handleCanPlay = () => {
      setIsAvailable(true);
      setErrorMessage(null);
    };

    const handleError = (e) => {
      // Missing file (404) or unsupported format
      setIsAvailable(false);
      setIsPlaying(false);
      setErrorMessage('Audio file not present');
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);
    audio.addEventListener('ended', handleEnded);

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('ended', handleEnded);
      audioRef.current = null;
    };
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current || !isAvailable) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        // Browser autoplay policy or missing asset triggered error
        console.warn('Playback could not be started:', err.message);
        setIsPlaying(false);
        if (err.name === 'NotSupportedError' || err.name === 'AbortError') {
          setIsAvailable(false);
        }
      }
    }
  };

  return {
    isPlaying,
    isAvailable,
    errorMessage,
    togglePlay
  };
}

