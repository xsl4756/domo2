import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TestWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  state?: StringFilter;
};
