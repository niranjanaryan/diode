import { StatGroup, Stat, StatLabel, StatNumber, Divider } from '@chakra-ui/react';

type Props = {
  successes: number;
  fails: number;
};

export default function ApiStats({ successes, fails }: Props) {
  return (
    <StatGroup gridGap="8">
      <Stat>
        <StatLabel whiteSpace="nowrap" textColor="green.500" fontWeight="600">Successful calls</StatLabel>
        <StatNumber>{successes}</StatNumber>
      </Stat>
      <Divider orientation="vertical" />
      <Stat>
        <StatLabel whiteSpace="nowrap" textColor="red.500" fontWeight="600">Failed calls</StatLabel>
        <StatNumber>{fails}</StatNumber>
      </Stat>
    </StatGroup>
  );
}
