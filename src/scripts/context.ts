import Clarity from '@microsoft/clarity';

// Track user sessions Clarity
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

// Add click listeners to every element with data-clarity-click attribute
document.querySelectorAll<HTMLElement>('[data-clarity-click]').forEach((element) => {
    element.addEventListener('click', () => {
        const eventName = element.getAttribute('data-clarity-click');
        if (eventName) {
            const events = eventName.split(' ');
            for (const event of events) {
                console.log(`Clarity event: ${event}`);
                try {
                    Clarity.event(`click.${event}`);
                } catch (error) {
                    console.error('Error sending Clarity event:', error);
                }
            }
        }
    });
});
