#!/bin/sh

# This file fixes NodeJS issue - enospc: System limit for number of file watchers reached, watch ...
# NOTE: This solution is not persistent. Read more at https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers#the-technical-details
# NOTE: Must run as root

sysctl fs.inotify.max_user_watches=524288
sysctl -p
