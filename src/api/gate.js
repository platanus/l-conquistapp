import {
  useMutation,
} from 'react-query';
import { AUTHORIZATION_TOKEN, GATE_URL } from '@env';
import api from '@/api';

async function openGate() {
  const response = await api.post(
    GATE_URL,
    { entityId: 'switch.sonoff_outside_door' },
    {
      headers: {
        Authorization: `Bearer ${AUTHORIZATION_TOKEN}`,
        'Content-Type': 'application/json',
      },
    },
  );

  return response;
}

function useOpenGate() {
  return useMutation(openGate);
}

export default useOpenGate;
