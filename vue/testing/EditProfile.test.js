import ProfileService from "../dependency-injection/ProfileService.js";

describe("ProfileService", () => {
  it("fetches profile data", () => {
    const data = ProfileService.fetchProfileData();

    expect(data.firstName).toBe("Nikolaos");
    expect(data.lastName).toBe("Sergis");
    expect(data.location).toBe("Athens");
    expect(data.bio).toBe("A hard working uniwa student.");
    expect(data.password).toBe("verystrongpass");
  });
});