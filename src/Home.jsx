import React from 'react';
import useOpenGate from '@/api/gate';
import { Text, TouchableOpacity, View } from 'react-native';
import tailwind from './utils/tailwind';

export default function Home() {
  const { mutate } = useOpenGate();

  return (
    <View style={tailwind('bg-pl-purple flex-1 justify-center')}>
      <View style={tailwind('bg-white m-4 p-4 rounded-xl')}>
        <Text style={tailwind('text-center text-3xl font-semibold mb-4')}>
          L&lsquo; ConquistApp
        </Text>
        <TouchableOpacity
          style={tailwind('bg-pl-yellow p-2 rounded-lg flex-row justify-between')}
          onPress={() => mutate()}
        >
          <Text style={tailwind('text-pl-purple text-lg text-center w-full')}>
            ¡Abrir reja ahora ya!
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
