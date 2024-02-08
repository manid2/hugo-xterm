+++
title = "About"
description = "About hugo-xterm theme."
toc = false
+++

Hugo theme designed for reading and printing text with dark and light modes.

Features
--------

### Distinguishing features

* Designed for __reading__ and __printing__ text.
* __Print:__ any page in light theme mode for readability.
* __[CV][10]:__ or resume template to reduce vertical space by using 2 columns
  and shortcodes to list the experiences and skills.
* __Slides:__ support using [reveal.js][4].
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
* Customizable using configurations for: "full width", "centered".
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

Follow the steps in any one of these methods to install or update a Hugo
theme.

### Method - Using hugo mod

Add hugo-xterm theme as Hugo module to hide the theme content and let you
focus only on your site content. Let Hugo handle the theme updates
automatically and control the theme as a Hugo module instead of git.

```bash
cd <your-site-directory>

# initialize your site as a hugo module.
hugo mod init <your-repo-host/your-username/your-site-repo>

# import hugo-xterm theme as hugo module in configuration
$ cat config/_default/config.toml
[module]
  [[module.imports]]
    path = "github.com/manid2/hugo-xterm"

# update theme
hugo mod get -u
```

For all below methods your site needs to point to hugo-xterm theme
subdirectory in configuration as below:

```bash
$ cat config/_default/config.toml
theme = "hugo-xterm"
```

### Method - Download and copy theme

Download the archived (i.e. .zip or tar.gz) theme from github repository
releases page. Extract and copy the contents into `themes/hugo-xterm`
subdirectory in your site directory.

To update the theme just download a new release and overwrite the same
subdirectory.

This method is simple, can be automated with script and saves space on disk by
omitting the theme repository history.

### Method - Using git clone

This method clones the theme repository with history into your site's themes
subdirectory which is useful if you want to control the history or make your
own private modifications to the theme.

```bash
cd <your-site-directory>
git clone https://github.com/manid2/hugo-xterm themes/hugo-xterm --depth=1

# update theme
cd themes/hugo-xterm
git pull
```

### Method - Using git submodule

This is similar to cloning the theme into subdirectory except using git
submodule which makes the theme acts a dependency of your site repository. It
lets git to control your site and its dependency this theme.

```bash
git submodule add --depth=1 https://github.com/manid2/hugo-xterm \
themes/hugo-xterm

# update theme
git submodule update --remote --merge
```

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

License
-------

[GNU General Public License v3.0][11]

[1]: https://github.com/panr/hugo-theme-terminal
[2]: https://github.com/adityatelange/hugo-PaperMod
[3]: https://github.com/kaitlinmctigue/kaitlinmctigue.github.io
[4]: https://github.com/hakimel/reveal.js
[5]: https://wave.webaim.org/
[8]: https://en.wikipedia.org/wiki/HSL_and_HSV
[9]: https://github.com/alecthomas/chroma/
[10]: https://manid2.gitlab.io/cv/
[11]: https://github.com/manid2/hugo-xterm/blob/main/LICENSE
