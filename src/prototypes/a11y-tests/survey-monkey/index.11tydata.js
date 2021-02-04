module.exports = {
  eleventyComputed: {
    title: "Accessibility testing Survey Monkey",
    breadcrumbs: [
      {
        title: "Home",
        href: "/"
      },
      {
        title: "Survey Monkey (modal)",
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
        type: "warning",
        issue: "This element has \"position: fixed\". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.",
        wcag: "1.4.10",
        auditor: "HTML_CodeSniffer"
      },
      {
        type: "warning",
        issue: "Keyboard control. Radio controls awkward. Slider control non-editable (may be possible with input enabled). Unable to close the form but not blocked from navigating away. Form not announced and not identifiable as a region of the page.",
        wcag: "",
        auditor: "VoiceOver (Mac)"
      },
      {
        type: "",
        issue: "",
        wcag: "",
        auditor: ""
      }
    ]
  }
}
