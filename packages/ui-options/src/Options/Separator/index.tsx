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

import { Component } from 'react'

import { getElementType, omitProps } from '@instructure/ui-react-utils'

import { withStyle } from '@instructure/emotion'

import generateStyles from './styles'
import generateComponentTheme from './theme'
import type { OptionsSeparatorProps } from './props'
import { allowedProps, propTypes } from './props'

/**
---
parent: Options
id: Options.Separator
---
@module Separator
**/
@withStyle(generateStyles, generateComponentTheme)
class Separator extends Component<OptionsSeparatorProps> {
  static readonly componentId = 'Options.Separator'

  static allowedProps = allowedProps
  static propTypes = propTypes

  static defaultProps = {
    as: 'span'
  } as const

  componentDidMount() {
    this.props.makeStyles?.()
  }

  componentDidUpdate() {
    this.props.makeStyles?.()
  }

  render() {
    const { as, styles, ...rest } = this.props

    const ElementType = getElementType(Separator, this.props, () => as!)

    return (
      <ElementType role="none">
        <div
          // we need to omit the withStyle props
          {...omitProps(rest, ['styles', 'makeStyles', 'themeOverride'])}
          css={styles?.separator}
          role="presentation"
        />
      </ElementType>
    )
  }
}

export default Separator
export { Separator }
