module GlyphGenerator {
  document.addEventListener("DOMContentLoaded", function (event) {
    drawGlyphSpaceGlyphs();

    const inputGlyphs: Glyph[] = getInputGlyphs();

    drawInputGlyphs(inputGlyphs);
  });
}
