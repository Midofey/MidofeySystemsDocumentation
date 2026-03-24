# Saving/Loading

The save system inside the quest system is designed to be flexible and easy to use, it allows you to save and load the state of the quests in your game with ease.

## Saving

To save the state of the quests, you can use **Save** function that is available in the quest component, this function will save the state of all the quests in the game to a save slot that you specify.

<iframe src="https://blueprintue.com/render/4sjouto5/" width="100%" height="400" scrolling="no"></iframe>

When you save the quests, it will save the current progress of each quest, including which objectives/progresses have been completed, and any other relevant information about the state of the quests.

## Loading

To load the state of the quests, you can use **Load** function that is available in the quest component, this function will load the state of all the quests in the game from a save slot that you specify.

<iframe src="https://blueprintue.com/render/93z8mi0a/" width="100%" height="400" scrolling="no"></iframe>

Any events tied to the current progresses on each quest will be refired when loading a save, so if you have any events that are supposed to happen when the player reaches a certain point in the quest, they will be triggered when loading a save that has the player at that point in the quest.