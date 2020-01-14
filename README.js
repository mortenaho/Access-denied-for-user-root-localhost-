# Access-denied-for-user-root-localhost-

step 1.
sudo mysql -u root -p
step 2.
USE mysql;

step 3.
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'new-password';

Here 'new-password' is your new password, yo can change it.

step 4.
exit;
Thanks. You are done.
