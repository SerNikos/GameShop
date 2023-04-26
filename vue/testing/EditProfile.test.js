import ProfileService from "../dependency-injection/ProfileService.js";

describe("ProfileService", () => {
  it("fetches profile data", () => {
    const profileServiceInstance = new ProfileService(); // Create an instance of the ProfileService class
    const data = profileServiceInstance.fetchProfileData(); // Call the method from the instance

    expect(data.firstName).toBe("Nikolaos");
    expect(data.lastName).toBe("Sergis");
    expect(data.location).toBe("Athens");
    expect(data.bio).toBe("A hard working uniwa student.");
    expect(data.password).toBe("verystrongpass");
  });

  it("updates profile data", async () => {
    const profileServiceInstance = new ProfileService();
    const profileData = {
      firstName: "Nikolaos",
      lastName: "Sergis",
      location: "Athens",
      bio: "Jest is pain but we passed the tests.",
      password: "newstrongpass",
    };

    const response = await profileServiceInstance.updateProfile(profileData);

    expect(response).toBe(true);
  });
});
