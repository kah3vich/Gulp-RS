import fs, { readdirSync, lstatSync } from 'fs';
import { join } from 'path';


export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const createComponentDirWithFiles = (nameComponent, pathForComponent) => {
    const schema = [
        {
            name: 'js',
            content: `export const ${nameComponent} = () => {};`,
            path: pathForComponent + '/script.js',
        },
        {
            name: 'pug',
            content: `section.${nameComponent.toLowerCase()}`,
            path: pathForComponent + '/index.pug',
        },
        {
            name: 'pug-mixin',
            content: '',
            path: pathForComponent + '/mixin.pug',
        },
        {
            name: 'scss',
            content: '//| 💧 Styles \n\n.' + nameComponent.toLowerCase() + ' {\n}\n\n//| 🌂 Mixins\n\n//| ☔ Medias',
            path: pathForComponent + '/styles.scss',
        }
    ]

    schema.forEach((el) => {
        fs.writeFile(el.path, el.content, () => {}); 
    })
}

export const getAllDirectories = (dirPath, arrayOfDirectories = []) => {
	const files = readdirSync(dirPath);

	arrayOfDirectories.push(dirPath);

	files.forEach(file => {
		if (lstatSync(join(dirPath, file)).isDirectory()) {
			arrayOfDirectories = getAllDirectories(join(dirPath, file), arrayOfDirectories);
		}
	});

	return arrayOfDirectories;
};