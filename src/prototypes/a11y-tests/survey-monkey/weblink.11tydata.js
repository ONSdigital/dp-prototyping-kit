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
    a11yintro: "Tested as iframe in the host page and as the frame src separately. Would require local 'modal' window to load this over the page content. (To audit 'weblink' separately: https://www.surveymonkey.co.uk/r/GGZKWH9). Weblink survey type could also be <a href=\"https://www.surveymonkey.co.uk/r/GGZKWH9\" target=\"_blank\">launched as a new window</a>.",
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
      },
      {
        type: "error",
        issue: "Input boxes have too low a contrast and no borders until focussed. Contrast measured at 1.25:1. WCAG 2.1 requires a contrast ratio of at least 3:1 for graphics and user interface components (such as form input borders). [<a href=\"https://webaim.org/resources/contrastchecker/?bcolor=FFFFFF&fcolor=E5E5E5\">Webaim</a>]",
        wcag: "1.4.3",
        auditor: "Manual contrast check."
      },
      {
        type: "warning",
        issue: "Inputs are not labelled with &lt;label&gt;. They are associated with a heading using aria-labelledby only. To improve compatibility with user agents that do not support ARIA, you can use aria-labelledby with the <label> element (using the for attribute). [<a href=\"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute\">MDN Web Docs</a>]",
        wcag: "1.3.1",
        auditor: "Manual"
      }
    ]
  }
}
