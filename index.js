
const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/rest");
const { request } = require("@octokit/request");


try {

        //start
        

    async function getContribData() {
        console.log('starting getting data');
        const result = await request("GET /repos/:owner/:repo/contributors", {
            headers: {
              authorization: "asd",
            },
            owner: "ory",
            repo: "kratos",
          });
          console.log(`${result.data.length} repos found.`);
          console.log(`result: ${result.data}`);
          console.log('end getting data');
    }
        //end

getContribData();

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
} 