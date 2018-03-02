1. Add to package.json (for react-native-vector-icons error):
    "scripts": {
        "postinstall": "rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json"
      },