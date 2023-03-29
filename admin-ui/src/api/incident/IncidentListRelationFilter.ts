import { IncidentWhereInput } from "./IncidentWhereInput";

export type IncidentListRelationFilter = {
  every?: IncidentWhereInput;
  some?: IncidentWhereInput;
  none?: IncidentWhereInput;
};
