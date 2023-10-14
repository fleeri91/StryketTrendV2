module.exports = (plop) => {
  /** Constants */
  const COMPONENT_FOLDER_UI = 'app/components/ui'
  const COMPONENT_FOLDER_FUNCTIONAL = 'app/components'
  const PAGE_FOLDER = 'app/(pages)/'
  const HOOK_FOLDER = 'app/hooks'

  /**
   * Component generator
   */
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Which type of component would you like to create?',
        choices: ['UI', 'Functional'],
      },
      {
        type: 'input',
        name: 'name',
        message: "What's the name of your component?",
      },
    ],
    actions: (data) => {
      let actions = []

      if (data.type === 'UI') {
        folder = `${COMPONENT_FOLDER_UI}`
      } else if (data.type === 'Functional') {
        folder = `${COMPONENT_FOLDER_FUNCTIONAL}`
      }

      actions.push({
        type: 'add',
        path: `${folder}/{{properCase name}}/{{properCase name}}.tsx`,
        templateFile: 'plop-templates/component.hbs',
      })
      actions.push({
        type: 'add',
        path: `${folder}/{{properCase name}}/{{properCase name}}.test.tsx`,
        templateFile: 'plop-templates/test.hbs',
      })
      actions.push({
        type: 'add',
        path: `${folder}/{{properCase name}}/index.ts`,
        templateFile: 'plop-templates/index.hbs',
      })
      actions.push({
        type: 'add',
        path: `${folder}/{{properCase name}}/{{properCase name}}.stories.tsx`,
        templateFile: 'plop-templates/stories.hbs',
      })
      actions.push('--> Your new component was created!')
      return actions
    },
  })

  /**
   * Page generator
   */
  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What's the name of your page?",
      },
    ],
    actions: () => {
      let actions = []
      actions.push({
        type: 'add',
        path: `${PAGE_FOLDER}/{{lowerCase name}}/page.tsx`,
        templateFile: 'plop-templates/page.hbs',
      })
      actions.push({
        type: 'add',
        path: `${PAGE_FOLDER}/{{lowerCase name}}/layout.tsx`,
        templateFile: 'plop-templates/layout.hbs',
      })
      actions.push('--> Your new page was created!')
      return actions
    },
  })

  /**
   * Hook generator
   */
  plop.setGenerator('hook', {
    description: 'Create a hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What's the name of your hook?",
      },
    ],
    actions: () => {
      let actions = []
      actions.push({
        type: 'add',
        path: `${HOOK_FOLDER}/{{camelCase name}}.ts`,
        templateFile: 'plop-templates/hook.hbs',
      })
      actions.push({
        type: 'append',
        path: `${HOOK_FOLDER}/index.ts`,
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import { {{camelCase name}} } from './{{camelCase name}}';`,
      })
      actions.push({
        type: 'append',
        path: `${HOOK_FOLDER}/index.ts`,
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{camelCase name}},`,
      })
      actions.push('--> Your new hook was created and added to the hooks-index!')
      return actions
    },
  })
}
