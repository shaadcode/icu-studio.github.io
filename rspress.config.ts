import { defineConfig } from '@rspress/core';
import * as path from 'node:path';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  lang: 'en',
  title: 'ICU Studio docs',
  description: "Fast and lightweight IDE for ICU messages",
  icon: '/ICU-word-icon.png',
  logo: {
    light: '/icu-studio-light-logo.png',
    dark: '/icu-studio-dark-logo.png',
  },
  globalStyles: path.join(__dirname, 'styles/custom.css'),
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/shaadcode/ICU-Studio',
      },
    ],
  },
});
