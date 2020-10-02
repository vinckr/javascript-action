
const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/rest");
const { request } = require("@octokit/request");


try {

        //start


const octokit = new Octokit({
    auth: "97dcf1e91e7c97a1800c41f512e3ceddf128dead ",
    userAgent: 'Contributor List Action',
    });

async function getContribData() {
    console.log('calling');
    const result = await request("GET /users/:username/repos", {
        headers: {
          authorization: "97dcf1e91e7c97a1800c41f512e3ceddf128dead",
        },
        username: 'tacurran',  
      });
      console.log(`${result.data.length} repos found.`);
      console.log(`result: ${result.data}.`);
    console.log('resolved');
}
        //end
getContribData();

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
} 