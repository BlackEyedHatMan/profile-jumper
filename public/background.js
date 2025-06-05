chrome.webNavigation.onBeforeNavigate.addListener(async (details) => {
    if (details.frameId === 0) {
        await checkAndBlockUrl(details.url, details.tabId);
    }
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (changeInfo.url) {
        await checkAndBlockUrl(changeInfo.url, tabId);
    }
});

async function checkAndBlockUrl(url, tabId) {
    try {
        if (url.includes('chrome-extension://') && url.includes('#blocked')) {
            return;
        }

        const result = await chrome.storage.local.get(['profiles']);
        const profiles = result.profiles || [];
        const blockedProfile = findBlockedProfile(url, profiles);

        if (blockedProfile) {
            const isWithinTime = isWithinBlockingTime(blockedProfile.block);
            if (isWithinTime) {
                await redirectToBlockedRoute(tabId, blockedProfile, url);
            }
        }
    } catch (error) {
        console.error('Error in background script:', error);
    }
}

function findBlockedProfile(currentUrl, profiles) {
    return profiles.find(profile => {
        if (!profile.block) {
            return false;
        }

        const profileBaseUrl = extractBaseUrl(profile.url);
        const currentBaseUrl = extractBaseUrl(currentUrl);
        return profileBaseUrl && currentBaseUrl && profileBaseUrl === currentBaseUrl;
    });
}

function extractBaseUrl(url) {
    try {
        const urlObj = new URL(url);
        return `${urlObj.protocol}//${urlObj.hostname}`;
    } catch (error) {
        return null;
    }
}

function isWithinBlockingTime(blockData) {
    if (!blockData || !blockData.startTime || !blockData.endTime) {
        return false;
    }

    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes(); // Convert to minutes
    const startTime = parseTimeToMinutes(blockData.startTime);
    const endTime = parseTimeToMinutes(blockData.endTime);

    if (startTime === null || endTime === null) {
        return false;
    }

    if (startTime <= endTime) {
        return currentTime >= startTime && currentTime <= endTime;
    } else {
        return currentTime >= startTime || currentTime <= endTime;
    }
}

function parseTimeToMinutes(timeString) {
    if (!timeString) return null;

    const timeParts = timeString.split(':');
    if (timeParts.length !== 2) return null;

    const hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);

    if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        return null;
    }

    return hours * 60 + minutes;
}

async function redirectToBlockedRoute(tabId, blockedProfile, originalUrl) {
    try {
        const extensionUrl = chrome.runtime.getURL('index.html');

        const blockedUrl = `${extensionUrl}#blocked?` +
            `profileTitle=${encodeURIComponent(blockedProfile.title || 'Website')}&` +
            `originalUrl=${encodeURIComponent(originalUrl)}&` +
            `startTime=${encodeURIComponent(blockedProfile.block.startTime)}&` +
            `endTime=${encodeURIComponent(blockedProfile.block.endTime)}&` +
            `profileId=${encodeURIComponent(blockedProfile.id)}`;

        await chrome.tabs.update(tabId, {url: blockedUrl});
    } catch (error) {
        console.error('Error redirecting to blocked route:', error);
    }
}

// Handle extension installation/startup
chrome.runtime.onInstalled.addListener(() => {
});