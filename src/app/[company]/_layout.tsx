import { useTranslation } from 'react-i18next';

import { Tabs } from '@/layout/Tabs';
import { useLocalSearchParams } from 'expo-router';

const HomeTabs = () => {
  const { t } = useTranslation();
  const test = useLocalSearchParams();

  console.log({test})
  return (
    <Tabs
      initialRouteName="home"
      screens={[
        {
          route: 'home',
          title: test.company,
          icon: 'home',
          options: { headerShown: false },
        },
        {
          route: 'repositories',
          title: t('layouts:tabs.repositories'),
          icon: 'folder',
          options: { headerShown: false },
        },
        {
          route: 'account',
          title: t('layouts:tabs.account'),
          icon: 'user',
          options: { headerShown: false },
        },
      ]}
    />
  );
};

export default HomeTabs;
