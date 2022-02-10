import React, {
  createContext,
  FunctionComponent,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Realm from 'realm';
import {BookSchema} from '../database/books';

const RealmContext = createContext<Realm | undefined>(undefined);

export function useRealm(): Realm {
  return useContext(RealmContext)!;
}

export const RealmProvider: FunctionComponent = ({children}) => {
  const mounted = useRef(true);
  useEffect(
    () => () => {
      mounted.current = false;
    },
    [],
  );

  const [realm, setRealm] = useState<Realm | undefined>(undefined);
  const [error, setError] = useState(false);

  const realmRef = useRef(realm);
  realmRef.current = realm;
  useEffect(() => {
    Realm.open({
      path: 'my_database',
      schema: [BookSchema],
    })
      .then(r => {
        if (mounted.current) {
          setRealm(r);
        }
      })
      .catch(() => {
        if (mounted.current) {
          setError(true);
        }
      });
    return () => {
      if (realmRef.current) {
        realmRef.current.close();
      }
    };
  }, []);

  return realm ? (
    <RealmContext.Provider value={realm}>{children}</RealmContext.Provider>
  ) : error ? (
    <View style={styles.errorContainer}>
      <Text style={styles.errorLabel}>Error instantiating realm</Text>
    </View>
  ) : (
    <View style={styles.emptyContainer} />
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyContainer: {
    flex: 1,
  },

  errorLabel: {
    color: 'red',
  },
});
