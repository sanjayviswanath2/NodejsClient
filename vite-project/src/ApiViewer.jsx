import * as tools from './tools.js'
import React, { useState } from "react";
//import * as crypto from 'crypto'
export default function ApiViewer() {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    //To get the list of all the country details:eg.
    //mUserId: 'GUEST',
    //mQryId: "countryqry",
    //mQryParams: []

    //To get the details of one country:eg.
    //mUserId: 'GUEST',
    //mQryId: "countryqry1",
    //mQryParams: ["IND"] : country code char(3)

    //To create a new category:eg.
    //mUserId: 'GUEST',
    //mQryId: "categoryins",
    //mQryParams: ["Sports"] : category name char(30)

    //To get the details of all the category excluding the inactive categories:eg.
    //mUserId: 'GUEST',
    //mQryId: "categoryqry",
    //mQryParams: []

    //To get the details of all the category including the inactive categories:eg.
    //mUserId: 'ADMIN',
    //mQryId: "categoryqry",
    //mQryParams: ['ADMIN'] user id : 'ADMIN'

    //To get the details of one category excluding the inactive categories:eg.
    //mUserId: 'GUEST',
    //mQryId: "categoryqry1",
    //mQryParams: [1]  : category id

    //To get the details of one category including the inactive categories:eg.
    //mUserId: 'ADMIN',
    //mQryId: "categoryqry1",
    //mQryParams: [1, 'ADMIN']  : category id, 'ADMIN'

    //To create a new payment currency:eg.
    //mUserId: 'ADMIN',
    //mQryId: "currencyins",
    //mQryParams: ['BWP','Pula'] : currency code char(3), currency name char(20)

    //To get the details of all the payment currencies:eg.
    //mUserId: 'GUEST',
    //mQryId: "currencyqry",
    //mQryParams: []

    //To get the details of one payment currency:eg.
    //mUserId: 'GUEST',
    //mQryId: "currencyqry1",
    //mQryParams: ['INR'] : currency code char(3)

    //To create a new payment option:eg.
    //mUserId: 'ADMIN',
    //mQryId: "paymentoptionsins",
    //mQryParams: ['INR','PAYTM'] : currency code char(3), payment option code(10 chars maximum)

    //To get the details of payment options for one currency:eg.
    //mUserId: 'GUEST',
    //mQryId: "paymentoptionsqry1",
    //mQryParams: ['INR'] currency code char(3)

    //To create new interesting categories:eg.
    //mUserId: 'ADMIN', - userid char(10)
    //mQryId: "interestcatgins",
    //mQryParams: [1,2] : category ids(numbers-in an array even if one single category is added)

    //To get the details of interesting categories for one user:eg.
    //mUserId: 'GUEST',
    //mQryId: "interestcatgqry1",
    //mQryParams: ['GUEST'] user id char(10)

    //To get the details of all the states for one country:eg.
    //mUserId: 'GUEST',
    //mQryId: "statesqry1",
    //mQryParams: ['IND'] country code char(3)

    //To get the details of one state in a country:eg.
    //mUserId: 'GUEST',
    //mQryId: "statesqry2",
    //mQryParams: ['IND', 'TN'] country code char(3), state code char(3)

    //To get the details of all the districts in a state in a country:eg.
    //mUserId: 'GUEST',
    //mQryId: "districtsqry1",
    //mQryParams: ['IND', 'TN'] country code char(3), state code char(3)

    //To get the details of one district in a state in a country:eg.
    //mUserId: 'GUEST',
    //mQryId: "districtsqry2",
    //mQryParams: ['IND', 'TN', 'TN001'] country code char(3), state code char(3), district code char(5)

    //To get the details of all the MP constituencies in a country:eg.
    //mUserId: 'GUEST',
    //mQryId: "mpconstituenciesqry1",
    //mQryParams: ['IND'] country code char(3)

    //To get the details of all the MP constituencies in a state in a country:eg.
    //mUserId: 'GUEST',
    //mQryId: "mpconstituenciesqry2",
    //mQryParams: ['IND', 'TN'] country code char(3), state code char(3)

    //To get the details of one MP constituency in a country:eg.
    //mUserId: 'GUEST',
    //mQryId: "mpconstituenciesqry3",
    //mQryParams: ['IND', 'TN', 'TN001'] country code char(3), state code char(3), constituency code char(5)

    //To get the details of all the MLA constituencies in a state in a country:eg.
    //mUserId: 'GUEST',
    //mQryId: "mlaconstituenciesqry1",
    //mQryParams: ['IND', 'TN'] country code char(3), state code char(3)

    //To get the details of one MLA constituency in a state in a country:eg.
    //mUserId: 'GUEST',
    //mQryId: "mlaconstituenciesqry2",
    //mQryParams: ['IND', 'TN', 'TN001'] country code char(3), state code char(3), constituency code char(5)

    //To create the plan details:eg.
    //mUserId: 'ADMIN',
    //mQryId: "planins",
    //mQryParams: [{planid:'TEST', name:'TEST', noofpolls:50,amount:10000, exclgst:10000, gst:0, cgst:0, sgst:0, freebee:5, sp_fromdate:'2026-03-01 12:00:00', sp_todate:'2026-03-31 12:00:00', validityperiod:12, editablevotecount:100, plantype:'P'}] //plantype:P for Polls, V for Votes 
    //planid VARCHAR(10),name CHAR(40),noofpolls INT, amount including gst DOUBLE, exclgst DOUBLE,gst DOUBLE,cgst DOUBLE,sgst DOUBLE, freebee int, sp_fromdate datetime,  sp_todate datetime, validityperiod int, editablevotecount int, plantype CHAR(1) default 'P' COMMENT 'P for Polls, V for Votes'

    //To update the plan details:eg.
    //mUserId: 'ADMIN',
    //mQryId: "planupd",
    //mQryParams: [{planid:'BASIC', name:'BASIC plan', noofpolls:0, amount:0, exclgst:0, gst:0, cgst:0, sgst:0, freebee:10, sp_fromdate:'2026-04-01 00:00:00', sp_todate:'2026-04-30 23:59:59', validityperiod:12, editablevotecount:200, plantype:'P'}]
    //planid VARCHAR(10),name VARCHAR(40),noofpolls INT, amount including gst DOUBLE, exclgst DOUBLE,gst DOUBLE,cgst DOUBLE,sgst DOUBLE, freebee int, sp_fromdate datetime,  sp_todate datetime, validityperiod int, editablevotecount int, plantype CHAR(1) default 'P' COMMENT 'P for Polls, V for Votes'

    //To get the details of all the Plans excluding the inactive categories including the subscriber count per plan (All):eg.
    //mUserId: 'GUEST',
    //mQryId: "planqry",
    //mQryParams: []/[{plantype:'P'}] plantype char(1) default 'P' COMMENT 'P for Polls, V for Votes'. If no plantype is given, all types of plans will be fetched.

    //To get the details of all Plans including the inactive categories including the subscriber count per plan (All):eg.
    //mUserId: 'ADMIN',
    //mQryId: "planqry",
    //mQryParams: [{userId: 'ADMIN'}]/ [{userId: 'ADMIN', plantype: 'P'}] user id varchar(18), plantype char(1) default 'P' COMMENT 'P for Polls, V for Votes'. If no plantype is given, all types of plans will be fetched.

    //To get the details of one Plan excluding the inactive categories including the subscriber count:eg.
    //mUserId: 'GUEST',
    //mQryId: "planqry1",
    //mQryParams: ['BASIC'] planid char(10)

    //To get the details of one Plan including the inactive categories including the subscriber count:eg.
    //mUserId: 'ADMIN',
    //mQryId: "planqry1",
    //mQryParams: ['BASIC', 'ADMIN'] planid char(10), ADMIN

    //To get the details of a parameter:eg.
    //mUserId: 'GUEST',
    //mQryId: "paramqry1",
    //mQryParams: ['ADMINUSERID'] ctrlparam char(15)

    //To get the details of all the Polls of a category:eg.
    //mUserId: 'GUEST',
    //mQryId: "catgpollqry1",
    //mQryParams: [1] categoryid int

    //To create a new poll details:/apiuserupd eg.
    //mUserId: 'GUEST',
    //mQryId: "pollins", 
    //mQryParams: [{poll_title:'My third test poll', poll_description:'My third test poll. for testing',is_active:'Y',createdby:'ADMIN',createdfor:'GUEST',status:'N',polltype:'M',effectivefrom:'2026-03-01 00:00:00', effectiveto:'2026-05-31 23:59:59', country_code:'IND', state_code:'TN', district_code:'TN001', options:['A','B','C','D','E'],pollcategory:[1,2]}]

    //`poll_title` VARCHAR(255),`poll_description` TEXT,`is_active` CHAR(1) DEFAULT 'Y' COMMENT 'if Y, active, otherwise it is banned or obsolete',
    //`createdby` VARCHAR(10) ,`createdfor` VARCHAR(10),`status` CHAR(1) COMMENT 'if Y, it is authoried otherwise it is pending',`polltype` CHAR(1) DEFAULT 'M' COMMENT 'M for Many(pairwise comparison) and O for One',
    //`effectivefrom` DATETIME, `effectiveto` DATETIME, country_code char(3), state_code char(3), district_code char(5), polloptions [], categories []

    //To update the poll details:eg.
    //mUserId: 'ADMIN',
    //mQryId: "pollupd",
    //mQryParams: [{pollid:5, noof_option:5, is_active:'Y', createdby:'ADMIN', createdfor:'GUEST',status:'N', polltype:'M', country_code:'IND', state_code:'TN', district_code:'TN001'}]

    //To get the details of all the polls:eg.
    //mUserId: 'GUEST',
    //mQryId: "pollqry1",
    //mQryParams: ['L'] 'L' for Live, 'A' for all, 'B' for banned, 'E' for expired, 'P' for pending authorization

    //To get the details of one category of polls:eg.
    //mUserId: 'GUEST',
    //mQryId: "pollqry2",
    //mQryParams: [1,'L'] categoryid int, 'L' for Live, 'A' for all, 'B' for banned, 'E' for expired, 'P' for pending authorization

    //To get the details of one poll:eg.
    //mUserId: 'GUEST',
    //mQryId: "pollqry1a',
    //mQryParams: [1] pollid int

    //To get all the polls of a user who has voted so far
    //mUserId: '__self',
    //mQryId: "uservotedpollqry1',
    //mQryParams: [id:'9342800844'] user id char(10)

    //To update an existing poll's categories. All the old categories for that poll will be deleted and the new list will be added again.
    //mUserId: 'ADMIN',
    //mQryId: "pollcatgins",
    //mQryParams: [1,[5,6,7]] categoryid int, pollid[] int

    //To create a new user details:/apiuserupd
    //mUserId: 'ADMIN',
    //mQryId: "userins",
    //mQryParams: [{id:'93428008t2', name:'Testplanwith5freebees', email:'test123@gmail.com', sex:'M', usertype:'U', isloggedin:'Y', is_active:'Y', country_code:'IND', state_code:'TN', district_code:'TN030', mpconstituency:'TN030', mlaconstituency:'', divcode:'TN225', lastaccessed:'2026-03-22 01:30:00',	dateofbirth:'1972-02-05', planid:'TEST', paidfrom:'PAYTM', fromaccount:'123@paytm', language:'ENG', availableeditablevotes:100, expirydate:'2026-07-31'}]
    //id VARCHAR(13), name VARCHAR(40), email VARCHAR(50), sex CHAR(1), usertype CHAR(1), isloggedin CHAR(1), is_active CHAR(1),	country_code CHAR(3),
    //state_code CHAR(3),	district_code CHAR(5), mpconstituency CHAR(5), mlaconstituency CHAR(5), divcode VARCHAR(30), lastaccessed DATETIME,
    //dateofbirth DATE, planid VARCHAR(10), paidfrom varchar(10), fromaccount varchar(50), language CHAR(3), (must not include availableeditablevotes, expirydate)

    //To update an existing user details:/apiuserupd
    //mUserId: '__self',
    //mQryId: "userupd",
    //mQryParams: [{id:'93428008t2', name:'Testplanwith5freebees', sex:'M', usertype:'U', isloggedin:'N', is_active:'Y', country_code:'IND', state_code:'TN', district_code:'TN030', mpconstituency:'TN030', mlaconstituency:'TN225', divcode:'', lastaccessed:'2026-03-23 22:30:00',	dateofbirth:'1972-02-05', language:'ENG'}]

    //To get the user details for one single user:/apiquery
    //mUserId: 'GUEST',
    //mQryId: "userqry1",
    //mQryParams: [id:'9342800844'] user id char(10)

    //To get the countrywise user count for the entire world:/apiquery
    //mUserId: 'GUEST',
    //mQryId: "usercountqry",
    //mQryParams: []

    //To get the statewise user count for one full country:/apiquery
    //mUserId: 'GUEST',
    //mQryId: "usercountqry1",
    //mQryParams: ['IND'] country_code char(3)

    //To get the districtwise user count for one full state of a country:/apiquery
    //mUserId: 'GUEST',
    //mQryId: "usercountqry2",
    //mQryParams: ['IND', 'TN'] country_code char(3), state_code char(3)

    //To get the MP constituencywise user count for one full state of a country:/apiquery
    //mUserId: 'GUEST',
    //mQryId: "usercountqry2a",
    //mQryParams: ['IND', 'TN'] country_code char(3), state_code char(3)

    //To get the MLA constituencywise user count for one full state of a country:/apiquery
    //mUserId: 'GUEST',
    //mQryId: "usercountqry2b",
    //mQryParams: ['IND', 'TN'] country_code char(3), state_code char(3)

    //To recharge an existing user with a plan:/apiuserupd
    //mUserId: '__self',
    //mQryId: "polluserins",
    //mQryParams: [{userid:'93428008t2', planid:'TEST', paidfrom:'PAYTM', fromaccount:'123@paytm'}]
    //userid (user id) VARCHAR(10),planid VARCHAR(10), paidfrom VARCHAR(10), fromaccount VARCHAR(40)

    //To vote eg:/apiuserupd
    //mUserId: '__self',
    //mQryId: "voteins",
    //mQryParams: [{ pollid: 5, userid: '9342800844', pairvotes:'Y,Y,N,N,Y,Y,Y,N,Y,Y' }]
    //pollid int, userid (user id) VARCHAR(10), pairvotes: comma delimmited string. if first option is better than the second option then 'Y'. if second option is better than the first option ''/'N'.

    //To edit vote eg:/apiuserupd
    //mUserId: '__self',
    //mQryId: "voteupd",
    //mQryParams: [{ pollid: 5, userid: '9342800844', pairvotes:'Y,N,Y,N,Y,Y,Y,N,Y,Y' }]
    //pollid int, userid (user id) VARCHAR(10), pairvotes: comma delimmited string. if first option is better than the second option then 'Y'. if second option is better than the first option ''/'N'.

    //To get the vote details for the purpose editing the his vote.eg:/apiuserupd
    //mUserId: '__self',
    //mQryId: "votesqry2",
    //mQryParams: [5, '9342800844']
    //pollid int, userid (user id) VARCHAR(10)

    //To get the result of a poll eg.
    //mUserId: '9342800844',
    //mQryId: "pollvotesqry1",
    //mQryParams: [5] pollid int

    //To vaerify the password and update login status eg.
    //mUserId: '9342800844',
    //mQryId: "loginupd2",
    //mQryParams: ['9342800844', '']

    // const mpwd = hashit('Abcdefghij') //GSVeiYAqRGdauAaPxbXQADOhaPmAnM
    // const postData = {
    //     mUserId: '9342800844',
    //     mQryId: "userupd",
    //     mQryParams: [{ id: '9342800844', divcode: mpwd }]
    // };

    //To create a new comment eg.
    //mUserId: '9020608080',
    //mQryId: "commentins",
    //mQryParams: [{ pollid:20, userid: '9020608080', commenttext: 'This is a test comment' }]

    //To update an existing comment with a reply eg.
    //mUserId: '9020608080',
    //mQryId: "replyupd",
    //mQryParams: [{ commentid: 1, reply:'This is a test reply' }]

    //To get the comments of a poll eg.
    //mUserId: 'GUEST',
    //mQryId: "commentqry1",
    //mQryParams: [20] // pollid int

    //To create an objection raised for a particular poll:eg.
    //mUserId: '93428008t5',
    //mQryId: "objectionins",
    //mQryParams: [{pollid:20, userid:'', objections:'This is an objection 3'}]
    // status defaults to 'pending'

    //To list all objections (Admin Reports). Optional status filter: pending|reviewed|dismissed|all
    //mUserId: 'ADMIN',
    //mQryId: "objectionqry",
    //mQryParams: []  // or ['pending']

    //To update objection moderation status (apiadminupd):
    //mUserId: 'ADMIN',
    //mQryId: "objectionupd",
    //mQryParams: [{ id: 1, status: 'reviewed' }]

    //To create an invoice for the plan recharge by one user:eg.
    // mUserId: '93428008t5',
    // mQryId: "polluserins",
    // mQryParams: [{userid:'93428008t5', planid:'10', paidfrom:'PAYTM', fromaccount:'123@paytm'}]

    //To get the details of all the plans recharged by one user:eg.
    //mUserId: '93428008t5',
    //mQryId: "planrechargeqry1",
    //mQryParams: ['93428008t5'] userid char(18)

    //To get the details of all the objections raised for a particular poll:eg.
    //mUserId: '93428008t5',
    //mQryId: "objectionqry1",
    //mQryParams: [20] pollid int

    //To create a new notification
    // mUserId: 'ADMIN',
    // mQryId: "notificationins",
    // mQryParams: [{notificationtext:'This is a notification text', categoryid:1, pollid:20, country_code:'IND', state_code:'TN', district_code:'TN030', mpconstituency:'TN030', mlaconstituency:'TN225', expirydate:'2026-07-31 12:00:00'}]

    //To update an existing notification details
    // mUserId: 'ADMIN',
    // mQryId: "notificationupd",
    // mQryParams: [{ id:1, notificationtext:'This is a test upd notification text', categoryid:1, pollid:20, country_code:'IND', state_code:'TN', district_code:'TN030', mpconstituency:'TN030', mlaconstituency:'TN225', expirydate:'2026-07-31 00:00:00'}]

    //To delete an existing notification
    // mUserId: 'ADMIN',
    // mQryId: "notificationdel",
    // mQryParams: [1]

    //To create a new language
    // mUserId: 'ADMIN',
    // mQryId: "languageins",
    // mQryParams: [{code:'TLG', language:'TELUGU', fontname:'font1'}]

    //To update an existing language
    // mUserId: 'ADMIN',
    // mQryId: "languageupd",
    // mQryParams: [{code:'TLG', language:'TELUG', fontname:'font2'}]

    //To delete an existing language
    // mUserId: 'ADMIN',
    // mQryId: "languagedel",
    // mQryParams: ['TLG']

    // To get notification for one user
    // mUserId: '9020608080',
    // mQryId: "notificationqry1",
    // mQryParams: ['9020608080']

    // To get notification for one poll
    // mUserId: '9020608080',
    // mQryId: "notificationpollqry1",
    // mQryParams: ['9020608080', 20]

    // Admin: list all notifications
    // mUserId: 'ADMIN',
    // mQryId: "notificationqry",
    // mQryParams: []

    // User: delivered inbox (call notificationqry1 first to pull new)
    // mUserId: '9020608080',
    // mQryId: "notificationinboxqry",
    // mQryParams: ['9020608080']

    // User: unread count for bell badge (does not mark as delivered)
    // mUserId: '9020608080',
    // mQryId: "notificationcountqry1",
    // mQryParams: ['9020608080']

    // To get the list of all languages.
    // mUserId: '9020608080',
    // mQryId: "languageqry",
    // mQryParams: []

    // To get the details of one language.
    // mUserId: '9020608080',
    // mQryId: "languageqry1",
    // mQryParams: ['TML']

    // To get the daily voters count for a period of time.
    // mUserId: '93428008t5',
    // mQryId: "voterdailycountqry2",
    // mQryParams: ['2025-07-31', '2026-05-07']

    // To get the sex-vise poll-vise voters count for a period of time. Just the participation count, not the Poll result.
    //If no parameters are given, get the details for the entire data. If one parameter is given, filtered based on Pollid.
    //If three parameters are given, the first parameter is treated as the Pollid and the other two are From Date and To Date.
    // mUserId: '93428008t5',
    // mQryId: "voterpollsexcountqry2",
    // mQryParams: [24, '2025-01-01', '2026-07-31']

    // To get the vote details of a poll country-vise, state-vise, sex-vise and age-vise.
    // mUserId: '93428008t5',
    // mQryId: "pollvotesstatesagesexqry1",
    // mQryParams: [27]

    // To send otp
    // mUserId: '9342800844',
    // mQryId: 'sendotpemail1',
    // mQryParams: ['tradeview1972@gmail.com'] email address

    // To verify otp
    // mUserId: '9342800844',
    // mQryId: 'verifyotp2',
    // mQryParams: ['tradeview1972@gmail.com', '666281'] email address, otp

    // If the system is configured for paid votes, decrement the available votes for the user
    // mUserId: '9342800844',
    // mQryId: "ifCanVote",
    // mQryParams: ['9342800844']

    //const apiUrl = "https://api.theballoter.com/apiquery"
    const apiUrl = "http://localhost:5000/apiquery"
    //const apiUrl = "https://darkslateblue-pelican-294300.hostingersite.com/apiquery"
    //const apiUrl = "http://localhost:5000/apiuserupd"
    //const apiUrl = "https://api.theballoter.com/apiuserupd"
    //const apiUrl = "https://darkslateblue-pelican-294300.hostingersite.com/apiuserupd"
    //const apiUrl = "http://localhost:5000/apiadminupd"

    const postData = { // If the system is configured for paid votes, decrement the available votes for the user
        mUserId: '1',
        mQryId: "getPaidVoteUpdSqlStrArray",
        mQryParams: ['1','100', 'yes' ]
    };

    const fetchData = async () => {
        if (!apiUrl) return;
        setLoading(true);
        try {
            //const response = await fetch(apiUrl);
            const response = await fetch(apiUrl, {
                method: 'POST', // Specify the method
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8', // Indicate the body format
                },
                body: tools.encryptData(JSON.stringify(postData)), // Convert the JavaScript object to a JSON string
            });
            const json = await response.json();
            setData(tools.decryptData(JSON.stringify(json, null, 2)));
            //console.log(data);
        } catch (error) {
            console.error("An unexpected error occurred in tools:", error);
            setData([{ Error: error.message }]);
        }
        setLoading(false);
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>API JSON Viewer</h2>
            <input
                type="text"
                placeholder="Enter API URL"
                value={apiUrl}
                style={{ width: "400px", marginRight: "10px" }}
            />

            <button onClick={fetchData}>
                {loading ? "Loading..." : "Fetch API"}
            </button>

            <div style={{ marginTop: "20px" }}>
                <textarea
                    value={data}
                    readOnly
                    rows={20}
                    cols={80}
                />
            </div>
        </div>
    );
}

