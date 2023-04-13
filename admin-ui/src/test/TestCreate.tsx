import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const TestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="state" source="state" />
        <TextInput label="test-singleLineTest" multiline source="test" />
        <NumberInput
          step={1}
          label="test-MultiLineText"
          source="testMultiLineText"
        />
        <NumberInput label="test-WholeNumber" source="testWholeNumber" />
        <DateTimeInput label="test-DecimalNUmber" source="testDecimalNUmber" />
        <DateTimeInput label="test-DateTime" source="testDateTime" />
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
      </SimpleForm>
    </Create>
  );
};
