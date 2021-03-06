# drivetest-check
Script to check whether ON DriveTest Centres have opened (as closure restrictions due to the COVID-19 pandemic gradually ease). Written with the Nightmare.js library and the node.js framework. 

The script scrapes information from the [home page](https://drivetest.ca/) of the DriveTest Centres. 

Note: Since the publishing of this repository, DriveTest centres have officially opened, albeit with physical distancing measures. 

## Installation
1. Clone or download this repository
2. Install node.js 
3. In a terminal, run `npm ci` in the directory of this repo (requires >= npm v5.7.1)

## Usage
Run `node index.js`. The information appears in the console. 

## Sample Output
```
https://drivetest.ca/
Checking for status...

All DriveTest locations are closed due to COVID-19.
For frequently asked questions or more updates from DriveTest on Coronavirus (COVID-19) click here.
```

If a navigation error occurs, try terminating and running the script again. 

