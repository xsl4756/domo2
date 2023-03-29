import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type IncidentCreateInput = {
  name?: string | null;
  incidentType?: string | null;
  time?: string | null;
  state?: string | null;
  isread?: boolean | null;
  arguments?: string | null;
  userId?: UserWhereUniqueInput | null;
};
