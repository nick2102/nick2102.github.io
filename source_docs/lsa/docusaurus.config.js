/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LSA Agency Profile App',
  tagline: 'Endpoints and API docs',
  url: 'https://maxomedia.ch',
  baseUrl: '/lsa/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'maxomedia', // Usually your GitHub org/user name.
  projectName: 'lsa-project', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'LSA - Agency Profile DOCS',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://bitbucket.org/maxomedia/lsa-project/src/develop/wp-content/themes/maxomedia-starter-child/modules/agency-profile/',
            label: 'BitBucket',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Project', items: [
              {
                label: 'Dev Site',
                to: 'https://lsa.dev.mxm.agency/',
              },
              {
                label: 'Stage Site',
                to: 'https://lsa.stage.mxm.agency/',
              },
              {
                label: 'Live Site',
                to: '/#',
              },
            ]
          },
          {
            title: 'Repo', items: [
              {
                label: 'Wordpress App',
                to: 'https://bitbucket.org/maxomedia/lsa-project/src/develop/',
              },
              {
                label: 'Agency Profile',
                to: 'https://bitbucket.org/maxomedia/lsa-project/src/develop/wp-content/themes/',
              },
            ]
          }
        ],
        logo: {
          alt: 'Maxomedia Logo',
          src: 'img/mxm-logo.png',
          href: 'https://maxomedia.ch',
        },
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `Copyright © ${new Date().getFullYear()} Maxomedia. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
