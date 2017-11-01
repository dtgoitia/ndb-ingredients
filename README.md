# NDB search bar

![NDB search bar screencast](https://user-images.githubusercontent.com/21012855/32276277-6278e590-bf06-11e7-8275-6d77fe90e117.gif)

**Search bar** to access **NDB API**, built with [Node](https://nodejs.org/), [React](https://reactjs.org/) and [Electron](https://electron.atom.io/).

The **NDB API** provides a REST access to the National Nutrient Database, from the  _Nutrient Data Laboratory_ at the _Agricultural Research Service_ (_United States Department of Agriculture_).

## Installation

1. Clone this repository.
2. Install all dependencies: `npm install` or `yarn install`.
3. Get your [NDB API access key](#gain-ndb-api-access).
4. [Store the key](#setup-app-to-read-the-key) for the app to read it.
5. Run `npm run dev` (or `yarn dev`) to use the app.

### Gain NDB API access

According to the [documentation](https://ndb.nal.usda.gov/ndb/doc/index), _anyone may access and use the API. However, a data.gov API key must be incorporated into each API request._

> Note that the data and key shown in this example below are fake.

To obtain your key:

1. Go to [NDB API documentation](https://ndb.nal.usda.gov/ndb/doc/index) page.
2. Scroll down until **Gain Access** section.
3. Click on **Sign up now**.
4. Fill up the form and hit **Signup**.

![api_instructions_1](https://user-images.githubusercontent.com/21012855/32272860-e431ce8a-bef7-11e7-8f54-17be36dfe1b7.png)

5. Done! Here your access key:

![api_instructions_2](https://user-images.githubusercontent.com/21012855/32272862-e61a1e28-bef7-11e7-84bd-01c7b184ce52.png)

You will also get they key in your email.

### Setup app to read the key

The current app looks for the `privateData.js` file at the root of the repository folder in order to get the key for the API.

Create a `privateData.js` file within the root folder and edit it to look as so:

```javascript
const privateData = {
  username: 'johndoe@example.com',
  apiKey: '3F4KtGcWgXfEbL7pjLpE9nLvtBbGGwHcSLpV5nJ9',
  accoundIt: '9a50a303-17fe-43e8-85f6-fc098fd52377'
}

module.exports = privateData;
```

## Motivation

I want to access its data from one of my apps ([nutrition app](https://github.com/dtgoitia/nutrition)), as it's not pragmatic to download the data via [website](https://ndb.nal.usda.gov/ndb/search/list). Accessing the API I ensure I am always searching the latest data with the latest updates and amendments.

## Others

This application is a module built for the [nutrition app](https://github.com/dtgoitia/nutrition) which is still under development.

## Resources

* [Food Composition Databases API documentation](https://ndb.nal.usda.gov/ndb/doc/index)