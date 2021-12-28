import schema from "../../docs/api/openapi.json";

const components = {
  UsersResponse:
    schema.components.responses.users.content["application/json"].examples
      .example.value,
};

export default components;
