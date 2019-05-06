# Gatsby Remark Absolute Link Catch plugin

## gatsby-remark-absolute-link-catch

[![npm](https://img.shields.io/npm/v/gatsby-remark-absolute-link-catch/latest.svg?style=flat-square)](https://www.npmjs.com/package/gatsby-remark-absolute-link-catch)

This plugin is intended to be used in conjunction with [Gatsby plugin catch links](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-catch-links#readme), and acts to augment the official plugin's functionality by massaging Markdown where the usage of relative links may not be supported in a world filled with WYSIWYG CMS editors. By the time your markdown is rendered as HTML, you can preserve the SPA-feel of Gatsby sites by preventing the hard redirects which would otherwise be caused by the inclusion of absolute URLs in your Markdown.

## Installation

With npm:

`npm install --save gatsby-remark-absolute-link-catch gatsby-plugin-catch-links`

or with yarn, if that's more your style:

`yarn add gatsby-remark-absolute-link-catch gatsby-plugin-catch-links`

## Example config

```javascript
// In gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-absolute-link-catch`,
          options: {
            absoluteUrls: [
              //Here I am using pretty much every protocol combination you could expect for a www... site
              "https://example.com",
              "https://www.example.com",
              "http://example.com",
              "http://www.example.com"
            ],
            developmentLocation: `http://localhost:8000` //optional, defaults to http://localhost:8000
          }
        }
      ]
    }
  },
  //...
  `gatsby-plugin-catch-links`
];
```

## Plugin Options: in-depth

`absoluteUrls`: Expects a comma-separated list of strings; looks for any anchor (link) tags in your Markdown that exactly match the provided strings and replaces them.

`developmentLocation`: expects a string with the location + port you are developing at. Defaults to `http://localhost:8000`

## Considerations

This plugin assumes that during development (determined by checking the `process.env.NODE_ENV` environment variable, which is set by default by Gatsby ...) your site's origin will be `http://localhost:8000`. If you are developing at a different location than `localhost`, or if the port differs from `8000`, please set the `developmentLocation` option (see above) accordingly when using this plugin.

Contributions are welcome!
