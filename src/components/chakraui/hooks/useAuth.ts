import axios from 'axios';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { User } from '../../../types/api/user';
import { useLoginUser } from './useLoginUser';
import { useMessage } from './useMessage';

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.data, isAdmin });
            history.push('/chakraui/home');
            showMessage({ title: 'Login successfully.', status: 'success' });
          } else {
            showMessage({ title: 'Not found user.', status: 'error' });
            setLoading(false);
          }
        })
        .catch((err) => {
          console.error(err);
          showMessage({ title: 'Login failed.', status: 'error' });
          setLoading(false);
        });
    },
    [history, showMessage, setLoginUser]
  );

  const logout = useCallback(() => {
    setLoginUser(null);
    history.push('/chakraui');
  }, [setLoginUser, history]);

  return { login, logout, loading };
};
