// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA7nn-2F34qVoWuonleVI-b1bpDsn7_JR4",
    authDomain: "angular-firebase-training.firebaseapp.com",
    databaseURL: "https://angular-firebase-training.firebaseio.com",
    projectId: "angular-firebase-training",
    storageBucket: "angular-firebase-training.appspot.com",
    messagingSenderId: "74970323596"
  }
};