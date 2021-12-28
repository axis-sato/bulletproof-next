import schema from "../../docs/api/openapi.json";

const components = {
  UsersResponse:
    schema.components.responses.users.content["application/json"].examples
      .normal.value,
};

export default components;
