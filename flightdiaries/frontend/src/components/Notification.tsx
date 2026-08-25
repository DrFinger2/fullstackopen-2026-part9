import { useEffect, useState } from "react";
import type { NotificationEntry } from "../utils/types";

interface NotificationProps {
  notification: NotificationEntry;
  timeout?: number;
}

const Notification = ({ notification, timeout = 5000 }: NotificationProps) => {
  const { message, type, idx } = notification;
  const [visible, setVisible] = useState(true);
  const [prevIdx, setPrevIdx] = useState(idx);

  if (idx !== prevIdx) {
    setPrevIdx(idx);
    setVisible(true);
  }

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), timeout);
    return () => clearTimeout(timer);
  }, [idx, timeout]);

  if (!visible || !message) return null;

  const backgroundColor =
    type === "success" ? "green" : type === "error" ? "red" : "orange";

  const style = {
    padding: "10px 15px",
    marginBottom: "10px",
    borderRadius: "5px",
    color: "white",
    backgroundColor,
  };

  return <div style={style}>{message}</div>;
};

export default Notification;
