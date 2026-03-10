/**
 * Performance Monitoring Utility
 * Tracks Web Vitals metrics for optimization analysis
 */

export const initPerformanceMonitoring = () => {
  if (typeof window === 'undefined') return;

  // Log when page becomes interactive
  if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      const connectTime = perfData.responseEnd - perfData.requestStart;
      const renderTime = perfData.domComplete - perfData.domLoading;
      const domContentLoadedTime = perfData.domContentLoadedEventEnd - perfData.navigationStart;

      // Log in development only
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metrics:', {
          pageLoadTime: `${pageLoadTime}ms`,
          connectTime: `${connectTime}ms`,
          renderTime: `${renderTime}ms`,
          domContentLoadedTime: `${domContentLoadedTime}ms`,
        });
      }
    });
  }

  // Monitor Cumulative Layout Shift
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if ('layoutShift' in entry && !(entry as any).hadRecentInput) {
            const shift = (entry as any).value;
            if (process.env.NODE_ENV === 'development') {
              console.log('Layout Shift detected:', shift);
            }
          }
        }
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // Observer not supported
    }
  }
};
