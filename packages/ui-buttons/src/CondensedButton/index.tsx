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

import { testable } from '@instructure/ui-testable'
import { passthroughProps } from '@instructure/ui-react-utils'

import { withStyle } from '@instructure/emotion'

import generateComponentTheme from './theme'
import { BaseButton } from '../BaseButton'

import { propTypes, allowedProps } from './props'
import type { CondensedButtonProps } from './props'

/**
---
category: components
---
**/
// needed for listing the available theme variables on docs page
@withStyle(null, generateComponentTheme)
@testable()
class CondensedButton extends Component<CondensedButtonProps> {
  static readonly componentId = 'CondensedButton'

  static propTypes = propTypes
  static allowedProps = allowedProps
  static defaultProps = {
    type: 'button',
    size: 'medium',
    as: 'button',
    // Leave interaction default undefined so that `disabled` and `readOnly` can also be supplied
    interaction: undefined,
    color: 'primary',
    margin: '0',
    cursor: 'pointer'
  }

  _baseButton: BaseButton | null = null

  ref: Element | null = null

  handleRef = (el: Element | null) => {
    const { elementRef } = this.props

    this.ref = el

    if (typeof elementRef === 'function') {
      elementRef(el)
    }
  }

  get focused() {
    return this._baseButton && this._baseButton.focused
  }

  focus() {
    this._baseButton && this._baseButton.focus()
  }

  render() {
    const {
      children,
      type,
      size,
      elementRef,
      as,
      interaction,
      color,
      margin,
      cursor,
      href,
      renderIcon,
      ...props
    } = this.props

    const themeOverride = this.props.themeOverride

    return (
      <BaseButton
        {...passthroughProps(props)}
        isCondensed
        withBackground={false}
        withBorder={false}
        type={type}
        size={size}
        elementRef={this.handleRef}
        as={as}
        interaction={interaction}
        color={color}
        margin={margin}
        cursor={cursor}
        href={href}
        renderIcon={renderIcon}
        themeOverride={themeOverride}
        ref={(component) => {
          this._baseButton = component
        }}
      >
        {children}
      </BaseButton>
    )
  }
}

export default CondensedButton
export { CondensedButton }
