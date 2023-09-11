import { task } from "nanostores";
import { persistentMap } from "@nanostores/persistent";

import { Client, Account } from "appwrite";

export const kbve$ = persistentMap("kbve:", [], {
  encode(value) {
    return JSON.stringify(value);
  },
  decode(value) {
    try {
      return JSON.parse(value);
    } catch (error) {
      return value;
    }
  },
});

export const Tasker = async (__key, __data) => {
  task(async () => {
    console.log(`Storing ${__data} into locker for ${__key}`);
    kbve$.setKey(__key, __data);
  });
};

export const Init = async () => {
  task(async () => {
    const client = new Client()
      .setEndpoint("https://ap.kbve.com/v1")
      .setProject("[PROJECT_ID]");
    const account = new Account(client);
  });
};
