import fs from 'fs';
import rimraf from 'rimraf'

import {
    capitalizeFirstLetter,
    createComponentDirWithFiles,
    getAllDirectories,
} from './function.js';

export const createComponent = (name, path = './') => {
    if (!name) {
        console.log('❌ Name component is empty')
        return
    }

    const rootDir = './src/components';
    const pathForComponent = path.replace('./', '/').map((p) => {
        if (!(p.split('').at(-1) === '/')) {
            return `${el}/`
        }
        return el
    })
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

    createComponentDirWithFiles(nameComponent, resultPathForComponent)

    console.log(`✅ Done - Create component to "${nameComponent}"`);
}

export const removeComponent = (name) => {
    if (!name) {
        console.log('❌ Name component is empty')
        return
    }

    const arrDirection = getAllDirectories('./src/components')
    let path = ''

    arrDirection.forEach((dir) => {
        if (dir.includes(name)) {
            path = dir
        }
    })

    rimraf.sync('./' + path);
}