# Lockscreen
> Lock screen of your pc

## Install
```
$ npm install --save lockscreen
```

## Usage
```javascript
import lockscreen from 'lockscreen';

// just lock the screen
lockscreen();

// callback, good to catch errors - maybe you need the stdout - so the callback also passes this
lockscreen((err, stdout) => {
  if(err) {
    console.log('there was some error', err);
  }
});

// custom command for custom OS
lockscreen(() => {}, {
  myCoolOS: 'the command which will be executed when "process.platform" is "myCoolOS"'
})
```
[Checkout the Wiki if you want to use `lockscreen` with ES5](https://github.com/michaelzoidl/lockscreen/wiki)

## Support
Currently it supports:
- macOS (tested on El Capitan v10.11.5)
- win32 _(thx [@michael8090](https://github.com/michael8090))_
- linux (gnome / kde) _(thx [@michael8090](https://github.com/michael8090))_

[Create a new issue if your OS is not supported](https://github.com/michaelzoidl/lockscreen/issues)

## Related
[michaelzoidl/lockscreen-cli](https://github.com/michaelzoidl/lockscreen-cli)

## Contribute
```
# Clone Repo
$ git clone git@github.com:michaelzoidl/lockscreen.git

# Install dependencies
$ npm install

# Test
$ npm test

# Watch the tests
$ npm test -- -w
```

### License
MIT (c) [Michael Zoidl](https://github.com/michaelzoidl)
