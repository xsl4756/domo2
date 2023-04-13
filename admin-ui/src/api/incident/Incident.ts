import { User } from "../user/User";

export type Incident = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  incidentType: string | null;
  time: string | null;
  state: string | null;
  isread: boolean | null;
  arguments: string | null;
  userId?: User | null;
};
