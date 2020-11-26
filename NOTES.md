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

### Import & Export

Imports and exports are a very complicated manner in Javascript (for some unknown reason).

For now, this is what you need to know: There are two types of exports - named, and `default`. A single
module can have many named exports, but only one default export. I won't elaborate on named exports here.
If you ever reach a situation when you need it, visit [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export).

These two exports type are present in the `import` statement as well. For now, all you need to know
is that to import the default export, the syntax is `import <name> from "<module>"`. Note that name
can be whatever you decide (so, you can think of it as similar to the `import _ as _` statement in python).

To import all exports, you can use a wildcard: `import * as <name> from "<module>"`. Then, to access
the exports, use the module name with a dot notation. The default export will be saved as the `default` key,
not as it's name in the module. However, styling guides may often discourge this type of import.

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

### Components

The convention is to create a `components` directory in your project's source. Each file there will
contain a single 'component' of your app. A component is just a semantic way to divide your app
from being a 'spaghetti-code'. It really means that it's an HTML component, which can be any size you
feel is appropraite.

Then, the React framework is able to implement these components as HTML tags in your application.
In order for that to work, you must follow these rules:

- A component is actually a Javascript function, which always returns the JSX HTML element.
- The function's name must be PascalCase. The name must start with a capital letter, for React to
  recognize it as a component tag, rather than an HTML tag.

Then the convention we use is as mentioned, to have a single function like that in each component file
(and the required code for it to render), then export that specific function.

Then, to implement it in your app, just use an HTML tag with the component's name, .e.g. `<Example>`.
Also, always use a self-closing tag using those components, so actually, use `<Example />` (NOTE:
not sure what will happen if you use a normal tag and put elements inside. Could be intersting).

Also, by convention, you need to have a single `App` component, which contains all the rest.

### Data Mapping

This is a method in which you take an array of objects, and then render it to the screen, with it's
style and HTML structure. The array can be a constant value, if you want to practice front-end development
only, but it can be obtained from the server or from a database as well (I guess).

You define a component that represents each object in the array. Say, in the note keeper app, a good
example is a simple Note object/ component, which has two members: `title` and `content`.

First, we want to pass these members to the React component. We do this by passing them as HTML attributes
to the custom component's tag. Then, we receive a single object in the component function
(normally named `props`), which is an object containing all of these attributes. Finally, we can
reference them using the `{}` curly braces. For example, in the `Note` component, we'd use `{props.title}` to
use it's title.

Now, to render a component for each item in the array, we can use ES6's `Array.map()` function. We'll
supply a callback to it, returning the component's tag, placing the object's members inside the tag's attribtues.
We can make it look very elegant using arrow functions.

#### The `key` Attribute

When we iterate over an array of objects using `map`, rendeing a component for each item, React requires
a `key` attribute for each component. Each key must be unique for each component, in order for React
to properly render the object (I have no idea why though). It's recommended to save these keys as the
id of each object in the array (as it's member). It's also considered very bad practice to use the array's
index as key, since there are high chances of it changing, and not being unique for each component.
Also, it is recommended to pass the key as an attribute of the component, and not of the elements inside it.

**NOTE**: You can't access the key via the `props` object. This is a saved React attribute.

### Conditional Rendering

You can change elements using conditions. For example, change the text of a button, depending on wether
the user is registered or not.

This is done by returning a different HTML element for the rendring function. It can be done using a
function, which may return different elements, or by the trenary operator (`<expression> ? <true> : <false>`).

However, I can't think of a good usage to this, since this code *only runs once, during the rendering process*.

**NOTE**: There is a cancerous way to do things, if you want to toggle whether an item will be rendered or
not. This can be done by using the AND operator (`&&`). Since, just writing an HTML element, even without
returning it, translates to vanilla javascript function calls, if you put your condition on the left side,
and the element on the right, This syntax will work. If the condition is 'false', the right side
won't even evaluate, so the code won't run. However, if the left side is `true`, the right side will
evaluate. A boolean expression will return, which React will probaly ignore, but the HTML functions will
run, resulting in the element being rendered.

Just the kind of stuff which makes me doubt this framework.

### The `useEffect` Hook

This entire section will be a TL;DR summary of this hook.

An 'effect' - short for 'side effect', meaning additional functionality which should be ran after the
component is renderd, a 'side effect' of this component. It's just bad naming for a post-render hook, I guess.

Simply put- this is called every time a component is rendered. It receives a callback function, which
will be queued to execute when the component is rendered, or more percisely, when the real DOM is updated.

This is considered a big deal in React, since it used to be that you'd have to override two functions to
run a hook like this- `componentDidMount`, which runs when the component is rendered for the _first time only_,
(namely, 'mounted'), and `componentDidUpdate`, which runs when the component is updated, or more specifically -
every time it's rendered but the first one.

The `useEffect` simply replaces both of these overrides.

In addition, if you have a hook with a cleanup required (for example- you subscribe to a variable, and want
to unsbscribe when the component is removed), you'd have to override additional hook methods. This particularly
annoyed react developers since they had to write the logic of the same hook/ effect in different places, and
call it multiple times.

The `useEffect` API overcomes this by treating the callback function's return value (yes, it's a callback which returns a callback)
as the cleanup function. The callback within callback approach is, accroding to React's documentation, on purpose,
since every effect must have its own matching clean up function.

