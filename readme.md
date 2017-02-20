# Debounce

Debounces the execution of a function. Written as an ES6 module.


```
import debounce from '@tuxsudo/debounce';

window.addEventListener('scroll', debounce( () => console.count(), 200 ) );
```
