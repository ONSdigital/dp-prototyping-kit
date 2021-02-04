module.exports = {
  eleventyComputed: {
    title: "Accessibility testing Survey Monkey",
    breadcrumbs: [
      {
        title: "Home",
        href: "/"
      },
      {
        title: "Survey Monkey (embed)",
        href: "../"
      }
    ],
    a11yreport: [
    {
      type: "error",
      issue: "Iframe element requires a non-empty title attribute that identifies the frame.",
      wcag: "2.4.1",
      auditor: "HTML_CodeSniffer"
    },
    {
      type: "error",
      issue: "The \"Create your own user feedback survey\". This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.85:1. Recommendation: change text colour to #767676.",
      wcag: "1.4.3",
      auditor: "HTML_CodeSniffer"
    }
  ]
  }
}
