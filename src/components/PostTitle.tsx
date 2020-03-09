import React from 'react'

export const PostTitle = ({ record }: any) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>
}
