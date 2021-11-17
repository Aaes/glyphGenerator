module GlyphGenerator {
  document.addEventListener("DOMContentLoaded", function (event) {
    const initialGlyphCanvases = addCanvases("glyph-space-container");

    drawGlyph(generateAllDotsRune(), initialGlyphCanvases[0]);
    drawGlyph(generateAllVerticalLinesRune(), initialGlyphCanvases[1]);
    drawGlyph(generateAllHorizontalLinesRune(), initialGlyphCanvases[2]);
    drawGlyph(generateAllLinesAndDotsRune(), initialGlyphCanvases[3]);
  });

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
