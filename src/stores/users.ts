import create from 'zustand';
import {API} from '@services';
import {Credentials} from '@types';
import Toast from 'react-native-simple-toast';
import {persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserState = {
  user: any;
  isLoggingIn: boolean;
  isLoggedIn: boolean;
  userHasSkippedLogin: boolean;
};

type UserActions = {
  login: (credentials: Credentials) => any;
  skip: () => any;
  toggleIsLogginIn: (isLoggingIn: boolean) => any;
  clear: () => any;
};

type UserStore = UserState & UserActions;

export const useUser = create<UserStore>(
  persist(
    (set, get) => {
      return {
        user: null,
        isLoggingIn: false,
        isLoggedIn: false,
        userHasSkippedLogin: false,
        login: async credentials => {
          try {
            set({isLoggingIn: true});
            const result = await API.login(credentials);
            console.log('User details: ', result.data);
            set({
              user: result.data,
              isLoggingIn: false,
              isLoggedIn: true,
            });

            if(result.problem){
              console.log('Error(login): ', result.problem);
              Toast.show(result.problem, 3000);
            } else {
              Toast.show('Successfully logged in', 3000);
            }
          } catch (error) {
            console.log('Error(login): ', error);
            Toast.show("Error: Please try again later", 3000);
            set({
              isLoggingIn: false,
              isLoggedIn: false,
            });
          } finally {
            // Toast.show('Successfully logged in', 3000);
          }
        },
        skip: () => {
          set({isLoggingIn: false, userHasSkippedLogin: true});
        },
        toggleIsLogginIn: isLoggingIn => {
          set({isLoggingIn});
        },
        clear: () => {
          set({
            user: null,
            userHasSkippedLogin: false,
          });
        },
      };
    },
    {
      name: 'user-storage',
      getStorage: () => AsyncStorage,
    },
  ),
);
