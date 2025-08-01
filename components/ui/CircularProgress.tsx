import { Colors } from '@/constants/Colors'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Svg, { Circle } from 'react-native-svg'

type Props = {
  totalSteps: number
  completedSteps: number
  size?: number // optional size of circle
}

const CircularProgress: React.FC<Props> = ({
  totalSteps,
  completedSteps,
  size = 64,
}) => {
  const strokeWidth = 10
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius

  const progress = Math.min(completedSteps / totalSteps, 1)
  const strokeDashoffset = circumference * (1 - progress)

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <Circle
          stroke="#e6e6e6"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke={Colors.dark.tint}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          originX={size / 2}
          originY={size / 2}
        />
      </Svg>
      <View style={styles.center}>
        <Text style={styles.percentageText}>{completedSteps}/{totalSteps} lecții completate</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentageText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.dark.text,
  },
})

export default CircularProgress
