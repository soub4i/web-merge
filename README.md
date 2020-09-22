# Web Merge

![](assets/banner.png)


Declarative client-side web fragments (apps/files) merger using web component APIs

## NOTE
> EXPERIMENTAL DO NOT USE IN PRODUCTION


![](assets/preview.png)



## Installation

## 1. via npm  (Recommended)

```shell
$ npm install @soubai/web-merge

# or

$ yarn add @soubai/web-merge
```

Then import it in your script


```js
import '@soubai/web-merge'
```

## 2. via unpkg

```html
<script type="module" src="//unpkg.com/@soubai/web-merge"></script>
```



## Usage

use `<web-merge>` custom element to load you fragment into web application

```html
<web-merge content="./fragments/fragment-1.html"></web-merge>

<web-merge content="./fragments/fragment-2.html"></web-merge>
```

### Attributes 

**content**: define the source of you fragments (files,urls ...)
```html

<web-merge content="./fragments/fragment-1.html"></web-merge>


<web-merge content="http://localhost:3000"></web-merge>

```


**lazy**: allow lazy loading for a fragment 

```html
<web-merge lazy content="./fragments/fragment-1.html"></web-merge>

```

**route**: define the route of the component that will be loaded when the this route is fired.

```html
<web-merge route='/cart' content="http://127.0.0.1:3000"></web-merge>
```

## Features

### 1.State management

Web-merge includes a build-in simple state management system based on event (not Event bus).

The fragment `parent` expose a `state` class that can help you to mutate and get new store 

```js
        
// fragment-3.html

const { state } = parent;

//initial state 

state.init({ count: 0 })

//event name 

const COUNT_CHANGE = "countChange";

//Apply side effects 
state.on(COUNT_CHANGE, ({ count }) => {
    document.querySelector("span.value").textContent = count;
});

//mutations 

document.getElementById("inc").addEventListener("click", function () {
    state.dispatch(COUNT_CHANGE, ({ count }) => ({ count: count + 1 }));
        });

document.getElementById("dec").addEventListener("click", function () {
    state.dispatch(COUNT_CHANGE, ({ count }) => ({ count: count - 1 }));
});

```


![](assets/preview--2.gif)

### 2.Routing

Web-merge includes a build-in pushState router that will helps you to load fragments/apps based on route.

The fragment `parent` expose a `router` class that can help you to perform routing action to load fragments/apps

You need to warper your fragments/apps with  `web-merge-router` component and define `base` attribute as root route of your routing system; Than add `route` attribute to your fragments/apps to define the route that will load the fragment

```html
<!-- index.html -->

<web-merge-router base="/examples">
<web-merge route="/" content="./fragments/fragment-6.html"></web-merge>
<web-merge route="/about" content="./fragments/fragment-5.html"></web-merge>
</web-merge-router>


```

```js
        
// fragment-5.html

const { router } = parent;

```

```html
        
<!-- fragment-5.html -->

<ul>
<li>
<a onclick="router.onNavigate('/')" href="#">Home</a>
</li>
<li>
<a onclick="router.onNavigate('/about')" href="#">About</a>

</li>
</ul>

```


![](assets/preview-3.gif)



## Development 

After cloning package on your local machine :

```shell
$ npm install

# start dev server to test examples locally

$ yarn dev

# Build 

$ yarn build
```

## Changelog 


[See the changelog here](CHANGELOG.md)
