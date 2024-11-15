import { Stack, Text } from 'react-native-ficus-ui';

import { apiHooks } from '@/api/api-hooks';

export default function () {
  const offices = apiHooks.useOfficesGetAll();

  return (
    <Stack flex={1} alignItems="center" justifyContent="center">
      <Text color="white">TEST</Text>
      <Text color="white">
        {offices.data?.items?.map((item) => item.name).join(', ')}
      </Text>
    </Stack>
  );
}
