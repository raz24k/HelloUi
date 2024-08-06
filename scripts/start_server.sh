sudo su
sudo sh /opt/tomcat9/bin/shutdown.sh
sudo rm -rf /opt/tomcat9/webapps/build/
sudo mv /home/ec2-user/app/build/ /opt/tomcat9/webapps
sudo sh /opt/tomcat9/bin/startup.sh
