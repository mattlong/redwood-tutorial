import { Link, routes } from '@redwoodjs/router'

import CommentsCell from 'src/components/CommentsCell'
import CommentForm from '../CommentForm/CommentForm'

const truncate = (text, length) => {
  return text.substring(0, length) + '...'
}

const Article = ({ article, summary = false }) => {
  return (
    <article>
      <header>
        <h2 className="text-xl text-blue-700 font-semibold">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div className="mt-2 text-gray-900 font-light">
        {summary ? truncate(article.body, 100) : article.body}
      </div>
      {!summary && (
        <div className="mt-12 space-y-12">
          <CommentForm postId={article.id} />
          <CommentsCell postId={article.id} />
        </div>
      )}
    </article>
  )
}

export default Article
