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

## Javascript

### Syntax

- `typeof`- Returns the type of the given object, as a **string** (unlike python's `type` object)
- `prompt` - Pops up a window which let's you enter information, and returns it. Note that there is no console in browsers- that is the easiest way to receive input from user.
- Variable Syntax- `var name = "value";`. Note that javascript is loosely typed, so there is no type annotation.
- Angela doesn't mention format string function, but rather uses the `+` operator. I should check the META for it.
- Ctrl-K on browser- linux's `clear` equivillant. If you want to clear data cache- a Ctrl+F5 will do it.
- String length is a property called `length`, not a function
- Slicing is also used via the `slice` function. Note: there is no `step` paramter for this function
- Declaring function: Starts with a keyword similar to `def`- `function`, then the signature (untyped, of course), then curly brackets to open a code block.

### Variables

There are two keywords to define variables in js: `var` and `let`.

There is a difference between `var` and `let`. First, `var` is function scoperd,
while `let` is block scoped (which means it can even be declared in a scope of
an `if` statement). In addition, referencing an undeclared `var` will yield a
null/ undefined value (not sure), while referencing an undeclared `let` will
result in a javascript `ReferenceError`. Finally, like in python, `let`'s are
allocated in runtime, while `var`s are allocated before the code runs. For some
unknown reason, MDN seems to recommend `let`s in their beginners' tutorial, since
it's more strict than `var` (In `let`, you must declare all of them at the
beginning of the function, while `let` lets you do pretty much anything you want).

Declaring a variable without the word `var` or `let` at the beginning will run,
but it doesn't do what you think. Instead of creating a variable or `let`, it
creates a member in the global scope. In javascript, `globalThis` is a saved
keyword referring to an object containing the program's context. Declared variables
aren't members of this object, but rather get their own memory. However, by
default, any unreferenced keyword is first searched in that scope object.
Also, an undeclared variable is created as a member of this object by default.
This means that if you reference one as well, it will create a member in that
object, returning undefined/ null, and still running.

### Declaring Functions

In javascript, _everything is an object_ (similarly to Python.)
Therefore, functions can be declared in two ways. First, the classic one:

```javascript
function foo() {
  alert("Bar!");
}
```

Or, by assigning them directly to a variable which points to them:

```javascript
var foo = function () {
  alert("Bar!");
};
```

This is often used to override properties of the DOM (which is the HTML document),
to assign functions/ callbacks into events.

Similarly to variables, functions are created before the code runs. This means
you can use functions before they're declared (but I guess it's bad practice).

### Naming Conventions

- Functions & Variables are camelCase

### Tips

- If I want to run some code, I don't have to use the `alert()` function- but rather I can use `console.log()`.
- `this`- Not the same as in other languages. This keyword's value changes, depending
  on the execution's context. Generally, it binds to the function by function's caller.
  In your own script, you don't really bind `this`, but when called as an event handler,
  `this` is bound to the event's caller object.
  When outside of context, `this` refers to the global object, or `window` (which
  means `this === window` evaluates to true).
  _NOTE_: This changes if you run javascript in `strict` mode- a mode made for
  better optimizations, security, and exception handling. In strict mode, the
  unbound `this` doesn't return the window, but return `undefined` instead.

## jQuery

jQuery always returns the same type of object, which is return by querying for
elements using the `$` sign. The expected argument is the element's selector.
This function is kind of a `document.querySelector` and `document.querySelectorAll`
hybrid, returning an iterable. This means, that calling any method on the result
actually calls the method for every element matching the provided selector.

The library follows a pattern in which a lot of functions are both getters and
setters, depending on the arguments given.

- Calling the `css` method with a single argument returns the css value of that property.
  calling with two arguments sets the second argument as the value of the first
  argument's property.
- Calling the `text` method with no arguments returns the containing text.
  passing an argument to the function sets the text to that value.
- Calling the `html` method is the equivalent of `innerHTML`, but as a function.
  The syntax is similar to the `text` method.
- You can set attributes of html attributes using the `attr` method.
  The syntax is similar to the `css` method.
- You can use `addClass` and `removeClass` on jQuery html elements as well
- You can set elements' click or keypress event listeners by simply referring to
  their name using the dot notation. I guess that's true for some more popular
  event listeners.
- To add event listeners, you can use the `on` method. The first argument is a
  string with the event's name, and the second is the callback function.
- You can use the `before` or `after` methods to _insert_ html elements to the page.
- Similarly, you can use the `prepend` and `append` methods to add elements inside the
  selected elements' HTML code. So, it's the equivalent of appending or prepending
  html code to the selected elements' `innerHTML` property.

### Animations

- The `show` and `hide` methods can show and hide the selected element(s) respectively.
- The `toggle` methods toggles between these two options
- There are some great effects methods which can animate an element: `fadeOut`,
  `fadeIn`, `fadeToggle`, `SlideUp`, `SlideDown`, etc...
- The `animate` method can animate an element according to your requirments.
  You provide an object which contains CSS properties, and their new values (actually,
  very similar to the CSS syntax), then jQuery animates the element from it's current
  values to the new given values. Note, however, that you may only supply numeric
  values using this method. Stuff like `color`, `font-family`, etc... won't animate
  (jQuery throws an error).

Generally, the entire library is all about the methods of that specific element object (besides ajax).
It is all nicely documented in the [jQuery documentation page](https://api.jquery.com/).

## ReactJS

React JS is porbably the most cancerous framework there is on the internet. However, it is still
pretty powerful, anc considered the META in a lot of places, so we'll use it anyway.

Before we begin, be sure to check out [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react).

The code you write is actally an extended version of ECMASCript called 'JSX'- The 'X' standing for
either extended or XML. This means that the code you write is actually javascript code with embedded
html tags in it (What did I say about cancer?). It is parsed into a javascript object, which is then
passed to the React API, to be presented in the application.

The way it works backstage is that you actually have a 'compiler' called 'Babel', which compiles the
HTML tags to _vanilla javascript code_. Which means, for example, that a raw HTML tag will be repalced
with a call to vanilla javascript's `HTMLElement` constructor, specifying the corresponding string (Cancer!).

Because of this, the HTML syntax isn't _actually_ html, but rather a very simillar version of it, with
the following differences:

- To use inline Javascript code, you use the `{}` (curly braces) sign, and simply write the code inside.
  This can be done in any part of the HTML code (which is actually neat).
- Tag attribute names are different. In HTML, the convention states that the name are all lowercase, even
  if there's more than one word. However, in JSX, we change the attribute names to match Javscript's
  convention, which is camalCase. To be more specific, the name of the attribute actually changes to
  it's name in the Javascript's `HTMLElement` class. So, for example, the HTML `class` attribute now
  turns to `className`.
- Inline styling is also different. Inline styling now doesn't receive a string- but rather a Javascript
  object. Each property of is is a variable (not a string, like in JSON), mapping to the style value, _always as a string_.
  For example, say we have the following css code:
  
  ```css
  .heading {
    font-size: 20px;
    border: solid 1px;
  }
  ```
  
  The equivalent react object would be:
  
  ```jsx
  {
    fontSize: "20px",
    border: "solid 1px",
  }
  ```
  
  Also note that just like in the HTML attributes, the CSS style attribute names are now changed to
  Javascript's convention (can't have enough of that cancer).
