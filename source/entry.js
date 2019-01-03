import Instafeed from "instafeed.js";

const userFeed = new Instafeed({
  get: "user",
  userId: 2967027593,
  clientId: "c4a5c21651224cfdb2c58861bd08079c",
  accessToken: "2967027593.1677ed0.d41b3027f7df439f99ec4b0ea2f037b5",
  limit: 6,
  resolution: "low_resolution"
});

userFeed.run();
