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

import type { DocumentStyle } from './props'
import { keyframes } from '@instructure/emotion'

const octocatWave = keyframes`
  0% {
    transform: rotate(0deg);
  }

  20% {
    transform: rotate(-25deg);
  }

  40% {
    transform: rotate(10deg);
  }

  60% {
    transform: rotate(-25deg);
  }

  80% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(0deg);
  }`

const generateStyle = (): DocumentStyle => {
  return {
    githubCorner: {
      position: 'absolute',
      top: 0,
      right: 0
    },
    githubCornerOctoArm: {
      fill: '#151513',
      color: '#fff',
      ':hover': {
        '[id="octoArm"]': {
          // 0,0 is the bottom left of the SVG
          transformOrigin: '55% 45%',
          animationDuration: '560ms',
          animationName: octocatWave,
          animationTimingFunction: 'ease-in-out'
        }
      }
    }
  }
}

export default generateStyle
