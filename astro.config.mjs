import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.cropscode.io',
  integrations: [
    starlight({
      title: 'CropsCode | Docs',
      favicon: '/favicon.png',
      logo: {
        dark: './src/assets/logo-dark.png',
        light: './src/assets/logo-light.png',
        replacesTitle: true,
      },
      components: {
        Header: './src/components/Header.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/Crops-Code' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/BRPt2DXM' },
        { icon: 'x.com', label: 'X', href: 'https://x.com/cropscode' },
      ],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'getting-started/introduction' },
            { label: 'Quickstart', slug: 'getting-started/quickstart' },
            { label: 'Install CLI', slug: 'getting-started/install-cli' },
            { label: 'Register a Worker', slug: 'getting-started/register-worker' },
          ],
        },
        {
          label: 'Concepts',
          items: [
            { label: 'Workers', slug: 'concepts/workers' },
            { label: 'Containers', slug: 'concepts/containers' },
            { label: 'CropPilot', slug: 'concepts/croppilot' },
            { label: 'Tickets', slug: 'concepts/tickets' },
            { label: 'Runtime Catalog', slug: 'concepts/runtime-catalog' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Launch from Ticket', slug: 'guides/launch-from-ticket' },
            { label: 'Custom Containerfile', slug: 'guides/custom-containerfile' },
            { label: 'Cron Workflows', slug: 'guides/cron-workflows' },
            { label: 'Team Setup', slug: 'guides/team-setup' },
            { label: 'Greenhouse', slug: 'guides/greenhouse' },
            { label: 'VS Code Extension', slug: 'guides/vscode-extension' },
            { label: 'AI Credits', slug: 'guides/ai-credits' },
          ],
        },
        {
          label: 'CLI Reference',
          items: [
            { label: 'Overview', slug: 'cli/overview' },
            { label: 'login', slug: 'cli/login' },
            { label: 'worker', slug: 'cli/worker' },
            { label: 'doctor', slug: 'cli/doctor' },
            { label: 'onboard', slug: 'cli/onboard' },
            { label: 'config', slug: 'cli/config' },
            { label: 'status', slug: 'cli/status' },
          ],
        },
        {
          label: 'Self-Hosting',
          items: [
            { label: 'Worker Agent', slug: 'self-hosting/worker-agent' },
            { label: 'Requirements', slug: 'self-hosting/requirements' },
            { label: 'Troubleshooting', slug: 'self-hosting/troubleshooting' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Plans & Limits', slug: 'reference/plans-and-limits' },
            { label: 'Supported Agents', slug: 'reference/supported-agents' },
            { label: 'Environment Variables', slug: 'reference/environment-variables' },
            { label: 'Changelog', slug: 'reference/changelog' },
          ],
        },
        {
          label: 'Links',
          items: [
            { label: 'Home', link: 'https://cropscode.io' },
            { label: 'Console', link: 'https://console.cropscode.io' },
            { label: 'Admin', link: 'https://admin.cropscode.io' },
          ],
        },
      ],
    }),
  ],
});
