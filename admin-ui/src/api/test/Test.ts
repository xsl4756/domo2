import { JsonValue } from "type-fest";

export type Test = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  date: Date | null;
  state: string;
  test: string | null;
  testMultiLineText: number | null;
  testWholeNumber: number | null;
  testDecimalNUmber: Date | null;
  testDateTime: Date | null;
  testBoolean: JsonValue;
  testJson: string | null;
  testOptionSet: string | null;
  testMultiSelectOptionSet: string | null;
  testGeographicLocation: Date | null;
  testCreateAt: string | null;
};
