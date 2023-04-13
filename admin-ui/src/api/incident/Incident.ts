import { User } from "../user/User";

export type Incident = {
  name: string | null;
  incidentType: string | null;
  time: string | null;
  state: string | null;
  isread: boolean | null;
  arguments: string | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId?: User | null;
};
