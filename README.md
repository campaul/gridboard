# gridboard

**gridboard** is a tool for easily creating dashboards using a grid based layout.

## Usage
After including `jQuery` and `gridboard.js`, you can place a new board with one line of JavaScript. The following code creates a board that displays Reddit and places it on a 6x6 grid spanning from tile (0, 0) to tile (6, 3).

``` javascript
gridboard('http://www.reddit.com').grid(6, 6).place(0, 0, 6, 3);
```