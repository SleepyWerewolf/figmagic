import { toPascalCase } from '../helpers/toPascalCase.mjs';
import { writeFile } from './writeFile.mjs';

/**
 * Description (TODO)
 *
 * @param elements
 * @param config
 */
export async function writeElements(elements, config) {
  await elements.map(comp => {
    const HTML = comp.html;
    const CSS = comp.css;
    const DESCRIPTION = comp.description || ' ';
    const NAME = toPascalCase(comp.name);
    const FOLDER = `${config.outputFolderElements}/${NAME}`;
    const METADATA = {
      html: comp.html,
      element: comp.element,
      extraProps: comp.extraProps,
      text: comp.text,
      imports: comp.imports
    };
    const TEMPLATES = config.templates;

    const SKIP_REACT = config.skipFileGeneration.react;
    const SKIP_STYLED = config.skipFileGeneration.styled;
    const SKIP_CSS = config.skipFileGeneration.css;
    const SKIP_STORYBOOK = config.skipFileGeneration.storybook;
    const SKIP_DESCRIPTION = config.skipFileGeneration.description;

    // Write React component
    if (!SKIP_REACT) writeFile(HTML, FOLDER, NAME, 'component', 'jsx', METADATA, TEMPLATES);

    // Write Styled component
    if (!SKIP_STYLED) writeFile(CSS, FOLDER, NAME, 'style', 'jsx', METADATA, TEMPLATES);

    // Write CSS
    if (!SKIP_CSS) writeFile(CSS, FOLDER, NAME, 'css', 'mjs', METADATA, TEMPLATES);

    // Write Storybook component
    if (!SKIP_STORYBOOK) writeFile(CSS, FOLDER, NAME, 'story', 'js', METADATA, TEMPLATES);

    // Write description markdown file
    if (!SKIP_DESCRIPTION) writeFile(DESCRIPTION, FOLDER, NAME, 'description', 'md');
  });
}
