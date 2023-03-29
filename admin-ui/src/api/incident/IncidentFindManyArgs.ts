import { IncidentWhereInput } from "./IncidentWhereInput";
import { IncidentOrderByInput } from "./IncidentOrderByInput";

export type IncidentFindManyArgs = {
  where?: IncidentWhereInput;
  orderBy?: Array<IncidentOrderByInput>;
  skip?: number;
  take?: number;
};
