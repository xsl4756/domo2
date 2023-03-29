import { InputJsonValue } from "../../types";
import { IncidentCreateNestedManyWithoutUsersInput } from "./IncidentCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
  incidents?: IncidentCreateNestedManyWithoutUsersInput;
};
