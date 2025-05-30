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

import { render } from '@testing-library/react'
import { vi } from 'vitest'
import { runAxeCheck } from '@instructure/ui-axe-check'
import '@testing-library/jest-dom'

import { FormFieldLabel } from '../index'

describe('<FormFieldLabel />', () => {
  let consoleWarningMock: ReturnType<typeof vi.spyOn>
  let consoleErrorMock: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    // Mocking console to prevent test output pollution and expect for messages
    consoleWarningMock = vi
      .spyOn(console, 'warn')
      .mockImplementation(() => {}) as any
    consoleErrorMock = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {}) as any
  })

  afterEach(() => {
    consoleWarningMock.mockRestore()
    consoleErrorMock.mockRestore()
  })

  it('should render', () => {
    const { container } = render(<FormFieldLabel>Foo</FormFieldLabel>)

    const formFieldLabel = container.querySelector(
      "span[class$='-formFieldLabel']"
    )

    expect(formFieldLabel).toBeInTheDocument()
    expect(formFieldLabel).toHaveTextContent('Foo')
  })

  it('should render as specified via the `as` prop', () => {
    const { container } = render(<FormFieldLabel as="li">Foo</FormFieldLabel>)

    const formFieldLabel = container.querySelector('li')

    expect(formFieldLabel).toBeInTheDocument()
    expect(formFieldLabel).toHaveTextContent('Foo')
  })

  it('should meet a11y standards', async () => {
    const { container } = render(<FormFieldLabel>Foo</FormFieldLabel>)

    const axeCheck = await runAxeCheck(container)

    expect(axeCheck).toBe(true)
  })
})
