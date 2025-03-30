export const useScroll = () => {

  function scroll(selector: string) {
    const section = document.querySelector(selector);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }

  return {
    scroll
  };
};
