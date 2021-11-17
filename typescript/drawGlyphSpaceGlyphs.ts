module GlyphGenerator {
  export const drawGlyphSpaceGlyphs = () => {
    const initialGlyphCanvases = addCanvases("glyph-space-container", 4);

    drawGlyph(generateAllDotsRune(), initialGlyphCanvases[0]);
    drawGlyph(generateAllVerticalLinesRune(), initialGlyphCanvases[1]);
    drawGlyph(generateAllHorizontalLinesRune(), initialGlyphCanvases[2]);
    drawGlyph(generateAllLinesAndDotsRune(), initialGlyphCanvases[3]);
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
}
