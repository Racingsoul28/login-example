function PressIntro(handler) {
  return function(event) {
    if (event.key === "Enter") {
      handler();
    }
  };
}

export default PressIntro;
