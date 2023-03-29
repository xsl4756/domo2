import { IncidentWhereUniqueInput } from "./IncidentWhereUniqueInput";
import { IncidentUpdateInput } from "./IncidentUpdateInput";

export type UpdateIncidentArgs = {
  where: IncidentWhereUniqueInput;
  data: IncidentUpdateInput;
};
