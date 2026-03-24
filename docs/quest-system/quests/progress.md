---
sidebar_position: 1
---

# Progresses
Progresses are nodes in the quest graph that represent a point in the quest's progression. They can be used to track the player's progress through the quest and to trigger events when the player reaches certain points in the quest.

Progresses consist of [objectives](./objectives) and can have [events](../events) tied to them that are triggered when the player reaches that point in the quest. They can also be used to transition to other progresses in the quest, allowing you to create branching quests with multiple paths.

![Quest Graph](/img/quest-graph.png)

Progresses also have a unique **ID** tied to them that allow for quick access to them from the quest component, this can be useful when you want to check if the player is at a certain progress or ID in the quest. 

No 2 nodes can have the same ID, and the ID is not required to be set on a progress, but if you want to use it for quick access, you can set it to a unique value.

![Is quest at ID](/img/is-quest-at-id.png)

