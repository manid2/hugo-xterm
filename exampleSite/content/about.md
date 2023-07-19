+++
title = "About"
description = "About hugo-xterm theme."
toc = false
+++

Hugo theme designed for reading and printing text with dark and light modes.

Features
--------

* Designed for reading and printing text.
* Switchable dark and light themes, automatic selection based on system theme.
* Uses blue for text, accent and background, green for links.
* Code blocks are highlighted using Hugo built-in blazing fast Chroma.
* Copy code, see code language and file name (optional).
* Slides support using [reveal.js][4] (improvement is WIP).
* Pint any page in light theme mode.
* Support for CV or resume (dedicated layout is WIP).
* Separate view and pagination for list items and post entries.
* Theme can be customized using configurations for: full width, centered.
* SEO friendly OpenGraph and twitter cards support
* Minimal configuration.
* Taxonomies and posts RSS.
* Show git information for site and per single page.
* Tightly coupled with Hugo extended latest version (v1.110.0) to compile and
  generate asset bundles with pipelines, fingerprinting and minification.
* Responsive tested on desktop and on smart phones of 684px.
* Responsive menus for desktop and mobile screens.
* Accessible tested using [WAVE Web Accessibility Evaluation Tool][5].

Other features are supported but not tested yet:

* Post cover image.
* Images in post with caption.
* Comments.
* Website banner.

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

Credits
-------

This theme was initially based on [panr/terminal][1] theme but is re-written
from scratch to optimize for reading and print text heavy web pages.

Parts of the features in this theme are either taken directly or based on the
features from popular themes and websites as listed below:

* [panr/terminal][1]: most styles, menus and starter code.
* [adityatelange/hugo-PaperMod][2] features: breadcrumbs and copy code.
* [kaitlinmctigue/kaitlinmctigue.github.io][3]: dark and light theme modes.

[1]: https://github.com/panr/hugo-theme-terminal
[2]: https://github.com/adityatelange/hugo-PaperMod
[3]: https://github.com/kaitlinmctigue/kaitlinmctigue.github.io
[4]: https://github.com/hakimel/reveal.js
[5]: https://wave.webaim.org/
[6]: https://github.com/adityatelange/hugo-PaperMod/wiki/Installation
