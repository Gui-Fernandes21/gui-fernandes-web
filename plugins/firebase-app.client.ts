// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported, logEvent } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig();
  let analytics;

  const firebaseConfig = {
    apiKey: config.app.FB_API_KEY,
    authDomain: config.app.FB_AUTH_DOMAIN,
    projectId: config.app.FB_PROJECT_ID,
    storageBucket: config.app.FB_STORAGE_BUCKET,
    messagingSenderId: config.app.FB_MESSAGING_SENDER_ID,
    appId: config.app.FB_APP_ID,
    measurementId: config.app.FB_MEASUREMENT_ID
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
    const supported = await isSupported();

    if (supported) {
      analytics = getAnalytics(app);
    }
  }

  return {
    provide: {
      firebase: {
        app,
        logEvent,
        analytics
      }
    }
  };
});
