import { APIGatewayProxyHandler, APIGatewayEvent } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayEvent) => {
    console.log(event);

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello World!',
        }),
    };
};
