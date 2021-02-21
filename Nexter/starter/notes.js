/*
Description:: CSS Grid


Notes:: What are CSS Grids?

1. CSS Grid layout is a brand new module that brings a two-dimensional grid system to CSS for the first time. 
2. CSS Grid replaces float layout, using less, and more readable and logical CSS and HTML
3. CSS Grid works perfectly together with flexbox, which is best to handle one-dimensional components and loyouts
4. CSS Grid completly changes the wat thay we envision and build two dimensional layouts. 

Notes:: Terms: Column Axis and Row Axis. 

1. Grid Container: we set the display: grid and all the children are the grid items. 
2. Grid Items: children of the grid container. 
3. the axis in a Grid cannot be changed unlike in flexbox. Ther is the Column axis and the Row axis. 
4. Grid Line - lines that seperate the columsn and the rows. They are also automatically numbered for the columns and the rows. its No. of columns + 1 and No. of rows + 1.
5. Gutter - The space between the rows and the colums. the row gutter can be different from the column gutter. 
6. Grid Track/grid - The space between two grid lines is called a track, for both vertical(column) and horizontal(row).
the Area between two vertical and two horizontal grid lines is called  a grid area. A Grid cell has two adjacent column lines and row lines. 

*/

/*
Description:: Testing

Notes:: Properties.
  First setup Display: Grid. 
  grid-template-rows: 150px 150px; - this defines the height of the 2 rows. 
  grid-template-column: 150px 150px 150px - this defines the width of each column. We have 3 columns.

  grid-row-gap: 20px: Creates a gap of 30 px of  row line that is between two row lines
  grid-column-gap: 30px: Creates a gap of 30px of a column line that is  between two column lines
  grid-gap:30px; The gap will be the same for all rows and columns

*/

/*
Description:: Fractional Unit
Repeat allows us to setup a grid with minimal input.
grid-template-rows: repeat(2, 150px); We create 2 tracks here. 
Grid-template-column: repeat (3, 150px) 300px; The 4th column will have a width of 300px. We create 4 tracks here. 

Grid-template-column: repeat (3, 150px) 1fr; The 1fr represents a fraction of the available space in the container of the grid. 

Grid-template-column: repeat (3, 1fr); This will give us 3 equally spaced columns as each columns will share the available space. 

Grid-template-column: 1fr 3fr 1fr: 3 columns with widths in that ratio. 

Grid-template-column: 50% 3fr 1fr: 3 columns with widths in that ratio. the first column will have a width of 50% (500px) and the remaining 50% will be split in the 3:1 ratio. 375:125.

Fr in both columns and rows. 
*/

/*
Description:: positioning Grid Items

positoning: 
placed inside a CSS selector. 

grid-row-start: 2
grid-row-end: 3

grid-column-start:2
grid-column-end:3

this places the content inside a particular cell. 
easirer way:
grid-row: 2 / 3;
grid-column: 2 / 3;

This is the same as above. 

grid-area: 1 / 3 / 2 / 4; 
explanation: grid-start / column-start / row-end / column-end

*/

/*
Description:: Spanning grid items 

grid-row: 2 / 4; this will occupy two cells since the rows span two cell. 
grid-column: 2 / 4; this will occupy two cells since the column spans two cell. 

If some item/element gets moved out then a new row is created and an implicit Grid is created. 
In case there is any conflict between the grid allotment then the higher z-index will hide the lower z-index. i.e. We can have multiple grid items in the same cell.


Notes:: How to say it must span 2 in any order
grid-column: 2 / span 2; // this will span across 2 grid cells adn will start at 2. If there is no grid then an implicit grid will be created.

grid-column: 2 / -1;  The -1 will cover all the column till the end. I.e.it will takeover all the remaining cells. 

*/

/*
Description:: Naming lines and areas

Notes:: Naming Grid lines
grid-template-rows: [header-start] 100px [headed-end, box-start] 200px

we have more than one name per line and we mane them using the array []. 

grid-template-columns: repeat( 3, [col-start] 1fr [col-end]) // This will create col-start 1 and col-end 1 , col-start 2 and col-end 2 etc. The conflict in the naming convention will be resolved. 

Notes:: Naming Grid Areas

grid-template-areas: "1 2 3 4". //This deals with the 1st row. 

grid-template-areas:  "head head head head"
                      "box box box side" // this deals with the second row
grid-template-areas:  "head head head head"
                      "box box box side"
                      "main main main side"
                      "foot foot foot foot"

// We give each grid-cell a name and then we can go to a selector. important - each cell needs to be named and "." is the marker for empty or nameless cell. 

    .header{
      grid-area: head
    }

The header will cover all the area that we mentioned the head. 

*/

/*
Description:: Implicit and Explicit Grids

How the grid expands with more elements. 
implicit grid: is created to fit the remaining grid items incase there are insufficient cells for all the elements present in the grid. 
Explicit is the actual declared Grid.

grid-auto-rows: 100px; // This sets the implicits rows (tracks) to a height of 100px. 

grid-auto-flow: row(default)/column; // this property add the implict grids not as rows but as column if we set it up that way. 
grid-auto-columns: 0.5fr; sets the width of the implicit grid being created. 

grid-auto-flow: row dense; // The dense keyword tells the algorithm to not leave free/empty cells 

*/

/*
Description:: Aligning Grid Items
Aligning Grid Items with grid areas.  

similar to align-items property in Flexbox. It it applied to the grid-container. 

align-items: center; // vertically centers in a grid area. Only visibile when the grid track and element height are drastically different. The default is stretch so it will always take all the available area. end/start/stretch/center are the options. 

justify-items: Center // align the item content horizontally. This works not only in cells but also in entire areas, 

Align-slef: center // this is declared in the item and not on the container and is often contradictory to the one declared in the container. start/end/center/stretch are the available properties. 

*/

/*
Description:: Aligning Tracks
property is declared in the container

horizontal alignment
Justify-content: center; Moves all the tracks to the center of the container. This is very similar to flexbox. Options include: center, start, space-between, end, space-evenly, space-evenly.  

Vertical alignment:
align-content: center etc. start, end, space-between, space-around, ... similar to flexbox. 
*/

/*
Description:: using Min-content, Max-content adn the minimax() function 

Notes::  grid-template-columns/rows 

Grid-template-columns: max-content 1fr 1fr min-content; // the width of the first column will be as wide as the content needs is to be. Allthe element in the column and it also tries not to make any line-breaks.. so one continuous line. and Min-content engages in line-breaks and also allows overflowing.

Grid-template-columns: max-content 1fr 1fr minmax(150px, min-content);

the MinMax function used will ensure the cell is atleast 150px wide and min-content will be max of. 


*/

/*

Description::  Responsive Layouts with auto-fit and auto-fill. No more media Queries.

AUTO-FILL
grid-template-columns: repeat(auto-fill, 100px); // for a width of 1000px it creates 10 column tracks. 

AUTO-FIT
grid-template-columns: repeat(auto-fit, 100px); // for 1000px width there will only be 10 column tracks but the last 2 tracks will obe collapsed and have no width. 

grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); // inthis setup the width of a column can not go below 100 px. So when the VH frops below 800px the last cell will wrap around to form a new line as autofit will create 7 columns instead of 8 columns. etc... the no of colums will always change depending on the width. 

*/
