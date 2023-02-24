const root = document.getElementById("root");

const appDraw = () => {
  root.innerHTML = "";

  const app = new PIXI.Application({
    width: root.offsetWidth,
    height: root.offsetHeight,
    backgroundColor: 0x536878,
  });

  const text = new PIXI.Text("Under Construction", {
    fill: 0xffffff,
  });
  text.position.x = root.offsetWidth / 2;
  text.position.y = root.offsetHeight / 2;
  text.anchor.set(0.5);

  app.stage.addChild(text);
  root.append(app.view);
};

window.onload = appDraw;
