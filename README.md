# Color Flood: From Jackson Pollock to Yves Klein

[LiveDemo!](https://ttillotson.github.io/ColorFlood/)

### Background and Overview

Color Flood is an perfect-information strategy game where the player's goal is to flood the board with a single color. Starting from the top left corner, the player clicks tiles on the board and changes the current color of the "flood" as it infects the map. The fewer the turns the better!

### Demo

![flood it demo](https://user-images.githubusercontent.com/29738420/40338613-ee8f80e4-5d2a-11e8-9b9a-af546e6f8409.gif)


### Functionality and MVPs

Users will be able to:

- [ ] Start and restart games

- [ ] Track the number of moves

- [ ] Click handler on every tile for color change

- [ ] Select how many colors to use

Games will be randomly seeded.

### Wireframes

This single-page app will consist of a grid map, clickable tiles and a counter tracking moves made.

![App Wireframe](https://user-images.githubusercontent.com/29738420/40338412-c82d8398-5d29-11e8-9979-ac5613ac334a.png)

### Architecture and Technologies

The project utilizes:

- Javascript: handles the core logic, DOM setup and manipulation

- Webpack simplify script deployment

### Project Timeline

__Weekend:__

- Research different games/applications

- Research similar games and implementations

__Monday Day 1:__ Build out necessary files: `webpack.config.js`, `package.json`, and `index.html`.
Goals:

- [ ] Set Up Files

- [ ] Build framework for grid

- [ ] Build color array

__Tuesday Day 2:__ Research Logic for converting tiles and set up selectable tiles at App base.

- [ ] Build the board creation file.

- [ ] Create and test conversion functions

- [ ] Have rough template done (playing grid, color selectors, counter)

__Wednesday Day 3:__ Continue working on conversion logic and expand the tests to a complete grid.

- [ ] Finalize flooding logic

- [ ] Fully implement turn tracking

- [ ] Complete app skeleton for styling

__Thursday Day 4:__ Complete working draft and finalize test runs. Style webpage and grid.

- [ ] Finalize the template

- [ ] Test entire functionality:

    - Game completion

    - Game Reset

- [ ] Fully stylize the canvas

__Friday Day 5:__ Submit Project

## Bonus Features

- [ ] User Submitted Colors

- [ ] Fastest Completion

- [ ] Wins/Losses tracking

- [ ] Adjustable Grid Sizes