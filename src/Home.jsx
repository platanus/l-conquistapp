import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import tailwind, { getColor } from './utils/tailwind';

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <View style={tailwind('bg-pl-purple flex-1 justify-center')}>
      <View style={tailwind('bg-white m-4 p-4 rounded-xl')}>
        <Text style={tailwind('text-center text-3xl font-semibold mb-4')}>
          L&lsquo; ConquistApp
        </Text>
        <TouchableOpacity
          style={tailwind('bg-pl-yellow p-2 rounded-lg flex-row justify-between')}
          onPress={() => setShowMessage(!showMessage)}
        >
          <Text style={tailwind('text-pl-purple text-lg text-center')}>
            Pronto
          </Text>
          <Entypo
            name={`chevron-${showMessage ? 'up' : 'down'}`} size={24} color={getColor('pl-purple')}
          />
        </TouchableOpacity>
        {showMessage && (
          <Text style={tailwind('mt-2 text-base')}>
            ¡Se viene! Pronto podrás abrir las puertas del L&lsquo; Conquistator
          </Text>
        )}
      </View>
    </View>
  );
}
