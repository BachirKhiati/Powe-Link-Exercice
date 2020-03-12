## Power Link

**Write a program that solves the most suitable (with most power) link station for a device at given point [x,y].**

**Check "Docs" folder for more info.**

## Project details:

        - Setup Prettier/Eslint strict linter rules.
        - Project uses "react-vis" to generate Graphic Visualisations.
        - Graph data is created on mount from the default inputs station/devices given in the task (arrays).
        - Graph data is used for both the visualisation and calcualting power links.
        - Cover 3 cases for the links:
            * case 1: one station with higher power value.
            * case 2 : 2 stations with the same power value and not equaal zero.
            * case 3 : no links found,
        - Responsive UI :
            * Graph resize based on the current width with min-max value pre-defined.
            * Animation on resizing.
            * Small resolution support.
        - Theme colors are based on the NordCloud logo.
        - Unit test.
        - Pre-commit hook:
            * Prettier check and format the files that are not matching the strict rules.
            * Run project tests.
            * Commit the changes if no errors found.
        - Auto deployment to AWS amplify on merging to the master branch.

## Link

https://master.d10g8zebcw0aij.amplifyapp.com/

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn lint`

format project based on prettier/Eslint rules.

### `yarn precommit`

test husky pre-commit hook.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
