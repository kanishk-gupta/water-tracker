import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DAILY_GOAL = 2000; // in ml
const STORAGE_KEY = '@water_tracker_today';

const WaterIntake = () => {
  const [waterIntake, setWaterIntake] = useState(0);

  useEffect(() => {
    loadIntake();
  }, []);

  useEffect(() => {
    saveIntake();
  }, [waterIntake]);

  const progressPercentage = useMemo(() => {
    return Math.min((waterIntake / DAILY_GOAL) * 100, 100).toFixed(0);
  }, [waterIntake]);

  /**
   * Load the water intake from AsyncStorage
   */
  const loadIntake = async () => {
    try {
      const storedIntake = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedIntake !== null) {
        setWaterIntake(parseInt(storedIntake));
      }
    } catch (error) {
      console.error('Failed to load water intake', error);
    }
  };

  /**
   * Save the current water intake to AsyncStorage
   */
  const saveIntake = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, waterIntake.toString());
    } catch (error) {
      console.error('Failed to save water intake', error);
    }
  };

  /**
   * Add water to the intake
   * 
   * @param {number} amount 
   */
  const addWater = (amount) => {
    setWaterIntake((prev) => prev + amount);
  };

  /**
   * Reset the water intake for today
   */
  const resetToday = () => {
    setWaterIntake(0);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>💧 Water Tracker</Text>
      <Text style={styles.counter}>{waterIntake} / {DAILY_GOAL} ml</Text>
      <Text style={styles.progress}>Progress: {progressPercentage}%</Text>

      <View style={styles.buttonContainer}>
        <Button title="+200ml" onPress={() => addWater(200)} />
        <Button title="+500ml" onPress={() => addWater(500)} />
      </View>

      <View style={{ marginTop: 20 }}>
        <Button title="Reset Today" color="red" onPress={resetToday} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 24,
    marginVertical: 10,
  },
  progress: {
    fontSize: 18,
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default WaterIntake;