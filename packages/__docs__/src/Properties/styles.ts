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

import type { PropertiesStyle } from './props'

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
const generateStyle = (): PropertiesStyle => {
  return {
    properties: {
      label: 'properties',
      marginTop: '2rem',
      code: { background: 'transparent', border: 'none' },
      overflow: 'auto'
    },

    list: {
      label: 'properties__list',
      margin: 0,
      padding: 0,
      display: 'inline',
      listStyleType: 'none',
      code: { fontSize: '0.875em' }
    },

    listSignatureItem: {
      label: 'properties__listSignatureItem',
      whiteSpace: 'pre-wrap',
      '&:first-of-type': { display: 'inline' }
    },

    listItem: {
      label: 'properties__listItem',
      display: 'inline',
      '&::after': { content: '", "' },
      '&:last-child::after': { content: '""' }
    },

    required: {
      label: 'properties__required',
      backgroundColor: '#333',
      color: 'white',
      borderRadius: '3px',
      padding: '2px 3px',
      fontSize: '0.75rem',
      fontWeight: 400
    },

    oneOf: {
      label: 'properties__oneOf',
      fontWeight: 200,
      fontStyle: 'italic'
    },

    noWrap: {
      label: 'properties__noWrap',
      whiteSpace: 'nowrap'
    }
  }
}

export default generateStyle
