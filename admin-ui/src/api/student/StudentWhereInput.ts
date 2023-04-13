import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type StudentWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  sex?: DateTimeNullableFilter;
};
