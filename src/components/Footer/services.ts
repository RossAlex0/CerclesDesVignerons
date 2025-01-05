export const screenWidth = (setter: (state: number) => void) => {
  const calculWidth = () => {
    setter(window.innerWidth);
  };

  calculWidth();

  window.addEventListener("resize", calculWidth);

  return () => {
    window.removeEventListener("resize", calculWidth);
  };
};
