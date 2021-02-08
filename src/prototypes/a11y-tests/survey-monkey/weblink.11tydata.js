module.exports = {
  eleventyComputed: {
    title: "Accessibility testing Survey Monkey",
    breadcrumbs: [
      {
        title: "Home",
        href: "/"
      },
      {
        title: "Survey Monkey (iframe - weblink)",
        href: "../"
      }
    ],
    a11yintro: "Tested as iframe in the host page and as the frame src separately. Would require local 'modal' window to load this over the page content.",
    a11yreport: [
      {
        type: "warning",
        issue: "Question title: The heading structure is not logically nested. This h3 element appears to be the primary document heading, so should be an h1 element.",
        wcag: "1.3.1",
        auditor: "HTML_CodeSniffer"
      },
      {
        type: "error",
        issue: "Duplicate id attribute value \"dialog-container-template\" found on the web page.",
        wcag: "4.1.1",
        auditor: "HTML_CodeSniffer"
      },
      {
        type: "error",
        issue: "This element's role is \"presentation\" but contains child elements with semantic meaning.",
        wcag: "1.3.1",
        auditor: "HTML_CodeSniffer"
      },
      {
        type: "error",
        issue: "Matrix question. This element's role is \"presentation\" but contains child elements with semantic meaning.",
        wcag: "1.3.1",
        auditor: "HTML_CodeSniffer"
      }
    ]
  }
}
