---
title: ".map() and console.log: A Love Story"
description: "A peek inside Javascript Debugging"
date: "7 Mar 2022"
---

Ever had to rewrite a simple one-liner .map() function just to log your outputs? Frustrating, right?

```js
const data = ["1", "2", "3"];

const mappedData = data.map((el) => {
  console.log(el);

  return Number(el);
});
```

In this example, we’re logging each element before converting it to a number. But with a simple trick, you don’t need to rewrite the function! Since console.log returns the value undefined, we can use it in a conditional statement to keep our code concise.

```js
const data = ["1", "2", "3"];

const mappedData = data.map((el) => console.log(el) || Number(el));
```

By using console.log(el) || Number(el), we take advantage of console.log returning undefined, allowing Number(el) to execute right after.

This trick isn’t limited to .map()—you can use it with other array methods like .forEach(), .filter(), or even in conditional expressions anywhere in your code for quick, in-line debugging.

Thanks for reading!


p.s Just use the [Debugger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger).