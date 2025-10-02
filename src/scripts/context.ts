import Clarity from '@microsoft/clarity';

const projectId = import.meta.env.PUBLIC_MS_CLARITY_PROJECT_ID;
if (projectId) {
    Clarity.init(projectId);

    let userId = localStorage.getItem('userId');
    if (!userId) {
        userId = crypto.randomUUID();
        localStorage.setItem('userId', userId);
    }
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
        sessionId = crypto.randomUUID();
        sessionStorage.setItem('sessionId', sessionId);
    }
    const pageId = window.location.pathname;
    const friendlyName = document.title;
    Clarity.identify(userId, sessionId, pageId, friendlyName);
} else {
    console.warn('MS_CLARITY_PROJECT_ID is not set. Clarity will not be initialized.');
}
