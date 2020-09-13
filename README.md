# Google-Contacts-Client

## NOTE:

**This app is still under verification by google developers team**. And it usually takes about a week to get the verification.
So, while on google consent screen whenever you see the prompt **"This app isn't verified"**, click on **advanced** and then **click "Go to Google Contacts OAuth (unsafe)"**

# Getting Started

Following instructions will help you to set up this project on your local
machine.

## Installation

first run this command to install all required node modules :

```sh
$ npm install
```

## Usage

run this command to start the development server:

```sh
$ npm run dev
```

You can build the application by running following command:

```sh
$ npm run build
```

# Criteria

**Replicating the Figma design**: replicated Figma css styling.

**Securing Front-end**: All Private routes and components are secured by session based auth token(jwt).

**Dockerize the application**: It is dockerized and deployed on heroku.

**Responsiveness**: Added bootstrap classes.

**Linters**: ESLint configuration is added(react-app extended)

**Webpack**: "react-script" behind the scenes takes care of bundling and building the react app. So that, we don't need tools like babel or webpack
