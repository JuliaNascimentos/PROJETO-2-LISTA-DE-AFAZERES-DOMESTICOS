import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

type TaskProps = {
  id: number;
  task: string;
};

const TaskList = ({ title, tasks }: { title: string; tasks: TaskProps[] }) => {
  return (
    <View>
      <Text style={styles.subtitle}>{title}</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.task}>{item.id}. {item.task}</Text>}
      />
    </View>
  );
};

const tasksMorning: TaskProps[] = [
  { id: 1, task: 'Lavar as roupas sujas.' },
  { id: 2, task: 'Lavar e guardar a louça.' },
  { id: 3, task: 'Limpar a pia da cozinha.' },
  { id: 4, task: 'Preparar o almoço.' },
  { id: 5, task: 'Colocar as roupas no varal.' },
];

const tasksAfternoon: TaskProps[] = [
  { id: 1, task: 'Limpar a mesa da cozinha.' },
  { id: 2, task: 'Varrer e passar o pano nos cômodos da casa.' },
  { id: 3, task: 'Lavar e guardar a louça.' },
  { id: 4, task: 'Limpar a pia da cozinha.' },
  { id: 5, task: 'Tirar as roupas do varal.' },
];

const tasksNight: TaskProps[] = [
  { id: 1, task: 'Levar o cachorro para passear.' },
  { id: 2, task: 'Limpar os calçados utilizados durante o dia.' },
  { id: 3, task: 'Preparar o jantar.' },
];

function App() {
  return (
    <View>
      <Text style={styles.title}>Lista de Afazeres Domésticos</Text>

      <TaskList title="Manhã" tasks={tasksMorning} />
      <TaskList title="Tarde" tasks={tasksAfternoon} />
      <TaskList title="Noite" tasks={tasksNight} />
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5
  },
  subtitle:{
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 15,
    marginTop: 13
  },
  task:{
    marginLeft: 15,
    fontWeight: 500,
  }
})

export default App;