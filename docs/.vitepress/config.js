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
        text: "For Designers",
        collapsible: false,
        items: [
          { text: "Introduction", link: "design/index" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "For Developers",
        collapsible: true,
        items: [
          { text: "Introduction", link: "development/index" },
          { text: "Guideline", link: "development/guideline" },
          { text: "State Management", link: "development/state-management" },
        ],
      },
      {
        text: "Composables",
        collapsible: true,
        items: [
          { text: "Introduction", link: "composables/index" },
          { text: "useModal", link: "composables/useModal" },
          { text: "useDialog", link: "composables/useDialog" },
          { text: "useRepo", link: "composables/useRepo" },
          { text: "useSort", link: "composables/useSort" },
          { text: "useFilter", link: "composables/useFilter" },
          { text: "usePaginate", link: "composables/usePaginate" },
        ],
      },
    ],
    footer: {
      copyright: "Copyright © 2023 OrangeHRM",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
  },
};
