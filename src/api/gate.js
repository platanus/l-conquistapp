import {
  useMutation,
} from 'react-query';
import { GATE_URL, AUTHORIZATION_TOKEN } from '@env';
import api from '@/api';

async function openGate() {
  try {
    const response = await api.post(GATE_URL,
      { entityId: 'switch.sonoff_outside_door' },
      { headers: { Authorization: `Bearer ${AUTHORIZATION_TOKEN}`,
        'Content-Type': 'application/json' } });

    return response;
  } catch (e) {
    console.error(e);
  }

  return null;
}

function useOpenGate() {
  return useMutation(openGate);
}

export default useOpenGate;
