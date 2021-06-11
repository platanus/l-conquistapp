import React from 'react';
import useOpenGate from '@/api/gate';
import { Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import tailwind, { getColor } from './utils/tailwind';

export default function Home() {
  const { mutate, isLoading, isError } = useOpenGate();

  return (
    <View style={tailwind('bg-pl-purple flex-1 justify-center')}>
      <View style={tailwind('bg-white m-4 p-4 rounded-xl')}>
        <Text style={tailwind('text-center text-3xl font-semibold mb-4')}>
          L&lsquo; ConquistApp
        </Text>
        <TouchableOpacity
          style={tailwind('bg-pl-yellow p-2 rounded-lg flex-row justify-center')}
          onPress={() => mutate()}
        >
          <Text style={tailwind('text-pl-purple text-lg')}>
            ¡Abrir la reja ahora ya!
          </Text>
          {isLoading && (
            <ActivityIndicator
              size="small"
              color={getColor('pl-purple')}
              style={tailwind('ml-2')}
            />
          )}
        </TouchableOpacity>

      </View>
    </View>
  );
}
