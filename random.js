    const buttons = document.querySelectorAll('.button');
    const body = document.body;

    const randomColor = () => {
      const hex = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    function rotateColor() {
      body.style.backgroundColor = randomColor();
    }

    // Attach the click handler to every button
    buttons.forEach(btn => {
              btn.addEventListener('click', rotateColor);
    });

    let intervalStarted = false;

function rotateColor() {
  if (!intervalStarted) {
    intervalStarted = true;
    setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 500);
  }
}
