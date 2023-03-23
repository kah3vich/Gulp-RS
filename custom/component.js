import fs from 'fs';

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const createComponent = (name, path) => {
    if (!name) {
        console.log('❌ Name component is empty')
        return
    }

    if (!path) {
        console.log('❌ Path component is empty')
        return
    }

    const rootDir = './src/components';
    const pathForComponent = path.replace('./', '/')
    const nameComponent = capitalizeFirstLetter(name)

    if (pathForComponent.length > 2) {
        if (!fs.existsSync(rootDir + pathForComponent)){
            fs.mkdirSync(rootDir + pathForComponent);
        }
    }

    const resultPathForComponent = rootDir + pathForComponent + nameComponent

    if (!fs.existsSync(resultPathForComponent)){
        fs.mkdirSync(resultPathForComponent);
    }

    const filePathJs = resultPathForComponent + '/script.js'
    const fileContentJs = `export const ${nameComponent} = () => {};`;

    fs.writeFile(filePathJs, fileContentJs, () => {}); 
    
    const filePathPug = resultPathForComponent + '/index.pug'
    const fileContentPug = `section.${nameComponent.toLowerCase()}`;

    fs.writeFile(filePathPug, fileContentPug, () => {});

    const filePathPugMixin = resultPathForComponent + '/mixin.pug'
    const fileContentPugMixin = ``;

    fs.writeFile(filePathPugMixin, fileContentPugMixin, () => {}); 

    const filePathSCSS = resultPathForComponent + '/styles.scss'
    const fileContentSCSS = '//| 💧 Styles \n\n.' + nameComponent.toLowerCase() + ' {\n}\n\n//| 🌂 Mixins\n\n//| ☔ Medias';

    fs.writeFile(filePathSCSS, fileContentSCSS, () => {}); 

    console.log(`✅ Done - Create component to "${nameComponent}"`);
}