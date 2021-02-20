/*
Description:: Flexbox: A True Revolution.

A module that makes it easy to  align elements to one another and in different directions and orders. 
To give the container the ability to expans or shrink elements to best use all the available space. 
  We can replace the float layouts. 
  It also completly changes the way we build one-dimensional layouts. The grid is for two dimensional layouts. 

Notes:: The concepts

1. The element on which we use the flexbox is called the flex container. To create a flex-container we set the display property to flex. (display: flex) or (display: flex-inline)
  the flex-inline container behaves like a inline element rather than a block element. (The block is default)

2. All the elements inside a flex-container is called a flex-item(s). The direction in which they are all laid out is called the main-axis -> L2R and the perpendicular axis is called cross-axis. We can change the direction of both the main axis and the cross axis and the direction in which the element are aligned.

3.Flex-box properties - to arrange the flex-items within the flex container and  The properties of the flex items

  1. container Properties: 
    1.flex-direction: 
      row, 
      row-reverse - inverts the direction of the main axis i.e. it starts from r2l rather than the otherway around. 
      column, 
      column-reverse. 
      directions the items will be placed. It inverts the main axis. 
    2.flex-wrap: nowrap, wrap, wrap-reverse. 
      controls how the elements wrap around into a new line if they go outside the container width. 
    3.justify-content: flex-start, flex-end, center,space-between, space-around, space-evenely. How the items will be align themselves along the main axis. 
      center : creates an even space between the container and the first and last item in the flex container. 
      Space-between : creates an even space between all the items.
      space-around : puts the same space between the left and right side of an elements without any margin collapsing.  
      Space-evenly : has the margin collapse that the space around does not. 
    4.align-items: stretch, flex-start, flex-end, center, baseline
    how the items will be aligned along the cross axis. The cross axis controls the height. 
      stretch: It stretchess all the other elements till they are of even height. 
      center: this matches all the midpoints of all the items regardless of their height.  Midline is the alignment line.
      flex-start: topline is the alignment line.
      flex-end: endline is the alignment line. 
      basline: the font's baseline is used as the alignment line.  
    5.align-content: stretch, flex-start, flex-end, center, space-between , space-around.
      align-content is used to control how the rows are aligned and only works when we have more than one row of flex items. e.g. align end aligns all the content with endline along the cross axis. Rows are controlled the same way as the align-items. 
      Stretch: it stretches the rows and not items themselves, similar to how it 
      
  2. Flexitem Properties : 
    1. Align-self: stretch, flex-start, flex-end, center, baseline
      to align an individual item and often in contrary to the flex-{start/end}} property of the container as a whole. Deals with the cross axis.
    2. Order: Integer, 
      which defines when one specific flex item should appear inside a container. To reorder items. The default value for all items is 0 and we can set it to be lower than zero. 
    3. flex-grow: integer - the ability of an element to grow. The value of 1 will increase the size of the element till will occupy all the white space.
    The value of 2 will double the size of the item wrt to the other items.  
    4. flex-shrink: integer - it control how an element can shrink. it has initial value of 1 and it means the item is allowed to shrink and value of 0 means it will not shrink at all.  
    5. flex-basis: integer - we can set the width of the flex item. it is set as a %/px  and it will occupy that space. 
      flex combines all 3 properties and decided how the element is sized within a box. 

  Flex is the default property for flex-grow, flex-basis and flex-shrink. 
    flex: grow shrink basis
    flex: 0 1 300px

*/

// Description:: Project Notes - TRILLO

/*
CSS now natively supports Variables. We typically define it in the :root selector since the variable will only be avilable to the element and all its children.
The :root selector is a pseudo element like HTML but with a higher specificity and makes all the variables available.  

An image should always be a block or an inline-block if we don't that white space underneath it. 

How to use margin:auto with flexbox and why its so powerfull?

Notes:: Final considerations

Firefox - Support for modern  Web browsers

*/
