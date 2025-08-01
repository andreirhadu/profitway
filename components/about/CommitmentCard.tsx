import { Colors } from '@/constants/Colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '../ThemedText';

type Props = {
  commitment: {
    text: string
    icon: string
  }
}

const CommitmentCard = ({ commitment }: Props) => {
  return (
    <View style={styles.container}>
      { commitment.icon === 'document' &&
        <MaterialCommunityIcons name="file-document-outline" size={56}  color={Colors.dark.tint} />
      }
      { commitment.icon === 'handshake' &&
        <MaterialCommunityIcons name="handshake-outline" size={56}  color={Colors.dark.tint} />
      }
      { commitment.icon === 'people' &&
        <Octicons name="people" size={56}  color={Colors.dark.tint} />
      }
      <ThemedText style={{textAlign: 'center'}}>{commitment.text}</ThemedText>
    </View>
  )
}

export default CommitmentCard

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 16,
    borderWidth: 1,
    borderColor: Colors.dark.tint,
    flexDirection: 'column',
    alignItems: 'center'
  }
})