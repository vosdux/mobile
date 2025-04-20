import { Text } from "@ui-kitten/components";

type Props = {
  count: number;
  goal: number;
  reverse?: boolean;
}

export const GoalText = ({ count, goal, reverse = false }: Props) => {
  const getStatus = () => {
    if (reverse) {
      if (count <= goal) {
        return 'success';
      }
      
      const percent = goal / count;
      if (percent < 0.5) {
        return 'danger';
      }

      return 'warning';
    }

    if (count >= goal) {
      return 'success';
    }

    const percent = count / goal;
    if (percent < 0.5) {
      return 'danger';
    }

    return 'warning';
  }

  return <Text appearance="alternative" status={getStatus()}>{count} / {goal} </Text>;
};

