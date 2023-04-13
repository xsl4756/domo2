import { SortOrder } from "../../util/SortOrder";

export type IncidentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  incidentType?: SortOrder;
  time?: SortOrder;
  state?: SortOrder;
  isread?: SortOrder;
  arguments?: SortOrder;
  userIdId?: SortOrder;
};
