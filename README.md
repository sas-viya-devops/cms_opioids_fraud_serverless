# cms_opioids_serverless

## Pre-requisites 
These depend on whether you want to deploy this application through either Docker, or run directly on your device.

1. ### Docker : 
   - Docker (either Windows or Linux, depending on where you want to run it)

2. ### Run directly : 
   - [node.js](https://nodejs.org/en/download/) : A server side JavaScript run time environment
   - [npm](https://www.npmjs.com/get-npm) : Node Package Manager, a package manager for the JavaScript programming language  

## Installation / Deployment instructions
1. On the Viya server assigned for this demo, [register your client](https://developer.sas.com/reference/auth/#register)
2. Edit these files as necessary
    1. If using Docker:
        1. Update the CLIENTID and VIYA_SERVER in overrides.env
    2. If running directly:
        1. Update auth.env with the CLIENTID and VIYA_SERVER
3. Ensure port 5000 is not in use (or assign a different port (difficult) if needed).
4. Instructions for running : 
    1. If using Docker:
        1. To build the app: 
            1. docker build -f Dockerfile -t cms .
            2. Or, As an npm shortcut: npm run buildapp
        2. To run the app:
            1. docker run -p 5000:8080  --env-file overrides.env  -t cms
            2. Or, as an npm shortcut: npm run runapp
        3. In future, instructions based on a Docker in the repository will be provided
    2. If running directly:
        1. npm run start
