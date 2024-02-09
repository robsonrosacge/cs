import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  addressId?: SortOrder;
  age?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
