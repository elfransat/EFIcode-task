*** Settings ***
Documentation         Robot tests for assuring that the correct weather is recieved
Library           SeleniumLibrary

*** Tasks ***
Confirm website contains weather data
    Open website
    Page Should Contain Weather Data
    

*** Keywords ***
Open website
    Open Browser    http://localhost:3000/

Page Should Contain Weather Data
    Page Should Contain Element    xpath=//div[@class="weatherIcon"]

[Teardown]    Close Browser