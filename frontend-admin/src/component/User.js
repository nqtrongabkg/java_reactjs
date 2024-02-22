// User.js
import React from "react";
import {
    List,
    Datagrid,
    TextField,
    Edit,
    EditButton,
    TextInput,
    DateInput,
    Create,
    SimpleForm,

} from "react-admin";

export const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="email" />
            <TextField source="fullname" />
            <EditButton />
        </Datagrid>
    </List>
);

export const UserEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="email" />
            <TextInput source="fullname" />
            <DateInput source="createdAt" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="email" />
            <TextInput source="fullname" />
        </SimpleForm>
    </Create>
);