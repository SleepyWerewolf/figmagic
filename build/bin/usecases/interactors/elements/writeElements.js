"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeElements = void 0;
const tslib_1 = require("tslib");
const fs = tslib_1.__importStar(require("fs"));
const toPascalCase_1 = require("../../../frameworks/string/toPascalCase");
const writeFile_1 = require("../../../frameworks/filesystem/writeFile");
const errors_1 = require("../../../frameworks/errors/errors");
function writeElements(elements, config) {
    try {
        if (!elements || !config)
            throw new Error(errors_1.ErrorWriteElements);
        elements.forEach((element) => {
            const FIXED_CONFIG = makeFixedConfig(element, config);
            if (!config.skipFileGeneration.skipReact) {
                const PATH = `${FIXED_CONFIG.folder}/${FIXED_CONFIG.fixedName}.${FIXED_CONFIG.outputFormatElements}`;
                console.log('react path', PATH);
                writeFileHelper(FIXED_CONFIG, 'component', config.outputFormatElements, checkIfExists(PATH));
            }
            if (!config.skipFileGeneration.skipStyled) {
                const PATH = `${FIXED_CONFIG.folder}/${FIXED_CONFIG.fixedName}Styled.${FIXED_CONFIG.outputFormatElements}`;
                writeFileHelper(FIXED_CONFIG, 'style', config.outputFormatElements, checkIfExists(PATH));
            }
            if (!config.skipFileGeneration.skipCss)
                writeFileHelper(FIXED_CONFIG, 'css', config.outputFormatCss);
            if (!config.skipFileGeneration.skipStorybook) {
                const PATH = `${FIXED_CONFIG.folder}/${FIXED_CONFIG.fixedName}.stories.${FIXED_CONFIG.outputFormatStorybook}`;
                writeFileHelper(FIXED_CONFIG, 'story', config.outputFormatStorybook, checkIfExists(PATH));
            }
            if (!config.skipFileGeneration.skipDescription)
                writeFileHelper(FIXED_CONFIG, 'description', config.outputFormatDescription);
        });
    }
    catch (error) {
        throw new Error(errors_1.ErrorWriteElements);
    }
}
exports.writeElements = writeElements;
const makeFixedConfig = (element, config) => {
    const html = element.html || ' ';
    const css = element.css || ' ';
    const description = element.description || ' ';
    const name = toPascalCase_1.toPascalCase(element.name);
    const folder = `${config.outputFolderElements}/${name}`;
    const outputFormatCss = config.outputFormatCss;
    const outputFormatDescription = config.outputFormatDescription;
    const outputFormatElements = config.outputFormatElements;
    const outputFormatStorybook = config.outputFormatStorybook;
    const metadata = {
        dataType: null,
        html: element.html,
        element: element.element,
        extraProps: element.extraProps,
        text: element.text || ' ',
        imports: element.imports
    };
    const templates = config.templates;
    const forceUpdate = config.skipFileGeneration.forceUpdate;
    const fixedName = name.replace(/\//gi, '');
    return {
        html,
        css,
        description,
        name,
        folder,
        outputFormatCss,
        outputFormatDescription,
        outputFormatElements,
        outputFormatStorybook,
        metadata,
        templates,
        forceUpdate,
        fixedName
    };
};
const checkIfExists = (path) => fs.existsSync(path);
const writeFileHelper = (config, type, format, fileExists = undefined) => {
    if (fileExists === false || config.forceUpdate)
        writeFile_1.writeFile({
            type,
            file: config.html,
            path: config.folder,
            name: config.fixedName,
            format,
            metadata: config.metadata,
            templates: config.templates
        });
};
//# sourceMappingURL=writeElements.js.map