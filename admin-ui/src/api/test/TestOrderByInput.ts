import { SortOrder } from "../../util/SortOrder";

export type TestOrderByInput = {
  testWholeNumber?: SortOrder;
  testMultiLineText?: SortOrder;
  testDecimalNUmber?: SortOrder;
  testBoolean?: SortOrder;
  testJson?: SortOrder;
  testOptionSet?: SortOrder;
  testMultiSelectOptionSet?: SortOrder;
  testGeographicLocation?: SortOrder;
  testCreateAt?: SortOrder;
  testDateTime?: SortOrder;
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  date?: SortOrder;
};
