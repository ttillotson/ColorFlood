# Color Flood: From Jackson Pollock to Yves Klein

[LiveDemo!](https://ttillotson.github.io/ColorFlood/)

### Background and Overview

Color Flood is an perfect-information, grid-based, strategy game. A mouthful I know, but the user's objective is to convert the entire grid to a single color by clicking tiles on the board and "flooding" the map from the top left tile. The fewer turns the better!

### Functionality and MVPs

Users will be able to:

- [ ] Start and restart games

- [ ] Select colors from the bottom to influence the grid-map

- [ ] Track the number of moves

- [ ] Select how many colors to use

Games will be randomly seeded.

### Demo

![flood it demo](https://user-images.githubusercontent.com/29738420/39071719-fd0e5b64-449c-11e8-9a4f-dc497d7ff838.gif)


### Wireframes

This single-page app will consist of a grid map, clickable tiles and a counter tracking moves made.

![App Wireframe](https://user-images.githubusercontent.com/29738420/38792381-96e6509c-4101-11e8-89e0-066bee8798eb.png)

### Architecture and Technologies

The project will utilize:

- Vanilla Javascript: handling the core logic and DOM manipulation

- Webpack simplify script deployment

This project may feature:

- `HTML5 Canvas`

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

- [ ] Required Turns for Completion

- [ ] High Scores

- [ ] Wins/Losses tracking