function hashit(pText) { //must be used only for password encryption
    let hash = 0, i = 0, mcnt = 0, char = 0, mStr = '', mHashStr = '', mPosCounter = 1;
    try {
        pText = pText + '123456789012345678901234567890'
        pText = pText.substring(0, 30)
        mcnt = pText.length
        for (i = 0; i < mcnt; i++) {
            char = pText.charCodeAt(i);
            char = char * (i + 1) * 256
            hash += char;
        }
        mStr = String(hash)
        do {
            mStr += mStr
        } while (mStr.length <= 30)
        mStr = mStr.substring(0, 30)
        mcnt = mStr.length
        //65 - 90, 97 - 122
        for (i = 0; i < mcnt; i++) {
            char = Number(mStr.slice(i, i + 1));
            char = (char * mPosCounter++) + 65
            char = char % 129 //maximum will be 128
            if (char < 65) {
                char += 65
            }
            if (char > 90 && char < 97) {
                char += 6
            }
            if (char > 122 && char <= 130) {
                char = char - 123 + 65
            }

            //if (mPosCounter > 7) { mPosCounter = 1 }
            mHashStr += String.fromCharCode(char);
        }
    } catch (error) {
        mHashStr = 'error'
        console.error(error)
    }
    return mHashStr;
}

// function uselesshashit(pText) {
//     sha256(pText).then(hash => {
//         console.log('hash', hash)
//         return hash;
//     }
//     );
// }

