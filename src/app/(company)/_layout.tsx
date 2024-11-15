import { useEffect } from 'react';

import { useLocalSearchParams } from 'expo-router';
import { TabList, TabSlot, TabTrigger, Tabs } from 'expo-router/ui';
import { Text } from 'react-native-ficus-ui';

import { api } from '@/api/generated-api';

export default function () {
  const params = useLocalSearchParams();
  console.log('layout', { params });

  const company =
    typeof params.company === 'string' ? params.company : undefined;

  useEffect(() => {
    api.use({
      name: 'squaden-header',
      request: async (_, config) => {
        return {
          ...config,
          headers: company
            ? { ...config.headers, 'squaden-company': company }
            : config.headers,
        };
      },
    });
  }, []);

  return (
    <Tabs>
      <TabSlot />
      <TabList>
        <TabTrigger name="home" href="/">
          <Text>Home</Text>
        </TabTrigger>
        <TabTrigger name="article" href="/article">
          <Text>Article</Text>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}
