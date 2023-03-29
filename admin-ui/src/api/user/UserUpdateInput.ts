import { InputJsonValue } from "../../types";
import { IncidentUpdateManyWithoutUsersInput } from "./IncidentUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
  incidents?: IncidentUpdateManyWithoutUsersInput;
};
