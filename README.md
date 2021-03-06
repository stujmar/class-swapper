# class-swapper
This is a little utility I have in mind for working with Tailwind CSS and React.

## Use

install via CLI

`npm i class-swapper`

import in your javascript

```javascript
import { swapper } from 'class-swapper';
```

Now there are two ways to use it.

1. Having it replace all your classes.
2. Having it replace the differences in your classes.
   
They both have their strength. One looks simple in your jsx but abstracts your classname, the other requires the addition of string templating.

### First Case

Pass in the conditional value, your conditional classes, then all your base classes. This way, your jsx is very concise.

```javascript
import React, { useState, useEffect } from 'react';
import { swapper } from 'class-swapper';

const myComponent = () => {
    
    const [ isActive, setIsActive ] = useState(false);
    let activeClass;

    useEffect(() => {
    activeClass = swapper({
        value: isActive,
        isTrue: "block",
        isFalse: "hidden",
        base: "mt-2 border p-4 bg-gray-200"
    })
    },[isActive]);


    return (
        <div className={activeClass}>Hello World</div>
    )
}

```

### Second Case

Pass in the conditional value and your conditional classes. Omit your base classes. This way, you don't abstract/obscure your classes from your jsx.

```javascript
import React, { useState, useEffect } from 'react';
import { swapper } from 'class-swapper';

const myComponent = () => {
    
    const [ isActive, setIsActive ] = useState(false);
    let activeClass;

    useEffect(() => {
    activeClass = swapper({
        value: isActive,
        isTrue: "block",
        isFalse: "hidden",
        base: "mt-2 border p-4 bg-gray-200"
    })
    },[isActive]);


    return (
        <div className={`mt-2 border p-4 bg-gray-200 ${activeClass}`}>Hello World</div>
    )
}

```

