// Description:: CLEARFIX

//when we float elements within a container the container loses its height so it wont have a backgrounf color etc. we use the clearfix as a solution to this problem. we add the clearfix class to the element.

// clearfix:after{
//  content: '';
//  clear: both;
// display: table;
// } -> &:after{} in scss format with nesting.

// if we can add the class to the elements then it will get its height back.

/*
Description:: The 3 pillars of HTML and CSS, How CSS works behind the scenes

1. Responsive Design - one website for all screen sizes.
  - fluid layouts
  - Media queries
  - responsive Images
  - correct units
  - Desktop-first vs Mobile-first
2. Maintainability and Scalability - 
3. Web Performances = faster and smaller in size

CSS - When we load a webpage
  1. load HTML > Parse HTML > DOM is generated
  2. load CSS > parse CSS > step 1: cascade to resolve CSS declarations and step 2: process final CSS values (e.g. margins) > CSS object model

  both 1 and 2 combine to create the RENDER TREE which is everything we need to render the page using the visual formatting model > the website is rendered
*/

/*
Description:: How CSS is parsed!

A rule consists of a selector and a declaration block. it selects one or more elements. 
A declaration has a property and a declared value

what is a cascade?
it is the process of combining different stylesheets and resolving conflicts between different CSS rules and declarations, when more than one rule applies to a certain element. 
sources; author delcaratin and user declaration is with the browser. and default browser declarations

the cascade resolves all theses conflicts. 
Importance > specificity > source order

specificity heirarchy > 
  1. inline styles
  2. ID
  3. class, pseudo-classes and attributes
  4.Elements and pseudo elements

  00-00-00-00 - insert 1 to rate the specificity
  the value of the winning declaration is called the cascaded value.

  -> if everything is equal (the cascade value)  the last declaration will be used. 
  The universal selector has a value 0-0-0-0 so all elements has precedence over it. 
*/

/*
Description:: How CSS does value processing!

The cascaded values is based on specificity and is used to resolve any conflicts. 
(There is also a a default value for all the CSS properties. This value is used if there is no cascaded value. Every property has to have a property value - so there is always an initial value )
The relative values are then computed and converted to absolute ones for inheritance. the used/actual value is always in pixel. 

Font-size - the 'rem' unit is always relative to the root font size. The default font size is 16px so 1.5 rem is 24px. 

width>padding>font-size(root)>font-size(section)>font-size(paragraph) --- for this paragraph


how units are converted from relative to absolute values:
1. FONTS - % is computed based on their inherited values | the parents computed font size is used e.g. HTML/body
2. Lengths - % - height/width - the values are always computed from their parents WIDTH _ parents computed width
3. em(font), em(length) and rem - are font based relative units. em's use the parents element for their reference while rem alway uses the root value.

em(font) - parents computed font-size 
em(length) - {padding: 2em} | uses the CURRENT  elements computed font size.
rem - the reference is always the root font-size e.g. 10rem is 160px everywhere

4. vh and vw = 1vh/1vw is 1% of the viewport height/width. the reference is always the vieport.

*** the inherited value is always the computed value - for all inhertitable values ***

- inheritasnce only works if no one declares a value for that property. 

*** inherit keyowrd forces inheritance on a certain property
*** the initial keyword resets the property to its initial value.

*/

/*
Description:: CSS Visual Formatting Model

Algorithm that calculates boxes and determines the layout of these boxes, for each element in the render tree, in order to determine the final layout of the page.


The box-model - (default)
  - fill area - it is the area that gets filled with the background color and background image and includes the padding.
  - total width includes the border + padding + height


the type of boxes:
  1. block - display - flex > list-itema> table are default block including div, p, heading > is block.
  Will occupy as much space as possible and will create line breaks.
  2. inline - opposite of block. The height and width property do not apply and the padding and margins are only applicablee  horizontally. The content is distributed in lines.
  3. inline-block - this has no line breaks adn occupy only the contents space but the box-model is now applicable though


positioning Schemes: 
  1. normal flow: default - no float or positioning. position: relative
  2. floats: float remove the element from the normal flow completly. Text and inline element will wrap araound the floated element.The container will not abjust its height to the element
  3. absolute positioning: element is removed from the normal flow. the element has no impact on surrounding content or elements and we use top, left and right to offset the element. 


stacking Context:
stacking of layers

  1. Z-index - higher appears on top. 
  2. position: relative/absolute. 
*/

/*
Description:: CSS Architecture, Component and BEM

THINK > BUILD > DESIGN

Think:
Component-driven design
  1. Modular Building blocks that makes up interfaces
  2. Held together by the layout of the page
  3.  re-usuable across a project and between different projects
  4. independent - they should not depend on their parent. This allows us to use them anywhere on the page.

  (atomic design)

Build:
BEM - block__element--modifier

Block - a block is a standalone component that is meaningful on its own. Blocks can and often are nested within larger blocks. 

Element - is part of a block that has no standalone meaning

modifier - a different version of a block or an element

Architect:
7-1 : the 7-1 pattern is what we are going to use.  we have 7 different folders for partial sass files and 1 main sass file to import all other files into a compiled CSS stylesheet.

the 7 folders are;
  1. Base
  2. Components
  3. Layout
  4. Pages
  5. Themes  - (not included in our project)
  6. Abstracts
  7. Vendors - (not included in our project)

*/

