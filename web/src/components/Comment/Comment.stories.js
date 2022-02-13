import Comment from './Comment'

export const generated = () => {
  return (
    <Comment
      comment={{
        name: 'Matt Long',
        body: 'This is the first comment!',
        createdAt: '2022-02-13T12:30:28',
      }}
    />
  )
}

export default { title: 'Components/Comment' }
