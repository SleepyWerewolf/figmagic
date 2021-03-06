"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLinearGradientString = void 0;
const roundColorValue_1 = require("../../frameworks/string/roundColorValue");
const calculateDegree2Point_1 = require("../../frameworks/string/calculateDegree2Point");
const errors_1 = require("../../frameworks/errors/errors");
function createLinearGradientString(fills) {
    if (!fills)
        throw new Error(errors_1.ErrorCreateLinearGradientString);
    if (!fills.gradientHandlePositions)
        throw new Error(errors_1.ErrorCreateLinearGradientString);
    let str = `linear-gradient(`;
    const GRADIENT_STOPS = fills.gradientStops ? fills.gradientStops : null;
    if (!GRADIENT_STOPS)
        throw new Error();
    const DEGREE = calculateDegree(fills.gradientHandlePositions);
    if (DEGREE)
        str += `${DEGREE}deg, `;
    GRADIENT_STOPS.forEach((fill, index) => {
        var _a, _b, _c, _d;
        const R = roundColorValue_1.roundColorValue((_a = fill.color) === null || _a === void 0 ? void 0 : _a.r, 255);
        const G = roundColorValue_1.roundColorValue((_b = fill.color) === null || _b === void 0 ? void 0 : _b.g, 255);
        const B = roundColorValue_1.roundColorValue((_c = fill.color) === null || _c === void 0 ? void 0 : _c.b, 255);
        const A = roundColorValue_1.roundColorValue(fill.opacity ? fill.opacity : (_d = fill.color) === null || _d === void 0 ? void 0 : _d.a, 1);
        const POS = roundColorValue_1.roundColorValue(parseFloat(fill.position ? fill.position : '0'), 100);
        if (index > 0)
            str += ` `;
        str += `rgba(${R}, ${G}, ${B}, ${A}) ${POS}%`;
        if (index < GRADIENT_STOPS.length - 1)
            str += `,`;
        if (index >= GRADIENT_STOPS.length - 1)
            str += `)`;
    });
    return str;
}
exports.createLinearGradientString = createLinearGradientString;
function calculateDegree(gradientHandlePositions) {
    return calculateDegree2Point_1.calculateDegree2Point(gradientHandlePositions[0], gradientHandlePositions[1]);
}
//# sourceMappingURL=createLinearGradientString.js.map