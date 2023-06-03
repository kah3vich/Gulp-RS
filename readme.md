<!-- https://kah3vich.github.io/Gulp-RS/public/index.html

<div id="script">

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

### ESLint script fix:

```bash
yarn lint:script
```

### Prettier code write:

```bash
yarn prettier:write
```

### Create component:

```bash
yarn component:create <Name Component> <Path from src/component/>
```

### Create remove:

```bash
yarn component:remove <Name Component> <Path from src/component/>
```

## Structure

```sh
└── help/                            # Main folder
    |                                # -
    ├── games/                       # Games: various games and their settings
    |   ├── game/                    # game main folder
    |   |   ├── config/              # config or game settings
    |   |   ├── readme.md            # information file for this section
    |   ├── readme.md                # information file for this section
    |                                # -

.github - config file to upload to github
.husky - precommit system
    pre-commit - configure scripts on commit
custom - custom build functionality
    command.js - script functions for the terminal
    component.js - functions for working with components
    function.js - various functions for working with custom functions
gulp - gulp build folder
    config - configuration data
        constant.js - static data
        path.js - paths for different sections in assemblies
        plugins.js - build plugin imports
    tasks - basic functions to work gulp
        favicon - create favicon
        fonts - create style and formatted for fonts
        html - convert to html
        image - optimization image
        reset - remove style font
        script - processing and optimization javascript
        scss - convert to css
        server - start local server to work
        svg - processing and optimization svg icon
        zip - build to zip archive
public - assembled project
    css - collected files css style
    fonts - collected files fonts
    img - collected files images
    js - collected files javascript
    svg - collected files svg
    *.html - file page
src - main development folder
    components - component folder
        Header - component structure example
            index.pug - main component file for html
            mixin.pug - file for mixins of this component
            script.js - script file for this component
            styles.scss - style file for this component
    fonts - font folder
        FONT - each font has its own folder with a key name without spaces in the name
    img - photo folder
    import - connection folder
        index.pug - imports for html with cdn
    js - folder for scripts ( javascript )
        app.js - main file script
    layout - wrapper over pages or blocks
        default.pug - default layout
    pages - folder for pages
        index.pug - main file page
    scss - style folder
        fonts.scss - auto-generated stylesheet for fonts
        mixin.scss - global file for style mixins
        style.scss - global style file
        variable.scss - variable for styles
    svg - folder for svg icon
.browserslistrc - config file for server gulp
.csscomb.json - config file for csscomb css
.editorconfig - config file for editconfig css
.eslintigrone - setting for ignored refactoring and code review files
.eslint - refactoring and code review
.gitignore - ignored files for git
.prettierignore - setting for ignored format files
.prettier - code formatting
.yarnrc.yml - package manager setup yarn
babel.config.json - import package babel for webpack
gulpfile.js - the main assembly file, running and processing all logic
jsconfig.json - config file for javascript
license - base license
package.json - info packages
readme.md - description project
version.json - temporary assembly version, needed to avoid the cache
webpack.config.js - configuration file for working with scripts in gulp
```

🔥 description 🔥

🛠️ install 🛠️

⌨️ command ⌨️

📂 files schema 📂

💡 more info 💡 -->
