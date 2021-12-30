import { atom, useAtom } from "jotai";
import { nanoid } from "nanoid";

type Notification = {
  id: string;
  type: "info" | "warning" | "success" | "error";
  title: string;
  message?: string;
};

const notificationsAtom = atom<Notification[]>([]);

export const useNotificationsAtom = () => {
  const [notifications, setNotifications] = useAtom(notificationsAtom);

  const addNotification = (notification: Omit<Notification, "id">) => {
    setNotifications([...notifications, { id: nanoid(), ...notification }]);
  };
  const dismissNotification = (id: string) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return { notifications, addNotification, dismissNotification };
};
