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

import type { TabsTheme } from '@instructure/shared-types'
import type { TabsProps, TabsStyle } from './props'

/**
 * ---
 * private: true
 * ---
 * Generates the style object from the theme and provided additional information
 * @param  {Object} componentTheme The theme variable object.
 * @param  {Object} props the props of the component, the style is applied to
 * @param  {Object} state the state of the component, the style is applied to
 * @return {Object} The final style object, which will be used in the component
 */
const generateStyle = (
  componentTheme: TabsTheme,
  props: TabsProps
): TabsStyle => {
  const { variant, tabOverflow, fixHeight } = props

  // fixHeight can be 0, so simply `fixheight` could return falsy value
  const hasFixedHeight = typeof fixHeight !== 'undefined'

  const variants = {
    default: {
      container: { background: componentTheme.defaultBackground },
      tabs: { marginBottom: `calc(${componentTheme.tabVerticalOffset} * -1)` },
      scrollOverlay: { width: componentTheme.scrollOverlayWidthDefault }
    },
    secondary: {
      container: {},
      tabs: {},
      scrollOverlay: { width: componentTheme.scrollOverlayWidthSecondary }
    }
  }

  const tabOverflowVariants = {
    stack: {
      flexFlow: 'row wrap'
    },
    scroll: {
      marginBottom:
        variant === 'secondary'
          ? `calc(${componentTheme.tabVerticalOffset} * -1)`
          : 0,
      overflowX: 'auto',
      ...(variant === 'default' && {
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'transparent'
        },
        '&::-webkit-scrollbar': {
          height: '0.0625rem',
          backgroundColor: 'transparent'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'transparent'
        }
      }),
      scrollbarWidth: 'none'
    }
  }

  const commonOverlay = {
    height: `calc(100% - (${componentTheme.tabVerticalOffset} + 0.25rem))`,
    position: 'absolute',
    zIndex: componentTheme.zIndex,
    top: '0',
    pointerEvents: 'none',
    ...variants[variant!].scrollOverlay
  }

  return {
    tabs: {
      label: 'tabs',
      flexShrink: 0,
      flexGrow: 0,
      ...variants[variant!].tabs
    },

    container: {
      label: 'tabs__container',
      display: 'flex',
      flexDirection: 'column',
      height: fixHeight,
      ...variants[variant!].container
    },

    tabList: {
      label: 'tabs__tabList',
      display: 'flex',
      width: '100%',
      ...tabOverflowVariants[tabOverflow!]
    },

    panelsContainer: {
      label: 'tabs__panelsContainer',
      flexShrink: 1,
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      ...(hasFixedHeight && {
        overflowY: 'hidden'
      })
    },

    endScrollOverlay: {
      label: 'tabs__endScrollOverlay',
      insetInlineEnd: '0',
      background: `linear-gradient(to left, ${componentTheme.scrollFadeColor} 0%, rgba(255, 255, 255, 0) 100%)`,
      '[dir="rtl"] &': {
        background: `linear-gradient(to right, ${componentTheme.scrollFadeColor} 0%, rgba(255, 255, 255, 0) 100%)`
      },
      ...commonOverlay
    },
    startScrollOverlay: {
      label: 'tabs__startScrollOverlay',
      insetInlineStart: '0',
      background: `linear-gradient(to right, ${componentTheme.scrollFadeColor} 0%, rgba(255, 255, 255, 0) 100%)`,
      '[dir="rtl"] &': {
        background: `linear-gradient(to left, ${componentTheme.scrollFadeColor} 0%, rgba(255, 255, 255, 0) 100%)`
      },
      ...commonOverlay
    },
    scrollOverlayWidthDefault: componentTheme.scrollOverlayWidthDefault,
    scrollOverlayWidthSecondary: componentTheme.scrollOverlayWidthSecondary
  }
}

export default generateStyle
