$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Parag/PrjectIVF/BDDProject/src/main/java/features/CRMTest.feature");
formatter.feature({
  "line": 1,
  "name": "CRMLogin",
  "description": "",
  "id": "crmlogin",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "CRMLoginTest",
  "description": "",
  "id": "crmlogin;crmlogintest",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Login page Title is CRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "userisonHomePage\"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "crmlogin;crmlogintest;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8,
      "id": "crmlogin;crmlogintest;;1"
    },
    {
      "cells": [
        "meetparag81",
        "pBorprg$81"
      ],
      "line": 9,
      "id": "crmlogin;crmlogintest;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "CRMLoginTest",
  "description": "",
  "id": "crmlogin;crmlogintest;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Login page Title is CRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "userisonHomePage\"meetparag81\" and \"pBorprg$81\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 9289317923,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.login_page_Title_is_CRM()"
});
formatter.result({
  "duration": 122969859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "meetparag81",
      "offset": 17
    },
    {
      "val": "pBorprg$81",
      "offset": 35
    }
  ],
  "location": "StepDefination.userisonHomePageTest(String,String)"
});
formatter.result({
  "duration": 391986704,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cinput type\u003d\"submit\" value\u003d\"Login\" class\u003d\"btn btn-small\"\u003e is not clickable at point (916, 117). Other element would receive the click: \u003cdiv id\u003d\"preloader\" style\u003d\"opacity: 0.513611;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d65.0.3325.162)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027IVF111\u0027, ip: \u0027192.168.1.56\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dWIN8_1, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\paragb\\AppData\\Local\\Temp\\scoped_dir11944_22433}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d65.0.3325.162, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 20c0c181bfc887f1186bc41518f4796b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat com_FB_Pages.LoginPage.LogintoFB(LoginPage.java:45)\r\n\tat StepDefinations.StepDefination.userisonHomePageTest(StepDefination.java:35)\r\n\tat ✽.Then userisonHomePage\"meetparag81\" and \"pBorprg$81\"(C:/Parag/PrjectIVF/BDDProject/src/main/java/features/CRMTest.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefination.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});