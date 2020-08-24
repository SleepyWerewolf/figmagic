import { processElements } from '../bin/app/process/processElements';

import { elementsPage, elementsPageDoubleTexts } from '../testdata/elementsPage';
import { components } from '../testdata/components';
import { defaultConfig } from '../testdata/defaultConfig';

/*
test('It should throw an error if no parameter is provided', async () => {
  await expect(processElements()).rejects.toThrow();
});
*/

test('It should successfully return a valid element', async () => {
  await expect(processElements(elementsPage, components, defaultConfig)).resolves.toMatchObject([
    {
      css: ` color: \${colors.black};
font-size: \${fontSizes.sub};
font-family: \${fontFamilies.regular};
font-weight: \${fontWeights.regular};
line-height: \${lineHeights.xs};
text-align: left;
`,
      description: '\n# Sub\n\nTiny text snippets.',
      element: 'sub',
      extraProps: '',
      html: '<sub>Microcopy</sub>',
      id: '2875:22',
      imports: ['colors', 'fontSizes', 'fontFamilies', 'fontWeights', 'lineHeights'],
      name: 'Microcopy',
      text: 'Microcopy'
    }
  ]);
});

test('It should fail when having more than one text element', async () => {
  await expect(
    processElements(elementsPageDoubleTexts, components, defaultConfig)
  ).rejects.toThrow();
});
