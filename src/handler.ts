import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { gameManager, gameEngine } from '@dshaneg/text-adventure-core';

export const hello: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {

  const sessionToken = gameManager.createGame();

  const response = {
    statusCode: 200,
    body: JSON.stringify({ sessionToken }),
    input: event
  };

  cb(null, response);
};
