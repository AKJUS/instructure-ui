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
import { OptionsItemTheme } from '@instructure/shared-types'

/**
 * Generates the theme object for the component from the theme and provided additional information
 * @param  {Object} theme The actual theme object.
 * @return {Object} The final theme object with the overrides and component variables
 */
const generateComponentTheme = (theme: Theme): OptionsItemTheme => {
  const { colors, typography, spacing, key: themeName } = theme

  const themeSpecificStyle: ThemeSpecificStyle<OptionsItemTheme> = {
    canvas: {
      color: theme['ic-brand-font-color-dark'],
      highlightedBackground: theme['ic-brand-primary']
    }
  }

  const componentVariables: OptionsItemTheme = {
    fontSize: typography?.fontSizeMedium,
    fontFamily: typography?.fontFamily,
    fontWeight: typography?.fontWeightNormal,
    lineHeight: typography?.lineHeightCondensed,
    fontWeightSelected: typography?.fontWeightNormal,

    color: colors?.contrasts?.grey125125,
    background: colors?.contrasts?.white1010,
    highlightedLabelColor: colors?.contrasts?.white1010,
    highlightedBackground: colors?.contrasts?.blue4570,
    selectedLabelColor: colors?.contrasts?.white1010,
    selectedBackground: colors?.contrasts?.grey4570,
    selectedHighlightedBackground: colors?.contrasts?.blue5782,

    padding: `${spacing?.xSmall} ${spacing?.small}`,
    iconPadding: spacing?.small,
    nestedPadding: spacing?.small,

    beforeLabelContentVOffset: '0.625rem',
    afterLabelContentVOffset: '0.625rem',

    descriptionFontSize: typography.fontSizeSmall,
    descriptionFontWeight: typography.fontWeightNormal,
    descriptionLineHeight: typography.lineHeight,
    descriptionPaddingStart: '0.25em',
    descriptionColor: colors?.contrasts?.grey5782
  }

  return {
    ...componentVariables,
    ...themeSpecificStyle[themeName]
  }
}

export { generateComponentTheme as optionsItemThemeGenerator }
export default generateComponentTheme
