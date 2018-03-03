# todo-app

This is a simple single page app that allows you to add, edit and remove todo items.
You may also mark items as complete / incomplete.<br>

To set this app up locally:
 
 0. Run 'npm install' at the root level of the application.
 1. Run 'ember build' at the root level of the application.
 2. PostgreSQL is the DB used by the application. Find the 'todoDbDump' on the root level of the application.
 3. The application database name is assumed to be 'todos'. Follow the instructions found here: <br>https://www.postgresql.org/docs/8.1/static/backup.html#BACKUP-DUMP-RESTORE
    This will allow you to import the database schema. Alternatively, use PgAdmin to accomplish this task.
 4. You will need to modify the server_src/common/databaseConnection.js file to enter your connection settings.
 5. Run 'node server_src/server.js'
 6. Go to 'http://localhost:8080/#/todos'. You're done!
 
 There are further generalized instructions below that you probably won't need, but are left as a reference.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd todo-app`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
