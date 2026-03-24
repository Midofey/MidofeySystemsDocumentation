---
description: "How to set up the user interface for the notification system."
---

# User Interface

Open up the Content drawer, create a new widget blueprint and name it **"WBP_HUD"**.

:::info

If you have an existing HUD display in your project, you should use that one instead of creating a new one. Having multiple widgets on screen can reduce performance.

:::

Place the `WBP_NotificationPanel` inside the HUD and anchor it to any position you want.

On the **WBP_NotificationPanel**, set the option **Size To Content** to true, this will make sure the panel resizes itself based on the notifications inside it.

:::note

By default, the notifications go top to bottom, but you can change the order by changing the Y allignment of the panel to 1, this will make the notifications go from bottom to top.

:::

Inside your player controller, on begin play, create the HUD and add it to the viewport.

<iframe src="https://blueprintue.com/render/_x4ig-0-/" width="100%" height="400" scrolling="no"></iframe>