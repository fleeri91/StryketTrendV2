import '@styles/globals.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    order: [
      '1. Documentations',
      ['1 - Introduction', '2 - Convenctions'],
      '2. Theme',
      ['Colors', 'Typography'],
      '3. Components',
      ['UI', 'Functional'],
      '4. Layouts',
      '5. Pages',
    ],
  },
}
