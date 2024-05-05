+++
title = "Markdown Syntax Guide"
description = """Sample article showcasing basic Markdown syntax and \
  formatting for HTML elements."""
draft = false
date = "2024-05-06T01:22:51+0530"
author = "Hugo Authors"
tags = ["markdown", "xterm", "css", "html"]
categories = ["themes", "syntax"]
+++

This article offers a sample of basic Markdown syntax that can be used in Hugo
content files, also it shows whether basic HTML elements are decorated with
CSS in a Hugo theme.

Headings
--------

The following HTML `<h1>`—`<h6>` elements represent six levels of section
headings. `<h1>` is the highest section level while `<h6>` is the lowest.

<!-- markdownlint-disable -->
# H1

## H2
<!-- markdownlint-enable -->

### H3

#### H4

##### H5

###### H6

Paragraph
---------

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum,
voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma
dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as
cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur?
Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi,
sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos
evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam,
ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores
editium rerore eost, temped molorro ratiae volorro te reribus dolorer
sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne
sapicia is sinveli squiatum, core et que aut hariosam ex eat.

Blockquotes
-----------

The blockquote element represents content that is quoted from another source,
optionally with a citation which must be within a `footer` or `cite` element,
and optionally with in-line changes such as annotations and abbreviations.

### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> __Note__ that you can use _Markdown syntax_ within a blockquote.

Tables
------

Tables aren't part of the core Markdown spec, but Hugo supports them
out-of-the-box.

| Name  | Age |
| ----- | --- |
| Bob   | 27  |
| Alice | 23  |

### Inline Markdown within tables

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | __bold__ | `code` |

Code Blocks
-----------

### Inline Code

`This is Inline Code`

### Code block with backticks

<!-- markdownlint-disable -->
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Example HTML5 Document</title>
    </head>
    <body>
        <p>Test</p>
    </body>
</html>
```
<!-- markdownlint-enable -->

### Code block with backticks, language & attributes (lineno) specified

```html {linenos=true}
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Example HTML5 Document</title>
	<meta name="description" content="Sample article showcasing basic
	Markdown syntax and formatting for HTML elements.">
    </head>
    <body>
        <p>Test</p>
    </body>
</html>
```

<!-- markdownlint-disable -->

### Code block indented with four spaces

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

### Code block with Hugo's internal highlight shortcode

{{< highlight html >}}

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>

{{< /highlight >}}

<!-- markdownlint-enable -->

### Gist

{{< gist spf13 7896402 >}}

List Types
----------

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- List item
- Another item
- And another item

### Nested list

- Fruit
  + Apple
  + Orange
  + Banana
- Dairy
  + Milk
  + Cheese
