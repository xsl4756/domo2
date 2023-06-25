import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TestWhereInput = {
  testWholeNumber?: FloatNullableFilter;
  testMultiLineText?: IntNullableFilter;
  testDecimalNUmber?: DateTimeNullableFilter;
  testBoolean?: JsonFilter;
  testJson?: StringNullableFilter;
  testOptionSet?: StringNullableFilter;
  testMultiSelectOptionSet?: StringNullableFilter;
  testGeographicLocation?: DateTimeNullableFilter;
  testCreateAt?: StringNullableFilter;
  testDateTime?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  date?: DateTimeNullableFilter;
};
