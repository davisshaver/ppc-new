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
  tagline: 'Tech solutions for local & niche publishers.',
  url: 'https://phillypublishing.com' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'guide',
  headerLinks: [
    {doc: 'audits', label: 'Audits'},
    {doc: 'contact', label: 'Contact'},
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/ppc.png',
  footerIcon: 'img/ben.png',
  projectURL: 'https://newsroominabox.com',
  favicon: 'img/ppc.png',
  /* colors for website */
  colors: {
    primaryColor: '#ed4123',
    secondaryColor: '#09329e',
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
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/davisshaver/ppc-new',
};

module.exports = siteConfig;
