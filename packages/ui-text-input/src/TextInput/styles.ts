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

import type { TextInputTheme } from '@instructure/shared-types'
import type {
  TextInputProps,
  TextInputStyleProps,
  TextInputStyle
} from './props'

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
  componentTheme: TextInputTheme,
  props: TextInputProps,
  state: TextInputStyleProps
): TextInputStyle => {
  const { size, textAlign, shouldNotWrap } = props
  const {
    disabled,
    invalid,
    focused,
    afterElementHasWidth,
    beforeElementExists
  } = state

  const sizeVariants = {
    small: {
      fontSize: componentTheme.smallFontSize,
      height: `calc(${componentTheme.smallHeight} - (2 * ${componentTheme.borderWidth}))`,
      lineHeight: `calc(${componentTheme.smallHeight} - (2 * ${componentTheme.borderWidth}))`
    },
    medium: {
      fontSize: componentTheme.mediumFontSize,
      height: `calc(${componentTheme.mediumHeight} - (2 * ${componentTheme.borderWidth}))`,
      lineHeight: `calc(${componentTheme.mediumHeight} - (2 * ${componentTheme.borderWidth}))`
    },
    large: {
      fontSize: componentTheme.largeFontSize,
      height: `calc(${componentTheme.largeHeight} - (2 * ${componentTheme.borderWidth}))`,
      lineHeight: `calc(${componentTheme.largeHeight} - (2 * ${componentTheme.borderWidth}))`
    }
  }
  const disabledStyle = disabled
    ? {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        opacity: '0.5'
      }
    : {}

  const focusedStyle = focused
    ? {
        opacity: 1,
        transform: 'scale(1)'
      }
    : {
        opacity: 0,
        transform: 'scale(0.95)'
      }

  const invalidStyle = invalid
    ? {
        borderColor: componentTheme.errorBorderColor
      }
    : {}

  const invalidAndFocusedStyle =
    invalid && focused
      ? {
          borderColor: componentTheme.errorBorderColor
        }
      : {}

  const inputStyle = {
    all: 'initial',
    '&::-ms-clear': {
      display: 'none'
    },
    width: '100%',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    appearance: 'none',
    margin: 0,
    display: 'block',
    boxSizing: 'border-box',
    outline: 'none',
    fontFamily: componentTheme.fontFamily,
    fontWeight: componentTheme.fontWeight,
    color: componentTheme.color,
    padding: `0 ${componentTheme.padding}`,
    background: 'transparent',
    border: 'none',
    verticalAlign: 'baseline',
    '&[autocomplete="off"]::-webkit-contacts-auto-fill-button': {
      display: 'none !important'
    },
    '&:focus': {
      boxShadow: 'initial'
    },
    '&::placeholder': {
      color: componentTheme.placeholderColor
    },
    ...sizeVariants[size!],
    textAlign: textAlign
  }

  const viewBase = {
    boxSizing: 'border-box',
    fontFamily: componentTheme.fontFamily,
    maxWidth: '100%',
    overflow: 'visible',
    unicodeBidi: 'isolate'
  }

  const flexBase = {
    ...viewBase,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  }

  return {
    requiredInvalid: {
      color: componentTheme.requiredInvalidColor
    },
    textInput: {
      label: 'textInput',
      ...inputStyle,
      '&:is(input)[type]': inputStyle,
      '&:-webkit-any(input)[type]': inputStyle
    },
    facade: {
      label: 'textInput__facade',
      position: 'relative',
      display: 'block',
      boxSizing: 'border-box',
      border: `${componentTheme.borderWidth} ${componentTheme.borderStyle} ${componentTheme.borderColor}`,
      borderRadius: componentTheme.borderRadius,
      background: componentTheme.background,
      color: componentTheme.color,

      '&::before': {
        content: '""',
        pointerEvents: 'none',
        position: 'absolute',
        display: 'block',
        boxSizing: 'border-box',
        top: '-0.25rem',
        bottom: '-0.25rem',
        left: '-0.25rem',
        right: '-0.25rem',
        border: `${componentTheme.focusOutlineWidth} ${componentTheme.focusOutlineStyle} ${componentTheme.focusOutlineColor}`,
        borderRadius: `calc(${componentTheme.borderRadius} * 1.5)`,
        transition: 'all 0.2s',

        ...focusedStyle, // properties to transition on :focus
        ...invalidAndFocusedStyle
      },
      ...disabledStyle,
      ...invalidStyle
    },
    layout: {
      label: 'textInput__layout',
      ...viewBase,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      ...(!shouldNotWrap && { flexWrap: 'wrap' }),
      ...(beforeElementExists && { paddingInlineStart: componentTheme.padding })
    },
    inputLayout: {
      label: 'textInput__inputLayout',
      flexGrow: 1,
      ...flexBase
    },
    afterElement: {
      // the next couple lines (until the `label`) is needed so the IconButton looks OK inside the TextInput
      // explanation: if the content inside is not a button or a popover (which could contain a button) it should have some padding on the right
      '& > :not(button):not([data-position^="Popover"])': {
        marginRight: componentTheme.padding
      },
      marginTop: '1px',
      marginBottom: '2px',
      display: 'flex',
      alignItems: 'center',
      ...sizeVariants[size!],
      label: 'textInput__afterElement',
      ...viewBase,
      borderRadius: componentTheme.borderRadius,
      flexShrink: 0,
      // we only override the padding once the width is calculated,
      // it needs the padding on render
      ...(afterElementHasWidth === false && {
        paddingInlineEnd: 0
      })
    }
  }
}

export default generateStyle
