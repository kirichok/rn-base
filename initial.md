0. NPM contributing:
    JUST USE **wml**

    > - Go to npm module root path
    > - Run `npm i -g`.
    > - Go to test folder/project
    > - Run `npm link <npm-module>`
    > - Enjoy
    
    > Contributing
    >  - Fork the repo
    >  - Clone your fork onto your local machine
    >  - make changes and install locally with npm i -g in the cloned directory
    >  - When you are happy with the changes, push it, and make a pull request.

1. Add to package.json (for react-native-vector-icons error):
    "scripts": {
        "postinstall": "rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json"
      },