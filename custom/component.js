import fs from 'fs';
import rimraf from 'rimraf';

import {
	capitalizeFirstLetter,
	createComponentDirWithFiles,
	getAllDirectories,
	logChalk,
	onCheckLastSymbol,
} from './function.js';

export const createComponent = (name, path = './') => {
	if (!name) {
		logChalk('Name component is empty', 'error');
		return;
	}

	const rootDir = './src/components';
	const pathForComponent = onCheckLastSymbol(path.replace('./', '/'), '/');
	const nameComponent = capitalizeFirstLetter(name);

	if (pathForComponent.length > 2) {
		if (!fs.existsSync(rootDir + pathForComponent)) {
			fs.mkdirSync(rootDir + pathForComponent);
		}
	}

	const resultPathForComponent = rootDir + pathForComponent + nameComponent;

	if (!fs.existsSync(resultPathForComponent)) {
		fs.mkdirSync(resultPathForComponent);
	}

	createComponentDirWithFiles(nameComponent, resultPathForComponent);

	logChalk(`Done - Create component to "${nameComponent}"`, 'accept');
};

export const removeComponent = name => {
	if (!name) {
		logChalk('Name component is empty', 'error');
		return;
	}

	const arrDirection = getAllDirectories('./src/components');
	let path = '';

	arrDirection.forEach(dir => {
		if (dir.includes(name)) {
			path = dir;
		}
	});

	rimraf.sync(`./${path}`);

	logChalk(`Done - Remove component to "${name}"`, 'accept');
};
