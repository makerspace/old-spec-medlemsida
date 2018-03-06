FROM hhvm/hhvm:3.24.3
MAINTAINER Christian Antila <christian.antila@gmail.com>

# HHVM configuration files
ADD ./docker/static.mime-types.hdf /etc/hhvm/static.mime-types.hdf
ADD ./docker/server.hdf /etc/hhvm/server.hdf
RUN touch /etc/hhvm/site.ini

EXPOSE 80

COPY ./docker/myStartupScript.sh /usr/local/myscripts/myStartupScript.sh
CMD ["/usr/local/myscripts/myStartupScript.sh"]