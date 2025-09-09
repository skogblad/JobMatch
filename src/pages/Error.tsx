import { Link } from "react-router"

export const Error = () => {
  return (
    <>
      <div>
        <h2>Oops, något gick fel.</h2>
        <p>Vi hittar tyvärr inte sidan du letar efter, testa att gå tillbaka till startsidan.</p>
        <Link to={`/`}>
          <button>Till startsidan</button>
        </Link>
      </div>
    </>
  )
}