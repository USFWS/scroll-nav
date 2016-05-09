# Scroll-Nav

This module searches website content for headings and creates an ordered list to provide within-page navigation links.  The module makes no stylistic assumptions; you'll have to bring your own CSS.  This code is based on [scrollnav](https://github.com/jimmynotjim/scrollNav) by [jimmynotjim](https://github.com/jimmynotjim).

## Development

To ease development we use npm scripts to compile JS with browserify/watchify:

First, install the project dependencies:

`npm install`

To quickly build the project and watch files for changes during development:

`npm run watchify`

To build a production ready version of the app use:

`npm run build`

To visualize packages contributing to bundle file size:

`npm run inspect:bundle`

## Options

 - headingTag (string): The HTML tag used to generate the scroll nav list (default: 'h2')
 - content (selector or DOM node): The content area that should be searched for heading tags (default: document.body)
 - target (selector or DOM node): The location where the scroll nav list should be appended (default: document.body)
 - fixedClass (string): The class appended to the nav as it begins to scroll out of view (default: 'fixed'),
 - fixedMargin (integer): The top dimension offset used to determine when to append the 'fixed' class (default: 40),
 - offset (integer): How much top margin is left when scrolling to a heading (default: 40)

### License

This project is based on [scrollnav](https://github.com/jimmynotjim/scrollNav) by [jimmynotjim](https://github.com/jimmynotjim), which carries an [MIT License](https://github.com/jimmynotjim/scrollNav/blob/6b549796ed12dac2b78083ac3452bdfd816c94c3/LICENSE-MIT).
