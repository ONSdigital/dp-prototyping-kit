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
    a11yintro: "Tested as modal in the host page.",
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
        type: "warning",
        issue: "Question 8 (slider). Contrast too low but requires a numeric input on implementation.",
        wcag: "1.4.3",
        auditor: "Manual"
      },
      {
        type: "warning",
        issue: "Question 10 (Sort order) when using keyboard controls. Choosing an identical value to another select input in the set of choices removes that value. (i.e. setting select #3 to '2' when select #1 is '2' results in #1 being set to blank.) Aria is used to alert the user to another item being de-selected but does not provide sufficient context to enable a user to sort items. Suggest not using this question type if it can be avoided.",
        wcag: "",
        auditor: "VoiceOver"
      }
    ]
  }
}
