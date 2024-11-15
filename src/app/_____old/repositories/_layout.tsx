import { useTranslation } from 'react-i18next';

import { Stack } from '@/layout/Stack';

export default function () {
  const { t } = useTranslation();
  return (
    <Stack
      screens={[{ route: 'index', title: t('layouts:tabs.repositories') }]}
    />
  );
}
