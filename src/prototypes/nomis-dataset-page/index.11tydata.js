module.exports = {
  eleventyComputed: {
    breadcrumbs: [
      {
        title: "Home",
        href: "/"
      },
      {
        title: "Census 2011",
        href: "/"
      },
      {
        title: "Datasets & tables",
        href: ""
      }
    ],
    nomisapi:
    {
      context: "https://cdn.ons.gov.uk/assets/json-ld/context.json",
      contacts: {
          email: "support@nomisweb.co.uk",
          name: "Nomis",
          telephone: "+44(0) 191 3342680"
        },
      description: "This table provides information that classifies households by the presence of dependent children, adults not in employment and people with a long-term health problem or disability. Information is provided for all households in England and Wales as at census day, 27 March 2011.",
      distribution: [
        "json"
      ],
      keywords: [
        "Adult",
        "Dependent child",
        "Not in employment",
        "Household",
        "Long-term health problem or disability",
        "Disability"
      ],
      license: "Open Government Licence v3.0",
      links: {
        self: {
          "href": "https://api.develop.onsdigital.co.uk/v1/datasets/NM_606_1/editions/2011/versions/1/metadata"
        },
        version: {
          "href": "https://api.develop.onsdigital.co.uk/v1/datasets/NM_606_1/editions/2011/versions/1",
          "id": "1"
        },
        website_version: {
          "href": "https://api.develop.onsdigital.co.uk/v1/datasets/NM_606_1/editions/2011/versions/1"
        }
      },
      national_statistic: false,
      next_release: "To Be Confirmed",
      release_date: "2013-01-30 09:30:00 +0000 UTC",
      release_frequency: "Decennially",
      title: "KS106EW - Adults not in employment and dependent children and persons with long-term health problems or disability for all households",
      unit_of_measure: "Households",
      usage_notes: 
        {
          note: "<p class=\"text-base\">In order to protect against disclosure of personal information from the 2011 Census, there has been swapping of records in the Census database between different geographic areas, and so some counts will be affected. In the main, the greatest effects will be at the lowest level geographies, since the record swapping is targeted towards those households with unusual characteristics in small areas.</p><p class=\"text-base\">More details on the ONS Census disclosure control strategy may be found on the <a href=\"http://www.ons.gov.uk/ons/guide-method/census/2011/census-data/2011-census-prospectus/new-developments-for-2011-census-results/statistical-disclosure-control/index.html\">Statistical Disclosure Control</a> page on the ONS web site.</p>",
          title: "Statistical Disclosure Control"
        }
    }
  }
}
