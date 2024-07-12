// calculator.jsx

import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function Calculator() {
  const [currentValue, setCurrentValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const handleTap = (type, value) => {
    switch (type) {
      case 'number':
        setCurrentValue((prev) => (prev === '0' ? value : prev + value));
        break;
      case 'operator':
        setOperator(value);
        setPreviousValue(currentValue);
        setCurrentValue('0');
        break;
      case 'equal':
        const current = parseFloat(currentValue);
        const previous = parseFloat(previousValue);
        let result = 0;

        switch (operator) {
          case '+':
            result = previous + current;
            break;
          case '-':
            result = previous - current;
            break;
          case '*':
            result = previous * current;
            break;
          case '/':
            result = previous / current;
            break;
          default:
            return;
        }
        setCurrentValue(result.toString());
        setOperator(null);
        setPreviousValue(null);
        break;
      case 'clear':
        setCurrentValue('0');
        setOperator(null);
        setPreviousValue(null);
        break;
      case 'posneg':
        setCurrentValue((prev) => (parseFloat(prev) * -1).toString());
        break;
      case 'percentage':
        setCurrentValue((prev) => (parseFloat(prev) * 0.01).toString());
        break;
      default:
        return;
    }
  };

  const renderButtons = () => {
    const buttons = [
      ['C', '±', '%', '/'],
      ['7', '8', '9', '*'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '='],
    ];

    return buttons.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.row}>
        {row.map((button, buttonIndex) => {
          const type =
            button === 'C'
              ? 'clear'
              : button === '±'
              ? 'posneg'
              : button === '%'
              ? 'percentage'
              : button === '='
              ? 'equal'
              : ['/', '*', '-', '+'].includes(button)
              ? 'operator'
              : 'number';
          return (
            <TouchableOpacity
              key={buttonIndex}
              style={styles.button}
              onPress={() => handleTap(type, button)}
            >
              <Text style={styles.buttonText}>{button}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{currentValue}</Text>
      </View>
      <View style={styles.buttonsContainer}>{renderButtons()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  resultContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    padding: 20,
  },
  resultText: {
    fontSize: 48,
    color: '#000',
  },
  buttonsContainer: {
    flex: 5,
    backgroundColor: '#d3d3d3',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 32,
    color: '#000',
  },
});
