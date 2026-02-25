# TS Config description

Visit [tsConfig](https://aka.ms/tsconfig.json) to read more about this file */

Below the object full description (compilerOptions, include and exclude).

> ‎ 
> 
> information display:
>
> - **paramName** • *type*
>   - description
>   - `<Automation selected option>`
> 
> ‎ 

- **compilerOptions** • *object*
  - > Projects options
  - **incremental** • *boolean*
    - Enable incremental compilation
  - **composite** • *boolean*
    - Enable constraints that allow a TypeScript project to be used with project references
  - **tsBuildInfoFile** • *string*
    - Specify the folder for .tsbuildinfo incremental compilation files
  - **disableSourceOfProjectReferenceRedirect** • *boolean*
    - Disable preferring source files instead of declaration files when referencing composite projects
  - **disableSolutionSearching** • *boolean*
    - Opt a project out of multi-project reference checking when editing
  - **disableReferencedProjectLoad** • *boolean*
    - Reduce the number of projects loaded automatically by TypeScript
  - > Language and Environment options
  - **lib** • *string[]* 
    - Specify a set of bundled library declaration files that describe the target runtime environment
    - `["ES2024"]`
  - **target** • *string* 
    - Set the JavaScript language version for emitted JavaScript and include compatible library declarations
    - `"es2024"`
  - **experimentalDecorators** • *boolean* 
    - Enable experimental support for TC39 stage 2 draft decorators
    - `true`
  - **jsx** • *string*
    - Specify what JSX code is generated.
  - **emitDecoratorMetadata** • *boolean*
    - Emit design-type metadata for decorated declarations in source files.
  - **jsxFactory** • *string*
    - Specify the JSX factory function used when targeting React JSX e.g.'React.createElement' or 'h'
  - **jsxFragmentFactory** • *string*
    - Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'
  - **jsxImportSource** • *string*
    - Specify module specifier used to import the JSX factory functions when using `jsx: react-jsx*`.`
  - **reactNamespace** • *string*
    - Specify the object invoked for `createElement`. This only applies when targeting `react` JSX emit.
  - **noLib** • *boolean*
    - Disable including any library files, including the default lib.d.ts.
  - **useDefineForClassFields** • *boolean*
    - Emit ECMAScript-standard-compliant class fields.
  - > Modules options
  - **module** • *string* 
    - Specify what module code is generated
    - `"CommonJS"`
  - **rootDir** • *string* 
    - Specify the root folder within your source files
    - `"./src"`
  - **typeRoots** • *string[]*
    - Specify multiple folders that act like `./node_modules/@types`
  - **resolveJsonModule** • *boolean* 
    - Enable importing .json files
    - `true`
  - **moduleResolution** • *string* 
    - Specify how TypeScript looks up a file from a given module specifier
    - `"node"`
  - **baseUrl** • *string* 
    - Specify the base directory to resolve non-relative module names
    - `"./"`
  - **paths** • *{ [key: string]: string[] }* 
    - Specify a set of entries that re-map imports to additional lookup locations
    - ```
      {
        "@T": [
          "src/@types"
        ],
        "@C/*": [
          "./src/_controllers/*"
        ],
        "@M/*": [
          "./src/_models/*"
        ],
        "@H/*": [
          "./src/_helpers/*"
        ],
        "@J/*" :[
          "src/_jest/*"
        ]
      }
      ```
  - **rootDirs** • *string[]*
    - Allow multiple folders to be treated as one when resolving modules
  - **types** • *string[]*
    - Specify type package names to be included without being referenced in a source file
  - **allowUmdGlobalAccess** • *boolean*
    - Allow accessing UMD globals from modules
  - **noResolve** • *boolean*
    - Disallow `import`s, `require`s or `<reference>`s from expanding the number of files TypeScript should add to a project
  - > JavaScript Support options
  - **allowJs** • *boolean*
    - Allow JavaScript files to be a part of your program. Use the `checkJS` option to get errors from these files
  - **checkJs** • *boolean*
    - Enable error reporting in type-checked JavaScript files
  - **maxNodeModuleJsDepth** • *number*
    - Specify the maximum folder depth used for checking JavaScript files from `node_modules`. Only applicable with `allowJs`
  - > Emit options
  - **outDir** • *string* 
    - Specify an output folder for all emitted files
    - `"./dist"`
  - **sourceMap** • *boolean* 
    - Create source map files for emitted JavaScript files
    - `true`
  - **removeComments** • *boolean* 
    - Disable emitting comments
    - `false`
  - **declaration** • *boolean* 
    - Generate .d.ts files from TypeScript and JavaScript files in your project
    - `true`
  - **declarationMap** • *boolean* 
    - Create sourcemaps for d.ts files
    - `true`
  - **emitDeclarationOnly** • *boolean*
    - Only output d.ts files and not JavaScript files
  - **noEmit** • *boolean*
    - Disable emitting files from a compilation
  - **importHelpers** • *boolean*
    - Allow importing helper functions from tslib once per project, instead of including them per-file
  - **importsNotUsedAsValues** • "remove"
    - Specify emit/checking behaviour for imports that are only used for types
  - **downlevelIteration** • *boolean*
    - Emit more compliant, but verbose and less performant JavaScript for iteration
  - **sourceRoot** • *string*
    - Specify the root path for debuggers to find the reference source code
  - **mapRoot** • *string*
    - Specify the location where debugger should locate map files instead of generated locations
  - **inlineSourceMap** • *boolean*
    - Include sourcemap files inside the emitted JavaScript
  - **inlineSources** • *boolean*
    - Include source code in the sourcemaps inside the emitted JavaScript
  - **emitBOM** • *boolean*
    - Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files
  - **newLine** • *string*
    - Set the newline character for emitting files
  - **stripInternal** • *boolean*
    - Disable emitting declarations that have `@internal` in their JSDoc comments
  - **noEmitHelpers** • *boolean*
    - Disable generating custom helper functions like `__extends` in compiled output
  - **noEmitOnError** • *boolean*
    - Disable emitting files if any type checking errors are reported
  - **preserveConstEnums** • *boolean*
    - Disable erasing `const enum` declarations in generated code
  - **declarationDir** • *string*
    - Specify the output directory for generated declaration files
  -  > Interop Constraints options
  - esModuleInterop • *boolean* 
    - Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility
    - `true`
  - allowSyntheticDefaultImports • *boolean* 
    - Allow 'import x from y' when a module doesn't have a default export
    - `true`
  - forceConsistentCasingInFileNames • *boolean* 
    - Ensure that casing is correct in imports
    - `true`
  - isolatedModules • *boolean*
    - Ensure that each file can be safely transpiled without relying on other imports
  - preserveSymlinks • *boolean*
    - Disable resolving symlinks to their realpath. This correlates to the same flag in node
  -  > Type Checking options
  - **strict** • *boolean* 
    - Enable all strict type-checking options
    - `true`
  - **strictNullChecks** • *boolean* 
    - When type checking, take into account `null` and `undefined`
    - `true`
  - **strictPropertyInitialization** • ** • false
    - Check for class properties that are declared but not set in the constructor
  - **noUnusedLocals** • *boolean* 
    - Enable error reporting when a local variables aren't read
    - `true`
  - **noUnusedParameters** • *boolean* 
    - Raise an error when a function parameter isn't read
    - `true`
  - **noImplicitReturns** • *boolean* 
    - Enable error reporting for codepaths that do not explicitly return in a function
    - `true`
  - **noImplicitAny** • *boolean*
    - Enable error reporting for expressions and declarations with an implied `any` type.
  - **strictFunctionTypes** • *boolean* 
    - When assigning functions, check to ensure parameters and the return values are subtype-compatible
    - `true`
  - **strictBindCallApply** • *boolean*
    - Check that the arguments for `bind`, `call`, and `apply` methods match the original function
  - **noImplicitThis** • *boolean*
    - Enable error reporting when `this` is given the type `any`
  - **useUnknownInCatchVariables** • *boolean*
    - Type catch clause variables as 'unknown' instead of 'any'
  - **alwaysStrict** • *boolean*
    - Ensure 'use strict' is always emitted
  - **exactOptionalPropertyTypes** • *boolean*
    - Interpret optional property types as written, rather than adding 'undefined'
  - **noFallthroughCasesInSwitch** • *boolean*
    - Enable error reporting for fallthrough cases in switch statements
  - **noUncheckedIndexedAccess** • *boolean*
    - Include 'undefined' in index signature results
  - **noImplicitOverride** • *boolean*
    - Ensure overriding members in derived classes are marked with an override modifier
  - **noPropertyAccessFromIndexSignature** • *boolean*
    - Enforces using indexed accessors for keys declared using an indexed type
  - **allowUnusedLabels** • *boolean*
    - Disable error reporting for unused labels
  - **allowUnreachableCode** • *boolean*
    - Disable error reporting for unreachable code
  - > Completeness options
  - **skipLibCheck** • *boolean* 
    - Skip type checking all .d.ts files
    - `true`
  - **skipDefaultLibCheck** • *boolean*
    - Skip type checking .d.ts files that are included with TypeScript
- **include** • *string[]*
  - Array of source files to be transpiled by TS
  - ```
    [
      "./src/*.ts",
      "./src/**/*.ts",
      "./src/**/**/*.ts",
      "./src/**/**/**/*.ts"
    ]
    ```
- **exclude** • *string[]*
  - Array of source files to be ignored by TS
  - ```
    [
      "node_modules",
      "dist"
    ]
    ```
