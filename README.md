<div align="center">
  <h1>prcall</h1>
  <p>Lua's pcall ported to Javascript</p>
</div>

## How to use?

First, install the prcall package using:
```sh 
npm install prcall
```

Example code:
```ts 
import * as pr from "prcall"

function risky(str: string) {
  throw new Error(str);
}

// safely call using pr.pcallSync
const [success, result] = pr.pcallSync(risky, "Hello!");
if (!success) {
  console.error("an error occured!");
  console.error("error: " + result);
}
```

## Credits
Made with <3 by Rui Reogo
