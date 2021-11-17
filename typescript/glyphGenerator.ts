module GlyphGenerator {
  document.addEventListener("DOMContentLoaded", function (event) {
    drawGlyphSpaceGlyphs();

    const inputGlyphs: Glyph[] = getInputGlyphs();

    drawInputGlyphs(inputGlyphs);

    // Go through each input glyph and calculate the chance that each dot, vertical line and horizontal line are present
    // We assume that all of the glyphs are the same size

    const dotsChances: number[] = new Array(
      inputGlyphs[0].dotsArray.length
    ).fill(0);
    const verticalLinesChances: number[] = new Array(
      inputGlyphs[0].verticalLinesArray.length
    ).fill(0);
    const horizontalLinesChances: number[] = new Array(
      inputGlyphs[0].horizontalLinesArray.length
    ).fill(0);

    for (const inputGlyph of inputGlyphs) {
      // Calculate dots chance
      for (
        let dotIndex = 0;
        dotIndex < inputGlyph.dotsArray.length;
        dotIndex++
      ) {
        dotsChances[dotIndex] += inputGlyph.dotsArray[dotIndex]
          ? 1 / inputGlyphs.length
          : 0;
      }

      // Calculate vertical lines chance
      for (
        let verticalLineIndex = 0;
        verticalLineIndex < inputGlyph.verticalLinesArray.length;
        verticalLineIndex++
      ) {
        verticalLinesChances[verticalLineIndex] += inputGlyph
          .verticalLinesArray[verticalLineIndex]
          ? 1 / inputGlyphs.length
          : 0;
      }

      // Calculate horizontal lines chance
      for (
        let horizontalLineIndex = 0;
        horizontalLineIndex < inputGlyph.verticalLinesArray.length;
        horizontalLineIndex++
      ) {
        horizontalLinesChances[horizontalLineIndex] += inputGlyph
          .horizontalLinesArray[horizontalLineIndex]
          ? 1 / inputGlyphs.length
          : 0;
      }
    }

    const chances = {
      dotsChances,
      verticalLinesChances,
      horizontalLinesChances,
    };

    console.log(chances);
  });
}
