import { Notification, NotificationProps } from "@mantine/core";

interface INotificationBannerprops extends NotificationProps {
  title: string;
  message: string;
}
const NotificationBanner = ({
  title,
  message,
  ...rest
}: INotificationBannerprops) => {
  return (
    <Notification title={title} {...rest}>
      {message}
    </Notification>
  );
};

export default NotificationBanner;
