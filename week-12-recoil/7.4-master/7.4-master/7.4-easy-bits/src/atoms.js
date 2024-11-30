import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 108,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 10,
});

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 15,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobsAtomCount = get(jobsAtom);
    const notificationsAtomCount = get(notificationsAtom);
    const messagingAtomCount = get(messagingAtom);
    return (
      networkAtomCount +
      jobsAtomCount +
      notificationsAtomCount +
      messagingAtomCount
    );
  },
});
