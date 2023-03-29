import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const IncidentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="incidentType" source="incidentType" />
        <TextInput label="time" source="time" />
        <TextInput label="state" source="state" />
        <BooleanInput label="isread" source="isread" />
        <TextInput label="arguments" source="arguments" />
        <ReferenceInput source="user.id" reference="User" label="userID">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
