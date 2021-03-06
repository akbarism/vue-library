# Library App

![GitHub repo size](https://img.shields.io/github/repo-size/akbarism/vue-library)
![GitHub contributors](https://img.shields.io/github/contributors/akbarism/vue-library)
![GitHub stars](https://img.shields.io/github/stars/akbarism/vue-library)
![GitHub forks](https://img.shields.io/github/forks/akbarism/vue-library?style=social)

<p align="center">
  <img height="100" src="https://vuejs.org/images/logo.png">
</p>
<p align="center">
  Built with Vue Js.
</p>

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Usage](#usage-for-development)
- [Create Environment Variable](#create-environment-variable)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [Related Project](#related-project-backend)

## Features

- Users who are not logged in can only view the book
- Users must sign up and sign in to make a transaction and see their profiles
- And others

## Requirements

- Node.js - Download and Install [Node.js](https://nodejs.org/en/).
- Vue.js - Download and Install [Vue.js](https://vuejs.org/v2/guide/)

## Usage for development

1. Open your terminal or command prompt
2. Type `git clone https://github.com/akbarism/vue-library.git`
3. Open the folder and type `npm install` for install dependencies
4. Create Environment Variable [here](#create-environment-variable)
5. Before run this, you must run [backend](#related-project-backend) first
6. Type `npm run serve` for run this app.

## Create Environment Variable

```
$ touch .env.local
$ nano .env.local
```

```
VUE_APP_ROOT_URL=YOUR_HOST_URL
VUE_APP_SECRET_KEY=YOUR_API_KEY
```

## Screenshots


<div align="center" margin-bottom="10px">
    <img width="860" src="https://github.com/akbarism/vue-library/blob/master/src/assets/img/library6.gif">
</div>
<div align="center" margin-bottom="10px">
    <img width="430" src="https://github.com/akbarism/vue-library/blob/master/src/assets/img/book1.png"> &nbsp
    <img width="430" src="https://github.com/akbarism/vue-library/blob/master/src/assets/img/book4.png">
</div>
<div align="center" margin-bottom="10px">
    <img width="430" src="https://github.com/akbarism/vue-library/blob/master/src/assets/img/book2.png">  &nbsp 
    <img width="430" src="https://github.com/akbarism/vue-library/blob/master/src/assets/img/book3.png">
</div>
<div align="center" margin-bottom="10px">
    <img width="430" src="https://github.com/akbarism/vue-library/blob/master/src/assets/img/book5.png">  &nbsp 
    <img width="430" src="https://github.com/akbarism/vue-library/blob/master/src/assets/img/book6.png">
</div>


## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project
1. Create your Feature Branch  ```git checkout -b [feature]```
2. Commit your Changes ```git commit -m 'Add some feature'```
3. Push to the Branch ```git push origin [feature]```
4. Open a Pull Request


## Related Project (Backend)

* [`Backend-Library`](https://github.com/akbarism/library-backend)
