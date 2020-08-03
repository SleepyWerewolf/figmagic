//import * as fs from 'fs';
import { loadFile } from '../filesystem/loadFile';
import { parseCliArgs } from './parseCliArgs';

import {
  msgConfigDebugEnv,
  msgConfigDebugCli,
  msgConfigDebugRc,
  msgConfigDebugFinal
} from '../../meta/messages';
import { errorCreateConfiguration, errorCreateConfigurationNoDefault } from '../../meta/errors';

import { Config } from '../../app/contracts/config/Config';

/**
 * Create configuration object
 *
 * Prioritization:
 * 1. User-provided configuration through `.figmagicrc`
 * 2. Command-line arguments and flags
 * 3. Environment variables from `.env`
 * Non-provided values should fall back to defaults outlined in `meta/config.ts`
 *
 * @exports
 * @async
 * @function
 * @param {Config} defaultConfig - Default configuration object
 * @param {string} userConfigPath - Path to user configuration file, based out of user's current working directory
 * @param {array} cliArgs - Array of any user-provided command line arguments and flags
 * @returns {object} - The final, validated and collated configuration object
 * @throws {errorCreateConfiguration} - Throws error when missing configuration
 */
export async function createConfiguration(
  defaultConfig: Config,
  userConfigPath: string,
  ...cliArgs: any[]
): Promise<Config> {
  if (!defaultConfig) throw new Error(errorCreateConfigurationNoDefault);
  if (!userConfigPath) throw new Error(errorCreateConfiguration);

  // Set default values first
  const { outputFolderComponents, ...DEFAULT_CONFIG } = defaultConfig;

  // RC file configuration
  let RC_CONFIG: Config = {}; // TODO: makeConfig(...) ???

  try {
    RC_CONFIG = await loadFile(userConfigPath);
  } catch (e) {} // eslint-disable-line no-empty

  // Env var configuration
  const ENV_CONFIG = {
    token: process.env.FIGMA_TOKEN || null,
    url: process.env.FIGMA_URL || null
  };

  // CLI arguments configuration
  const CLI_CONFIG: Config = parseCliArgs(cliArgs);

  // Merge configurations in order of prioritization
  // 1. Base required config
  // 2. Config file: lowest priority
  // Versioned, "main" local config
  // NOTE: config is not deep-merged
  // 3. Environment config: medium priority
  // Specifically for credentials
  // 4. CLI arguments: highest priority
  // Allow to override on specific commands such as: "figmagic --debug --syncGraphics"
  const CONFIG = {
    ...DEFAULT_CONFIG,
    ...RC_CONFIG,
    ...ENV_CONFIG,
    ...CLI_CONFIG,
    templates: {
      ...DEFAULT_CONFIG.templates,
      ...RC_CONFIG.templates,
      ...CLI_CONFIG.templates
    },
    skipFileGeneration: {
      ...DEFAULT_CONFIG.skipFileGeneration,
      ...RC_CONFIG.skipFileGeneration,
      ...CLI_CONFIG.skipFileGeneration
    }
  };

  if (CONFIG.debugMode === true) printConfigs(ENV_CONFIG, CLI_CONFIG, RC_CONFIG, CONFIG);

  return CONFIG;
}

function printConfigs(
  envConfig: object,
  cliConfig: object,
  rcConfig: object,
  config: object
): void {
  console.log(msgConfigDebugEnv);
  console.log(envConfig);
  console.log(msgConfigDebugCli);
  console.log(cliConfig);
  console.log(msgConfigDebugRc);
  console.log(rcConfig);
  console.log(msgConfigDebugFinal);
  console.log(config);
}
