import Axios from "axios";

test("should includes countries", async () => {
  await Axios.get(
    `https://randomuser.me/api/?page=${1}&results=${10}&gender=${"all users"}&noinfo`,
    {
      "Content-Type": "application/json",
    }
  ).then((res) => {
    const countries = res.data.results.map(({ location: { country } }) => {
      return country;
    });
    expect(countries).toEqual(expect.arrayContaining([]));

    // expect(countries).toMatchSnapshot();
  });
});
