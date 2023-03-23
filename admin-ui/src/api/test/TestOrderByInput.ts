import { SortOrder } from "../../util/SortOrder";

export type TestOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  date?: SortOrder;
  state?: SortOrder;
};
