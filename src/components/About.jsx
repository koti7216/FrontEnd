import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className='App App-header'>
                <h1>About</h1>
                <p>This project UI part created with react and server side with SpringBoot. It was deployed in aws.</p>
                <p>Created a full-stack app that manages user session including login, logout and handling downstream API security.Implemented GUI using React and implemented login page using form fields.Used bootstrap to style the pages.
                   Used Axios to make API calls. Used NPM to bundle the project and deployed static bundles to S3. Developed micro services login, logout and get user resources in spring boot. Implemented security using Spring.Used maven to build the project and deployed jar file to EC2.
                   Used PostgreSQL to manage the user data.Worked with Spring JPA to query the data base. Implemented password encryption in spring boot and stored encrypted passwords in postgresSQL.Implemented Spring security by using okta.Used pgAdmin to connect to postgresSQL to perform DB operations.
                </p>
            </div>
        );
    }
}

export default About;