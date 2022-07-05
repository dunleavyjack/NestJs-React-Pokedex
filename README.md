# Nest.js + React 'Who's That Pokemon?'

This project was designed and built as part of a technical assessment for a full-stack developer interview. The objective was to display a paginated view of pokemon using the **PokeAPI** with requests handled by a NestJs backend.

![alt text](src/images/demo.gif)

The instructions were to first display each pokemon's name and image, with further information displayed when a user clicks on that pokemon. With these contraints in mind, I decided it would be more fun to make a simple game out of it, like the "Who's that Pokemon?" segment from the Pokemon TV series I watched as a kid.

Since the first objective was to display the pokemon's name and image, I additionally scrambled each name (to provide a 'hint' to the user) and reduced the images' brightness to 0 to create a silhouette. When a user clicks the pokemon card, it flips to reveal the unscrambled name, a colored image, and additional information about that Pokemon.

In addition to Nest.js and React, I also used **Material UI** to build this project in addition to a **React-Flippy** for the card animation.

## Running the Nest.js server

In the backend directory, you can run:

### `npm run start:dev`

Runs the server in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view the server in the browser.

## Running the React front end UI

In the root directory, after running the server, you can run:

### `npm start`

Runs the server in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view the server in the browser.
