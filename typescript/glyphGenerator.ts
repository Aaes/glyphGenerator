module GlyphGenerator {
  document.addEventListener("DOMContentLoaded", function (event) {
    console.log("eller nu?");
    const initialGlyphCanvases = addCanvases("glyph-space-container");

    drawGlyph(generateAllDotsRune(), initialGlyphCanvases[0]);
    drawGlyph(generateAllVerticalLinesRune(), initialGlyphCanvases[1]);
    drawGlyph(generateAllHorizontalLinesRune(), initialGlyphCanvases[2]);
    drawGlyph(generateAllLinesAndDotsRune(), initialGlyphCanvases[3]);
  });

  type Glyph = {
    dotsArray: Array<boolean>;
    verticalLinesArray: Array<boolean>;
    horizontalLinesArray: Array<boolean>;
  };

  /*
Full glyph    Dots          Vertical        Horinzontal
o-o-o         0-1-2         o-o-o           o 1 o 2 o
| | |         | | |         0 1 2           |   |   |
o-o-o         3-4-5         o-o-o           o 3 o 4 o
| | |         | | |         3 4 5           |   |   |
o-o-o         6-7-8         o-o-o           o 5 o 6 o
*/

  const drawGlyph = (
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
          glyphMargin + (glyphWidth / dotsPerLine) * (index % dotsPerLine),
          glyphMargin + (glyphHeight / dotsPerLine) * dotsChunk,
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
          glyphMargin + (glyphWidth / dotsPerLine) * (index % dotsPerLine),
          glyphMargin +
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
          glyphMargin +
            (glyphWidth / dotsPerLine) * (index % horizontalLinesPerLine) +
            dotWidth,
          glyphMargin + (glyphHeight / dotsPerLine) * horizontalLinesChunk,
          10,
          dotHeight
        );
      }
    }
  };

  const generateAllDotsRune = (): Glyph => {
    const dotsArray = new Array(9).fill(true);
    const verticalLinesArray = new Array(6).fill(false);
    const horizontalLinesArray = new Array(6).fill(false);

    return {
      dotsArray,
      verticalLinesArray,
      horizontalLinesArray,
    };
  };

  const generateAllVerticalLinesRune = (): Glyph => {
    const dotsArray = new Array(9).fill(false);
    const verticalLinesArray = new Array(6).fill(true);
    const horizontalLinesArray = new Array(6).fill(false);

    return {
      dotsArray,
      verticalLinesArray,
      horizontalLinesArray,
    };
  };

  const generateAllHorizontalLinesRune = (): Glyph => {
    const dotsArray = new Array(9).fill(false);
    const verticalLinesArray = new Array(6).fill(false);
    const horizontalLinesArray = new Array(6).fill(true);

    return {
      dotsArray,
      verticalLinesArray,
      horizontalLinesArray,
    };
  };

  const generateAllLinesAndDotsRune = (): Glyph => {
    const dotsArray = new Array(9).fill(true);
    const verticalLinesArray = new Array(6).fill(true);
    const horizontalLinesArray = new Array(6).fill(true);

    return {
      dotsArray,
      verticalLinesArray,
      horizontalLinesArray,
    };
  };

  const generateThirdRune = (): Glyph => {
    /*
    o-o-o
      | 
      o
      | 
    o-o-o
  */
    const dotsArray = new Array(9).fill(false);
    const verticalLinesArray = new Array(6).fill(false);
    const horizontalLinesArray = new Array(6).fill(false);

    dotsArray[0] = true;
    dotsArray[1] = true;
    dotsArray[2] = true;

    dotsArray[4] = true;

    dotsArray[6] = true;
    dotsArray[7] = true;
    dotsArray[8] = true;

    verticalLinesArray[1] = true;
    verticalLinesArray[4] = true;

    return {
      dotsArray,
      verticalLinesArray,
      horizontalLinesArray,
    };
  };
}
