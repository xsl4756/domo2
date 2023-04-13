import { InputJsonValue } from "../../types";

export type TestUpdateInput = {
  name?: string;
  date?: Date | null;
  state?: string;
  test?: string | null;
  testMultiLineText?: number | null;
  testWholeNumber?: number | null;
  testDecimalNUmber?: Date | null;
  testDateTime?: Date | null;
  testBoolean?: InputJsonValue;
  testJson?: string | null;
  testOptionSet?: string | null;
  testMultiSelectOptionSet?: string | null;
  testGeographicLocation?: Date | null;
  testCreateAt?: string | null;
};
