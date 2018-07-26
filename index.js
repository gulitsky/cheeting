'use strict';

// Native
const { resolve: resolvePath } = require('path');
const { readFileSync } = require('fs');
const { parse: parseUrl } = require('url');

// Packages
const micro = require('micro');

const document = resolvePath(process.cwd(), 'index.html');
const html = readFileSync(document, 'utf8');

module.exports = async (req, res) => {
  const { query } = parseUrl(req.url, true);
  const { url = 'https://paypal.com' } = query;
  const content = html.replace(/\$/g, url);
  res.end(content);
};
