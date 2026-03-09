import { useEffect } from 'react';
import { getFirebase } from '../firebase';

export function useFirebase() {
  useEffect(() => {
    const firebase = getFirebase();
    // additional logic
  }, []);
}