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
      return {
        firstName: "Nikolaos",
        lastName: "Sergis",
        location: "Athens",
        bio: "A hard working uniwa student.",
        password: "verystrongpass",
      };
    }
  
    updateProfile(profileData) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true);
        }, 1000);
      });
    }
  }
  