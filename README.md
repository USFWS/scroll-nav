## SECAS Story Map

This interactive story map highlights several conservation projects that fall under the Southeast Conservation Adaptation Strategy (SECAS).  This project is under active development.

## Development

To ease development we use npm scripts to compile JS with browserify/watchify, compile sass to css, optimize images, etc:

First, install the project dependencies:

`npm install`

To kick off the development server and all pre-requisite tasks:

`npm start`

To build a production ready version of the app use:

`npm run build`

To visualize packages contributing to bundle file size:

`npm run inspect:bundle`

## Options

 - headingTag (string): The HTML tag used to generate the scroll nav list (default: 'h2')
 - content (selector or DOM node): The content area that should be searched for heading tags (default: document.body)
 - target (selector or DOM node): The location where the scroll nav list should be appended (default: document.body)

### License

This project is in the Public Domain.

The United States Fish and Wildlife Service (FWS) GitHub project code is provided on an "as is" basis and the user assumes responsibility for its use. FWS has relinquished control
of the information and no longer has responsibility to protect the integrity, confidentiality, or availability of the information. Any reference to specific commercial products, processes, or services by service mark, trademark, manufacturer, or otherwise, does not constitute or imply their endorsement, recommendation or favoring by FWS. The FWS seal and logo shall not be used in any manner to imply endorsement of any commercial product or activity by FWS or the United States Government.
