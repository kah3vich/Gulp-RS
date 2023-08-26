<div align="center">
   <a href="https://github.com/kah3vich/Gulp-RS">
        <br />
        <img src="https://raw.githubusercontent.com/kah3vich/Gulp-RS/master/assets/svg/logo.svg" alt="logo" width="256">
        <br />
        <br />
        <img src="https://svg-readme.vercel.app/readme/svg?type=title&content=GulpRS" width="100%" height="50" alt="title" />
        <br />
    </a>
</div>

<br />

<img src="https://svg-readme.vercel.app/readme/svg?type=custom&content=🔥||Description:&size=25&align=left" alt="script" width="100%" height="30" />

<br />

One of the current and developing assemblies for Gulp. With support for current versions Gulp 4 and Webpack 5. The main idea of the assembly is to simplify and speed up the layout process. For this, a flow was implemented:

1. Full generation custom components and font files.

2. The assemblies use the architecture of components and for them scripts were released for quickly creating, connecting to certain paths in the architecture and deleting a component.

3. Optimization of assembly processing, the main load and data processing falls on the project build. Thanks to this, the start of the project is carried out an order of magnitude quickly.

4. Simplified architecture of the assembly itself Gulp . Thanks to which you yourself can supplement or customize the assembly according to your requirements.

<br />

<img src="https://svg-readme.vercel.app/readme/svg?type=custom&content=💡||Repository:&size=25&align=left" alt="script" width="100%" height="30" />

### Clone repository:

```bash
git clone https://github.com/kah3vich/Gulp-RS.git -b [branch]
```

### Branch's:

> ### master - informative thread for general acquaintance with the project.
>
> ### set - assembly only, no extras.
>
> ### font - various fonts for sharing.
>
> ### refs - examples and blanks.
>
> ### package - custom build package ( beta ).

<br />

<img src="https://svg-readme.vercel.app/readme/svg?type=custom&content=🛠️||Install:&size=25&align=left" alt="script" width="100%" height="30" />

### Install base packages:

```bash
npm i -g gulp gulp-cli webpack webpack-cli; yarn
```

<br />

<img src="https://svg-readme.vercel.app/readme/svg?type=custom&content=🚀||Scripts:&size=25&align=left" alt="script" width="100%" height="30" />

### Install dependencies:

```bash
yarn
```

### Start dev mode:

```bash
yarn start
```

### Build project:

```bash
yarn build
```

### Build project in ZIP:

```bash
yarn build:zip
```

### Component create:

```bash
yarn component:create [name] [path]
```

### Component remove:

```bash
yarn component:remove [name] [path]
```

### Check lint:

```bash
yarn lint:script
```

### Check prettier:

```bash
yarn prettier:write
```

<br />

<img src="https://svg-readme.vercel.app/readme/svg?type=custom&content=📂||Files||Schema:&size=25&align=left" alt="script" width="100%" height="30" />

```sh
└── gulp-rs/
    |
    ├── .github/ - config file to upload to github
    |
    ├── .husky/ - precommit system
    |   └── pre-commit - configure scripts on commit
    |
    ├── custom/ - custom build functionality
    |   ├── command.js - script functions for the terminal
    |   ├── component.js - functions for working with components
    |   └── utils.js - various utils for working with custom functions
    |
    ├── gulp/ - gulp build folder
    |   ├── config/ - configuration data
    |   |   ├── constant.js - static data
    |   |   ├── path.js - paths for different sections in assemblies
    |   |   └── plugins.js - build plugin imports
    |   ├── tasks/ - basic functions to work gulp
    |   |   ├── favicon - create favicon
    |   |   ├── fonts - create style and formatted for fonts
    |   |   ├── html - convert to html
    |   |   ├── image - optimization image
    |   |   ├── reset - remove style font
    |   |   ├── script - processing and optimization javascript
    |   |   ├── scss - convert to css
    |   |   ├── server - start local server to work
    |   |   ├── svg - processing and optimization svg icon
    |   |   └── zip - build to zip archive
    ├── public/ - assembled project
    |   ├── css/ - collected files css style
    |   ├── fonts/ - collected files fonts
    |   ├── img/ - collected files images
    |   ├── js/ - collected files javascript
    |   ├── svg/ - collected files svg
    |   └── *.html - file page
    ├── src/ - main development folder
    |   ├── components/ - component folder
    |   |   ├── Header/ - component structure example
    |   |   |   ├── index.pug - main component file for html
    |   |   |   ├── mixin.pug - file for mixins of this component
    |   |   |   ├── script.js - script file for this component
    |   |   |   └── styles.scss - style file for this component
    |   ├── fonts/ - font folder
    |   |   └── FONT - each font has its own folder with a key name without spaces in the name
    |   ├── img/ - photo folder
    |   ├── import/ - connection folder
    |   |   └── index.pug - imports for html with cdn
    |   ├── js/ - folder for scripts ( javascript )
    |   |   └── app.js - main file script
    |   ├── layout/ - wrapper over pages or blocks
    |   |   └── default.pug - default layout
    |   ├── pages/ - folder for pages
    |   |   └── index.pug - main file page
    |   ├── scss/ - style folder
    |   |   ├── fonts.scss - auto-generated stylesheet for fonts
    |   |   ├── mixin.scss - global file for style mixins
    |   |   ├── style.scss - global style file
    |   |   └── variable.scss - variable for styles
    |   └── svg/ - folder for svg icon
    ├── .browserslistrc - config file for server gulp
    ├── .csscomb.json - config file for csscomb css
    ├── .editorconfig - config file for editconfig css
    ├── .eslintigrone - setting for ignored refactoring and code review files
    ├── .eslint - refactoring and code review
    ├── .gitignore - ignored files for git
    ├── .prettierignore - setting for ignored format files
    ├── .prettier - code formatting
    ├── .yarnrc.yml - package manager setup yarn
    ├── babel.config.json - import package babel for webpack
    ├── gulpfile.js - the main assembly file, running and processing all logic
    ├── jsconfig.json - config file for javascript
    ├── license - base license
    ├── package.json - info packages
    ├── readme.md - description project
    ├── version.json - temporary assembly version, needed to avoid the cache
    └── webpack.config.js - configuration file for working with scripts in gulp
```
