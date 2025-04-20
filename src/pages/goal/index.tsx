import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar, Divider, List, ListItem, Text, TopNavigation, TopNavigationAction, Card, Button, Datepicker } from '@ui-kitten/components';
import { ArrowLeftIcon } from '../../assets/icons/arrow-left';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';

interface IListItem {
  title: string;
  description: string;
  goal: number;
  avatar: string;
}

type TimePeriod = 'day' | 'week' | 'month' | 'year';

const StepsStatistics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('day');
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const getStepsData = (period: TimePeriod, date: Date) => {
    // Mock data - replace with actual data fetching
    const data = {
      day: { steps: 8432, distance: 5.8, calories: 420 },
      week: { steps: 58924, distance: 40.6, calories: 2940 },
      month: { steps: 252000, distance: 174, calories: 12600 },
      year: { steps: 3024000, distance: 2088, calories: 151200 }
    };
    return data[period];
  };

  const data = getStepsData(selectedPeriod, selectedDate);

  return (
    <Card style={styles.statsCard}>
      <View style={styles.statsHeader}>
        <View style={styles.periodButtons}>
          <Button
            size='small'
            status={selectedPeriod === 'day' ? 'primary' : 'basic'}
            onPress={() => setSelectedPeriod('day')}
          >
            День
          </Button>
          <Button
            size='small'
            status={selectedPeriod === 'week' ? 'primary' : 'basic'}
            onPress={() => setSelectedPeriod('week')}
          >
            Неделя
          </Button>
          <Button
            size='small'
            status={selectedPeriod === 'month' ? 'primary' : 'basic'}
            onPress={() => setSelectedPeriod('month')}
          >
            Месяц
          </Button>
          <Button
            size='small'
            status={selectedPeriod === 'year' ? 'primary' : 'basic'}
            onPress={() => setSelectedPeriod('year')}
          >
            Год
          </Button>
        </View>
      </View>
      <View style={styles.datePickerContainer}>
        <Datepicker
          date={selectedDate}
          onSelect={setSelectedDate}
          min={new Date(2020, 0, 1)}
          max={new Date()}
          style={styles.datePicker}
          placeholder='Выберите дату'
        />
      </View>
      <View style={styles.statsContent}>
        <View style={styles.statRow}>
          <Text category='s1'>Шаги</Text>
          <Text category='h4'>{data.steps.toLocaleString()}</Text>
        </View>
        <View style={styles.statRow}>
          <Text category='s1'>Дистанция</Text>
          <Text category='h4'>{data.distance} км</Text>
        </View>
        <View style={styles.statRow}>
          <Text category='s1'>Калории</Text>
          <Text category='h4'>{data.calories}</Text>
        </View>
      </View>
    </Card>
  );
};

const data = [{ title: 'Колесников Евгений', description: 'Тренер', goal: 10000, avatar: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&auto=format&fit=crop&q=60' }, { title: 'Сарафанкина Милена', description: 'Тренер', goal: 12000, avatar: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60' }];

export const GoalScreen = () => {
  const navigation = useNavigation();

  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={<ArrowLeftIcon />}
      onPress={navigation.goBack}
    />
  );

  const renderItem = ({ item }: { item: IListItem }): React.ReactElement => (
    <ListItem
      title={item.title}
      description={item.description}
      accessoryLeft={() => <Avatar source={{ uri: item.avatar }} />}
      accessoryRight={() => <Text status='danger'>14/{item.goal}</Text>}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Статистика' alignment='center' accessoryLeft={renderDrawerAction} />
      <Divider />
      <StepsStatistics />
      <Text style={styles.goalsTitle}>Цели на сегодня</Text>
      <List
        data={data}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  statsCard: {
    margin: 16,
  },
  statsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  periodButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  statsContent: {
    gap: 16,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goalsTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 8,
    marginTop: 8,
  },
  datePickerContainer: {
    marginBottom: 16,
  },
  datePicker: {
    width: '100%',
  },
});
