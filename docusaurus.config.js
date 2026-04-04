// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Midofey Systems',
  tagline: 'Build powerful games using midofey systems',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  staticDirectories: ['static'],
  // Set the production url of your site here
  url: 'https://docs.midofeysystems.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'midofey', // Usually your GitHub org/user name.
  projectName: 'midofeysystems', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Midofey Systems',
        logo: {
          alt: 'Midofey Systems Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://www.fab.com/sellers/Midofey%20Systems',
            label: 'Fab',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Products',
            items: [
              {
                label: 'Midofey Systems Common UI',
                href: 'https://www.fab.com/listings/f5dff658-e019-4e88-ae87-ae80f83fc627',
              },
              {
                label: 'Notification System',
                href: 'https://www.fab.com/listings/1e9ba4ea-942b-4744-ac01-4ae026de06fe',
              },
              {
                label: 'Universal Interaction System',
                href: 'https://www.fab.com/listings/c3465349-baea-4f43-892f-54871ca69234',
              },
              {
                label: 'Quest System',
                href: 'https://www.fab.com/listings/0cf5cdac-7c7f-4a3b-91fe-9cd1eb8c12f0',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Fab Marketplace',
                href: 'https://www.fab.com/sellers/Midofey%20Systems',
              },
              {
                label: 'Youtube',
                href: 'https://youtube.com/@midofeysystems',
              },
              {
                label: 'Github',
                href: 'https://github.com/Midofey',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Midofey Systems. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  themes: [
        [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
        ({
          hashed: true,
        }),
    ],
  ],
};

export default config;
