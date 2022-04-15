# Subprocessor list

## First Deliverable

This project addresses [Trustpage's Code Challenge](https://trustpage.notion.site/Trustpage-Senior-Full-Stack-Software-Engineer-Technical-Challenge-d01e8acd4a4d496c8c1ae8fadd59ba89).

The first deliverable consists of a Next.js application that renders a subprocessor
list based on data provided. It does not involve a persistent back-end. It only uses
React's Context API for data storage.

The decision to use libraries included in this project (Formik, Yup, react-data-table-component,
Tailwind, twin.macro, etc.) were taken based on familiarity with them & knowledge of what can be
accomplished by them.

There were some minor issues related to some fields not properly adjusting the column size, when
the information exceeds the base width of the column. Worked around it by overriding the base
`minWidth` of cells. Might've looked for a more elegant solution (something using `max-content` maybe?).

Another decision that involved a bit more in-depth thought was how to handle the modals. Here are
some of the factors that I took into consideration:

-   Managing it globally?
-   One base modal with flexible content or multiple modals?
-   Handling which modal to display in the most compact way.

Other than that, there weren't much complex decisions that I had to take.

### Getting started

### _Install_

Run `yarn` from the project root.

### _Frontend_

Start the Frontend Next.js server: `yarn dev`

### Using the App

The application can be accessed through http://localhost:35001

---

## Second deliverable

Contents for a data model can be found in [this document](./docs/data-model.md)
