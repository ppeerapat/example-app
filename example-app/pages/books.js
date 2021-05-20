import { getBooks } from "../services/main";

const BookPage = ({ books }) => {
  console.log(books);
  console.log(typeof books[0].publishedOn);
  return (
    <div>
      <table>
        <tr>
          <th>Title</th>
          <th>Published On</th>
          <th>Author</th>
        </tr>
        {books.map((e) => (
          <tr>
            <td>{e.title}</td>
            <td>{e.publishedOn}</td>
            <td>
              {e.author.firstname} {e.author.lastname}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export async function getStaticProps() {
  const books = await getBooks();
  return {
    props: { books },
  };
}

export default BookPage;