/*
What is SASS?
Sass is a css pre processor, an extension of css that adds power and elegance to the basic language.

Features:
  1. variables - font size, colors and spacing etc
  2. nesting - to nest selectos inside one and another
  3. operators - for mathamatical operations
  4. partials and imports
  5. mixins - to write reusable piece of CSS code
  6. functions - similar to mixins but they produce a value that can be used. 
  7. extends - to make different selectors inherit declarations that are common to all of them. 
  8. control directives - for writing complex code conditions.

syntax: sass syntax, scss syntax is what we are using. 
*/

/*
Description:: First steps: SASS code (SCSS) & mixins + extends + functions


example code:

variables: $some-name : CSS-value

.btn-main{
  (nesting)
  &:link{
    background-color: $some-name
  }

  &:hover{
    background-color: darken(#efefef, 15%)
  }
}

Notes:: Mixins: A reusable piece of code that we can use as a value. It is attached to a variable and can take arguements. 
A mixin can be used in the clear fix scenario. 

@mixin clearfix{
  &::after{
    content: '';
    clear: both;
    display: table;
  }
}

and then inside the  selector we can call @include clearfix. 
we can use the name of the clearfix.
The mixin can be any number of declarations. e.g to normalize an anchor tag. with some variations and

@mixin style-link-text($col-var){
  ***
  ***
  color: $col-var
}


@include style-link-text(#fff)
 it returns =>  {
  ***
  ***
  color: #fff
  } - this is similar to a constructor function. 


Notes:: Functions

@function divide ($a, $b){
  @return $a/ $b
}
it returns a value after making the computation

nav{
  margin: divide(60, 2) * 1px
}
 we need to use the 1px to ensure that the ouptput is in px. 

Notes:: Extends

we write commonn properties in a placeholder and then create variations on it. other selectors will extend that placeholder. 

%btn-placeholder {
  padding: ***
  ****
  ***
  ***
}


and inside of a selector declaration:
 selector{
   @extends %btn-placeholder 
   background-color: #101010
 }

and we use this instead of mixin because we copy the selector in extends and in a mixin we return the declaration.
We only use extends when the declarations are related in function or thematically. 

*/

/*
Description:: Basic Responsive design Principles

 1. Fluid grids and layouts - to allow content to easily adapt to the current viewport width used to browse the website. Uses % and ems rather the px for layout related lengths
 2. Flexible/Responsive images - images that adapt to the current viewport. We define their dimensions in pixels.
 3. media queries: to change styles on certain viewport widths alowing us to create different version of the website.  


float-layout -> Flexbox -> CSS GRID
these are the 3 layout types. 

What is a utility class?
<!-- this u-center-text is a utility class and they are very simple classes that have a simple goal  -->

// Sematic labeling - is when we are using the right HTMLfor the right tag. e.g. headings -h2 etc
*/

/*

Description:: Responsive Design Strategies: Max-Width and Min-Width

 1. Mobiles first forces us to take our design to the absolute essentials. it forces the person to think about the website at the level of a phone. 

 2. Max-width - the maximum width till which the css code is applicable. so ... execute these declaration when the width is xxx long. 
  The break point width is 600-900-1200-1800

 3. Media queries do not add any importance or specificity to selectors, so code order matters and that is how we will sorting their priorities. 
 
 4. Breakpoints - we need to decide our breakpoints.
    - these can be phones, portrait tablets and landscape tablets and then for the desktops. 

*/

/* 
Description::Responsive Design ::  @content and @if - queries in CSS to ensure that the

Instead of going to individual sections of each page we are going to create a mixin and then insert the appropriate mixin in the appropriate page. 
there will be a lot of repetition. 

so we use the @if and pass an arguement to the mixinn and the @content funtionality to organise the code. 

The order in which we will be making the responsive design will be 

base > typography > general layout + grid > page layout > components.

  1.  base >
  2.  typography > 
  3.  general layout + grid > 
  4.  page layout > 
  5.  components >
*/

/*
Description:: Responsive Images - dont waste the date tranfered. 

the 3 use cases:
 1. Resolution switching
 2. Density switching - based on pixel density of the screen. hiRes or low res screens. 
 3. Art Direction - serve an entirely different image based on the screen size or focus on a different part of the image. 


 Responsive images in HTML - SRCSET attribute. 
        <img
          srcset="./img/logo-green-1x.png 1x, ./img/logo-green-2x.png 2x"
          alt="full logo"
          class="footer__logo"
        />
if its a low density screen it will use a low resolution image and if its a high density screen it will use the higher resolution screen. The screen res is set by the 1x and 2x after the image location and we use commas in this attribute. 

we can also run media queries using CSS.  
  @media(min-resolutionL 192dpi){ - to target the higher resolution screens. }

  - we can also combine media queries using the 'and' / ',' operator.  

*/

/*
Description:: Browser Support in Modern web development

 -caniuse -> handy place to test all the supporting features in a browser. 

 Graceful Degradation - work with what works in each browser.

 @supports (criteria) {
    this sets conditions or test whether a certain feature is supported for execution in the browser and implements it if it works.

    used in __header.scss
  }

*/

// overflow: hidden; When the image is bigger than the element if overflows the box. This can hide whatever is outside of it.

/*
Description:: A simple build process with NPM scripts 

  Autoprefixer does not work. 
  to run two terminal with the same command of code   
  "Start":"npm-run-all --parallel devserver watch:sass"
  we set the option as being parallel. 

*/
// Notes:: this changes the color of the highlighted text and we inserted in it in the _base.scss element.
// ::selection {
//   background-color: $color-primary-light;
//   color: $color-white;
// }

/*
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
this ontent="width=device-width needs to be here because it tell s the
browser that the width of the page has to be the width of the screen
otherwise  the page will shrink to the largest possible version of itself and then lower the %. i.e. it will fit to the size of the browser


*/
