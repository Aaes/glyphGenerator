var GlyphGenerator;
(function (GlyphGenerator) {
    const generateCanvas = () => {
        let canvas = document.createElement("canvas");
        canvas.width = GlyphGenerator.glyphWidth;
        canvas.height = GlyphGenerator.glyphHeight;
        return canvas;
    };
    GlyphGenerator.addCanvases = (containerId, numberOfCanvases) => {
        let canvases = [];
        let canvasContainer = document.getElementById(containerId);
        for (let index = 0; index < numberOfCanvases; index++) {
            let canvas = generateCanvas();
            canvasContainer.appendChild(canvas);
            canvases.push(canvas);
        }
        return canvases;
    };
})(GlyphGenerator || (GlyphGenerator = {}));
var GlyphGenerator;
(function (GlyphGenerator) {
    GlyphGenerator.glyphWidth = 60;
    GlyphGenerator.glyphHeight = 100;
    GlyphGenerator.glyphMarginLeft = 5;
    GlyphGenerator.glyphMarginTop = 12;
    GlyphGenerator.dotWidth = 10;
    GlyphGenerator.dotHeight = 10;
    GlyphGenerator.dotsPerLine = 3;
})(GlyphGenerator || (GlyphGenerator = {}));
var GlyphGenerator;
(function (GlyphGenerator) {
    GlyphGenerator.drawGlyph = (glyph, canvas, dotsColor = "black", verticalLinesColor = "red", horizontalLinesColor = "blue") => {
        const ctx = canvas.getContext("2d");
        let dotsChunk = -1;
        for (let index = 0; index < glyph.dotsArray.length; index++) {
            const drawDot = glyph.dotsArray[index];
            if (index % GlyphGenerator.dotsPerLine === 0) {
                dotsChunk++;
            }
            if (drawDot) {
                ctx.fillStyle = dotsColor;
                ctx.fillRect(GlyphGenerator.glyphMarginLeft + (GlyphGenerator.glyphWidth / GlyphGenerator.dotsPerLine) * (index % GlyphGenerator.dotsPerLine), GlyphGenerator.glyphMarginTop + (GlyphGenerator.glyphHeight / GlyphGenerator.dotsPerLine) * dotsChunk, GlyphGenerator.dotWidth, GlyphGenerator.dotHeight);
            }
        }
        let verticalLinesChunk = -1;
        for (let index = 0; index < glyph.verticalLinesArray.length; index++) {
            const drawVerticalLine = glyph.verticalLinesArray[index];
            if (index % GlyphGenerator.dotsPerLine === 0) {
                verticalLinesChunk++;
            }
            if (drawVerticalLine) {
                ctx.fillStyle = verticalLinesColor;
                ctx.fillRect(GlyphGenerator.glyphMarginLeft + (GlyphGenerator.glyphWidth / GlyphGenerator.dotsPerLine) * (index % GlyphGenerator.dotsPerLine), GlyphGenerator.glyphMarginTop +
                    GlyphGenerator.dotHeight +
                    (GlyphGenerator.glyphHeight / GlyphGenerator.dotsPerLine) * verticalLinesChunk, GlyphGenerator.dotWidth, 24);
            }
        }
        let horizontalLinesChunk = -1;
        let horizontalLinesPerLine = GlyphGenerator.dotsPerLine - 1;
        for (let index = 0; index < glyph.horizontalLinesArray.length; index++) {
            const drawHorizontalLine = glyph.horizontalLinesArray[index];
            if (index % horizontalLinesPerLine === 0) {
                horizontalLinesChunk++;
            }
            if (drawHorizontalLine) {
                ctx.fillStyle = horizontalLinesColor;
                ctx.fillRect(GlyphGenerator.glyphMarginLeft +
                    (GlyphGenerator.glyphWidth / GlyphGenerator.dotsPerLine) * (index % horizontalLinesPerLine) +
                    GlyphGenerator.dotWidth, GlyphGenerator.glyphMarginTop + (GlyphGenerator.glyphHeight / GlyphGenerator.dotsPerLine) * horizontalLinesChunk, 10, GlyphGenerator.dotHeight);
            }
        }
    };
})(GlyphGenerator || (GlyphGenerator = {}));
var GlyphGenerator;
(function (GlyphGenerator) {
    GlyphGenerator.drawGlyphSpaceGlyphs = () => {
        const initialGlyphCanvases = GlyphGenerator.addCanvases("glyph-space-container", 4);
        GlyphGenerator.drawGlyph(generateAllDotsRune(), initialGlyphCanvases[0]);
        GlyphGenerator.drawGlyph(generateAllVerticalLinesRune(), initialGlyphCanvases[1]);
        GlyphGenerator.drawGlyph(generateAllHorizontalLinesRune(), initialGlyphCanvases[2]);
        GlyphGenerator.drawGlyph(generateAllLinesAndDotsRune(), initialGlyphCanvases[3]);
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
})(GlyphGenerator || (GlyphGenerator = {}));
var GlyphGenerator;
(function (GlyphGenerator) {
    document.addEventListener("DOMContentLoaded", function (event) {
        GlyphGenerator.drawGlyphSpaceGlyphs();
        const inputGlyphs = GlyphGenerator.getInputGlyphs();
        GlyphGenerator.drawInputGlyphs(inputGlyphs);
        const dotsChances = new Array(inputGlyphs[0].dotsArray.length).fill(0);
        const verticalLinesChances = new Array(inputGlyphs[0].verticalLinesArray.length).fill(0);
        const horizontalLinesChances = new Array(inputGlyphs[0].horizontalLinesArray.length).fill(0);
        for (const inputGlyph of inputGlyphs) {
            for (let dotIndex = 0; dotIndex < inputGlyph.dotsArray.length; dotIndex++) {
                dotsChances[dotIndex] += inputGlyph.dotsArray[dotIndex]
                    ? 1 / inputGlyphs.length
                    : 0;
            }
            for (let verticalLineIndex = 0; verticalLineIndex < inputGlyph.verticalLinesArray.length; verticalLineIndex++) {
                verticalLinesChances[verticalLineIndex] += inputGlyph
                    .verticalLinesArray[verticalLineIndex]
                    ? 1 / inputGlyphs.length
                    : 0;
            }
            for (let horizontalLineIndex = 0; horizontalLineIndex < inputGlyph.verticalLinesArray.length; horizontalLineIndex++) {
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
})(GlyphGenerator || (GlyphGenerator = {}));
var GlyphGenerator;
(function (GlyphGenerator) {
    GlyphGenerator.getInputGlyphs = () => {
        return [generateInputRune1(), generateInputRune2(), generateInputRune3()];
    };
    GlyphGenerator.drawInputGlyphs = (inputGlyphs) => {
        const inputGlyphCanvases = GlyphGenerator.addCanvases("input-glyphs-container", inputGlyphs.length);
        for (let index = 0; index < inputGlyphCanvases.length; index++) {
            GlyphGenerator.drawGlyph(inputGlyphs[index], inputGlyphCanvases[index], "grey", "grey", "grey");
        }
    };
    const generateInputRune1 = () => {
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
    const generateInputRune2 = () => {
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
    const generateInputRune3 = () => {
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
})(GlyphGenerator || (GlyphGenerator = {}));
//# sourceMappingURL=glyphGenerator.js.map