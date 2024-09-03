import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Grupo - TTAMYL',
  tagline: 'Ordem de Serviço',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Sistema de Ordem de Serviço',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentação',
        },
        {
          href: 'https://github.com/Dev-Adryan/sistema-os',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product Manager',
          items: [
            {
              label: 'Thailan Sousa',
              to: 'https://github.com/ThailanSousa',
            },
            {
              label: 'Cayo Felipe',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Front-end Team',
          items: [
            {
              label: 'Amanda Lais',
              to: 'https://github.com/Amandalais',
            },
            {
              label: 'Marcelo Arruda',
              to: 'https://github.com/MarceluzOne',
            },
          ],
        },
        {
          title: 'Back-End Team',
          items: [
            {
              label: 'Thialy Lima',
              href: 'https://github.com/thialylima',
            },
            {
              label: 'Larissa Oliveira',
              href: 'https://github.com/2002Larissa',
            },
          ],
        },
        {
          title: 'Data Team',
          items: [
            {
              label: 'Yasmim Lira',
              to: 'https://github.com/Yasmim-lira',
            },
            {
              label: 'Adryan Rian',
              href: 'https://github.com/Dev-Adryan',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 5º Período S.I Unifacol <br> Powered By: Docusaurus`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
