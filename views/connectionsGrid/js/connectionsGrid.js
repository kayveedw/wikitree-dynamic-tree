export class ConnectionsGrid {
    static #helpText = `
    <x>[ x ]</x>
    <h2 style="text-align: center">About Connections Grid</h2>
    <p>
        CC7 Views allows you to retrieve the list of people connected to a profile within 7 degrees.
        This guide explains how to use it.
    </p>
    <h3>Loading the Data</h3>
    <p>
        Depending on the number of connections, the data can take over two minutes to load fully,
        sometimes more than 5 minutes. Furthermore, WikiTree currently has a limit of about 10000
        profiles that can be retrieved, so for anyone with large numbers of connections, not all
        connections can be retrieved.
        To reduce loading time, you can:
    </p>
    <ul>
        <li>Load fewer than the full 7 degrees.</li>
        <li>Load only one degree at a time, but be aware that, in order to provide the correct relative
            counts, we have to load degree N-1 and N+1 when loading degree N.</li>
        <li>Save the data to a file for faster loading next time.</li>
        <li>If it takes too long, or you entered the wrong degree, you can cancel the profile load via
            the Cancel button that appears during a load.</li>
    </ul>
    <h3>Views</h3>
    <p>
        Three different views of the data are available:
    </p>
    <ul>
        <li>
            The <b>Table View</b> shows the most data and will always load first. It shows, amongst other things,
            the degree of separation between the focal person and each person on the list.
        </li>
        <li>The <b>Hierarchy View</b> shows the hierarchial relationships between the people in the list.</li>
        <li>The <b>List View</b> provides a way by which you can look at particular surnames amongst your relatives.</li>
    </ul>
    <p>Below are some tips related to each view.</p>
    <h3>Table View</h3>
    <h4>Sorting the Table</h4>
    <ul>
        <li>Sort any column by clicking the header. Click again to reverse the sorting.</li>
        <li>
            Sort by Created/Modified to see new additions.
        </li>
        <li>
            The location column sort toggles between sorting Town &rarr; Country or Country &rarr; Town on each click
            on location header.
        </li>
    </ul>
    <h4>Scrolling the Wide Table</h4>
    <ul>
        <li>Click and drag the table left/right or two-finger drag on a trackpad.</li>
    </ul>
    <h4>Selecting Subsets</h4>
    <ul>
        <li>Use the select option to the left of the HIERARCHY button to select which subset of the loaded profiles
            should be displayed. This selection is also valid for the List View, but not for the Hierarchy View. You
            have 6 choices:
            <ul>
                <li><b>All</b> – All profiles.</li>
                <li><b>Ancestors</b> – Only direct ancestors of the central person.</li>
                <li><b>Descendants</b> – Only direct descendants of the central person.</li>
                <li><b>All "Above"</b> – Anyone that can be reached by first following a parent link from the central
                    person as long as they are not in the "Below" group. After the first link, any link can be followed.
                </li>
                <li><b>All "Below"</b> – Anyone that can be reached by first following any link other than a parent
                    link from the central person. If someone can be reached by both a parent link and any of the other
                    links, they are placed in the "Above" group if they are older than the central person.
                    Otherwise they are in the "Below" group.
                </li>
                <li><b>Missing Family</b> – By default, anyone who might possibly be missing a family member. The default
                    setting includes all of the following:
                    <ul>
                      <li>Anyone with no parents.</li>
                      <li>Anyone with only one parent.</li>
                      <li>Anyone with their "No more spouses" box unchecked.</li>
                      <li>Anyone with their "No more children" box unchecked.</li>
                      <li>Anyone without children and their "No more children" box unchecked.</li>
                    </ul>
                    You may fine-tune the above missing family setting by selecting any combination of the above values
                    in the Settings (see <img width=16px src="./views/cc7/images/setting-icon.png" /> at the top right).
                </li>
            </ul>
        </li>
    </ul>
    <h4>Filtering Rows</h4>
    <ul>
        <li>
            Limit the content of the table based on the content of columns by entering values in the filter
            boxes just below the column headers. Partial matching is used in text and date columns, while
            the complete numeric value is considered in numeric columns.
        </li>
        <li>
            Empty values can be selected by using '?'. For example ? in the death date column would show only
            people with no date of death.
        </li>
        <li>
            Any column can be filtered with '!', meaning "not matching". For text and date columns, this works
            on partial matches. For example !19 will exclude any date with 19 in it, including 1820-12-19. For
            numeric columns, the numbers as a whole are considered. For example !8 in the age column will
            exclude all 8 year olds.
        </li>
        <li>
            Numeric columns (including the years in date columns) can be filtered with &gt; and &lt;.
            For example, to see all people born after 1865, enter &gt;1865 in the birth year filter box.
        </li>
        <li>
            Clear the filters by clicking on the CLEAR FILTERS button that appears as soon as you have an
            active filter.
        </li>
    </ul>
    <h4>And...</h4>
    <ul>
        <li>
            The Died Young images, <img src="./views/cc7/images/47px-RTC_-_Pictures.jpeg" /> and
            <img src="./views/cc7/images/50px-Remember_the_Children-26.png" /> by default, are used to flag people
            (in their Children column) who died under age 5 and under age 16, respectively, provided they had
            no children. You can change the image by clicking on the settings gear
            (<img width=16px src="./views/cc7/images/setting-icon.png" />
            at the top right) and selecting the images you want to use.
        </li>
        <li>Click the images <img height=15px src="./views/cc7/images/Home_icon.png" /> and
            <img height=15px src="./views/cc7/images/timeline.png" /> to see a family sheet and timeline, respectively,
            of the given person.</li>
        <li> Some cells may be colour-coded as follows:
    </ul>
    <ul id="cc7ImgKey" class="cc7ImgKey">
        <li><span class="bioIssue">&nbsp;&nbsp;&nbsp;</span> Bio Check issue</li>
        <li><span class="bioIssue2">&nbsp;&nbsp;&nbsp;</span> Bio Check issue ("ignored")</li>
        <li><img src="./views/cc7/images/blue_bricks_small.jpg" /> missing father</li>
        <li><img src="./views/cc7/images/pink_bricks_small.jpg" /> missing mother</li>
        <li><img src="./views/cc7/images/purple_bricks_small.jpg" /> both parents missing</li>
        <li><span class="none"></span> the 'No more spouses/children' box is checked, or Died Young</li>
    </ul>
    <ul>
        <li>Click a Bio Check Issue cell to see the Bio Check report.</li>
        <li>You can close an open report/pop-up in four ways: 1) press the ESC key, 2) double-click the pop-up,
            3) click the [x] in the top right corner, or 4) click the button with which you opened it.</li>
    </ul>
    <h3>Hierarchy View</h3>
    <ul>
        <li>Numbers show the number of hidden profiles below each person.</li>
        <li>
            Icons show missing parents (blue and pink bricks for fathers and mothers, respectively), and potentially missing
            spouses and/or children.
        </li>
        <li>Click '+' to reveal more people.</li>
    </ul>
    <h4>Expanding and Collapsing the Hierarchy</h4>
    <ul>
        <li>Big '+' and '-' buttons expand and collapse by degree.</li>
    </ul>
    <h3>List View</h3>
    <ul>
        <li>Click a surname to show only those people.</li>
        <li>Click again to show all.</li>
    </ul>
    <h3>Other points</h3>
    <ul>
        <li>Double-clicking this 'About' box, or clicking the red X in its top right corner will close it.</li>
        <li>
            If you find problems with this page or have suggestions for improvements, let
            <a style="color: navy; text-decoration: none" href="https://www.wikitree.com/wiki/Smit-641">Riël</a> or
            <a style="color: navy; text-decoration: none" href="https://www.wikitree.com/wiki/Beacall-6">Ian</a>
            know about it.
        </li>
    </ul>`;

    constructor(selector, startId) {
        this.selector = selector;
        Settings.restoreSettings();
        $(selector).html(
            `<div id="connectionsGridContainer" class="connectionsGridTable">
            <button
                id="getPeopleButton"
                class="small button"
                title="Get a list of connected people up to this degree">
                Get CC3</button
            ><select id="cc7Degree" title="Select the degree of connection">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3" selected>3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option></select
            ><button id="getDegreeButton" class="small button" title="Get only people connected at the indicated degree">
                Get Degree 3 Only</button
            ><button id="cancelLoad" title="Cancel the current loading of profiles." class="small button">
                Cancel</button
            ><button id="savePeople" title="Save this data to a file for faster loading next time." class="small button">
                Save</button
            ><button id="loadButton" class="small button" title="Load a previously saved data file.">Load A File</button
            ><input type="file" id="fileInput" style="display: none"/>
            <span id="adminButtons">
            <span id="settingsButton" title="Settings"><img src="./views/cc7/images/setting-icon.png" /></span>
            <span id="help" title="About this">?</span>
            </span>
            ${Settings.getSettingsDiv()}
            <div id="explanation">${CC7.#helpText}</div>
            </div>`
        );

        const cc7Degree = Utils.getCookie("w_cc7Degree");
        if (cc7Degree && cc7Degree > 0 && cc7Degree <= CC7.MAX_DEGREE) {
            CC7.handleDegreeChange(cc7Degree);
        }
        $("#cc7Degree")
            .off("change")
            .on("change", function () {
                const theDegree = $("#cc7Degree").val();
                CC7.handleDegreeChange(theDegree);
            });
        $("#fileInput").off("change").on("change", CC7.handleFileUpload);
        $("#getPeopleButton").off("click").on("click", CC7.getConnectionsAction);

        $("#help")
            .off("click")
            .on("click", function () {
                $("#explanation").css("z-index", `${Settings.getNextZLevel()}`).slideToggle();
            });
        $("#explanation")
            .off("dblclick")
            .on("dblclick", function () {
                $(this).slideToggle();
            });
        $("#cc7Container #explanation x")
            .off("click")
            .on("click", function () {
                $(this).parent().slideUp();
            });
        $("#explanation").draggable();

        $("#settingsButton").off("click").on("click", CC7.toggleSettings);
        $("#saveSettingsChanges")
            .html("Apply Changes")
            .addClass("small button")
            .off("click")
            .on("click", CC7.settingsChanged);
        $("#settingsDIV")
            .css("width", "300")
            .dblclick(function () {
                CC7.toggleSettings();
            });
        $("#settingsDIV").draggable();
        Settings.renderSettings();
        CC7.setInfoPanelMessage();

        $("#cancelLoad").off("click").on("click", CC7.cancelLoad);
        $("#getDegreeButton").off("click").on("click", CC7.getOneDegreeOnly);

        $("#savePeople")
            .off("click")
            .on("click", function (e) {
                e.preventDefault();
                CC7.handleFileDownload();
            });
        $("#loadButton")
            .off("click")
            .on("click", function (e) {
                e.preventDefault();
                $("#fileInput").trigger("click");
            });
        $("#getPeopleButton").trigger("click");
        $(document).off("keyup", CC7.closePopup).on("keyup", CC7.closePopUp);
    }
}
