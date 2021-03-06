/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [];

const siteConfig = {
  title: 'Philadelphia Publishing Company' /* title for your website */,
  tagline: 'Virtual CTO for local & niche publishers.',
  url: 'https://phillypublishing.com' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'guide',
  headerLinks: [
    {doc: 'about', label: 'About'},
    {doc: 'audit', label: 'Audits'},
    {doc: 'contact', label: 'Contact'},
    {doc: 'hosting', label: 'Hosting'},
  ],
  users,
  /* path to images for header/footer */
  footerIcon: 'img/ben.png',
  projectURL: 'https://phillypublishing.com',
  favicon: 'img/ppc.png',
  /* colors for website */
  colors: {
    primaryColor: '#234196',
    secondaryColor: '#727272',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Philadelphia Publishing Company',
  organizationName: 'davisshaver', // or set an env variable ORGANIZATION_NAME
  projectName: 'ppc-new', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  cname: 'phillypublishing.com',
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://tag.marinsm.com/serve/5a6fb095b94f178b9d0000ec.js',
    'https://www.googletagmanager.com/gtm.js?id=GTM-K7GRFRN'
],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/davisshaver/ppc-new',
};

module.exports = siteConfig;
