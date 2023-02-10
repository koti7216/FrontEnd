# Full stack App 

This project UI part created with react and server side with SpringBoot. It was deployed in aws.(http://ngkoti.s3-website-us-east-1.amazonaws.com/).

## Description


![Screenshot 2023-02-10 at 10 53 14 AM](https://user-images.githubusercontent.com/97489851/218138418-e8475b9a-37b5-4c2c-92fa-178758cf1e87.png)

![Screenshot 2023-02-10 at 11 05 05 AM](https://user-images.githubusercontent.com/97489851/218138908-ff957add-7f76-4691-a004-94a6e581df4e.png)
Created a full-stack app that manages user session including login, logout and handling downstream API security.Implemented GUI using React and implemented login page using form fields.Used bootstrap to style the pages.

Used Axios to make API calls. Used NPM to bundle the project and deployed static bundles to S3.
Developed micro services login, logout and get user resources in spring boot. Implemented security using Spring.Used maven to build the project and deployed jar file to EC2.

Used PostgreSQL to manage the user data.Worked with Spring JPA to query the data base.
Implemented password encryption in spring boot and stored encrypted passwords in postgresSQL.Implemented Spring security by using okta.Used pgAdmin to connect to postgresSQL to perform DB operations.

### `Commands`

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## `Deployement`

Deployed build files of UI to S3 buckets of aws.
Deployed jar files of server side to EC2 of aws.
