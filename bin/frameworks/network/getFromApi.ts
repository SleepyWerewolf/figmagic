import fetch from 'node-fetch';

import { ImageResponse } from '../../contracts/ImageResponse';

import { ErrorGetFromApi } from '../errors/errors';

/**
 * @description Get data from API
 *
 * @param figmaToken User's Figma API token
 * @param figmaUrl String representing user's Figma document ID
 * @param type String representing Figma API type ("images" or "files")
 */
export async function getFromApi(
  figmaToken: string | undefined | null,
  figmaUrl: string | undefined | null,
  type = 'files'
): Promise<ImageResponse> {
  if (!figmaToken || !figmaUrl) throw new Error(ErrorGetFromApi);

  return await fetch(`https://api.figma.com/v1/${type}/${figmaUrl}`, {
    headers: {
      'X-Figma-Token': figmaToken
    }
  })
    .then((res) => res.json())
    .catch((error) => {
      throw new Error(error);
    });
}
