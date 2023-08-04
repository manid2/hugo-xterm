hugo-xterm
==========

Hugo theme designed for reading and printing text with dark and light modes.

Demo example site [manid2.github.io/hugo-xterm][7].

[![Hugo][hugo_ver_img]][hugo_v0110]
[![LICENSE][hx_lic_img]][hx_lic_link]
[![Build][hx_ci_build_img]][hx_ci_build_link]

Screenshots
-----------

Dark mode:

![Hugo Xterm Dark][hx_ss_dark]

Light mode:

![Hugo Xterm Light][hx_ss_light]

CV template:

![Hugo Xterm CV][hx_ss_cv]

Features:

![Hugo Xterm features][hx_ss_feat]

Features
--------

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

### Other features

These are supported due to [panr/terminal][1] theme base code but not
tested as I don't use them myself:

* Post cover image.
* Images in post with caption.
* Comments.

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

# generate tags
ctags -R assets/ layouts/ config.toml theme.toml

# generate tags for exampleSite
ctags -R exampleSite/layouts/ exampleSite/scripts/ exampleSite/config
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

License
-------

[GNU General Public License v3.0][hx_lic_link]

[1]: https://github.com/panr/hugo-theme-terminal
[2]: https://github.com/adityatelange/hugo-PaperMod
[3]: https://github.com/kaitlinmctigue/kaitlinmctigue.github.io
[4]: https://github.com/hakimel/reveal.js
[5]: https://wave.webaim.org/
[6]: https://github.com/adityatelange/hugo-PaperMod/wiki/Installation
[7]: https://manid2.github.io/hugo-xterm/
[8]: https://en.wikipedia.org/wiki/HSL_and_HSV
[9]: https://github.com/alecthomas/chroma/
[10]: https://manid2.gitlab.io/cv/

[hx_ci_build_img]: https://img.shields.io/github/actions/workflow/status/manid2/hugo-xterm/hugo.yaml?logo=github "Hugo Xterm build status badge"
[hx_ci_build_link]: https://github.com/manid2/hugo-xterm/actions

[hx_lic_img]: https://img.shields.io/github/license/manid2/hugo-xterm?logo=gnu&logoColor=black&label=License&labelColor=lightcyan "Hugo Xterm license badge"
[hx_lic_link]: https://github.com/manid2/hugo-xterm/blob/main/LICENSE

[hugo_ver_img]: https://img.shields.io/badge/Hugo%20Extended-%3E%3D%20v0.110.0-blue.svg?style=flat&logo=hugo&logoColor=white&label=Hugo%20Extended&labelColor=grey "Hugo Extended >= v0.110.0"
[hugo_v0110]: https://github.com/gohugoio/hugo/releases/tag/v0.110.0

[hx_ss_dark]: https://manid2.github.io/hugo-xterm/screenshots/hugo-xterm-ss-01-dark.png "Hugo Xterm dark mode screenshot"
[hx_ss_light]: https://manid2.github.io/hugo-xterm/screenshots/hugo-xterm-ss-02-light.png "Hugo Xterm light mode screenshot"
[hx_ss_cv]: https://manid2.github.io/hugo-xterm/screenshots/hugo-xterm-ss-03-cv.png "Hugo Xterm CV template screenshot"
[hx_ss_feat]: https://manid2.github.io/hugo-xterm/screenshots/hugo-xterm-ss-04-features.png "Hugo Xterm features screenshot"
