import { SortOrder } from "../../util/SortOrder";

export type IncidentOrderByInput = {
  name?: SortOrder;
  incidentType?: SortOrder;
  time?: SortOrder;
  state?: SortOrder;
  isread?: SortOrder;
  arguments?: SortOrder;
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userIdId?: SortOrder;
};
