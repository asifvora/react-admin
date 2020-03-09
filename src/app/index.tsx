import React, { Fragment } from 'react'
import { useMount } from 'react-use'
import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import { API_URL } from 'config/env'
import Dashboard from 'components/Dashboard'
import ErrorBoundary from 'components/ErrorBoundary'
import { UserList } from 'components/UserList'
import { PostList } from 'components/PostList'
import { PostEdit } from 'components/PostEdit'
import { PostCreate } from 'components/PostCreate'
import PostIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'

import AuthProvider from 'services/AuthProvider'

const dataProvider = jsonServerProvider(API_URL)

export const App: React.FC = () => {
  useMount(() => {
    window.addEventListener('new-content-available', () => {
      console.log('New content is available')
    })
  })

  return (
    <Fragment>
      <ErrorBoundary>
        <Admin
          dashboard={Dashboard}
          authProvider={AuthProvider}
          dataProvider={dataProvider}
        >
          <Resource
            name="posts"
            list={PostList}
            edit={PostEdit}
            create={PostCreate}
            icon={PostIcon}
          />
          <Resource name="users" list={UserList} icon={UserIcon} />
        </Admin>
      </ErrorBoundary>
    </Fragment>
  )
}
