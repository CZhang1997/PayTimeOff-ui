export const SERVICE_URL =
  "https://zdlxvxgaz4.execute-api.us-west-1.amazonaws.com/prod/";

export function employeeSignUpAPIcall({ item, jwtToken, callback }) {
  console.log("making call for ", { item, jwtToken });
  fetch(`${SERVICE_URL}pto-service`, {
    method: "POST",
    headers: new Headers({
      Authorization: jwtToken,
      "Content-Type": "application/json",
    }),

    body: JSON.stringify(item),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      callback && callback();
      // const { record } = data;
      // setLoading(false);
      // setRecord(record);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
