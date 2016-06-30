// Open any url in the current tab
window.addEventListener('click',function(e){
    if(e.target.href !== undefined){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.update(tabs[0].id, {url:e.target.href})
        })
    }
})
