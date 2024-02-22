import React from "react";
import {List, Datagrid, TextField, Edit, SimpleForm, EditButton, TextInput, NumberInput, DateInput, Create, ReferenceInput, SelectInput} from "react-admin";

export const ListProduct = (props) => (
    <List {...props}>
        <Datagrid style={{overflowX: "auto"}}>
            <TextField source="id"/>
            <TextField source="title"/>
            <TextField source="price"/>
            <TextField source="discount"/>
            <TextField source="description"/>
            <TextField source="thumbnail"/>
            <TextField source="created_at"/>
            <TextField source="updated_at"/>
            <TextField source="category.name"/>
            <EditButton />
        </Datagrid>
    </List>
);

export const EditProduct = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title"/>
            <NumberInput source="price"/>
            <NumberInput source="discount"/>
            <TextInput source="desciption" multiline fullWidth/>
            <TextInput source="thumbnail"/>
            <NumberInput source="deleted"/>
            <DateInput source="created_at"/>
            <DateInput source="updated_at"/>
            <ReferenceInput label="Category" source="category.id" referrence="categories">
                <SelectInput optionText="name"/>
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const CreateProduct = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title"/>
            <NumberInput source="price"/>
            <NumberInput source="discount"/>
            <TextInput source="description" multiline fullWidth/>
            <TextInput source="thumbnail"/>
            <NumberInput source="deleted"/>
            <DateInput source="created_at"/>
            <DateInput source="updated_at"/>
            <ReferenceInput label="Category" source="category.id" reference="categories">
                <SelectInput optionText="name"/>
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

