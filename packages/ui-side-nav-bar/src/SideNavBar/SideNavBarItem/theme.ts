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
import { SideNavBarItemTheme } from '@instructure/shared-types'

/**
 * Generates the theme object for the component from the theme and provided additional information
 * @param  {Object} theme The actual theme object.
 * @return {Object} The final theme object with the overrides and component variables
 */
const generateComponentTheme = (theme: Theme): SideNavBarItemTheme => {
  const { colors, spacing, typography, key: themeName } = theme

  const themeSpecificStyle: ThemeSpecificStyle<SideNavBarItemTheme> = {
    canvas: {
      fontColor: theme['ic-brand-global-nav-menu-item__text-color'],
      iconColor: theme['ic-brand-global-nav-ic-icon-svg-fill'],
      hoverBackgroundColor: theme['ic-global-nav-link-hover'],
      selectedFontColor:
        theme['ic-brand-global-nav-menu-item__text-color--active'],
      selectedIconColor: theme['ic-brand-global-nav-ic-icon-svg-fill--active']
    },
    'canvas-high-contrast': {
      linkTextDecoration: 'underline'
    }
  }

  const componentVariables: SideNavBarItemTheme = {
    fontSize: typography?.fontSizeSmall,
    fontFamily: typography?.fontFamily,
    fontWeight: typography?.fontWeightNormal,

    fontColor: colors?.contrasts?.white1010,
    iconSize: '1.625rem',
    iconColor: colors?.contrasts?.white1010,
    lineHeight: typography?.lineHeight,
    backgroundColor: 'transparent',
    linkTextDecoration: 'none',

    hoverBackgroundColor: colors?.contrasts?.grey125125,
    outerFocusOutline: `inset 0 0 0 0.125rem ${colors?.contrasts?.grey4570}`,
    innerFocusOutline: `inset 0 0 0 0.25rem ${colors?.contrasts?.white1010}`,

    selectedFontColor: colors?.contrasts?.blue4570,
    selectedIconColor: colors?.contrasts?.blue4570,
    selectedBackgroundColor: colors?.contrasts?.white1010,
    selectedOuterFocusOutline: `inset 0 0 0 0.125rem ${colors?.contrasts?.white1010}`,
    selectedInnerFocusOutline: `inset 0 0 0 0.25rem ${colors?.contrasts?.blue4570}`,

    contentPadding: spacing?.xxSmall
  }

  return {
    ...componentVariables,
    ...themeSpecificStyle[themeName]
  }
}

export default generateComponentTheme
