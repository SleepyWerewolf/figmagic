import { processElements } from '../bin/usecases/interactors/elements/processElements';

import { elementsPage, elementsPageDoubleTexts } from '../../testdata/elementsPage';
import { components } from '../testdata/components';
import { baseConfig } from '../bin/entities/Config/baseConfig';

describe('Failure cases', () => {
  /*
  test('It should throw an error if no argument is provided', async () => {
    await expect(processElements()).rejects.toThrow();
  });
  */

  test('It should fail when having more than one text element', async () => {
    await expect(
      processElements(elementsPageDoubleTexts, components, baseConfig)
    ).rejects.toThrow();
  });
});

describe('Success cases', () => {
  test('It should successfully return a valid element', async () => {
    await expect(processElements(elementsPage, components, baseConfig)).resolves.toMatchObject([
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
});
