import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IncidentListRelationFilter } from "../incident/IncidentListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  incidents?: IncidentListRelationFilter;
  telephone?: FloatNullableFilter;
};
