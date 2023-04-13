import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StudentWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  sex?: StringNullableFilter;
};
