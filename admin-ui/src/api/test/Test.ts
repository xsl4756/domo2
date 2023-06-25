import { JsonValue } from "type-fest";

export type Test = {
  testWholeNumber: number | null;
  testMultiLineText: number | null;
  testDecimalNUmber: Date | null;
  testBoolean: JsonValue;
  testJson: string | null;
  testOptionSet: string | null;
  testMultiSelectOptionSet: string | null;
  testGeographicLocation: Date | null;
  testCreateAt: string | null;
  testDateTime: Date | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  date: Date | null;
};
