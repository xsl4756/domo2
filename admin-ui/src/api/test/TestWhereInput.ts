import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TestWhereInput = {
  state?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  date?: DateTimeNullableFilter;
};