// async function sha256(message) {
//     // Encode the message as UTF-8 bytes
//     const msgBuffer = new TextEncoder().encode(message);

//     // Hash the message
//     const hashBuffer = await window.crypto.subtle.digest('SHA-256', msgBuffer);

//     // Convert ArrayBuffer to Array
//     const hashArray = Array.from(new Uint8Array(hashBuffer));

//     // Convert bytes to hex string
//     const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
//     return hashHex;
// }

// function xsha256(message) {
//     try {
//         const hash = crypto.createHash('sha256');
//         console.log(message)
//         hash.update(message);
//         //return hash.digest('hex');

// //         hash = crypto.getHashes();

// // x = "Geek"
// // hashPwd = crypto.createHash('sha1')
// //     .update(x).digest('hex');

//     } catch (error) {
//         console.error(error)
//     }
// }
// Call with a get method
// ~~~~~~~~~~~~~~~~~~~~~~
// async function fetchDataWithParams() {
//   const apiUrl = 'https://jsonplaceholder.typicode.com/comments'; // Example endpoint
//   const queryParams = {
//     postId: 1,
//     limit: 5
//   };

//   // Construct the full URL with query parameters
//   const queryString = new URLSearchParams(queryParams).toString();
//   const fullUrl = `${apiUrl}?${queryString}`; // Concatenate the URL and the query string

//   try {
//     const response = await fetch(fullUrl);

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log('Fetched data:', data);
//   } catch (error) {
//     console.error('Error fetching data:', error.message);
//   }
// }

// fetchDataWithParams();



// Call with a post method
// ~~~~~~~~~~~~~~~~~~~~~~~
// async function postDataWithParams() {
//   const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Example endpoint
//   const postData = {
//     title: 'foo',
//     body: 'bar',
//     userId: 1
//   };

//   try {
//     const response = await fetch(apiUrl, {
//       method: 'POST', // Specify the method
//       headers: {
//         'Content-Type': 'application/json; charset=UTF-8', // Indicate the body format
//       },
//       body: JSON.stringify(postData), // Convert the JavaScript object to a JSON string
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log('Success (posted data):', result);
//   } catch (error) {
//     console.error('Error posting data:', error.message);
//   }
// }

// postDataWithParams();
