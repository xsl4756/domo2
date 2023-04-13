import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const StudentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <DateTimeInput label="sex" source="sex" />
        <DateTimeInput label="beginTime" source="beginTime" />
      </SimpleForm>
    </Edit>
  );
};
