import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const IncidentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
