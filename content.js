// On version request from the popup
chrome.runtime.onMessage.addListener(
    (message, sender, sendResponse) => {
        const metatags = [...document.head.getElementsByTagName("meta")];

        const wavTags = {}
  
        metatags.forEach(metatag => {
            const wavTag = [...metatag.attributes].find(
                attribute => attribute.value.startsWith("wav:")
            )

            if(!wavTag) return

            wavTags[wavTag.value.replace("wav:", "")] = metatag.attributes.getNamedItem("content").value
        })

        sendResponse(wavTags);
    }
);