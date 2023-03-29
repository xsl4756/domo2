import { JsonValue } from "type-fest";
import { Incident } from "../incident/Incident";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  roles: JsonValue;
  incidents?: Array<Incident>;
};
