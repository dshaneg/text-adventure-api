import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { bus, commands } from '@dshaneg/text-adventure-core';

export const hello: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  // bus.eventChannel.subscribe('game.created', (data: any) => this.onGameCreated(data)).once();

  // bus.commandChannel.publish(new commands.StartGameCommand());

  cb(null, response);
};

