---
sidebar_position: 2
---

# Quests

Quests are the main asset in the quest system, they contain all the information about the quest such as the quest graph, quest events, event graph, etc. They are used to create quests that can be given to the player and tracked in the quest journal.

The quest asset consists of 2 main graphs:
- **Quest Graph**: This graph is used to create the structure of the quest, it consists of progresses and transitions that are used to define the flow of the quest.
- **Event Graph**: This graph is used to create events that are tied to the quest, these events can be triggered when the player reaches certain points in the quest and can be used to trigger certain behavior in the game.

![Quest Asset](/img/quest-asset.png)

## Quest Graph
The quest graph consits of [**progresses**](./progress) and **transitions**.

Progresses are nodes that represent a point in the quest's progression, they can have objectives and events tied to them.

Transitions are used to connect progresses and define the flow of the quest, they can also have events tied to them that are triggered when the player transitions from one progress to another.

## Handling Quest Execution
To **Begin/Forget/Restart** and handle the execution of quests, you can use the functions that are available in the quest component, these functions allow you to control the state of the quests in your game and to trigger certain behavior when the player reaches certain points in the quest.

![Quest Component Functions](/img/quest-component-functions.png)
