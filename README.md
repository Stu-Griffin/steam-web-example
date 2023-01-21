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


**NOTE**
Since programm uses a free version of the API, there are restrictions on the number of requests per minute and month
