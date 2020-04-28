import AdminsList from "../../data/admins-list.json";

describe("check admins on DB load", () => {
  it("should exist allready admins in mockedDB", () => {
    const admins = AdminsList;
    const result =
      Array.from(admins).length > 0 ? "Admins exist" : "Admins doesn´t exist";

    expect(result).toBe("Admins exist");
  });

  it("shouldn´t exist admins in mockedDB", () => {
    const admins = [];

    function addAdminsList() {
      return "Admins created on Load";
    }
    const result =
      Array.from(admins).length > 0 ? "Admins exist" : addAdminsList();

    expect(result).toBe("Admins created on Load");
  });
});
