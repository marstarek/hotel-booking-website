
# React.JS movies platform  

responsive website movies platform

1- Create a hotel booking front end.
2- The front end should have a list of hotels.
3- Each hotel should have a name, address, and a rating.
4- Each hotel should have a button to book it.
5- When the user clicks on the book button, a form should appear to enter the user's name, email, and phone number.
6- When the user clicks on the submit button, the form should disappear and a message should appear saying "Thank you for booking with us".
7- The user should be able to book multiple hotels.
8- The user should be able to cancel a booking.
9- The user should be able to see all his bookings.

npx json-server --watch data/db.json --port 3001

https://blog.openreplay.com/fetching-and-updating-data-with-react-query/





with home page to get popular and top rated movies ,filter movies ,movie details page , pagination

using React.JS ,swiper
@reduxjs/toolkit
react-redux
react-router-dom
redux-thunk
tailwindcss
daisyui
postcss
vite

## API Reference

#### Get all popular movies

```http
  GET /movie/popular
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get the primary information about a movie.

```http
  GET /movie/{movie_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Get the top rated movies on TMDB.

```http
  GET /movie/top_rated
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |
| `page`      | `integer` | **optional**. Specify which page to query. |




## Installation

Install my-project with npm

```bash
  cd React.JS movies platform
  npm install 
  npm run dev
  npm run build
  cd build
  cp index.html 200.html
  surge
```
    
## Acknowledgements

 - [swiperjs](https://swiperjs.com/demos#space-between)
 - [redux-toolkit](https://redux-toolkit.js.org/)
 - [react-router](https://reactrouter.com/en/main)
 - [redux-thunk](https://redux.js.org/usage/writing-logic-thunks)
 - [tailwind css](https://tailwindcss.com/)
 - [daisy ui](https://daisyui.com/)
 - [vite js](https://vitejs.dev/)
 - [hero icons](https://heroicons.com/)
 - [surge](https://surge.sh/)
 
## Demo

 link to demo

[deployed on  surge ](https://industrious-digestion.surge.sh/)

[deployed   on  netlify](https://fluffy-cuchufli-91a178.netlify.app/)





![img1](img3.png?raw=true "Title")
![img1](img1.png?raw=true "Title")
![img1](img2.png?raw=true "Title")
![img1](img4.png?raw=true "Title")
![img1](img5.png?raw=true "Title")
