import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { token, user } = response.data;

  if (!user.admin) {
    toast.error('Usuário não é administrador');
    return;
  }

  yield put(signInSuccess(token, user));

  history.push('/dashboard/orders');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
