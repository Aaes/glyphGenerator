var GlyphGenerator;
(function (GlyphGenerator) {
    GlyphGenerator.generateCanvas = () => {
        let canvas = document.createElement("canvas");
        canvas.width = GlyphGenerator.glyphWidth;
        canvas.height = GlyphGenerator.glyphHeight;
        return canvas;
    };
    GlyphGenerator.addCanvases = (containerId) => {
        let canvases = [];
        let canvasContainer = document.getElementById(containerId);
        for (let index = 0; index < 4; index++) {
            let canvas = GlyphGenerator.generateCanvas();
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
    GlyphGenerator.glyphMargin = 5;
    GlyphGenerator.dotWidth = 10;
    GlyphGenerator.dotHeight = 10;
    GlyphGenerator.dotsPerLine = 3;
    let Infrastructure;
    (function (Infrastructure) {
        Infrastructure.myconst = 42;
    })(Infrastructure || (Infrastructure = {}));
})(GlyphGenerator || (GlyphGenerator = {}));
var GlyphGenerator;
(function (GlyphGenerator) {
    document.addEventListener("DOMContentLoaded", function (event) {
        console.log("eller nu?");
        const initialGlyphCanvases = GlyphGenerator.addCanvases("glyph-space-container");
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
            if (index % GlyphGenerator.dotsPerLine === 0) {
                dotsChunk++;
            }
            if (drawDot) {
                ctx.fillStyle = dotsColor;
                ctx.fillRect(GlyphGenerator.glyphMargin + (GlyphGenerator.glyphWidth / GlyphGenerator.dotsPerLine) * (index % GlyphGenerator.dotsPerLine), GlyphGenerator.glyphMargin + (GlyphGenerator.glyphHeight / GlyphGenerator.dotsPerLine) * dotsChunk, GlyphGenerator.dotWidth, GlyphGenerator.dotHeight);
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
                ctx.fillRect(GlyphGenerator.glyphMargin + (GlyphGenerator.glyphWidth / GlyphGenerator.dotsPerLine) * (index % GlyphGenerator.dotsPerLine), GlyphGenerator.glyphMargin +
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
                ctx.fillRect(GlyphGenerator.glyphMargin +
                    (GlyphGenerator.glyphWidth / GlyphGenerator.dotsPerLine) * (index % horizontalLinesPerLine) +
                    GlyphGenerator.dotWidth, GlyphGenerator.glyphMargin + (GlyphGenerator.glyphHeight / GlyphGenerator.dotsPerLine) * horizontalLinesChunk, 10, GlyphGenerator.dotHeight);
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
})(GlyphGenerator || (GlyphGenerator = {}));
//# sourceMappingURL=glyphGenerator.js.map