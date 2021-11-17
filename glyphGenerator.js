const glyphWidth = 60;
const glyphHeight = 100;
const glyphMargin = 5;
const dotWidth = 10;
const dotHeight = 10;
const dotsPerLine = 3;
const initialGlyphCanvases = [];
const generateCanvas = () => {
    let canvas = document.createElement("canvas");
    canvas.width = glyphWidth;
    canvas.height = glyphHeight;
    return canvas;
};
const addCanvases = (containerId) => {
    let canvasContainer = document.getElementById(containerId);
    for (let index = 0; index < 4; index++) {
        let canvas = generateCanvas();
        canvasContainer.appendChild(canvas);
        initialGlyphCanvases.push(canvas);
    }
};
document.addEventListener("DOMContentLoaded", function (event) {
    addCanvases("glyph-space-container");
    drawGlyph(generateAllDotsRune(), initialGlyphCanvases[0]);
    drawGlyph(generateAllVerticalLinesRune(), initialGlyphCanvases[1]);
    drawGlyph(generateAllHorizontalLinesRune(), initialGlyphCanvases[2]);
    drawGlyph(generateAllLinesAndDotsRune(), initialGlyphCanvases[3]);
});
const drawGlyph = (glyph, canvas, dotsColor = "black", verticalLinesColor = "red", horizontalLinesColor = "blue") => {
    const ctx = canvas.getContext("2d");
    let dotsChunk = -1;
    for (let index = 0; index < glyph.dotsArray.length; index++) {
        const drawDot = glyph.dotsArray[index];
        if (index % dotsPerLine === 0) {
            dotsChunk++;
        }
        if (drawDot) {
            ctx.fillStyle = dotsColor;
            ctx.fillRect(glyphMargin + (glyphWidth / dotsPerLine) * (index % dotsPerLine), glyphMargin + (glyphHeight / dotsPerLine) * dotsChunk, dotWidth, dotHeight);
        }
    }
    let verticalLinesChunk = -1;
    for (let index = 0; index < glyph.verticalLinesArray.length; index++) {
        const drawVerticalLine = glyph.verticalLinesArray[index];
        if (index % dotsPerLine === 0) {
            verticalLinesChunk++;
        }
        if (drawVerticalLine) {
            ctx.fillStyle = verticalLinesColor;
            ctx.fillRect(glyphMargin + (glyphWidth / dotsPerLine) * (index % dotsPerLine), glyphMargin +
                dotHeight +
                (glyphHeight / dotsPerLine) * verticalLinesChunk, dotWidth, 24);
        }
    }
    let horizontalLinesChunk = -1;
    let horizontalLinesPerLine = dotsPerLine - 1;
    for (let index = 0; index < glyph.horizontalLinesArray.length; index++) {
        const drawHorizontalLine = glyph.horizontalLinesArray[index];
        if (index % horizontalLinesPerLine === 0) {
            horizontalLinesChunk++;
        }
        if (drawHorizontalLine) {
            ctx.fillStyle = horizontalLinesColor;
            ctx.fillRect(glyphMargin +
                (glyphWidth / dotsPerLine) * (index % horizontalLinesPerLine) +
                dotWidth, glyphMargin + (glyphHeight / dotsPerLine) * horizontalLinesChunk, 10, dotHeight);
        }
    }
};
const generateAllDotsRune = () => {
    const dotsArray = new Array(9).fill(true);
    const verticalLinesArray = new Array(6).fill(false);
    const horizontalLinesArray = new Array(6).fill(false);
    return {
        dotsArray,
        verticalLinesArray,
        horizontalLinesArray,
    };
};
const generateAllVerticalLinesRune = () => {
    const dotsArray = new Array(9).fill(false);
    const verticalLinesArray = new Array(6).fill(true);
    const horizontalLinesArray = new Array(6).fill(false);
    return {
        dotsArray,
        verticalLinesArray,
        horizontalLinesArray,
    };
};
const generateAllHorizontalLinesRune = () => {
    const dotsArray = new Array(9).fill(false);
    const verticalLinesArray = new Array(6).fill(false);
    const horizontalLinesArray = new Array(6).fill(true);
    return {
        dotsArray,
        verticalLinesArray,
        horizontalLinesArray,
    };
};
const generateAllLinesAndDotsRune = () => {
    const dotsArray = new Array(9).fill(true);
    const verticalLinesArray = new Array(6).fill(true);
    const horizontalLinesArray = new Array(6).fill(true);
    return {
        dotsArray,
        verticalLinesArray,
        horizontalLinesArray,
    };
};
const generateThirdRune = () => {
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
//# sourceMappingURL=glyphGenerator.js.map