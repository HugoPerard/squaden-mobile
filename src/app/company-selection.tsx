import { Link } from 'expo-router';
import {
  Avatar,
  Center,
  Image,
  Pressable,
  Stack,
  Text,
} from 'react-native-ficus-ui';

import { useAccount } from '@/modules/account/account.service';

export default function () {
  const { account, isLoading, isError } = useAccount();

  console.log({ account });
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      flex={1}
      spacing="32"
      p="12"
    >
      <Avatar
        src={account?.photoURL ?? undefined}
        name={account?.name}
        size="2xl"
      />
      <Stack spacing={12}>
        {account?.inCompanies.map((companyUser) => (
          <Link
            key={companyUser.id}
            href={{
              pathname: '/[company]',
              params: { company: companyUser.companyName },
            }}
            asChild
          >
            <Pressable>
              <Stack borderRadius="lg" p="4" bg="white">
                <Text>{companyUser.company.displayName}</Text>
              </Stack>
            </Pressable>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
}
