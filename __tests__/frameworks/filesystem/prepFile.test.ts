import {
  PrepComponent,
  PrepStyledComponents,
  PrepCss,
  PrepStorybook,
  PrepDescription
} from '../../../bin/contracts/PrepFile';

import {
  prepComponent,
  prepStyledComponents,
  prepCss,
  prepStorybook,
  prepDescription
} from '../../../bin/frameworks/filesystem/prepFile';

describe('Failure cases', () => {
  describe('No input', () => {
    test('prepComponent should throw an error if no argument is provided', () => {
      // @ts-ignore
      expect(() => prepComponent()).toThrow();
    });

    test('prepStyledComponents should throw an error if no argument is provided', () => {
      // @ts-ignore
      expect(() => prepStyledComponents()).toThrow();
    });

    test('prepCss should throw an error if no argument is provided', () => {
      // @ts-ignore
      expect(() => prepCss()).toThrow();
    });

    test('prepStorybook should throw an error if no argument is provided', () => {
      // @ts-ignore
      expect(() => prepStorybook()).toThrow();
    });

    test('prepDescription should throw an error if no argument is provided', () => {
      // @ts-ignore
      expect(() => prepDescription()).toThrow();
    });
  });

  describe('Incorrect input', () => {
    test('prepComponent should throw an error if incorrect (empty) input is provided', () => {
      // @ts-ignore
      expect(() => prepComponent({})).toThrow();
    });

    test('prepStyledComponents should throw an error if incomplete input is provided', () => {
      // @ts-ignore
      expect(() => prepStyledComponents({})).toThrow();
    });

    test('prepCss should throw an error if incorrect (empty) input is provided', () => {
      // @ts-ignore
      expect(() => prepCss({})).toThrow();
    });

    test('prepStorybook should throw an error if incorrect (empty) input is provided', () => {
      // @ts-ignore
      expect(() => prepStorybook({})).toThrow();
    });

    test('prepDescription should throw an error if incorrect (empty) input is provided', () => {
      // @ts-ignore
      expect(() => prepDescription({})).toThrow();
    });
  });
});

describe('Success cases', () => {
  test('It should prepare a Component file based on the React template', () => {
    const data = {
      name: 'aaa',
      filePath: 'ComponentName',
      format: 'jsx',
      templates: {
        templatePathReact: 'templates/react.jsx'
      },
      text: 'fff',
      extraProps: 'qqq'
    };

    const fileContent = `import React from 'react';
import PropTypes from 'prop-types';

import aaaStyled from './aaaStyled';

const aaa = props => <aaaStyled qqq>fff{props.children}</aaaStyled>;

aaa.propTypes = {};

export default aaa;`;

    const expectedData = { fileContent: fileContent, filePath: 'ComponentName.jsx' };

    expect(prepComponent(data as PrepComponent)).toMatchObject(expectedData);
  });

  test('It should prepare a Styled Components file based on the Styled template', () => {
    const data = {
      name: 'aaa',
      filePath: 'ComponentName',
      format: 'jsx',
      templates: {
        templatePathStyled: 'templates/styled.jsx'
      },
      element: 'div'
    };

    const fileContent = `import styled from 'styled-components';

import aaaCss from './aaaCss.ts';

// Do your regular imports like:
// import fontSizes from 'tokens/fontSizes';

// Extend the below as needed
const aaaStyled = styled.div\`
  \${aaaCss};
\`;

export default aaaStyled;`;

    const expectedData = { fileContent: fileContent, filePath: 'ComponentNameStyled.jsx' };

    expect(prepStyledComponents(data as PrepStyledComponents)).toMatchObject(expectedData);
  });

  test('It should prepare a CSS file based on the CSS template', () => {
    const css = `asdf`;

    const data = {
      name: 'ComponentName',
      filePath: 'ComponentName',
      format: 'mjs',
      imports: 'asdf',
      file: css
    };

    const fileContent = `// THIS FILE IS AUTO-GENERATED BY FIGMAGIC. DO NOT MAKE EDITS IN THIS FILE! CHANGES WILL GET OVER-WRITTEN BY ANY FURTHER PROCESSING.

asdf
const ComponentNameCss = \`asdf\`;

export default ComponentNameCss;`;

    const expectedData = { fileContent: fileContent, filePath: 'ComponentNameCss.mjs' };

    expect(prepCss(data as PrepCss)).toMatchObject(expectedData);
  });

  test('It should prepare a Storybook file based on the Storybook template', () => {
    const data = {
      name: 'ComponentName',
      filePath: 'ComponentName',
      format: 'mjs',
      templates: {
        templatePathStorybook: 'templates/story.js'
      },
      text: 'Something here'
    };

    const fileContent = `import React from 'react';
import ComponentName from './ComponentName';

import notes from './ComponentName.description.md';

export default { title: 'ComponentName', parameters: { notes } };

export const ComponentName = () => <ComponentName>Something here</ComponentName>;`;

    const expectedData = { fileContent: fileContent, filePath: 'ComponentName.stories.mjs' };

    expect(prepStorybook(data as PrepStorybook)).toMatchObject(expectedData);
  });

  test('It should prepare a Markdown description file based on the Markdown template', () => {
    const data = {
      filePath: 'ComponentName',
      file: 'Description here.',
      format: 'md'
    };

    const fileContent = `<!--THIS FILE IS AUTO-GENERATED BY FIGMAGIC. DO NOT MAKE EDITS IN THIS FILE! CHANGES WILL GET OVER-WRITTEN BY ANY FURTHER PROCESSING.-->
Description here.`;

    const expectedData = { fileContent: fileContent, filePath: 'ComponentName.description.md' };

    expect(prepDescription(data as PrepDescription)).toMatchObject(expectedData);
  });
});