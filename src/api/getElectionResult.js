import { ELECTION_URL } from "./apiPath";

const getElectionStatus = async (election_id) => {
  await fetch(`${ELECTION_URL}/${election_id}/result/`, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.code === 200) {
        return responseJson;
      }
      return responseJson.code;
    })
    .catch(() => {
      return -1;
    });
};

export default getElectionStatus;
