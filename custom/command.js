import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { createComponent, removeComponent } from './component.js';

yargs(hideBin(process.argv))
    .command({
        command: 'component-create',
        describe: 'Create component with all files and code syntax.',
        builder: {
            name: {
                describe: 'Name component.',
                demandOption: false,
                type: 'string',
            },
            path: {
                describe: 'Directory path for the new component.',
                demandOption: false,
                type: 'string',
            },
        },
        handler(argv) {
            createComponent(argv.name, argv.path)
        },
    })
    .command({
        command: 'component-remove',
        describe: 'Remove component.',
        builder: {
            name: {
                describe: 'Name component for remove.',
                demandOption: false,
                type: 'string',
            },
        },
        handler(argv) {
            removeComponent(argv.name)
        },
    })
    .parse();
