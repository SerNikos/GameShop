import ProfileService from "../dependency-injection/ProfileService.js";
import { enableFetchMocks } from 'jest-fetch-mock';

enableFetchMocks();

describe("ProfileService", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("fetches profile data", async () => {
    const mockProfileData = {
      firstName: "Nikos",
      lastName: "Sergis",
      location: "NaxosGreece",
      bio: "GitGud",
      password: "5678"
    };

    fetch.mockResponseOnce(JSON.stringify(mockProfileData));

    const profileServiceInstance = new ProfileService(); 
    const data = await profileServiceInstance.fetchProfileData();

    expect(fetch).toHaveBeenCalledWith('http://localhost:8080/api/users/2');
    expect(data).toEqual(mockProfileData);
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

    fetch.mockResponseOnce(JSON.stringify({ success: true }));

    const response = await profileServiceInstance.updateProfile(profileData);

    expect(fetch).toHaveBeenCalledWith('http://localhost:8080/api/users/5', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profileData),
    });
    expect(response.success).toBe(true);
  });
});