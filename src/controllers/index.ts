import { asyncHandler } from "../middlewares/asyncHandlerFn";
import AWS from "aws-sdk";

AWS.config.update({ region: "eu-west-1" });
const client = new AWS.DynamoDB.DocumentClient();


export const read = asyncHandler(async (req: any, res: any) => {
  const tableName = "Test";
  const params = {
    TableName: tableName,
  };

  client.scan(params, (err, data) => {
    if (err) {
      res.status(200).json({
        success: false,
      });
      return;
    }

    const results = data.Items?.map((item) => {
      return {
        updatedAt: item.payload.timestamp,
        coordinates: item.payload.coordinates,
        id: item.device_id,
      };
    });

    res.status(200).json({
      success: true,
      results,
    });
  });
});
