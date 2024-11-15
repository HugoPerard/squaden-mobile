import { useLayoutEffect, useMemo, useRef } from 'react';

import { useRootNavigationState, useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useShallow } from 'zustand/react/shallow';

import useAuthStore from '@/modules/auth/auth.store';

const useProtectedRoute = () => {
  const segments = useSegments();
  const rootNavigationState = useRootNavigationState();
  const router = useRouter();
  const isAuthentificated = useAuthStore(useShallow((state) => !!state.token));
  const isHydrated = useAuthStore(useShallow((state) => state.isHydrated));
  const currentRouteRef = useRef<'auth' | 'tabs' | 'storybook' | null>(null);
  const navigationKey = useMemo(() => {
    return rootNavigationState?.key;
  }, [rootNavigationState]);

  useLayoutEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';

    if (!navigationKey || !isHydrated) {
      return;
    }
    setTimeout(() => {
      SplashScreen.hideAsync();

      if (process.env.STORYBOOK_ENABLED === 'true') {
        router.replace('/storybook');
        currentRouteRef.current !== 'storybook';
      } else if (
        !isAuthentificated &&
        !inAuthGroup &&
        currentRouteRef.current !== 'auth'
      ) {
        router.replace('/onboarding');
        currentRouteRef.current = 'auth';
      } else if (isAuthentificated && currentRouteRef.current !== 'tabs') {
        router.replace('/company-selection');
        currentRouteRef.current = 'tabs';
      }
    }, 100);
  }, [isAuthentificated, segments, navigationKey, isHydrated]);
};

export default useProtectedRoute;
