import Axios from "axios";

test("should have all userlist data", async () => {
  await Axios.get(
    `https://randomuser.me/api/?page=${1}&results=${10}&gender=${"all users"}&noinfo`,
    {
      "Content-Type": "application/json",
    }
  ).then((res) => {
    const result = res.data.results;
    expect(result).toMatchSnapshot();
  });
});
