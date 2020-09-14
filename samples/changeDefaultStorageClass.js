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
//   title: Change Bucket's Default Storage Class.
//   description: Change Bucket's Default Storage Class.
//   usage: node changeDefaultStorageClass.js <BUCKET_NAME> <CLASS_NAME>

function main(bucketName = 'my-bucket', storageClass = 'STANDARD') {
  // [START storage_change_default_storage_class]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const storageClass = 'Name of a storage class, e.g. STANDARD';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function changeDefaultStorageClass() {
    await storage.bucket(bucketName).setStorageClass(storageClass);

    console.log(
      `Storage class ${storageClass} have been set to ${bucketName}.`
    );
  }

  changeDefaultStorageClass().catch(console.error);
  // [END storage_change_default_storage_class]
}
main(...process.argv.slice(2));