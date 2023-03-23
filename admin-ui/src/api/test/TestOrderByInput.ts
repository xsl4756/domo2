import { SortOrder } from "../../util/SortOrder";

export type TestOrderByInput = {
  state?: SortOrder;
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  date?: SortOrder;
};
