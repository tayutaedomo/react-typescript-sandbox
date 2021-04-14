import axios from 'axios';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { User } from '../../../types/api/user';
import { useMessage } from './useMessage';

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            history.push('/chakraui/home');
            showMessage({ title: 'Login successfully.', status: 'success' });
          } else {
            alert('Not found user.');
          }
        })
        .catch((err) => {
          console.error(err);
          showMessage({ title: 'Login failed.', status: 'error' });
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [history, showMessage]
  );

  return { login, loading };
};
