import { InputJsonValue } from "../../types";

export type TestCreateInput = {
  testWholeNumber?: number | null;
  testMultiLineText?: number | null;
  testDecimalNUmber?: Date | null;
  testBoolean?: InputJsonValue;
  testJson?: string | null;
  testOptionSet?: string | null;
  testMultiSelectOptionSet?: string | null;
  testGeographicLocation?: Date | null;
  testCreateAt?: string | null;
  testDateTime?: Date | null;
  name: string;
  date?: Date | null;
};
