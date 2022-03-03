## Box-sizing

To keep the width at 300px, no matter the amount of padding, you can use the box-sizing property.
This causes the element to maintain its width;  
if you increase the padding, the available content space will decrease.

## Text

When the text-align property is set to "justify",
each line is stretched so that every line has equal width,  
and the left and right margins are straight (like in magazines and newspapers):

The word-spacing property is used to specify the space between the words in a text.

The white-space property specifies how white-space inside an element is handled.

p {
  white-space: nowrap;
}

## CSS Font Families

In CSS, there are two types of font family names:

generic family - a group of font families with a similar look (like "Serif" or "Monospace")
font family - a specific font family (like "Times New Roman" or "Arial")

If you do not want to use any of the standard fonts in HTML,  
you can use the Google Fonts API to add hundreds of other fonts to your page.

Just add a stylesheet link and refer to a font family of your choice:
link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia"

## Lists

ul.a {
  list-style-type: circle;
}

An Image as The List Item Marker
ul {
  list-style-image: url('sqpurple.gif');
}

## Combinators & Pseudo-classes

There are four different combinators in CSS:

descendant selector (space)
child selector (>)
adjacent sibling selector (+)
general sibling selector (~)

A pseudo-class is used to define a special state of an element.

For example, it can be used to:

Style an element when a user mouses over it
Style visited and unvisited links differently
Style an element when it gets focus

## CSS Units

relative :
em Relative to the font-size of the element (2em means 2 times the size of the current font)
ex Relative to the x-height of the current font (rarely used)
ch Relative to width of the "0" (zero)
rem Relative to font-size of the root element
vw Relative to 1% of the width of the viewport*
vh Relative to 1% of the height of the viewport*
vmin Relative to 1% of viewport's* smaller dimension
vmax Relative to 1% of viewport's* larger dimension
% Relative to the parent element

## Specificity Hierarchy

Every selector has its place in the specificity hierarchy.  
There are four categories which define the specificity level of a selector:

Inline styles - An inline style is attached directly to the element to be styled.  
Example: h1 style="color: #ffffff;".

IDs - An ID is a unique identifier for the page elements, such as #navbar.

Classes, attributes and pseudo-classes - This category  
includes .classes, attributes and pseudo-classes such as :hover, :focus etc.

Elements and pseudo-elements - This category  
includes element names and pseudo-elements, such as h1, div, :before and :after.

## Other

The CSS overflow property controls what happens to content that is too big to fit into an area.

Navigation Menu
Use float with a list of hyperlinks to create a horizontal menu:

Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element.