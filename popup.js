// Open any url in the current tab
window.addEventListener('click',function(e){
    if(e.target.href !== undefined){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            console.log("open a url");
            chrome.tabs.update(tabs[0].id, {url:e.target.href});
        });
    }
});

// Set name by enter in the text field and press enter
$(document).ready(function () {
    // Read from storage and resume last action
    resume();

    $(document).keypress(function(e) {
        if (e.keyCode == '13') {
            e.preventDefault(); //Stops the default action for the key pressed
            setName();
            return false; //extra caution, may not be necessary
        }
    })
})

function resume() {
    chrome.storage.sync.get("name", function(name) {
        if (chrome.runtime.error) {
            console.log("Runtime error.");
        }

        console.log("retrive name " + name + " from storage");
        displayName(name);
    });
}

function setName() {
    console.log("setting name");
    var nameSet = document.getElementById("nameSet");
    var name = nameSet.value;

    chrome.storage.sync.set({"name": name}, function() {
        if (chrome.runtime.error) {
            console.log("Runtime error.");
        }

	console.log("name " + name + " set");
        displayName(name);
    });
}

function displayName(name) {
    var nameGet = document.getElementById("nameGet");
    nameGet.innerHTML = name;
    nameSet.value = "";
}
