import { SortOrder } from "../../util/SortOrder";

export type StudentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  sex?: SortOrder;
  beginTime?: SortOrder;
};
