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
//   title: Bucket Website Configuration.
//   description: Bucket Website Configuration.
//   usage: node addBucketWebsiteConfiguration.js <BUCKET_NAME> <MAIN_PAGE_SUFFIX> <NOT_FOUND_PAGE>

function main(
  bucketName = 'my-bucket',
  mainPageSuffix = 'http://example.com',
  notFoundPage = 'http://example.com/404.html'
) {
  // [START storage_define_bucket_website_configuration]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const mainPageSuffix = 'Name of main page, e.g. http://example.com';
  // const notFoundPage = 'Name of a 404 page, e.g. http://example.com/404.html';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function addBucketWebsiteConfiguration() {
    await storage.bucket(bucketName).setMetadata({
      website: {
        mainPageSuffix,
        notFoundPage,
      },
    });

    console.log(`Website configuration has been added to ${bucketName}.`);
  }

  addBucketWebsiteConfiguration().catch(console.error);
  // [END storage_define_bucket_website_configuration]
}
main(...process.argv.slice(2));
