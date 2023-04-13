import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type IncidentWhereInput = {
  name?: StringNullableFilter;
  incidentType?: StringNullableFilter;
  time?: StringNullableFilter;
  state?: StringNullableFilter;
  isread?: BooleanNullableFilter;
  arguments?: StringNullableFilter;
  id?: StringFilter;
  userId?: UserWhereUniqueInput;
};
