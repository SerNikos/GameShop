import ProfileService from "./ProfileService.js";

const profileService = new ProfileService();

new Vue({
  el: "#app",
  provide: {
    profileService,
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
  created() {
    this.fetchProfileData();
  },
  methods: {
    fetchProfileData() {
      if (this.profileService) {
        const data = this.profileService.fetchProfileData();
        if (data) {
          this.firstName = data.firstName;
          this.lastName = data.lastName;
          this.location = data.location;
          this.bio = data.bio;
          this.password = data.password;
          alert("Profile data fetched!");
          alert(this.firstName);
          alert(firstName);
        }
      }
    },
    logout() {
      window.location.href = "/vue/loginForm.html";
    },
    updateProfile() {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        location: this.location,
        bio: this.bio,
        password: this.password,
      };

      if (this.profileService) {
        this.profileService
          .updateProfile(data)
          .then((response) => {
            if (response) {
              alert("Profile updated!");
            } else {
              alert("Failed to update profile.");
            }
          })
          .catch((error) => console.error(error));
      } else {
        console.error("Profile service not available.");
      }
    },
  },
});