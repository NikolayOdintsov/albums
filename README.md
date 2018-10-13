**This project is ReactNative app for personal test and development purposes :)**

Whenever you run into problems with starting app on simulator:

## Upgrade react native CLI
`react-native upgrade`


## Clean cache
`rm -rf $TMPDIR/react-*; rm -rf $TMPDIR/haste-*; rm -rf $TMPDIR/metro-*; watchman watch-del-all`

## Start Metro Bundler directly
`react-native start`

## Now run in another tab
`react-native run-android` or `react-native run-ios`

## To debug via web-browser add 'debugger' to the line you want to stop
`debugger;`

# Libraries for the project
npm install --save axios
