import React from 'react'
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
} from 'react-admin'
import { useMediaQuery } from '@material-ui/core'
import { PostFilter } from 'components/PostFilter'

export const PostList = props => {
  const isSmall = useMediaQuery(theme => theme['breakpoints'].down('sm'))

  return (
    <List filters={<PostFilter />} {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={record => record.title}
          secondaryText={record => `${record.views} views`}
          tertiaryText={record =>
            new Date(record.published_at).toLocaleDateString()
          }
        />
      ) : (
        <Datagrid>
          <TextField source="id" />
          <ReferenceField source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  )
}
