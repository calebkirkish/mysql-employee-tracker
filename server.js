'use strict';

const inquirer = require('inquirer');
const logo = require('asciiart-logo');
const prompts = require('./prompts');
const db = require('./db');
require('console.table');


async function init() {
const logoTitle = logo({name: 'Star Wars'}).render();
    console.log(logoTitle);

    mainPrompt();
};

async function mainPrompt() {
    const choice = await inquirer.prompt(prompts.mainPrompt);

    switch (choice) {
        case 'view_characters':
            return viewAllCharacters();
        case 'view_roles':
            return viewRoles();
        case 'view_allegiance':
            return viewRoles();
        case "add_role":
            return addRole();
        case 'add_character':
            return addCharacter();
        case 'quit':
            return quit();
        default:
            return quit();
    };
}

async function viewAllCharacters() {
    
    const characters = await db.viewAllCharacters();

    console.log('\n');
    console.table(characters);

    mainPrompt();
};

async function viewRoles() {

    const roles = await db.viewRoles();

    console.log('\n');
    console.table(roles);

    mainPrompt();
};

async function viewAllegiance() {
    const allegiances = await db.viewAllegiance();

    console.log('\n');
    console.table(allegiances);
}

async function addRole() {

    const allegiance = await db.viewAllegiance();

    const allegianceChoice = allegiance.map(({id, name}) =>({
        name: name,
        value: id
    }));

    const role = await inquirer.prompt([
        {
            type: 'input',
            name: 'role_name',
            message: 'Name the role'
        },
        {
            type: 'input',
            name: 'midicount',
            message: 'What is the Midichlorian count?'
        },
        {
            type: 'list',
            name: 'allegiance_id',
            message: 'Dark side or Light side',
            choices: allegianceChoice
        }
    ]);

    await db.createRole(role);

    console.log(`Added ${role.role_name} to the database`)

    mainPrompt();
};

async function addCharacter() {

    const roles = await db.viewRoles();
    const characters = await db.viewAllCharacters();

    const character = await inquirer.prompt(prompts.addCharacter)

    const roleChoice = roles.map(({id, Role}) => ({
        name: Role,
        value: id
    }));

    const {roleId} = await inquirer.prompt({
        type: 'list',
        name: 'role_name',
        message: 'Select the role for the character',
        choices: roleChoice
    })

    const {forceSensitive} = await inquirer.prompt({
        type: 'confirm',
        name: 'force_sensitive',
        message: 'is this character force sensitive?'
    })

    characters.role_id = roleId;
    characters.force_sensitive = forceSensitive;

    await db.createCharacter(character)
    console.log(
        `The force is strong with ${characters.name}`
    )

    mainPrompt();
};

async function quit() {

    console.log('May the force be with you!');
    process.exit();
};

init();