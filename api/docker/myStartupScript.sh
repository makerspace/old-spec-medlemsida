#!/bin/bash

# Make sure the webserver have write permissions
#chown -R www-data:www-data /var/www/html/storage/
#chown -R www-data:www-data /var/www/html/bootstrap/cache/

# Start HHVM
/usr/bin/hhvm -m server --config /etc/hhvm/server.hdf --config /etc/hhvm/site.ini -vServer.AllowRunAsRoot=1