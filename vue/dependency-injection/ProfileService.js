/**
 * ProfileService is a class responsible for handling profile-related functions,
 * in our case two: The fetching profile data and the updating user's profile. This service is
 * used to separate the concerns of data handling from the Vue component, making
 * the code more modular and maintainable. By injecting this service as a
 * dependency in the Vue instance, the code becomes more testable, as it allows
 * easier mocking of the service during testing.
 */

export default class ProfileService {

  fetchProfileData() {
    const url = 'http://localhost:8080/api/users/2'; //hardcoded for test

    fetch(url)
      .then(response => response.json())
      .catch(error => console.error(error));
  }
  
  updateProfile(data) {
    // Send updated profile data to API endpoint
    return fetch("http://localhost:8080/api/users/5", { //hardcoded for test
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .catch(error => console.error(error));
  }

}

