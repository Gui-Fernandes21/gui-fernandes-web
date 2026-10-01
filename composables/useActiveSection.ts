/** Tracks which section (by id) is currently at the top of the viewport. */
export const useActiveSection = (ids: string[], offset = 180) => {
  const active = ref('');
  const scrolled = ref(false);

  function update() {
    scrolled.value = window.scrollY > 10;
    active.value = ids.filter((id) => (document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) < offset).pop() ?? '';
  }

  onMounted(() => {
    update();
    window.addEventListener('scroll', update, { passive: true });
  });

  onBeforeUnmount(() => window.removeEventListener('scroll', update));

  return {
    active,
    scrolled
  };
};
