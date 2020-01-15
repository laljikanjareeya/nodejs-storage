// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// sample-metadata:
//   title: Storage Get File Metadata.
//   description: Get file metadata.
//   usage: node fileGetMetadata.js <BUCKET_NAME> <FILE_NAME>

function main(bucketName = 'my-bucket', filename = 'file.txt') {
  // [START storage_get_metadata]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const filename = 'File to access, e.g. file.txt';
  async function getMetadata() {
    // Gets the metadata for the file
    const [metadata] = await storage
      .bucket(bucketName)
      .file(filename)
      .getMetadata();

    console.log(`File: ${metadata.name}`);
    console.log(`Bucket: ${metadata.bucket}`);
    console.log(`Storage class: ${metadata.storageClass}`);
    console.log(`Self link: ${metadata.selfLink}`);
    console.log(`ID: ${metadata.id}`);
    console.log(`Size: ${metadata.size}`);
    console.log(`Updated: ${metadata.updated}`);
    console.log(`Generation: ${metadata.generation}`);
    console.log(`Metageneration: ${metadata.metageneration}`);
    console.log(`Etag: ${metadata.etag}`);
    console.log(`Owner: ${metadata.owner}`);
    console.log(`Component count: ${metadata.component_count}`);
    console.log(`Crc32c: ${metadata.crc32c}`);
    console.log(`md5Hash: ${metadata.md5Hash}`);
    console.log(`Cache-control: ${metadata.cacheControl}`);
    console.log(`Content-type: ${metadata.contentType}`);
    console.log(`Content-disposition: ${metadata.contentDisposition}`);
    console.log(`Content-encoding: ${metadata.contentEncoding}`);
    console.log(`Content-language: ${metadata.contentLanguage}`);
    console.log(`Media link: ${metadata.mediaLink}`);
    console.log(`KMS Key Name: ${metadata.kmsKeyName}`);
    console.log(`Temporary Hold: ${metadata.temporaryHold}`);
    console.log(`Event-based hold: ${metadata.eventBasedHold}`);
    console.log(
      `Effective Expiration Time: ${metadata.effectiveExpirationTime}`
    );
    console.log(`Metadata: ${metadata.metadata}`);
  }

  getMetadata();
  // [END storage_get_metadata]
}

main(...process.argv.slice(2));
