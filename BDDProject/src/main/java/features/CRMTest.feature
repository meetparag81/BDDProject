Feature: CRMLogin
Scenario Outline: CRMLoginTest
Given user is already on login page
When Login page Title is CRM
Then userisonHomePage"<username>" and "<password>"
Then user close the browser
 Examples:
	| username | password |
	| meetparag81| pBorprg$81 |