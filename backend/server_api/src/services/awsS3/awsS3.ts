import S3 from "aws-sdk/clients/s3";
import path from "path";
import fs from "fs";

const s3 = new S3({
  region: "us-east-1",
});

export const saveS3 = async (filename: string, mineType: string) => {
  const originalPath = path.resolve(filename);
  const fileContent = await fs.promises.readFile(originalPath);
  const ContentType = mineType;

  if (!ContentType) {
    throw new Error("File not found");
  }

  const responseS3 = s3
    .upload({
      Bucket: "bucketfaq",
      Key: filename,
      ACL: "public-read",
      Body: fileContent,
      ContentType,
    })
    .promise();

  //Remove file temp
  await fs.promises.unlink(originalPath);

  return responseS3;
};
