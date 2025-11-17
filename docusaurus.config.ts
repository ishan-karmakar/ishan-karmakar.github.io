import type {Config} from '@docusaurus/types';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Ishan Karmakar',
  tagline: 'Robotics, software and community',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ishan-karmakar', // Usually your GitHub org/user name.
  projectName: 'ishan-karmakar.github.io', // Usually your repo name.
  onBrokenLinks: 'throw',
  presets: [['classic', {
    docs: {
      routeBasePath: '/',
      sidebarPath: './sidebars.js'
    }
  }]],
  themeConfig: {
    navbar: {
      title: 'Ishan',
      logo: {
        alt: 'My Logo',
        src: 'img/profile.svg'
      },
      items: [
        {to: '/projects/pivot-os', label: 'Projects'},
        {to: '/experience', label: 'Experience'},
        {to: '/certs', label: "Certifications"},
        {to: '/about', label: 'About'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contact',
          items: [
            {label: 'Email', href: 'mailto:ishan.karmakar24@gmail.com'},
            {label: 'GitHub', href: 'https://github.com/ishan-karmakar'},
            {label: 'LinkedIn', href: 'https://linkedin.com/in/ishan-karmakar'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Ishan Karmakar`,
    },
  },
};

export default config;
