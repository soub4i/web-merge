# Web Merge

Declarative client-side web fragment merger using web component APIs :

## NOTE
> EXPERIMENTAL DO NOT USE IN PRODUCTION

## Installation

Install using npm:

```shell
$ npm install web-merge
```

Install using bower:

```shell
$ bower install web-merge
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

