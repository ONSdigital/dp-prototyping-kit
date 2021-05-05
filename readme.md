# Digital Publishing Prototyping Kit

This prototyping kit is based on [11ty](https://www.11ty.dev/), a nodejs based static site generator.

## Requirements

- Node 14 (it may work with older versions though)
- NPM (or Yarn if you prefer)

## Getting started

- clone the repo (`git clone git@github.com:ONSdigital/dp-prototyping-kit.git`) or use a Git app of your choice, eg. GitHub Desktop
- install with `npm`
- `npm run dev` to run the development server
- open `http://localhost:8080` in your browser

## Notes

- the Area Profiles prototypes contain a large amount of data and will build thousands of pages as a result, making build times slow. For this reason, this repo doesn't contain that data and it needs to be manually built first using one of the following commands:

-- `npm run fetch:geo` to fetch the data from the [Linked Data API](http://statistics.data.gov.uk/home)
-- `npm run build:geo` to build pages for England and Wales
-- `npm run build:geo -- --partial` to build the pages for just Wales (much quicker)

## License

Copyright ©‎ 2020, Office for National Statistics (https://www.ons.gov.uk)

Released under MIT license, see [LICENSE](LICENSE.md) for details.
