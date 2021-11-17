module GlyphGenerator {
  /*
  Full glyph    Dots          Vertical        Horinzontal
  o-o-o         0-1-2         o-o-o           o 0 o 1 o
  | | |         | | |         0 1 2           |   |   |
  o-o-o         3-4-5         o-o-o           o 2 o 3 o
  | | |         | | |         3 4 5           |   |   |
  o-o-o         6-7-8         o-o-o           o 4 o 5 o
  */

  export const drawGlyph = (
    glyph: Glyph,
    canvas: HTMLCanvasElement,
    dotsColor: string = "black",
    verticalLinesColor: string = "red",
    horizontalLinesColor: string = "blue"
  ) => {
    const ctx = canvas.getContext("2d");

    // Draw the dots
    let dotsChunk = -1;
    for (let index = 0; index < glyph.dotsArray.length; index++) {
      const drawDot = glyph.dotsArray[index];
      if (index % dotsPerLine === 0) {
        dotsChunk++;
      }
      if (drawDot) {
        ctx.fillStyle = dotsColor;
        ctx.fillRect(
          glyphMarginLeft + (glyphWidth / dotsPerLine) * (index % dotsPerLine),
          glyphMarginTop + (glyphHeight / dotsPerLine) * dotsChunk,
          dotWidth,
          dotHeight
        );
      }
    }

    // Draw the vertical lines
    let verticalLinesChunk = -1;
    for (let index = 0; index < glyph.verticalLinesArray.length; index++) {
      const drawVerticalLine = glyph.verticalLinesArray[index];
      if (index % dotsPerLine === 0) {
        verticalLinesChunk++;
      }
      if (drawVerticalLine) {
        ctx.fillStyle = verticalLinesColor;
        ctx.fillRect(
          glyphMarginLeft + (glyphWidth / dotsPerLine) * (index % dotsPerLine),
          glyphMarginTop +
            dotHeight +
            (glyphHeight / dotsPerLine) * verticalLinesChunk,
          dotWidth,
          24
        );
      }
    }

    // Draw the horizontal lines
    let horizontalLinesChunk = -1;
    let horizontalLinesPerLine = dotsPerLine - 1;
    for (let index = 0; index < glyph.horizontalLinesArray.length; index++) {
      const drawHorizontalLine = glyph.horizontalLinesArray[index];

      if (index % horizontalLinesPerLine === 0) {
        horizontalLinesChunk++;
      }
      if (drawHorizontalLine) {
        ctx.fillStyle = horizontalLinesColor;
        ctx.fillRect(
          glyphMarginLeft +
            (glyphWidth / dotsPerLine) * (index % horizontalLinesPerLine) +
            dotWidth,
          glyphMarginTop + (glyphHeight / dotsPerLine) * horizontalLinesChunk,
          10,
          dotHeight
        );
      }
    }
  };
}
