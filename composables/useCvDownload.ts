import { ref as firebaseRef, getDownloadURL } from 'firebase/storage';
import { profile } from '~/data/profile';

/** Opens the CV stored in Firebase Storage and logs an analytics event. */
export const useCvDownload = () => {
  const { $firebase } = useNuxtApp();

  const downloadCV = async (): Promise<void> => {
    if (typeof window === 'undefined') return;
    const { storage, analytics, logEvent } = $firebase;

    if (analytics !== undefined) {
      logEvent(analytics, 'cv-download', {
        page_location: window.location.href,
        page_title: document.title,
        timestamp: Date.now()
      });
    }

    try {
      const url = await getDownloadURL(firebaseRef(storage, profile.cvPath));
      window.open(url, '_blank');
    } catch (err) {
      console.error(err);
    }
  };

  return {
    downloadCV
  };
};
