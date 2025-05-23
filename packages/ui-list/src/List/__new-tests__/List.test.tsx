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

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'

import { List } from '../index'
import { runAxeCheck } from '@instructure/ui-axe-check'

describe('<List />', () => {
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

  it('should render list items and filter out null/falsy children', async () => {
    render(
      <List>
        <List.Item>List item 1</List.Item>
        <List.Item>List item 2</List.Item>
        <List.Item>List item 3</List.Item>
        <List.Item>List item 4</List.Item>
        {null}
        {false}
      </List>
    )
    const listItems = screen.getAllByRole('listitem')

    expect(listItems.length).toEqual(4)
  })

  it('should warn when itemSpacing is set when delimiter is set to anything other than none', async () => {
    render(
      <List delimiter="dashed" itemSpacing="large">
        <List.Item>List item 1</List.Item>
        <List.Item>List item 2</List.Item>
        <List.Item>List item 3</List.Item>
        <List.Item>List item 4</List.Item>
      </List>
    )
    const warning = `Warning: [List] \`itemSpacing\` has no effect inside Lists with the \`delimiter\` prop set to anything other than \`none\`.`

    expect(consoleErrorMock.mock.calls[0][0]).toBe(warning)
  })

  it('should render an ordered list', async () => {
    render(
      <List as="ol">
        <List.Item>List item 1</List.Item>
        <List.Item>List item 2</List.Item>
        <List.Item>List item 3</List.Item>
        <List.Item>List item 4</List.Item>
      </List>
    )
    const list = screen.getByRole('list')

    expect(list.tagName).toBe('OL')
  })

  it('should meet a11y standards', async () => {
    const { container } = render(
      <List>
        <List.Item>List item 1</List.Item>
        <List.Item>List item 2</List.Item>
        <List.Item>List item 3</List.Item>
        <List.Item>List item 4</List.Item>
      </List>
    )
    const axeCheck = await runAxeCheck(container)

    expect(axeCheck).toBe(true)
  })
})
