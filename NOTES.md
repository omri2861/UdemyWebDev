# Notes

In this markdown document, I will write my notes from the course.

Starting at,

## HTML - Basic

### Introduction to HTML

- HTML documentation: MDN, which stands for Mozilla Developer Network, managed by
  Mozilla
- There is also [devdocs](https://devdocs.io), like at work
- CodePen: A webiste to render webpages live, as you edit.

## CSS

### Introduction to CSS

- There is a nice MDN page to see all the colors you can specify with words.
  There's actually a ton of them.
- There's also a nice w3 schools page to see the default CSS which the browser
  uses, if no other CSS is provided.
- I have an idea about how CSS and rending works in general: I guess it's interpreted
  line-by-line, like python. I also guess that the browses always have a value for
  each CSS attribute as defaults, and any given CSS attribute simply overrides the past one.
  This also means that you can override yourself, so you need to be careful and organized.
- Another concept: Everything in web is a box, each with different attribtues (for example-
  some contains text, others images or links, and some are just visual separators). That's
  why all html elements have similar CSS attributes (almost).

## Bootstrap

### Grid

You can divide the page into rows, each row takes up 100% of the page's width,
and the height adjusts according to the content- `<div class="row"></div>`.
Then, you can add some more `div`s, each is a `col` class, to put items in these
rows in the form of a grid. Each row is divided to 12 logical parts by bootstrap,
and you can specify the fixed size of your column using this ratio. For example:
A class of `col-6` given to a `div`, stands for a column that takes up half the
screen. A class of `col-4` always takes up a third of the screen, etc...

You can also change the relative size of the `div`, depending on the viewport.
To this, the class name should be composed of: `col-<viewport>-<size>`.\
For example, in a PC viewport, you can use `col-lg-3`. Which means- on the large viewport only,
take up 3 parts of 12 from the row. You can stack these classes on the same `div` using
different viewport sizes in order to make a responsive page. Example can be seen in the
grid lesson.

**NOTE**: This is a grid, not a table. Which means, that a row doesn't necessarily has
to fit alll the columns. It is completely fine that the columns overflow to another row
if they're too big, or if it doesn't take up the whole row if they're too small. The row
is more of a logical section of the page.

### Buttons

There is this awesome site called Font Awesome, which contains tons of icons, fonts, and other
neat stuff, free for commercial use (I think). They used to be internet good-guys, but their policy
changed a bit since Angela's lesson (now they have a "pro" version). Should definatly remember this
though.

### Responsiveness

- There is a nice site which angela reccommends which rates your site's responsiveness.
  I should get that link
- Media queries- an awesome way to execute responsive CSS code, depending on the media
  views the site. This can be done with the following syntax: `@media <type> <feature>`

### Selector Priority
element tag <- class <- id <- inline
