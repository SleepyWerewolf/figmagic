import { colors } from '../system/colors';

export const ErrorAddDescriptionToElements = `${colors.FgRed}Missing elements and/or components in addDescriptionToElements()!`;
export const ErrorCamelize = `${colors.FgRed}No string provided to camelize()!`;
export const ErrorCleanArrays = `${colors.FgRed}Missing one or more of "classNames" and/or "classContent" when calling cleanArrays()!`;
export const ErrorConvertHexToRgba = `${colors.FgRed}Missing one or more of red, green, blue and alpha in convertHexToRgba()!`;
export const ErrorCreateConfiguration = `${colors.FgRed}No path provided to createConfiguration()!`;
export const ErrorCreateConfigurationNoDefault = `${colors.FgRed}No default configuration provided to createConfiguration()!`;
export const ErrorCreateCssString = `${colors.FgRed}Missing one or more of required arguments: "intersections", "uniqueValues"!`;
export const ErrorCreateElements = `${colors.FgRed}Missing arguments provided to createElements()!`;
export const ErrorCreateEnumStringOutOfObject = `${colors.FgRed}No object provided to createEnumStringOutOfObject()!`;
export const ErrorCreateFolder = `${colors.FgRed}No directory specified for createFolder()!`;
export const ErrorCreateGraphics = `${colors.FgRed}Missing arguments provided to createGraphics()!`;
export const ErrorCreateImportStringFromList = `${colors.FgRed}No "importArray" provided to createImportStringFromList()!`;
export const ErrorCreateImportStringFromListZeroLength = `${colors.FgRed}Provided "importArray" is zero-length when calling createImportStringFromList()!`;
export const ErrorCreatePage = `${colors.FgRed}No pages provided to createPage()!`;
export const ErrorCreateTokens = `${colors.FgRed}Missing required arguments when calling createTokens()!`;
export const ErrorDownloadFile = `${colors.FgRed}Missing one or more of "url", "folder", or "file" arguments in downloadFile()!`;
export const ErrorExtractDescription = `${colors.FgRed}Missing description in extractDescription()!`;
export const ErrorExtractTokens = `${colors.FgRed}No sheet or name for processTokens()!`;
export const ErrorExtractTokensNoConfig = `${colors.FgRed}No config provided to processTokens()!`;
export const ErrorFindShortenedNameMatchWrongType = `${colors.FgRed}Arguments are not of string type!`;
export const ErrorGetData = `${colors.FgRed}Could not retrieve any data. Are you missing a valid API key?`;
export const ErrorGetDataLocal = `${colors.FgRed}Missing arguments when calling getDataLocal()!`;
export const ErrorGetDataNoTokenOrUrl = `${colors.FgRed}Missing token and/or URL when attempting to get remote data!`;
export const ErrorGetDescription = `${colors.FgRed}Missing element in getDescription()!`;
export const ErrorGetFileContentAndPath = `${colors.FgRed}Missing argument in getFileContentAndPath()!`;
export const ErrorGetFileContentAndPathMissingFields = `${colors.FgRed}Missing fields in getFileContentAndPath()!`;
export const ErrorGetFileContentAndPathNoReturn = `${colors.FgRed}Missing return in getFileContentAndPath()!`;
export const ErrorGetFileList = `${colors.FgRed}Missing one or more of required arguments: "imageResponse", "ids" and/or "outputFormatGraphics" when calling getFileList()!`;
export const ErrorGetFromApi = `${colors.FgRed}Missing one or more of required arguments: "figmaToken", "figmaUrl" when attempting to get data from Figma API!`;
export const ErrorGetIds = `${colors.FgRed}No (or zero-length) array passed to getIds()!`;
export const ErrorGetIdstring = `${colors.FgRed}Missing required argument "ids" when calling getIdString()!`;
export const ErrorGetIntersectingValues = `${colors.FgRed}Missing "arrays" argument when calling getIntersectingValues()!`;
export const ErrorGetTokenMatch = `${colors.FgRed}Missing one or more of required arguments: "tokens", "tokenFileName", "property", and/or "expectedValue"!`;
export const ErrorGetTokenMatchNoRemSize = `${colors.FgRed}Missing required "remSize" argument for getTokenMatch() when converting to rem/em!`;
export const ErrorGetUniqueValues = `${colors.FgRed}Missing one or more of required arguments: "arrays", and/or "intersections" when calling getUniqueValues()!`;
export const ErrorHandleNestedElements = `${colors.FgRed}Missing element in handleNestedElements()!`;
export const ErrorLoadFile = (path: string): string => {
  if (!path) throw new Error('No string passed to ErrorLoadFile!');
  return `${colors.FgRed}Could not find file: ${path}!`;
};
export const ErrorNormalizeUnits = `${colors.FgRed}Missing arguments for normalizeUnits()!`;
export const ErrorNormalizeUnitsNoRemSize = `${colors.FgRed}Missing required "remSize" argument for normalizeUnits() when converting to rem/em!`;
export const ErrorNormalizeUnitsUndefined = `${colors.FgRed}arguments "rootSize" or "unitSize" are undefined!`;
export const ErrorParseCliArgs = `${colors.FgRed}No arguments array passed to parseCliArgs()!`;
export const ErrorParseCssFromDescription = `${colors.FgRed}Missing "tokens" when calling parseCssFromDescription()!`;
export const ErrorParseCssFromElement = `${colors.FgRed}Missing one or more of required arguments: "element", and/or "remSize" when calling parseCssFromElement()!`;
export const ErrorParseElement = `${colors.FgRed}Missing one or more of required arguments: "element", and/or "remSize" when calling parseElement()!`;
export const ErrorParseTypographyStylingFromElement = `${colors.FgRed}Missing one or more of required arguments: "element", or "remSize" when calling parseTypographyStylingFromElement()!`;
export const ErrorPrepFileComponent = `${colors.FgRed}Missing required arguments in type, when calling prepComponent()!`;
export const ErrorPrepFileCss = `${colors.FgRed}Missing required arguments in type, when calling prepComponent()!`;
export const ErrorPrepFileDescription = `${colors.FgRed}Missing required arguments in type, when calling prepComponent()!`;
export const ErrorPrepFileStorybook = `${colors.FgRed}Missing required arguments in type, when calling prepComponent()!`;
export const ErrorPrepFileStyledComponents = `${colors.FgRed}Missing required arguments in type, when calling prepComponent()!`;
export const ErrorPrepareWrite = `${colors.FgRed}No templates provided to prepareWrite()! Seems like fallback template path also failed...`;
export const ErrorProcessElements = `${colors.FgRed}Missing one or more of required arguments: "elementsPage", "config", and/or "components"! Make sure you have a page called "Elements" in your Figma document.`;
export const ErrorProcessElementsNoMainElement = `${colors.FgRed}No MAIN_ELEMENT in processElements()!`;
export const ErrorProcessGraphics = `${colors.FgRed}Graphics page is undefined or empty! Make sure you have a page called "Graphics" in your Figma document.`;
export const ErrorProcessGraphicsImageError = `${colors.FgRed}Error when fetching graphics from Figma API!`;
export const ErrorProcessGraphicsNoImages = `${colors.FgRed}No images received from Figma API!`;
export const ErrorProcessNestedCss = `${colors.FgRed}No 'css' string provided to processNestedCss()!`;
export const ErrorRefresh = `${colors.FgRed}No path provided to refresh()!`;
export const ErrorReplaceMediaQuery = `Missing one or more of required arguments: "str", and/or "match" when calling replaceMediaQuery()!`;
export const ErrorRoundColor = `${colors.FgRed}Error while rounding color value: Required argument "quantity" was not passed in!`;
export const ErrorRoundColorValue = `${colors.FgRed}Error while rounding color value: Scale value must be equal to or less than 255!`;
export const ErrorSetupBorderWidthTokensMissingProps = `${colors.FgRed}Missing "name" or "strokeWeight" properties in border width frame!`;
export const ErrorSetupBorderWidthTokensNoChildren = `${colors.FgRed}Border Width has no children!`;
export const ErrorSetupBorderWidthTokensNoFrame = `${colors.FgRed}No frame for setupBorderWidthTokens()!`;
export const ErrorSetupColorTokensNoChildren = `${colors.FgRed}Color tokens frame has no children!`;
export const ErrorSetupColorTokensNoFills = `${colors.FgRed}Color has no "fills" property!`;
export const ErrorSetupColorTokensNoFrame = `${colors.FgRed}No frame for setupColorTokens()!`;
export const ErrorSetupDelayTokensMissingProps = `${colors.FgRed}Missing "name" or "characters" properties in Delay frame!`;
export const ErrorSetupDelayTokensNoChildren = `${colors.FgRed}Delay frame has no children!`;
export const ErrorSetupDelayTokensNoFrame = `${colors.FgRed}No frame for setupDelayTokens()!`;
export const ErrorSetupDurationTokensMissingProps = `${colors.FgRed}Missing "name" or "characters" properties in Duration frame!`;
export const ErrorSetupDurationTokensNoChildren = `${colors.FgRed}Duration frame has no children!`;
export const ErrorSetupDurationTokensNoFrame = `${colors.FgRed}No frame for setupDurationTokens()!`;
export const ErrorSetupEasingTokensMissingProps = `${colors.FgRed}Missing "name" or "characters" properties in Easing frame!`;
export const ErrorSetupEasingTokensNoChildren = `${colors.FgRed}Easing frame has no children!`;
export const ErrorSetupEasingTokensNoFrame = `${colors.FgRed}No frame for setupEasingTokens()!`;
export const ErrorSetupFontSizeTokensMissingProps = `${colors.FgRed}Missing "name" or "style" properties in font sizes frame!`;
export const ErrorSetupFontSizeTokensMissingSize = `${colors.FgRed}Missing required "style.fontSize" property!`;
export const ErrorSetupFontSizeTokensNoChildren = `${colors.FgRed}Font size frame is missing "children" array!`;
export const ErrorSetupFontSizeTokensNoFrame = `${colors.FgRed}No frame for setupFontSizeTokens()!`;
export const ErrorSetupFontSizeTokensNoSizing = `${colors.FgRed}Missing "fontUnit" or "remSize" properties when calling setupFontSizeTokens()!`;
export const ErrorSetupFontTokensMissingProps = `${colors.FgRed}Missing "name" or "style" properties in font tokens frame!`;
export const ErrorSetupFontTokensNoChildren = `${colors.FgRed}Font tokens frame is missing "children" array!`;
export const ErrorSetupFontTokensNoFrame = `${colors.FgRed}No frame for setupFontTokens()!`;
export const ErrorSetupFontWeightTokensMissingProps = `${colors.FgRed}Missing "name" or "style" properties in font weights frame!`;
export const ErrorSetupFontWeightTokensMissingWeight = `${colors.FgRed}Missing required "style.fontWeight" property!`;
export const ErrorSetupFontWeightTokensNoChildren = `${colors.FgRed}Font weights frame is missing "children" array!`;
export const ErrorSetupFontWeightTokensNoFrame = `${colors.FgRed}No frame for setupFontWeightTokens()!`;
export const ErrorSetupLetterSpacingTokensMissingProps = `${colors.FgRed}Missing "name" or "style" properties in letter spacing frame!`;
export const ErrorSetupLetterSpacingTokensNoChildren = `${colors.FgRed}Letter Spacing frame has no children!`;
export const ErrorSetupLetterSpacingTokensNoFrame = `${colors.FgRed}No frame for setupLetterSpacingTokens()!`;
export const ErrorSetupLineHeightTokensMissingPercent = `${colors.FgRed}Missing "style.lineHeightPercentFontSize" property in line heights frame!`;
export const ErrorSetupLineHeightTokensMissingProps = `${colors.FgRed}Missing "name" or "style" properties in line heights frame!`;
export const ErrorSetupLineHeightTokensNoChildren = `${colors.FgRed}Line heights frame has no children!`;
export const ErrorSetupLineHeightTokensNoFrame = `${colors.FgRed}No frame for setupLineHeightTokens()!`;
export const ErrorSetupMediaQueryTokensMissingProps = `${colors.FgRed}Missing "absoluteBoundingBox" property in media query frame!`;
export const ErrorSetupMediaQueryTokensNoChildren = `${colors.FgRed}Media Query frame has no children!`;
export const ErrorSetupMediaQueryTokensNoFrame = `${colors.FgRed}No frame for setupMediaQueryTokens()!`;
export const ErrorSetupOpacityTokensMissingProps = `${colors.FgRed}Missing "name" or "characters" properties in opacities frame!`;
export const ErrorSetupOpacityTokensNoChildren = `${colors.FgRed}Opacities frame has no children!`;
export const ErrorSetupOpacityTokensNoFrame = `${colors.FgRed}No frame for setupOpacityTokens()!`;
export const ErrorSetupRadiusTokensMissingProps = `${colors.FgRed}Missing "name"  property in radius frame!`;
export const ErrorSetupRadiusTokensNoChildren = `${colors.FgRed}Radius frame has no children!`;
export const ErrorSetupRadiusTokensNoFrame = `${colors.FgRed}No frame for setupRadiusTokens()!`;
export const ErrorSetupShadowTokensMissingProps = `${colors.FgRed}Missing "effects" property in shadow frame!`;
export const ErrorSetupShadowTokensNoChildren = `${colors.FgRed}Shadow frame has no children!`;
export const ErrorSetupShadowTokensNoFrame = `${colors.FgRed}No frame for setupShadowTokens()!`;
export const ErrorSetupSpacingTokensMissingProps = `${colors.FgRed}Missing "name" or "absoluteBoundingBox" properties in spacing frame!`;
export const ErrorSetupSpacingTokensNoChildren = `${colors.FgRed}Spacing frame has no children!`;
export const ErrorSetupSpacingTokensNoFrame = `${colors.FgRed}No frame for setupSpacingTokens()!`;
export const ErrorSetupSpacingTokensNoUnits = `${colors.FgRed}Missing "spacingUnit" or "remSize" properties when calling setupSpacingTokens()!`;
export const ErrorSetupZindexTokensMissingProps = `${colors.FgRed}Missing "name" or "characters" properties in Z index frame!`;
export const ErrorSetupZindexTokensNoChildren = `${colors.FgRed}Z Index frame has no children!`;
export const ErrorSetupZindexTokensNoFrame = `${colors.FgRed}No frame for setupZindexTokens()!`;
export const ErrorToPascalCase = `${colors.FgRed}Missing "str" argument when calling toPascalCase()!`;
export const ErrorWrite = `${colors.FgRed}Error while attempting to write file!`;
export const ErrorWriteBaseJson = `${colors.FgRed}Error while attempting to write Figma JSON!`;
export const ErrorWriteElements = `${colors.FgRed}Missing "elements" and/or "config" properties when calling writeElements()!`;
export const ErrorWriteFile = `${colors.FgRed}Missing required arguments to correctly run writeFile()!`;
export const ErrorWriteFileWrongType = `${colors.FgRed}Provided invalid file type to writeFile()!`;
export const ErrorWriteGraphics = `${colors.FgRed}Missing "fileList" and/or "config" argument when calling writeGraphics()!`;
export const ErrorWriteTokens = `${colors.FgRed}Less than one token provided to writeTokens()! Make sure you have a page called "Design Tokens" in your Figma document.`;
export const ErrorWriteTokensNoSettings = `${colors.FgRed}Missing "settings" argument/object when attempting to write tokens!`;
