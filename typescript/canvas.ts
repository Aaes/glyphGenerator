module GlyphGenerator {
  const generateCanvas = (): HTMLCanvasElement => {
    let canvas = document.createElement("canvas");
    canvas.width = glyphWidth;
    canvas.height = glyphHeight;
    return canvas;
  };

  export const addCanvases = (containerId: string) => {
    let canvases = [];
    let canvasContainer = document.getElementById(containerId);
    for (let index = 0; index < 4; index++) {
      let canvas = generateCanvas();
      canvasContainer.appendChild(canvas);
      canvases.push(canvas);
    }
    return canvases;
  };
}
