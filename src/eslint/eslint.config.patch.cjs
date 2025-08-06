// feat: Allows an ESLint config package to provide plugin dependencies, avoiding the problem where hundreds of projects in a monorepo need to copy+paste the same "devDependencies" in every package.json file.
// @ts-expect-error: no type definition for @rushstack/eslint-patch
require('@rushstack/eslint-patch/modern-module-resolution');
// root: true and parserOptions.project are required in child eslint settings
