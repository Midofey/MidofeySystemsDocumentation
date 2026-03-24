---
sidebar_position: 2
---

# Showing Notifications

To show a notification, simply get the notification subsystem and call Show Notification with the correct properties. To check what all the properties do in the system refer to [Notification Properties](notification-properties).

<iframe src="https://blueprintue.com/render/pldwy45v/" width="100%" height="400" scrolling="no"></iframe>

```cpp
	UNotificationSubsystem* NotificationSubsystem = GetGameInstance()->GetSubsystem<UNotificationSubsystem>();

	FNotificationProperties NotificationProps;
	NotificationProps.Title = FText::FromString("Interaction Updated");
	NotificationProps.Message = FText::FromString("The interaction widget has been updated.");
	NotificationProps.AutoDismiss = true;

	NotificationSubsystem->ShowNotification(NotificationProps);
```

You can also bind events to when the notification is accepted or declined, if auto dismissed neither of the events will fire.

<iframe src="https://blueprintue.com/render/x2wn1q_m/" width="100%" height="400" scrolling="no"></iframe>