export default defineNuxtRouteMiddleware((to) => {
  if (process.server) return;
  
  const { $firebase } = useNuxtApp();
  const { analytics, logEvent } = $firebase;

  if (process.client && $firebase?.analytics) {
    logEvent(analytics, 'page_view', {
      page_path: to.fullPath,
      page_location: window.location.href,
      page_title: document.title,
      timestamp: Date.now()
    });
  }
});
