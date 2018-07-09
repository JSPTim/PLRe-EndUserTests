describe('Home page', function () {

    // it('should render home page', function(){
    //     browser.url('http://northwaveVPNuser:Tuesday8th!@sharepoint');
    //     browser.url('http://sharepoint/DC/WF/BLS/SitePages/SecurityReportsHome.aspx');
    //     browser.waitForVisible('#ActivelistContent');
    // });

    it('should reorder the stage column and add the correct class to the header', () => {

        browser.url('http://northwaveVPNuser:Tuesday8th!@sharepoint');
        browser.url('http://sharepoint/DC/WF/BLS/SitePages/SecurityReportsHome.aspx');
        browser.waitForVisible('#ActivelistContent th[data-source="wfSubStage"] span')
        browser.click('#ActivelistContent th[data-source="wfSubStage"] span');
        //browser.click('#ActivelistContent th[data-source="wfSubStage"] span');
        const texts = browser.getText('#ActivelistContent table tbody tr td[data-source="wfSubStage"]');

        for (var i = 1; i< texts.length; i++){
            expect(texts[i-1] <= texts[i]).toBe(true)
        }
    });
})