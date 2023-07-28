+++
title = "About"
description = "About hugo-xterm theme."
toc = false
+++

Hugo theme designed for reading and printing text with dark and light modes.

{{< ads >}}

Features
--------

{{< ads >}}

### Distinguishing features

* Designed for __reading__ and __printing__ text.
* __Print:__ any page in light theme mode for readability.
* __[CV][10]:__ or resume template to reduce vertical space by using 2 columns
  and shortcodes to list the experiences and skills.
* __Slides:__ support using [reveal.js][4] (improvement is WIP).
* __Lists__: separate view and pagination for simple list items and post
  entries.
* __GitInfo:__ show the latest git commit short hash and subject message for
  each page (requires Hugo GitInfo config enabled).
* __Fonts:__
  - __"Roboto Slab (serif)"__ for title (heading) text.
  - __"Fira Sans (sans-serif)"__ for normal text.
  - __"Ubuntu Mono (monospace)"__ for code.
* __Colors:__ in the theme are derived using a single primary color (blue)
  from the [HSL colors][8].
* Website banner is supported.

{{< ads >}}

### Adopted features

* Minimal configuration.
* Switchable dark and light themes with automatic selection based on system
  theme.
* SEO friendly OpenGraph and twitter cards support
* Customizable using configurations for: "full width:, "centered".
* Taxonomies and posts RSS.
* Responsive tested on desktop and on smart phones.
* Responsive menus for desktop and mobile screens.
* Accessibility tested using [WAVE Web Accessibility Evaluation Tool][5].
* Code blocks are highlighted using Hugo built-in blazing fast [Chroma][9].
* Copy code, see code language and file name (optional).
* Tightly coupled with Hugo extended latest version (v1.110.0) to compile and
  generate asset bundles with pipelines, fingerprinting and minification.

{{< ads >}}

### Other features

These are supported due to [panr/terminal][1] theme base code but not
tested as I don't use them myself:

* Post cover image.
* Images in post with caption.
* Comments.

{{< ads >}}

Installation
------------

Follows the same steps for installing and updating a Hugo theme such as this
link for installing and updating PaperMode theme
[adityatelange/hugo-PaperMod/wiki/Installation][6].

Local development
-----------------

```bash
# add to go.mod for local development
# replace github.com/manid2/hugo-xterm => ../hugo-xterm
hugo server --source exampleSite
```

{{< ads >}}

Credits
-------

This theme was initially based on [panr/terminal][1] theme but is re-written
from scratch to optimize for reading and print text heavy web pages.

Parts of the features in this theme are either taken directly or based on the
features from popular themes and websites as listed below:

* [panr/terminal][1]: most styles, menus and starter code.
* [adityatelange/hugo-PaperMod][2] features: breadcrumbs and copy code.
* [kaitlinmctigue/kaitlinmctigue.github.io][3]: dark and light theme modes.

License
-------

[GNU General Public License v3.0][11]

{{< ads >}}

[1]: https://github.com/panr/hugo-theme-terminal
[2]: https://github.com/adityatelange/hugo-PaperMod
[3]: https://github.com/kaitlinmctigue/kaitlinmctigue.github.io
[4]: https://github.com/hakimel/reveal.js
[5]: https://wave.webaim.org/
[6]: https://github.com/adityatelange/hugo-PaperMod/wiki/Installation
[8]: https://en.wikipedia.org/wiki/HSL_and_HSV
[9]: https://github.com/alecthomas/chroma/
[10]: https://manid2.gitlab.io/cv/
[11]: https://github.com/manid2/hugo-xterm/blob/main/LICENSE
