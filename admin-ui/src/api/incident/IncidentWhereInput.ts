import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type IncidentWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  incidentType?: StringNullableFilter;
  time?: StringNullableFilter;
  state?: StringNullableFilter;
  isread?: BooleanNullableFilter;
  arguments?: StringNullableFilter;
  userId?: UserWhereUniqueInput;
};
