import checkRole from "../check-role";
import adminsList from "../../data/admins-list.json";

describe("check user´s role", () => {
  const users = adminsList;
  it("should have admin role", () => {
      expect(checkRole.roleVerify(users[0])).toBe("eres admin");
  });
});
