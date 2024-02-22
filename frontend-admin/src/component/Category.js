import React from "react";
import {List, Datagrid, TextField, Edit, SimpleForm, EditButton, TextInput, Create, SelectInput,} from 'react-admin';


export const ListCategory = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>
            <TextField source="slug"/>
            <TextField source="description"/>
            <TextField source="thumbnail"/>
            <TextField source="isPopular"/>
            <TextField source="isHome"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const EditCategory = (props) => (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="name"/>
                <TextInput source="slug"/>
                <TextInput source="description"/>
                <TextInput source="thumbnail"/>
                <SelectInput source="isHome" choices={[
                    { id: 1, name: 'Hiển thị ở trang chủ', value: 1 },
                    { id: 0, name: 'Ẩn khỏi trang chủ', value: 0 },
                    ]} defaultValue={0} />
                <SelectInput source="isPopular" choices={[
                    { id: 1, name: 'Hiển thị ở phổ biến', value: 1 },
                    { id: 0, name: 'Không Hiển thị ở phổ biến', value: 0 },
                    ]} defaultValue={0} />
            </SimpleForm>
        </Edit>
);

export const CreateCategory = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="slug"/>
            <TextInput source="description"/>
            <TextInput source="thumbnail"/>
            <SelectInput source="isHome" choices={[
                { id: 1, name: 'Hiển thị ở trang chủ', value: 1 },
                { id: 0, name: 'Ẩn khỏi trang chủ', value: 0 },
                ]} defaultValue={0} />
            <SelectInput source="isPopular" choices={[
                    { id: 1, name: 'Hiển thị ở phổ biến', value: 1 },
                    { id: 0, name: 'Không Hiển thị ở phổ biến', value: 0 },
                    ]} defaultValue={0} />
        </SimpleForm>
    </Create>
);