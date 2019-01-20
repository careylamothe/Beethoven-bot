'use strict';

// var supportalURL = 'https://confluence.disney.com/display/DTSSBDE/Supportal+Ticket+Template';
// var supportQ = 'https://supportal-jira.disney.com/secure/Dashboard.jspa?selectPageId=14602';
// var jenkinsBuild = 'https://confluence.disney.com/display/DTSSBDE/Jenkins+Build+Troubleshooting+FAQ';
// var jenkinsFaq = 'https://confluence.disney.com/display/DTSSBDE/Jenkins+2.0+Frequently+Asked+Questions';
// var jarvis = 'https://confluence.disney.com/display/DTSSBDE/FAQhttps://confluence.disney.com/display/DTSSBDE/FAQ';
// var distelli = 'https://confluence.disney.com/pages/viewpage.action?pageId=317231990';

module.exports = {
    slackevents: 'interactive_message_callback',
    callback : function(bot, message) {

        var ids = message.callack_id.split(/\-/);
        var user_id = ids[0];
        var item_id = ids[1];

        console.log(user_id, item_id);
    }
};
