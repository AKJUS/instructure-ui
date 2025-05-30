---
describes: Focusable
---

The `Focusable` component can be used to identify when an element receives focus. `Focusable` accepts
a `render` or `children` method that returns content which must have exactly one
[focusable](https://html.spec.whatwg.org/multipage/interaction.html#focusable-area) element.

```javascript
---
type: example
---
<Focusable>
  {(options) => {
    console.log(options)
    return <span>
      <div>
        <Button aria-describedby="focusable-example1-tooltip">Focus me!</Button>
      </div>
      {options.focused && (
        <ContextView
          margin="small 0"
          placement="bottom"
          as="div"
          background="inverse"
          padding="small"
          borderWidth="small"
          display="block"
          id="focusable-example1-tooltip"
          role="tooltip"
        >
          I&#39;m focused!
        </ContextView>
      )}
    </span>
  }}
</Focusable>
```

Easily implement a "skip to content" link for keyboard-only or screenreader users.

```javascript
---
type: example
---
<Focusable>
{({ focused }) => {
  return (
    <div>
      {
        focused ?
          <Link href="#mainContentExample">Skip to content</Link> :
          <ScreenReaderContent tabIndex="0">Skip to content</ScreenReaderContent>
      }
      <View as="p" id="mainContentExample">
        Tab into this code example to see a 'Skip to Content' link appear
      </View>
    </div>
  )
}}
</Focusable>
```
