# Web Merge

Declarative client-side web fragments (apps/files) merger using web component APIs

## NOTE
> EXPERIMENTAL DO NOT USE IN PRODUCTION


![](preview.png)



## Installation

## 1. via npm

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
<script type="module" src="unpkg.com/@soubai/web-merge"></script>
```



## Usage

use `<web-merge>` element to load you fragment into web page

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

