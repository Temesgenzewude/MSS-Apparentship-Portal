
Micro Sun and Solutions PLC Apparentship Learning Portal
Overview
The Micro Sun and Solutions PLC Apparentship Learning Portal is a web application that allows students to access useful course materials and learn them based on their tech stack of interest. It also enables students to apply for an apparentship position at Micro Sun and Solutions PLC.

This project is being developed by three teams: a backend team, an admin panel team, and a frontend team. Each team has its own specific tasks and responsibilities, but all teams must follow some basic guidelines to ensure that their work integrates smoothly with the work of the other teams.

Guidelines
Branching Strategy
We will be using the Git branching model called Gitflow. This model provides a clear separation of responsibilities between different branches and helps to keep the codebase organized.

The main branch will be considered the production-ready branch, and all new features, bug fixes, and other changes should be developed on feature branches derived from the main branch. Once a feature branch is complete, it will be merged back into the main branch through a pull request.

Branch Naming:
your-name.feature-name
  example: john.loginpage	
  
Branching Best Practices:
1. Branch off of the main branch
2. Keep branches small and focused (delete them after they’ve served their purpose)
3. Delete old branches


Workflow:
Clone the repository to your local machine.
Check out the main branch and pull the latest changes.
Create a new feature or bugfix branch based on the branching strategy mentioned above.
Make your changes and commit them to your branch.
Push your branch to the remote repository.
Create a pull request to merge your branch into the main branch.
Wait for feedback from the code review process.
Once your pull request is approved, merge your branch into the main branch.

Best Practices while making commites:
1. Commit frequently
2. Only stage what changes you’re confident with
3. Write descriptive commit messages
4. Use atomic commits (let it represent a single contained change or a single logical unit of work)
5. Use simple present tense
  Example : “Update Login Page”


Important: Avoid pushing your code directly to the main branch. If you do so, your code will be removed, and you will need to push it again to your branch. Instead, always work on your own branch.

Conventions:
1. Committing 
  Use simple present tense
    Example : “Update Login Page”

2. Creating a branch:
  The branch name should follow the pattern [your-name].[feature-name].
3. Creating a pull request
   Add a label when creating a pull request


Code Style
All code should follow a consistent code style to ensure readability and maintainability. Each team should decide on a code style that works best for them and document it in a style guide.

Conclusion
Following these guidelines will help ensure that our project is well-organized, easy to maintain, and that each team's work integrates smoothly with the work of the other teams.
