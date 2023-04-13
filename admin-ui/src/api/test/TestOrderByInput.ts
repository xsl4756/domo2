import { SortOrder } from "../../util/SortOrder";

export type TestOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  date?: SortOrder;
  state?: SortOrder;
  test?: SortOrder;
  testMultiLineText?: SortOrder;
  testWholeNumber?: SortOrder;
  testDecimalNUmber?: SortOrder;
  testDateTime?: SortOrder;
  testBoolean?: SortOrder;
  testJson?: SortOrder;
  testOptionSet?: SortOrder;
  testMultiSelectOptionSet?: SortOrder;
  testGeographicLocation?: SortOrder;
  testCreateAt?: SortOrder;
};