If you think about it, however, this means that the callback function for the effect is created again every time
the component is created. That is also, seemingly on purpose. Since the effect refrences the component's state,
or more specifically, variables outside it's scope, it has to be recreated for every render. For that reason,
the cleanup callback is only created once for each effect, so that solves the previous problem, at least.

### ReactJS Styling

Styling seems to be an issue when using React. Mainly because CSS wasn't designed with component orientation
in mind, but with global properties for everything. The community came up with some solution for this. None
is perfect, but anyway, here they are:

#### Inline Styling

Before React, inline styling was considered a bad practice, because you'd have to repeat the style for
every time you use the element, and change it in all of the element's occurances. Now, as you export
a componenet, which includes it's own style, that's no longer a problem.

Another issue solved by React is that with HTML, inline styling would mix CSS and HTML and hurt your eyes.
This is also solved, since now you're writing CSS inside javascript- the style object can be saved
outside as a variable, an invoked with a single word within the HTML code.

**Pros**
- Quick & easy
- Very easy to style conditionally

**Cons**
- Can be very quickly abused and become cancer

**Best Use When**

You want a single style property changed, or conditionally rendered.
But generally, try to avoid using this technique.

#### Regular CSS

A JS expansion which allows importing a CSS file into the code.

Note that when using a CSS file as a javascript module, the class name convention changes from all-lower-dashes
to camelCase, even though it's pure CSS.

**Pros**
- You write pure CSS, and not javascript object
- Very easy to manage the code, since you can have a single CSS file for each React component. That way
  you can easily style each component

**Cons**
- Annoying to edit, as it's not in your component's file

**Best Use When**
You're not using a styling framework (like bootstrap or MaterialUI), and you have a lot of code to write.

#### CSS in JS

More commonly known as `useStyles` function. This function translates a pure javascript object into
a `<style>` HTML element object, with the styles you entered.

**Pros**
- Scoped by default, which means the styles are only applied to the component which uses the object
- Easy to write and learn
- You can either edit the style within your code if it's neat, or export it to another file.

**Cons**
- Can be annoying when a lot of styling is required
- Can be annoying when combining classes, but I guess it's just a matter of using it correctly
- I'm pretty sure that the CSS is still global, and the separtion for components it just logical

**Best Use When**

You don't have much styling to do, since you're using a styling framework like MaterialUI or bootstrap.

#### Styled Components

This module takes in CSS code, written within backticks, and applies the CSS inside to the selcted component.

**Pros**
- You write purse CSS, with lower-case-dashes convention
- The styles are automatically applied to your React component. No dealing with annoying javascript objects.

**Cons**
- Requires an external dependency (which might be installed with React, not sure about it)

#### Honorable Mentions

- CSS Module - At the begining, I thought it was regular CSS. So, I don't really get that one.
- Stylable - A CSS/ javascript farmework, considered very relevant in the component orientation for some reason.
- Other CSS frameworks- Sass, Less, etc...

#### Summary

For now, the recommended method CSS in JS, as it's very easy to edit for each component, within the
component code. It has a very small learning curve, and seems to fit all my needs for small applications.
In addition, I saw the front-end teams at my workplace using that method as well.

If I ever encounter issues with it in the future, I'll refer back here to see other options. Some intresting
articles about ReactJS styling:

- [Style React Components: 7 Ways Compared](https://www.sitepoint.com/react-components-styling-options/) - Pretty
  much sums up all the methods described here, and compares them nicely.
- [Styling Best Practices Using React](https://medium.com/the-non-traditional-developer/styling-best-practices-using-react-c37b96b8be9c)-
  consults the React good practices.
