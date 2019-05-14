#!/usr/bin/python

# Imports
import cgi, cgitb
import smtplib

# CGI error handling
cgitb.enable()
# cgitb.enable(display=0, logdir="/log/")

# Create instance of FieldStorage
# cgi.escape()
form = cgi.FieldStorage()

# Extract and velidate form data
if form.getvalue('name'):
  visitors_name = form.getvalue('name')

visitors_email = form.getvalue('email')

if form.getvalue('message'):
  visitors_message = form.getvalue('message')
else:
  visitors_message = "Empty message input field"


# Prepare email
email = """
Subject: A visitor mailed you from your website!
MIME-Version: 1.0
Content-type: text/html

<strong>Message from %s, mailto: %s</strong> <br><br>
<p>%s</p>
""" % (visitors_name, visitors_email, visitors_message)

# Send email
sender = "iwebsite@varsandnumbers.com"
receiver = "info@varsandnumbers.com"
p = "redirectService"
try:
  smptserver = smtplib.SMTP('alfa3216.alfahosting-server.de', 25)
  smtpserver.ehlo()
  smtpserver.starttls()
  smtpserver.ehlo()
  smtpserver.login(sender,p)
  smtpserver.sendmail(sender, receiver, email)
  smtpserver.close()
  # print "Successfully sent email"
except SMTPException:
  # print "Error: unable to send email"

# Display Thank-You page
print "Content-type:text/html\r\n\r\n"
print '<html>'
print '<head>'
print '<title>Hello World - First CGI Program</title>'
print '</head>'
print '<body>'
print '<h2> Test </h2>'
print '<h2>'+ visitors_name +'</h2>'
print '<p> ' + email + ' </p>'
print '</body>'
print '</html>'
