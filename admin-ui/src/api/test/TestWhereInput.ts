import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type TestWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  date?: DateTimeNullableFilter;
  state?: StringFilter;
  test?: StringNullableFilter;
  testMultiLineText?: IntNullableFilter;
  testWholeNumber?: FloatNullableFilter;
  testDecimalNUmber?: DateTimeNullableFilter;
  testDateTime?: DateTimeNullableFilter;
  testBoolean?: JsonFilter;
  testJson?: StringNullableFilter;
  testOptionSet?: StringNullableFilter;
  testMultiSelectOptionSet?: StringNullableFilter;
  testGeographicLocation?: DateTimeNullableFilter;
  testCreateAt?: StringNullableFilter;
};
