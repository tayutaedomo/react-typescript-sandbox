import axios from 'axios';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { User } from '../../../types/api/user';

export const useAuth = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            history.push('/chakraui/home');
          } else {
            alert('Not found user.');
          }
        })
        .catch((err) => {
          console.error(err);
          alert('Cannot login.');
        })
        .finally(() => {
          setLoading(true);
        });
    },
    [history]
  );

  return { login, loading };
};
