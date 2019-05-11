import { createClient } from "contentful";

export default createClient({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
  // space: "bv6r72xg4tda",
  // accessToken: "CESp6Zmp5d1mcLK6ptyQSiR8MkBYNTrSwxbIJlS9ZCQ"
});
