import axios from "axios";

const baseEndpoint = "https://frozen-reef-96768.herokuapp.com/";
export default {
  getPathing: async (startingLoc, endingLoc, impassables, sideLength) => {
    const payload = {
      sideLength,
      impassables,
      startingLoc,
      endingLoc,
    };

    return await axios
      .post(`${baseEndpoint}find-path`, payload)
      .then((resp) => resp.data.moves);
  },
};
