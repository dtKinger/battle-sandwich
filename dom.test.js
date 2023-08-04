import dom from "./src/dom"

test('Test Jest by testing the DOM', () => {
  expect(colorOddRows().length.toBe(100))
})