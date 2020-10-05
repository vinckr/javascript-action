
const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/rest");
const { request } = require("@octokit/request");


const octokit = new Octokit({
    auth: "c65e4e7471903d2fd5cf6e6d975711f8288f063b",
    userAgent: 'actions test',
    timeZone: 'Europe/Amsterdam',
    baseUrl: 'https://api.github.com',

    log: {
        debug: () => {},
        info: () => {},
        warn: console.warn,
        error: console.error
      },
      request: {
        agent: undefined,
        fetch: undefined,
        timeout: 0
      }
    })

<<<<<<< Updated upstream
    async function getContribData() {
        console.log('starting getting data');
        const result = await request("GET /repos/:owner/:repo/contributors", {
            headers: {
              authorization: "97dcf1e91e7c97a1800c41f512e3ceddf128dead",
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
=======
async function TestRequest() {
  const TestData = octokit.repos.listContributors({
    owner: 'ory',
    repo: 'kratos',
  });
  return {TestData}
}
console.log('starting getting data');
console.log(TestRequest);
console.log('end getting data');
>>>>>>> Stashed changes
