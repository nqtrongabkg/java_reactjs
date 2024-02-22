import React from "react";
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    TextInput,
    Create,
    SimpleForm,
    Edit,
} from "react-admin";

export const TokenList = (props) => (
    <List {...props}>
        <Datagrid style={{ overflowX: "auto"}}>
            <TextField source="id"/>
            <TextField source="token"/>
            <TextField source="createdAt"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const TokenEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="token"/>
        </SimpleForm>
    </Edit>
);

export const TokenCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="token"/>
        </SimpleForm>
    </Create>
);