/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import type { Theme, ThemeSpecificStyle } from '@instructure/ui-themes'
import { HeadingTheme } from '@instructure/shared-types'

/**
 * Generates the theme object for the component from the theme and provided additional information
 * @param  {Object} theme The actual theme object.
 * @return {Object} The final theme object with the overrides and component variables
 */
const generateComponentTheme = (theme: Theme): HeadingTheme => {
  const { typography, colors, spacing, borders, key: themeName } = theme

  const themeSpecificStyle: ThemeSpecificStyle<HeadingTheme> = {
    canvas: {
      primaryColor: theme['ic-brand-font-color-dark']
    }
  }

  const componentVariables: HeadingTheme = {
    ...typography,

    lineHeight: typography?.lineHeightCondensed,

    h1FontSize: typography?.fontSizeXXLarge,
    h1FontWeight: typography?.fontWeightBold,
    h1FontFamily: typography?.fontFamily,

    h2FontSize: typography?.fontSizeXLarge,
    h2FontWeight: typography?.fontWeightNormal,
    h2FontFamily: typography?.fontFamily,

    h3FontSize: typography?.fontSizeLarge,
    h3FontWeight: typography?.fontWeightBold,
    h3FontFamily: typography?.fontFamily,

    h4FontSize: typography?.fontSizeMedium,
    h4FontWeight: typography?.fontWeightBold,
    h4FontFamily: typography?.fontFamily,

    h5FontSize: typography?.fontSizeSmall,
    h5FontWeight: typography?.fontWeightNormal,
    h5FontFamily: typography?.fontFamily,

    h6FontSize: typography?.fontSizeXSmall,
    h6FontWeight: typography?.fontWeightNormal,
    h6FontFamily: typography?.fontFamily,

    primaryInverseColor: colors?.contrasts?.white1010,
    primaryColor: colors?.contrasts?.grey125125,

    secondaryColor: colors?.contrasts?.grey4570,
    secondaryInverseColor: colors?.contrasts?.grey1111,

    borderPadding: spacing?.xxxSmall,
    borderColor: colors?.contrasts?.grey1424,
    borderWidth: borders?.widthSmall,
    borderStyle: borders?.style,

    aiTextTopGradientColor: colors?.contrasts?.violet4570,
    aiTextBottomGradientColor: colors?.contrasts?.sea4570
  }

  return {
    ...componentVariables,
    ...themeSpecificStyle[themeName]
  }
}

export default generateComponentTheme
