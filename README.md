# App details

## Technology stack: `React.JS`, `TypeScript`, `Eslint`, `Redux`, `Redux-toolkit`, `React-router`, `react-modal`, `react-dotenv`, `axios`.

## Used API: [Steam API](https://rapidapi.com/psimavel/api/steam2/).

## Result: [App was hosted on Vercel](https://steam-web-example-km2b4szq9-stu-griffin.vercel.app/).


# App tutorial

## Header

When you click on the Settings button, a modal window opens where you can sort the list of games (by Price and Publish Date, from Lower to bigger and vice versa).

When you click on the Search button, the program makes a get request to the server and gets 25 games.

While the user clicks on the Like list button, the program displays a list of all games the user liked. The list is stored in local storage.


## Main

Games are displayed in card with name, price, release date, game picture and button for saving and deleting to like list.

If the game has no appId, then instead of a button to save or delete the game from the like list, a ban icon appears.

If a game is in the like list, this is displayed (red heart icon) and a play icon appears, clicking on it takes the user to a page with information about the game


## Footer 

Buttons for pagination appear 3 in a row, they can be used to navigate between game lists, the buttons at the edges allow you to change the values of pagination buttons























# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
# Steam
