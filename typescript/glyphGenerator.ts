module GlyphGenerator {
  document.addEventListener("DOMContentLoaded", function (event) {
    drawGlyphSpaceGlyphs();

    const inputGlyphs: Glyph[] = [
      generateInputRune1(),
      generateInputRune2(),
      generateInputRune3(),
    ];
    const inputGlyphCanvases = addCanvases(
      "input-glyphs-container",
      inputGlyphs.length
    );

    for (let index = 0; index < inputGlyphCanvases.length; index++) {
      drawGlyph(
        inputGlyphs[index],
        inputGlyphCanvases[index],
        "grey",
        "grey",
        "grey"
      );
    }
  });

  const generateInputRune1 = (): Glyph => {
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

    horizontalLinesArray[0] = true;
    horizontalLinesArray[1] = true;

    horizontalLinesArray[4] = true;
    horizontalLinesArray[5] = true;

    return {
      dotsArray,
      verticalLinesArray,
      horizontalLinesArray,
    };
  };

  const generateInputRune2 = (): Glyph => {
    /*
    o-o-o
    | | |
      o
      | 
      o
    */
    const dotsArray = new Array(9).fill(false);
    const verticalLinesArray = new Array(6).fill(false);
    const horizontalLinesArray = new Array(6).fill(false);

    dotsArray[0] = true;
    dotsArray[1] = true;
    dotsArray[2] = true;

    dotsArray[4] = true;

    dotsArray[7] = true;

    verticalLinesArray[0] = true;
    verticalLinesArray[1] = true;
    verticalLinesArray[2] = true;
    verticalLinesArray[4] = true;

    horizontalLinesArray[0] = true;
    horizontalLinesArray[1] = true;

    return {
      dotsArray,
      verticalLinesArray,
      horizontalLinesArray,
    };
  };

  const generateInputRune3 = (): Glyph => {
    /*
    o-o-o
        |
    o   o
        |
    o-o-o
    */
    const dotsArray = new Array(9).fill(false);
    const verticalLinesArray = new Array(6).fill(false);
    const horizontalLinesArray = new Array(6).fill(false);

    dotsArray[0] = true;
    dotsArray[1] = true;
    dotsArray[2] = true;

    dotsArray[3] = true;
    dotsArray[5] = true;

    dotsArray[6] = true;
    dotsArray[7] = true;
    dotsArray[8] = true;

    verticalLinesArray[2] = true;
    verticalLinesArray[5] = true;

    horizontalLinesArray[0] = true;
    horizontalLinesArray[1] = true;

    horizontalLinesArray[4] = true;
    horizontalLinesArray[5] = true;

    return {
      dotsArray,
      verticalLinesArray,
      horizontalLinesArray,
    };
  };
}
