import { useToast } from "@chakra-ui/react";
import { useCallback, useEffect } from "react";

import { useNotificationsAtom } from "@/atoms/notifications";

const Notifications = () => {
  const { notifications, dismissNotification } = useNotificationsAtom();
  const toast = useToast();

  const handleCloseComplete = useCallback(
    (id: string) => {
      dismissNotification(id);
    },
    [dismissNotification]
  );

  useEffect(() => {
    for (const notification of notifications) {
      toast({
        id: notification.id,
        title: notification.title,
        status: notification.type,
        description: notification.message,
        isClosable: true,
        onCloseComplete: () => handleCloseComplete(notification.id),
      });
    }
  }, [notifications, toast, handleCloseComplete]);

  return null;
};

export default Notifications;
