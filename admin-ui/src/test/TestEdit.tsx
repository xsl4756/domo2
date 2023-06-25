import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const TestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="test-WholeNumber" source="testWholeNumber" />
        <NumberInput
          step={1}
          label="test-MultiLineText"
          source="testMultiLineText"
        />
        <DateTimeInput label="test-DecimalNUmber" source="testDecimalNUmber" />
        <div />
        <TextInput label="test-Json" source="testJson" />
        <TextInput label="test-optionSet" source="testOptionSet" />
        <TextInput
          label="test-MultiSelectOptionSet"
          source="testMultiSelectOptionSet"
        />
        <DateTimeInput
          label="test-GeographicLocation"
          source="testGeographicLocation"
          disabled
        />
        <TextInput label="Test-CreateAt" source="testCreateAt" />
        <DateTimeInput label="test-DateTime" source="testDateTime" />
        <TextInput label="name" source="name" />
        <DateTimeInput label="Date" source="date" />
      </SimpleForm>
    </Edit>
  );
};
