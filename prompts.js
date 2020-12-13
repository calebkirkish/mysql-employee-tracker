module.exports = {

    mainPrompt: [
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                {
                    name: 'View all characters',
                    value: 'view_characters'
                },
                {
                    name: 'View all roles',
                    value: 'view_roles'
                },
                {
                    name: 'View allegiances',
                    value: 'view_allegiance'
                },
                {
                    name: 'Add role',
                    value: 'add_role'
                },
                {
                    name: 'Add character',
                    value: 'add_character'
                },
                {
                    name: 'Quit',
                    value: 'quit'
                }
            ]
        }
    ],
    
    addCharacter: [
        {
            type: 'input',
            name: 'name',
            message: 'What is the characters name?'
        }
    ]
    
}