---
describes: Heading
---

Heading is a component for creating typographic headings.

## Variant

Variant covers almost all use cases for headings on pages. Their name reflects the places they meant to be used. It takes care of the style of the heading

NOTE 1: for legacy reasons, each `variant` has a default `level` set. This is not the recommended way and will be removed in a later major release. Please specify the `level` directly!

NOTE 2: when `variant` is set the `as` prop is ignored

IMPORTANT A11Y NOTE 1: there can be only one `h1` tag in a page

IMPORTANT A11Y NOTE 2: `h` tags can not skip a level, so for example an `h1` followed by an `h3` not allowed

```js
---
type: example
---
  <div>
    <Heading variant="titlePageDesktop"> titlePageDesktop </Heading><br/>
    <Heading variant="titlePageMobile"> titlePageMobile </Heading><br/>
    <Heading variant="titleSection"> titleSection </Heading><br/>
    <Heading variant="titleCardSection"> titleCardSection </Heading><br/>
    <Heading variant="titleModule"> titleModule </Heading><br/>
    <Heading variant="titleCardLarge"> titleCardLarge </Heading><br/>
    <Heading variant="titleCardRegular"> titleCardRegular </Heading><br/>
    <Heading variant="titleCardMini"> titleCardMini </Heading><br/>
    <Heading variant="label"> label </Heading><br/>
    <Heading variant="labelInline"> labelInline </Heading><br/>
  </div>
```

### AI Heading

Pre-configured and with unique styles, the `ai-headings` are used for standardized, ai-related components.

```js
---
type: example
---
<div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
 <Heading aiVariant="stacked">Nutrition Facts</Heading>
 <Heading aiVariant="horizontal">Nutrition Facts</Heading>
 <Heading aiVariant="iconOnly">Nutrition Facts</Heading>
</div>
```

### Heading level

Generate content headings, from h1 to h5. Use the `margin` prop to add margin.

- The `as` prop controls what html element is output. _(if not defined it will default to level)._
- The `level` prop sets its appearance.

```js
---
type: example
---
<div>
  <Heading level="h1" as="h2" margin="0 0 x-small">Heading level One</Heading>

</div>
```

### Heading colors

The default is for the color to inherit, but it can be set to `primary` or `secondary` via the `color` prop. Note there is an inverse option available as well: `primary-inverse` or `secondary-inverse` (_see inverse example below_).

```js
---
type: example
---
<div>
  <Heading>I inherit my color via the CSS cascade (default)</Heading>
  <Heading color="primary">I am primary color</Heading>
  <Heading color="secondary">I am secondary color</Heading>
</div>
```

### Icons

With the `renderIcon` prop, an icon can be rendered before the text.

```js
---
type: example
---
<div>
 <Heading renderIcon={<IconAdminSolid/>}>I am heading with icon</Heading>
</div>
```

```js
---
type: example
---
<View background="primary-inverse" as="div">
  <Heading color="primary-inverse">I am primary-inverse color</Heading>
  <Heading color="secondary-inverse">I am secondary-inverse color</Heading>
</View>
```

### Heading borders

The default is no borders. However, using the `border` prop, you can
add either `top` or `bottom` borders to your heading.

```js
---
type: example
---
<div>
  <Heading margin="0 0 medium" border="bottom">I have a bottom border</Heading>
  <Heading border="top">I have a top border</Heading>
</div>
```

### Ellipsis text overflow

Use [TruncateText](#TruncateText) if you need to constrain your
Heading to a single line (or certain number of lines).

```js
---
type: example
---
<Heading level="h2">
  <TruncateText>{lorem.paragraph()}</TruncateText>
</Heading>
```

### Guidelines

```js
---
type: embed
---
<Guidelines>
  <Figure recommendation="a11y" title="Accessibility">
    <Figure.Item>Each page should always contain one and only one H1</Figure.Item>
    <Figure.Item>Headings should be used in logical order</Figure.Item>
    <Figure.Item>Headings should not be used to format text</Figure.Item>
  </Figure>
</Guidelines>
```
