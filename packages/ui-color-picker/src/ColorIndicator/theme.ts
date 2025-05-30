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

import type { Theme } from '@instructure/ui-themes'
import { ColorIndicatorTheme } from '@instructure/shared-types'

/**
 * Generates the theme object for the component from the theme and provided additional information
 * @param  {Object} theme The actual theme object.
 * @return {Object} The final theme object with the overrides and component variables
 */
const generateComponentTheme = (theme: Theme): ColorIndicatorTheme => {
  const { colors, borders, spacing } = theme

  const componentVariables = {
    borderWidth: borders?.widthSmall,
    backgroundImage: `linear-gradient(45deg, ${colors?.contrasts?.grey1214} 25%, transparent 25%),
    linear-gradient(-45deg, ${colors?.contrasts?.grey1214} 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, ${colors?.contrasts?.grey1214} 75%),
    linear-gradient(-45deg, transparent 75%, ${colors?.contrasts?.grey1214} 75%)`,
    backgroundSize: '.5rem .5rem',
    backgroundPosition: '0 0, 0 .25rem, .25rem -0.25rem, -0.25rem 0px',
    circleIndicatorSize: '1.5rem',
    rectangleIndicatorSize: '2.375rem',
    colorIndicatorBorderColor: colors?.contrasts?.grey1424,
    rectangularIndicatorBorderRadius: spacing?.xxSmall,
    rectangularIndicatorBorderWidth: borders?.widthSmall
  }

  return {
    ...componentVariables
  }
}

export default generateComponentTheme
