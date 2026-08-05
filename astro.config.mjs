import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import astroExpressiveCode from 'astro-expressive-code'
import mdx from '@astrojs/mdx'
import starlight from "@astrojs/starlight"

import { GITHUB_EDIT_URL, COMMUNITY_INVITE_URL } from './src/consts'

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(),
    astroExpressiveCode(),
    mdx(),
    starlight({
      title: 'Shelter Protocol',
      defaultLocale: 'en',
      editLink: {
        baseUrl: GITHUB_EDIT_URL
      },
      logo: {
        src: './public/images/logo.svg'
      },
      locales: {
        en: {
          label: 'English'
        }
      },
      lastUpdated: true,
      customCss: [
        './src/styles/override-main.scss'
      ],
      sidebar: [
        // A group of links labelled "Guides".
        {
          label: 'Overview',
          items: [
            { label: 'Introduction', link: '/introduction' },
            { label: 'Key Concepts', link: '/key-concepts' },
            { label: 'Multiple Devices', link: '/multi-device' },
            { label: 'Message Processing', link: '/message-processing' },
            { label: 'Federation', link: '/federation' },
            { label: 'Security', link: '/security' },
            { label: 'Implementations', link: '/implementations' }
          ]
        },
        {
          label: 'Examples',
          items: [
            { label: 'Identity Contract', link: '/identity-contract' },
            { label: 'Real-world Apps', link: '/usecases' }
          ]
        },
        {
          label: 'Reference',
          items: [
            { label: 'SPMessage', link: '/spmessage' },
            { label: 'Opcodes', link: '/opcodes' },
            { label: 'Server API', link: '/server-api' },
            { label: 'Invite Keys', link: '/invite-keys' },
            { label: 'Contract Manifests', link: '/contract-manifests' },
            { label: 'State Snapshots', link: '/state-snapshots' },
            { label: 'ZKPP', link: '/zkpp' },
            { label: 'URI Scheme', link: '/scheme' }
          ]
        },
        {
          label: 'About',
          items: [
            { label: 'Authors', link: '/authors' },
            { label: 'History', link: '/history' }
          ]
        },
        {
          label: 'Join our community',
          link: COMMUNITY_INVITE_URL,
          attrs: { target: '_blank' },
          badge: { text: 'Note', variant: 'note' }
        }
      ],
      components: {
        Head: './src/components/head-override/Head.astro'
      }
    })
  ],
  vite: {
    esbuild: {
      // below is an option added to silence the vite warning that is related to "/** @jsxImportSource preact */" in various .jsx files.
      // (reference for a similar case: https://github.com/vitejs/vite-plugin-react/issues/12)
      jsx: 'automatic'
    }
  },
  site: 'https://shelterprotocol.net'
})
