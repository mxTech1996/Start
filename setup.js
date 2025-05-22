const fs = require('fs');

async function setup() {
    const inquirer = await import('inquirer');

    const questions = [
        {
            type: 'input',
            name: 'projectName',
            message: 'Nombre del proyecto:'
        },
        {
            type: 'input',
            name: 'author',
            message: 'Autor:'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Descripción del proyecto:'
        },
        {
            type: 'input',
            name: 'pageTitle',
            message: 'Título de la página:'
        }
    ];

    const answers = await inquirer.prompt(questions);
    const { projectName, author, description, pageTitle } = answers;

    // Actualiza package.json
    const packageJsonPath = './package.json';
    if (fs.existsSync(packageJsonPath)) {
        let packageJson = fs.readFileSync(packageJsonPath, 'utf-8');
        packageJson = packageJson
            .replace(/"name": ".*",/, `"name": "${projectName}",`)
            .replace(/"author": ".*",/, `"author": "${author}",`)
            .replace(/"description": ".*",/, `"description": "${description}",`);
        fs.writeFileSync(packageJsonPath, packageJson, 'utf-8');
    }

    // Actualiza README.md
    const readmePath = './README.md';
    if (fs.existsSync(readmePath)) {
        let readme = fs.readFileSync(readmePath, 'utf-8');
        readme = readme
            .replace(/# .*\n/, `# ${projectName}\n`)
            .replace(/Autor: .*\n/, `Autor: ${author}\n`)
            .replace(/Descripción: .*\n/, `Descripción: ${description}\n`);
        fs.writeFileSync(readmePath, readme, 'utf-8');
    } import fs from 'fs';
    import inquirer from 'inquirer';

    const questions = [
        {
            type: 'input',
            name: 'projectName',
            message: 'Nombre del proyecto:'
        },
        {
            type: 'input',
            name: 'author',
            message: 'Autor:'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Descripción del proyecto:'
        },
        {
            type: 'input',
            name: 'pageTitle',
            message: 'Título de la página:'
        }
    ];

    inquirer.prompt(questions).then((answers) => {
        const { projectName, author, description, pageTitle } = answers;

        // Actualiza package.json
        const packageJsonPath = './package.json';
        if (fs.existsSync(packageJsonPath)) {
            let packageJson = fs.readFileSync(packageJsonPath, 'utf-8');
            packageJson = packageJson
                .replace(/"name": ".*",/, `"name": "${projectName}",`)
                .replace(/"author": ".*",/, `"author": "${author}",`)
                .replace(/"description": ".*",/, `"description": "${description}",`);
            fs.writeFileSync(packageJsonPath, packageJson, 'utf-8');
        }

        // Actualiza README.md
        const readmePath = './README.md';
        if (fs.existsSync(readmePath)) {
            let readme = fs.readFileSync(readmePath, 'utf-8');
            readme = readme
                .replace(/# .*\n/, `# ${projectName}\n`)
                .replace(/Autor: .*\n/, `Autor: ${author}\n`)
                .replace(/Descripción: .*\n/, `Descripción: ${description}\n`);
            fs.writeFileSync(readmePath, readme, 'utf-8');
        }

        // Actualiza src/data/index.js
        const dataIndexPath = './src/data/index.js';
        if (fs.existsSync(dataIndexPath)) {
            let dataIndex = fs.readFileSync(dataIndexPath, 'utf-8');
            dataIndex = dataIndex.replace(/export const pageName = ".*";/, `export const pageName = "${pageTitle}";`);
            fs.writeFileSync(dataIndexPath, dataIndex, 'utf-8');
        }

        console.log('Configuración completada');
    });


    // Actualiza src/data/index.js
    const dataIndexPath = './src/data/index.js';
    if (fs.existsSync(dataIndexPath)) {
        let dataIndex = fs.readFileSync(dataIndexPath, 'utf-8');
        dataIndex = dataIndex.replace(/export const pageName = ".*";/, `export const pageName = "${pageTitle}";`);
        fs.writeFileSync(dataIndexPath, dataIndex, 'utf-8');
    }

    console.log('Configuración completada');
}

setup();
