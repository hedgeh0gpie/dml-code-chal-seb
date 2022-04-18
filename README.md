# DML Coding Challenge Submission, by Sebastian McKelvey

This is a full-stack application built with JavaScript, CSS, React, Node, MongoDB, and Express. It features the adorable, yet deadly, *Djinn* from the legendary JRPG, *Golden Sun*.  
<br>

## Getting Started

This application uses MongoDB Atlas to host its database. As such, I recommend deleting the existing collection, then importing the data from the seeder file before starting, for a clean slate.

- Navigate to `/api` 
- Replace the `config.env` file with the one from the email
- Run `npm install`
- Run `npm run db:delete`
- Run `npm run db:import`
- Run `npm start`

The Node server will be automatically configured to run on `localhost:8080`.

- Next, navigate to `/ui`
- Run `npm install`
- Run `npm start`

The React application will be running on `localhost:3000`.  
<br>

## API Features

### Get a Specific Djinni

- A `GET` request to `/api/v1/djinn/:_id` returns the given Djinni, or a `404` status code if that Djinni does not exist

### Creating a Djinni

- A `POST` request to `/api/v1/djinn` creates a new Djinni, if provided with the required properties in the body of the request. Please refer to the schema [here](./api/src/models/djinniModel.js) for what properties are and aren't required.


- MongoDB will auto-generate an `_id` for you upon a successful request, so no need to define that.


- If an unsuccessful request has been made, a `400` error will be returned.

### Updating a Djinni

- A `PATCH` request made to `/api/v1/djinn/_:id` with supplied properties and values in the body will update the corresponding Djinni's properties. For example, a `PATCH` request made to `/api/v1/djinn/6254377b28493b5949457c1b` with `{ "hp:" 10, "description": "This spirit harnesses the power of technology" }` in the body will update those properties on the Djinni who matches that `_id`.


- Will return a `404` error if request fails.

### Deleting a Djinni

- A `DELETE` request made to `/api/v1/djinn/_:id` will delete the specified Djinni from the database.


- Will return a `404` error if the request fails.


### Get All Djinn

- A `GET` request to `/api/v1/djinn` will return all Djinn, or a `404` status code if the request fails


#### Sorting and Ordering Results

- You may receive a sorted list of Djinn by passing a `?sort=` query parameter into the URL of your request. The default order is ascending but that can be changed to descending by appending a `-` in front of the desired property. For example, a `GET` request to `/api/v1/djinn?sort=-element,name` will return a list of all Djinn sorted primarily by their `element` in descending order, and sorted additionally by their `name` in ascending order. This request is in fact the first one made when the front-end application initially fetches the data at its initial start.


#### Filtering Results

- You may pass a query containing properties into the URL to filter for. As an example, sending a `GET` request to `/api/v1/djinn?element=Jupiter&lck=1` will return all `Jupiter` Djinn with a `Lck` of `1`.

#### Advanced Filtering

- We can take filtering one step further by filtering for results that are *less than*, *less than or equal to*, *greater than*, and *greater than or equal to* a value we set with the `[lt]`, `[lte]`, `[gt]`, and `[gte]` operators, respectively. For example, a `GET` request to `/api/v1/djinn?element=Venus&pp[gte]=3&hp[lt]=10` will return all `Venus` Djinn with `PP` *greater than or equal to* `3`, and `HP` *less than* `10`.

#### Field Limiting (Projection)

- By including the `?fields=` query param, we can limit which fields we'd like returned in our response. For example, a `GET` request to `/api/v1/djinn?fields=name,element,description` will return all Djinn, but only their `name`, `element`, and `description` field-value pairs (as well as their `_id`, which cannot be excluded).


#### Pagination

- Pagination is supported by including the `?page=` and `?limit=` fields in our request. A `GET` request to `/api/v1/djinn?page=2&limit=10` will return the 11th through the 20th Djinn in our response. That's because we set the `limit` to `10`, which limits each `page` to only return ten results at a time.  
<br>



## UI Features

### Landing Page

- Navigating to `/` displays all Djinn, as well as a form to create a new Djinni


- On the initial page load the Djinn data will be fetched from the hosted MongoDB database and stored in the `djinn` state


- Cards are populated with limited information for each Djinni, with a link to learn more


- Navigating to a Djinni's page and back, either through the browser controls or the `BACK` button, will not trigger another network call to the database


- Creating a new Djinni will only send a `POST` request to create a new entry in the database. It will *not* send a `GET` request to get all Djinn afterward. Instead, the newly created Djinni will be directly added to the `djinn` state and will trigger a DOM re-render.



### Detailed View

- Navigating to `/djinni/:_id` or clicking on `MORE INFO` will take you to the specified Djinni's page.


- This page reveals more information about the Djinni, and includes the ability to delete it.


- Deleting a Djinni will ~~incur its wrath~~ send a `DELETE` request to the database. Similar to the create method, no additional network calls will be made. The Djinni is directly removed from the `djinn` state, and you are routed back to the home page. The Djinni cards are re-rendered with the deleted Djinni missing.


- If you try navigating to a Djinni's page and it doesn't exist, you will see a message stating that the Djinni could not be found, and a button to go back to the home page.


- When the application first starts, if you navigate to this page first, before going to the home page, a request will be made to the API to fetch the Djinni with the corresponding `_id` from the URL. Otherwise, if you start from the home page then go here, the Djinni's data will be pulled from the `selectedDjinni` state which is set when you click on a `MORE INFO` link.