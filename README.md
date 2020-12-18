# SIVIT

SIVIT App (Visitor Information System) is a information system for management visitor written in [Node.js](https://nodejs.org/)

> Life is like riding a bicycle. To keep your balance you must keep moving. ~ Albert Einstein

_Contributors:_

- [@aribambang](https://github.com/aribambang)
- [@YuriWardana](https://github.com/YuriWardana)

## Prerequisites

Make sure you have [Node.js](https://nodejs.org) installed on your machine. If you don't have one, check [here](https://nodejs.org/en/download/)

## Getting started

- `$ git clone https://github.com/aribambang/sivit.git sivit_folder_name` to clone the repo
- `$ cd sivit_folder_name` to go into the project folder

- Run the API in traditional way

  - `$ npm install` to install all dependencies
  - `$ npm run start` to build your source code and run the project

* visit [http://localhost:3000](http://localhost:3000) to check

## Schema

![alt text](https://i.imgur.com/zZ72fDW.png)

## MVP

<code><img width="30%" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg"></code>
<code><img width="50px" height="50px" src="https://avatars1.githubusercontent.com/u/4129662?s=280&v=4"></code>
<code><img width="60px" height="50px" src="https://www.chartjs.org/media/logo-title.svg"></code>
<code><img width="60px" height="50px" src="https://i1.wp.com/community.nodemailer.com/wp-content/uploads/2015/10/n2-2.png"></code>

## API Endpoints

> Visitor _`/visitors`_
> | method | resource | description |
> | :------- | :-------------- | ----------------------------------------------------- |
> | `GET` | `.../` | Retrieve list of all places for a given user id (uid) |
> | `GET` | `.../create` | Get a create form) |
> | `POST` | `.../create` | Create a new visitor|
> | `GET` | `.../update/:id_visitor` | Get a update form by visitor id (id_visitor) |
> | `POST` | `.../update/:id_visitor` | Update a visitor by visitor id (id_visitor) |
> | `GET` | `.../remove/:id_visitor` | Delete a visitor by visitor id (id_visitor) |

## Demo

- visit [https://shrouded-beach-07754.herokuapp.com/](https://shrouded-beach-07754.herokuapp.com/)
