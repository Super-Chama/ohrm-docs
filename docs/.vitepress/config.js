export default {
  base: '/ohrm-docs/',
  title: "OrangeHRM Dev Docs",
  description: "OrangeHRM developer documentation",
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "OrangeHRM Dev Docs",
    // Navbar Link
    nav: [
      { text: "Guide", link: "/guide" },
      {
        // Dropdown Menu
        text: "Changelog",
        items: [
          { text: "v0.0.1", link: "/item-1" },
          { text: "v0.0.2", link: "/item-2" },
          { text: "v0.0.3", link: "/item-3" },
        ],
      },
    ],
    // Social Icons
    socialLinks: [
      { icon: "github", link: "github.com/orangehrm" },
    ],
    // Sidebar
    sidebar: [
      {
        text: "Section A",
        collapsible: true,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "Section B",
        collapsible: false,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "Section C",
        collapsible: true,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
    ],
    footer: {
      copyright: "Copyright © 2022 OrangeHRM",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
  },
};
