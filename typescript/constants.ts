module GlyphGenerator {
  export const glyphWidth = 60;
  export const glyphHeight = 100;
  export const glyphMarginLeft = 5;
  export const glyphMarginTop = 12;

  export const dotWidth = 10;
  export const dotHeight = 10;

  export const dotsPerLine = 3;

  export type Glyph = {
    dotsArray: Array<boolean>;
    verticalLinesArray: Array<boolean>;
    horizontalLinesArray: Array<boolean>;
  };
}
