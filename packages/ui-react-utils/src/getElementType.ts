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

import { ComponentType } from 'react'
import { logWarn as warn } from '@instructure/console'
import { AsElementType } from '@instructure/shared-types'

/**
 * A props object that is searched for some fields to determine the
 * element's type.
 */
interface PropsObject {
  as?: AsElementType
  to?: string
  href?: string | null
  onClick?: ((...args: any) => any) | null
}

/**
 * ---
 * category: utilities/react
 * ---
 * Get the React element type for a component. It uses the following logic:
 * 1. type defined by the `as` prop
 * 2. type returned by the `getDefault()` parameter
 * 3. `<a>` if it has a `href` or `to` prop
 * 4. `<button>` if it has an `onClick` prop
 * 5. the component's defaultProp's `as` field
 * 6. `<span>` if none of the above
 *
 * @module getElementType
 * @param Component
 * @param props
 * @param getDefault an optional function that returns the default element type
 * @returns the element type
 */
function getElementType<T extends PropsObject>(
  Component: Omit<ComponentType<T>, 'propTypes'>,
  props: T,
  getDefault?: () => AsElementType<T>
) {
  if (props.as && props.as !== Component.defaultProps?.as) {
    return props.as
  }
  if (typeof getDefault === 'function') {
    return getDefault()
  }
  if (props.href) {
    return 'a'
  }
  if (props.to) {
    warn(
      // if to prop is used without as
      !props.as,
      `[${Component.displayName}] \`as\` prop should be provided when using \`to\``
    )
    return 'a'
  }
  if (typeof props.onClick === 'function') {
    return 'button'
  }
  return Component.defaultProps?.as || 'span'
}

export default getElementType
export { getElementType }
