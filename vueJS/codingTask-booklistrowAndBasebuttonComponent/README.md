# Create a BookListRow and BaseButton Component

In this task we will slice our BookList component into smaller chunks.

## Solve the following tasks:

- [x] Extend the table head with a column called action
  - [x] Use the css class for styling `th.table-item__table-head--actions`
  - [x] Add also an empty column inside of the table body.
- [x] Create a `BookListRow` component
  - [x] Split up the current BookList Component
  - [x] Move `.table-item__table td`styling to `BookListRow` component.
  - [x] Add a prop title and implement it into the template.
  - [x] Add a prop isbn and implement it into the template.
  - [x] Use the `BookListRow` inside of the `BookList` component.
- [x] Create a `BaseButton` component
  - [x] Use the styling from `src/BaseButton/styles.css`
  - [x] Add a required prop `text` to display a text inside the button.
    - [x] Implement the prop inside the template.
  - [x] Add a prop variant
    - [x] Allows only two values primary + secondary
    - [x] default value is primary.
    - [x] Implement the prop inside the template.
      - [x] button should have class `bg--primary` or `bg--secondary`.
  - [x] Use the `BaseButton` Component inside of the `BookListRow` component.

## Sample Solution

https://codesandbox.io/s/gallant-merkle-n2mk81
