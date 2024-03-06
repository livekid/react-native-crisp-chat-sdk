import * as React from 'react';
import { NativeModules, View } from 'react-native';

export enum CrispSessionEventColors {
  RED = 0,
  ORANGE = 1,
  YELLOW = 2,
  GREEN = 3,
  BLUE = 4,
  PURPLE = 5,
  PINK = 6,
  BROWN = 7,
  GREY = 8,
  BLACK = 9,
}

type CrispChatSdkType = {
  setTokenId(id: string): () => void;
  setUserEmail(email: string): () => void;
  setUserNickname(name: string): () => void;
  setUserPhone(phone: string): () => void;
  setUserAvatar(url: string): () => void;
  setSessionSegment(segment: string): () => void;
  setSessionString(key: string, value: string): () => void;
  setSessionBool(key: string, value: boolean): () => void;
  setSessionInt(key: string, value: number): () => void;
  pushSessionEvent(name: string, color: CrispSessionEventColors): () => void;
  resetSession(): () => void;
  show(): () => void;
  configure(websiteId: string): () => void;
};

const CrispChatSdk = NativeModules.CrispChatSdk as CrispChatSdkType;

const CrispChat: React.FC = () => {
  React.useEffect(() => {
    CrispChatSdk.show();
  }, []);

  return <View />;
};

export default CrispChat;

export const configure = (websiteId: string) => {
  CrispChatSdk.configure(String(websiteId));
};

export const setTokenId = (id: string) => {
  CrispChatSdk.setTokenId(String(id));
};

export const setUserEmail = (email: string) => {
  CrispChatSdk.setUserEmail(String(email));
};

export const setUserNickname = (name: string) => {
  CrispChatSdk.setUserNickname(String(name));
};

export const setUserPhone = (phone: string) => {
  CrispChatSdk.setUserPhone(String(phone));
};

export const setUserAvatar = (url: string) => {
  CrispChatSdk.setUserAvatar(String(url));
};

export const setSessionSegment = (segment: string) => {
  CrispChatSdk.setSessionSegment(String(segment));
};

export const setSessionString = (key: string, value: string) => {
  CrispChatSdk.setSessionString(String(key), String(value));
};

export const setSessionBool = (key: string, value: boolean) => {
  CrispChatSdk.setSessionBool(String(key), Boolean(value));
};

export const setSessionInt = (key: string, value: number) => {
  CrispChatSdk.setSessionInt(String(key), Number(value));
};

export const pushSessionEvent = (
  name: string,
  color: CrispSessionEventColors
) => {
  CrispChatSdk.pushSessionEvent(String(name), color);
};

export const resetSession = () => {
  CrispChatSdk.resetSession();
};

export const show = () => {
  CrispChatSdk.show();
};
