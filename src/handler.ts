import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { TextAdventureCore as Core } from '@dshaneg/text-adventure-core';

// repositories
const gameDefinitionRepository = new Core.defaultImplementations.GameDefinitionRepository();
const mapNodeRepository = new Core.defaultImplementations.MapNodeRepository();
const itemRepository = new Core.defaultImplementations.ItemRepository();

const gameSessionRepository = new Core.defaultImplementations.GameSessionRepositoryMem();

export const hello: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {

  const gameState = Core.createGameManager(gameSessionRepository).createGame();
  const gameEngine = Core.createGameEngine(gameDefinitionRepository, mapNodeRepository, itemRepository, true);

  const startResponse = gameEngine.startGame(gameState);

  const availableDirections = gameState.queryAvailableDirections(mapNodeRepository.gameMap);
  const currentNode = gameState.player.currentNode;

  const responseBody = {
    command: startResponse.command,
    locName: currentNode.name,
    locDescription: currentNode.description,
    locVisited: gameState.player.visited(currentNode),
    events: startResponse.events,
    moves: availableDirections
  };

  const response = {
    statusCode: 200,
    body: JSON.stringify(responseBody),
    input: event
  };

  cb(null, response);
};
