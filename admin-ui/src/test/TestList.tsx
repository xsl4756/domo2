import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="test-WholeNumber" source="testWholeNumber" />
        <TextField label="test-MultiLineText" source="testMultiLineText" />
        <TextField label="test-DecimalNUmber" source="testDecimalNUmber" />
        <TextField label="test-Boolean" source="testBoolean" />
        <TextField label="test-Json" source="testJson" />
        <TextField label="test-optionSet" source="testOptionSet" />
        <TextField
          label="test-MultiSelectOptionSet"
          source="testMultiSelectOptionSet"
        />
        <DateField
          source="testGeographicLocation"
          label="test-GeographicLocation"
        />
        <TextField label="Test-CreateAt" source="testCreateAt" />
        <TextField label="test-DateTime" source="testDateTime" />
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="Date" source="date" />
      </Datagrid>
    </List>
  );
};
