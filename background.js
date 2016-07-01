// Periodically check all websites
chrome.alarms.create("this is a alarm", {
    delayInMinutes: 0,
    periodInMinutes: 1
})

chrome.alarms.onAlarm.addListener(function(alarm) {
    console.log(alarm)
})
