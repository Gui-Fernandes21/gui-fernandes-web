/**
 * Runs a callback on an interval, with start/stop controls.
 * The interval is cleared automatically when the component unmounts.
 */
export const useTicker = (callback: () => void, intervalMs: number) => {
  const running = ref(false);
  let timer: ReturnType<typeof setInterval> | undefined;

  function stop() {
    clearInterval(timer);
    timer = undefined;
    running.value = false;
  }

  function start() {
    stop();
    running.value = true;
    timer = setInterval(callback, intervalMs);
  }

  onBeforeUnmount(stop);

  return {
    running,
    start,
    stop
  };
};
