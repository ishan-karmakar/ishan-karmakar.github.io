# Vlogger
Vlogger is a custom library made for FRC Valor 6800. It was made to communicate with the robot to retrieve logging information through two ways:
* **WPILog Files** - Vlogger uses a custom parser to read WPILog files and return the relevant fields to the user
* **NetworkTables 4** - Vlogger uses a custom websocket client to communicate with the robot *NetworkTables 4* server to retrieve live data from the robot
* **Phoenix 6 Diagnostic Server (in progress)** - It is planned to add support for communicating with the robot's *Phoenix 6 Diagnostic Server*

# Comparisons
Vlogger was inspired by [*AdvantageScope*](https://github.com/Mechanical-Advantage/AdvantageScope). The speed of WPILog parsing is similar between *AdvantageScope* and *Vlogger*, and is many times faster than the official *PyNTCore* package.

# Skills and Technologies
* Algorithms
* Logging
* Multiprocessing
* Python
* File Parsing
