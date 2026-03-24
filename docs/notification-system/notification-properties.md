# Notification Properties

Here is a table with all the properties that you can modify for each notification:

| Property              | Description                                                                 | Default Value                         |
|-----------------------|-----------------------------------------------------------------------------|---------------------------------------|
| Title                 | The bolded title text in the UI.                                            | "Example Title"                       |
| Message               | The light text message shown in the main part of the widget.                | "Example Message"                     |
| Duration              | The duration of the timeline.                                               | 5                                     |
| Sound                 | The sound to play when the notification is shown.                           | `null`                                |
| Auto Dismiss          | Whether the notification is removed when the timeline completes.            | `true`                                |
| Title Color           | The color of the title text.                                                | White                                 |
| Timeline Color        | The color of the timeline.                                                  | Yellow                                |
| Width                 | The width of the notification. Maximum is 650. Increase if text is long.    | 650                                   |
| Appear Animation      | Animation used when the notification appears (Fade, Jump, Pop).             | Fade                                  |
| Disappear Animation   | Animation used when the notification is dismissed (Fade, Jump, Pop).        | Fade                                  |
| Accept Button         | Properties of the accept button (Text, Color, Text Color).                  | Empty (no button by default)          |
| Dismiss Button        | Properties of the dismiss button (Text, Color, Text Color).                 | Empty (no button by default)          |

![Notification Properties](/img/notification_example.png)
