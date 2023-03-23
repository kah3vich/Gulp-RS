import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { createComponent } from './component.js';

yargs(hideBin(process.argv))
    .command({
        command: 'component-create',
        describe: 'Create component with all files and code syntax.',
        builder: {
            name: {
                describe: 'Name component.',
                demandOption: true,
                type: 'string',
            },
            path: {
                describe: 'Directory path for the new component.',
                demandOption: true,
                type: 'string',
            },
        },
        handler(argv) {
            createComponent(argv.name, argv.path)
        },
    })
    .parse();
