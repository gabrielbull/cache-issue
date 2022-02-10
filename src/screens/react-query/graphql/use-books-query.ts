import {useQuery, UseQueryResult} from 'react-query';
import {BooksQueryResponse} from '../../../typings/books-query-response';
import axios from 'axios';

const BOOKS_QUERY = `
  query BooksQuery($page: Int!) {
    books(page: $page) {
      id
      title
      body
    }
  }
`;

export function useBooksQuery(
  page: number,
): UseQueryResult<BooksQueryResponse, Error> {
  return useQuery(['books', page], async () => {
    const response = await axios.post('http://192.168.1.41:4000', {
      operationName: 'BooksQuery',
      query: BOOKS_QUERY,
      variables: {page},
    });
    return response.data.data;
  });
}
