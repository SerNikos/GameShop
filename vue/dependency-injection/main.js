import ProfileService from "./ProfileService.js";

const profileServiceObject = new ProfileService();

const app = new Vue({
  el: "#app",
  provide: {
    profileServiceObject,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      location: "",
      bio: "",
      password: "",
    };
  },
  methods: {
    fetchProfileData() {
      const data = profileServiceObject.fetchProfileData();
      if (data) {
        profileServiceObject.firstName = data.firstName;
        profileServiceObject.lastName = data.lastName;
        profileServiceObject.location = data.location;
        profileServiceObject.bio = data.bio;
        profileServiceObject.password = data.password;
      }
    },

    updateProfile() {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        location: this.location,
        bio: this.bio,
        password: this.password,
      };

      profileServiceObject
        .updateProfile(data)
        .then((response) => {
          if (response) {
            alert("Profile updated!");
            console.log(data);
          } else {
            alert("Failed to update profile.");
          }
        })
        .catch((error) => console.error(error));
    },
    logout() {
      window.location.href = "/vue/loginForm.html";
    },
  },
});