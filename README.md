# Lab 8 - Starter
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

Ans: Within a Github action that runs whenever code is pushed. Having it as part of the pipeline saves developers time and effort and it also ensures consistent testing throughout the development process.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

Ans: No. Unit test would be more appropriate.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Ans: No. This feature is more complicated than something that I would use a unit test to test.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Ans: Yes. This feature is simple enough that I would use a unit test to test.
