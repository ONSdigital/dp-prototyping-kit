module.exports = {
  eleventyComputed: {
    area: {
      name: "United Kingdom",
      children: ({ countries }) => countries
    },
    breadcrumbs: [
      {
        title: "Home",
        href: "/"
      }
    ]
  }
}
