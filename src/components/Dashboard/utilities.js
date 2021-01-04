//Ensure the results and player select are hidden
$('#results').addClass('hidden');
$('#json').addClass('hidden');

var language = 'ENG_US'; //DEFAULT TO ENGLISH
var squads = null;
var units = null;
var zetas = null;
var player = null;
var roster = null;
var abilitylist = null;
var skillList = null;
var playerRequest = null;
var skillRequest = null;
var abilityRequest = null;
var unitRequest = null;
var latestVersion = null;
var lastupdated = null;
var languagechanged = false;
var version = 1; //Increment this whenever all localStorage of every user needs cleared because of changes to this code.
var tabFromURL = null;
var allycode = null;

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}

//On window load...
$(document).ready(function() {
    fetch('https://api.swgoh.help/version')
    .then((resp) => resp.json())
    .then(function(data) {
        latestVersion = data.game;
        console.log(latestVersion);
        mainLoad();
    }).catch(function(err) {
        console.log('Fetch Error :-S', err);
    });

});

function mainLoad() {
  tabFromURL = getUrlVars()["tab"];
  if (tabFromURL) {
    tabFromURL = tabFromURL.split("#")[0];
  }

  allycode = getUrlVars()["allycode"];
    checkStorage();
    var $activeTab = $('#results>.tab-content>.tab-pane.active');
    var activeTab = $activeTab.attr('id');

    //Clear current tab data
    $activeTab.html('');

    if (allycode){
      console.log('hello there!');
      $('#loadingGif').modal('show');
      postPlayer(allycode);
    } else {
      clickPlayer();
    }
}

function clickPlayer() {
    $('#getPlayer').on('click', function(event) {
        event.preventDefault();
        allycode = $('#allycode').val();
        language = $('#lang').val();
        if (localStorage.getItem('language')) {
            if (language !== localStorage.getItem('language')) {
                clearStorage();
                localStorage.setItem('language', language);
                languagechanged = true;
                console.log("Language was changed, fetching new data...");
            }
        } else {
            console.log('No previous language detected');
            localStorage.setItem('language', language);
        }
        $('#loadingGif').modal('show');
        postPlayer();
    });
}

function postPlayer() {
    if (!checkPlayer(allycode) || languagechanged || !player) {
        roster = null;
        var $activeTab = $('#results>.tab-content>.tab-pane.active');
        var activeTab = $activeTab.attr('id');

        //Clear current tab data
        $activeTab.html('');
        var playerRequest = jQuery.ajax({
            type: 'POST',
            url: './playerProfile.php',
            data: {
                allycode: allycode,
                lang: language
            }
        });
        playerRequest.done((msg, textStatus) => {
            player = msg;
            console.log(textStatus);
            $('#loadingGif').modal('hide');
            handlePlayer();
        });
        playerRequest.fail((jqXHR, textStatus, errorThrown) => {
            alert("playerRequest failed: " + errorThrown);
        });
    } else {
        //$('#loadingGif').modal('hide');
        player = localStorage.getItem('player');
        player = JSON.parse(player);
        loadPlayer();
    }
}

function handlePlayer() {
    $.when(playerRequest).done(function() {
        localStorage.setItem('player', JSON.stringify(player));
        loadPlayer();
    });
}

function loadPlayer() {

    if (player) {
      console.log(player);

        let alert = null;

        if (player.error){
          alert = player.error;
          localStorage.removeItem('player');
        }

        player = player[0];
        setHeader();

        $('#togglemains').on('click', function() {
            $('.notmainteam').toggle();
        });

        $('#togglecomplete').on('click', function() {
            $('.notready').toggle();
        });

        $('#results').removeClass('hidden');
        drawRosterProgress(alert);
    }

    //Calculate roster progress on tab selection
    $('a[data-toggle="tab"]').on('shown.bs.tab', function() {
        $('#results').removeClass('hidden');
        drawRosterProgress();
    });
}

function setHeader() {
    player.stats.sort( (a, b) => { return a.index - b.index } );
    $('#playerName').html('<tr><td><h2>' + player.name + '<small> ' + player.stats[0].value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' GP</small></h2>' + '</td><td></td></tr>' + '<tr><td style="font-size:18px;">' + player.guildName + '</td></tr>' + '<!--<tr><td><button type="button" id="togglemains" class="btn btn-primary">Toggle Mains</button></td></tr>-->');
}

async function getDataFiles() {
    try {
        //Convert roster
        if (!roster) {
            await convertRoster();
        }
        //Fetch squads json from data
        if (!squads) {
            squads = await fetch('./data/squads.json?=' + Date.now());
            squads = await squads.json();
        }
        //Fetch units json from API data
        if (!units) {
            console.log('units not defined');
            let project = {
                nameKey: 1,
                baseId: 1
            };
            var unitRequest = jQuery.ajax({
                type: "POST",
                url: './languages.php',
                data: {
                    dump: 'unitsList',
                    lang: language,
                    project: project,
                    baseId: 'rarity',
                    match: 7,
                    version: latestVersion
                }
            });
            unitRequest.done((msg) => {
                units = msg;
                console.log('local units filled');
                localStorage.setItem('units', JSON.stringify(msg));
                localStorage.setItem('lastupdated', Date.now());
            });
            unitRequest.fail((jqXHR, textStatus) => {
                alert("unitRequest failed: " + textStatus);
            });
        }
        //Fetch abilitylist json from API data
        if (!abilitylist) {
            console.log('abilitylist not defined');
            let project = {
                nameKey: 1,
                id: 1
            };
            var abilityRequest = jQuery.ajax({
                type: "POST",
                url: './languages.php',
                data: {
                    dump: 'abilityList',
                    lang: language,
                    project: project,
                    version: latestVersion
                }
            });
            abilityRequest.done((msg) => {
                abilitylist = msg;
                console.log('local abilitylist filled');
                localStorage.setItem('abilitylist', JSON.stringify(msg));
            });
            abilityRequest.fail((jqXHR, textStatus) => {
                alert("abilityRequest failed: " + textStatus);
            });
        }

        //Fetch skillList json from API data
        if (!skillList) {
            console.log('skillList not defined');
            let project = {
                abilityReference: 1,
                id: 1
            };
            var skillRequest = jQuery.ajax({
                type: "POST",
                url: './languages.php',
                data: {
                    dump: 'skillList',
                    lang: language,
                    project: project,
                    baseId: 'isZeta',
                    match: 1,
                    version: latestVersion
                }
            });
            skillRequest.done((msg) => {
                skillList = msg;
                console.log('local skilllist filled');
                localStorage.setItem('skillList', JSON.stringify(msg));
            });
            skillRequest.fail((jqXHR, textStatus) => {
                alert("skillRequest failed: " + textStatus);
            });
            //drawTab(skillRequest);
        }
        drawTab(skillRequest, abilityRequest, unitRequest);

    } catch (e) {
        console.error(e);
    }
}

async function convertRoster() {
    try {

        roster = {};
        for (let unit of player.roster) {
            let uz = unit.skills.filter(x => x.isZeta && x.tier === 8);

            let zs = [];
            for (let z of uz) {
                zs.push(z.id);
            }
            roster[unit.defId] = [];
            roster[unit.defId].push({
                "gear_level": unit.gear,
                "power": Math.floor(unit.gp),
                "level": unit.level,
                "combat_type": (
                    unit.type === 'char'
                    ? 1
                    : 2),
                "rarity": unit.rarity,
                "player": player.name,
                "zetas": zs
            });

        }

    } catch (e) {
        console.error(e);
    }
}

async function drawRosterProgress(alert) {
    try {
        if (alert) {
            $('#results').html('<p class="alert alert-danger">' + alert + '</p>');
            return;
        }
        //Prepare support files
        await getDataFiles();
    } catch (e) {
        console.error(e);
    }
}

function clearStorage() {
  //Clear all localStorage except allycode
  console.log("suck it JS" + localStorage.getItem('lastupdated') + "<" + latestVersion);
    localStorage.removeItem('abilitylist');
    localStorage.removeItem('lastupdated');
    localStorage.removeItem('player');
    localStorage.removeItem('skillList');
    localStorage.removeItem('units');
    abilitylist = null;
    lastupdated = null;
    player = null;
    skillList = null;
    units = null;

    console.log("Storage Cleared!");
}

function calculateRosterProgress(unit, requirements) {

    try {
        let tdCls = '';
        let pass = true;
        let uid = unit.split(":")[0];
        let squadHTML = '<tr class="' + uid + '">';

        //Name
        var pUnit = units.filter(n => n.baseId === uid);

        squadHTML += '<td class="toonnamecolumn">' + pUnit[0].nameKey + '</td>';

        if (!roster[uid] || roster[uid].length === 0) {
            //Locked
            squadHTML += '<td class="warning" colspan="5">Locked</td>';
            pass = false;
        } else {

            //Zetas
            let zetaFail = '';
            if (requirements.ships) {
                squadHTML += '<td class="hidden">' + requirements.ships + '</th>';
            } else {
                tdCls = 'success';

                let zs = unit.split(':').slice(1);
                for (let z of zs) {
                    if (!roster[uid][0].zetas.includes(z.charAt(0))) {
                        tdCls = 'danger';
                    }
                }

                let zetauid = unit.split(":").slice(1);

                function include(arr, obj) {
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i] == obj)
                            return true;
                        }
                    }

                for (poop of zetauid) {
                    if (!include(roster[uid][0].zetas, poop)) {
                        pass = false;
                    }

                }

                let zetanames = '';

                //Fetch the plain names of the zetas
                if (zetauid.length > 0) {
                    let zetaFail = 'success';
                    for (let uuid of zetauid) {
                        var pSkill = skillList.filter(n => n.id === uuid);
                        if (!pSkill[0]) {
                            console.log(uuid);
                        }
                        var pName = abilitylist.filter(y => y.id === pSkill[0].abilityReference);
                        // console.log("line 394: ", pSkill);
                        // console.log("line 395: ", pName);

                        for (zetamatches of roster[uid][0].zetas) {
                            if (zetamatches == uuid) {
                                tdCls = 'success';
                                break;
                            } else {
                                tdCls = 'danger';
                            }
                        }

                        zetanames += '<tr><td class="' + tdCls + ' ' + uuid + '">' + pName[0].nameKey + '</td></tr>';

                    }
                }
                if (!zetanames) {
                    tdCls = "default";
                }
                squadHTML += '<td style="padding:0px;" class="' + tdCls + '"><table class="table">' + zetanames + '</table></td>';
            }

            //Rarity
            tdCls = 'success';
            if (roster[uid][0].rarity < requirements.rarity) {
                pass = false;
                tdCls = 'danger';
            }
            squadHTML += '<td class="' + tdCls + ' rarity">' + roster[uid][0].rarity + '</td>';

            //Gear
            if (requirements.ships) {
                squadHTML += '<td class="hidden">' + requirements.ships + '</th>';
            } else {
                tdCls = 'success';
                if (roster[uid][0].gear_level < requirements.gear_level) {
                    pass = false;
                    tdCls = 'danger';
                }
                squadHTML += '<td class="' + tdCls + '">' + roster[uid][0].gear_level + '</td>';
            }

            //Level
            tdCls = 'success';
            if (roster[uid][0].level < requirements.level) {
                pass = false;
                tdCls = 'danger';
            }
            squadHTML += '<td class="' + tdCls + '">' + roster[uid][0].level + '</td>';

            //Ready
            squadHTML += '<td class="completeunit ' + (
                pass
                ? 'success'
                : 'danger') + '">' + (
                pass
                ? '<span class="glyphicon glyphicon-ok"></span>'
                : '<span class="glyphicon glyphicon-remove"></span>') + '</td>';
        }
        squadHTML += '</tr>';
        return squadHTML;

    } catch (e) {
        console.error(e);
    }

}

function drawTab(skillRequest, abilityRequest, unitRequest, playerRequest) {
    $.when(skillRequest, abilityRequest, unitRequest, playerRequest).done(function() {
        $('#loadingGif').modal('hide');

        if (tabFromURL){
          $('[href="#' + tabFromURL + '"]').tab('show');
          tabFromURL = null;
        }


        var $activeTab = $('#results>.tab-content>.tab-pane.active');
        var activeTab = $activeTab.attr('id');

        //Clear current tab data
        $activeTab.html('');


        //Ensure we have squads and it contains the active tab
        if (squads && squads[activeTab]) {

            //Start with event title
            $activeTab.append('<h2>' + squads[activeTab].name + '</h2>');

            //Loop through each event phase
            for (let phase of squads[activeTab].phase) {

                var phaseHTML = '<div class="row">';

                //Add phase name
                phaseHTML += '<a name="' + phase.anchor + '"></a><div id="' + phase.anchor + '"></div><div class="col-xs-12" style="position: sticky; position: -webkit-sticky; position: -moz-sticky; position: -ms-sticky; position: -o-sticky; top:' + document.getElementsByClassName('navbar-header')[0].clientHeight/2 + 'px; z-index: 2;"><h3>' + phase.name + '<br><small>Requirements - ' + squads[activeTab].rarity + ' Star - Gear ' + squads[activeTab].gear + ' - Level ' + squads[activeTab].level + '</small></h3></div>';
                phaseHTML += '<div class="col-xs-12">';
                phaseHTML += '</div>';

                //Loop through each squad applicable to phase

                for (let squad of phase.squads) {
                  if (squad.gear){
                    let replace = 'Gear ';
                    phaseHTML = phaseHTML.replace(phaseHTML.substr(phaseHTML.lastIndexOf(replace) + replace.length, 1), squad.gear);
                  }

                  if (squad.level){
                    let replace = 'Level ';
                    phaseHTML = phaseHTML.replace(phaseHTML.substr(phaseHTML.lastIndexOf(replace) + replace.length, 2), squad.level);
                  }

                    //Contain within columns
                    var squadHTML = squad.main
                        ? '<div class="col-md-6 tablestart">'
                        : '<div class="col-md-6 tablestart notmainteam">';

                    //Add squad name and notes
                    squadHTML += '<h4>' + squad.name;
                    squadHTML += squad.note.length > 0
                        ? ' - <small>' + squad.note + ''
                        : '<small>';
                    if (squad.panic){
                      if (squad.note) {
                        squadHTML += '<br/>';
                      }
                      squadHTML += '<a href=' + squad.panic + ' target="blank">Panic Farming Calculator</a>'
                    } else {
                      squadHTML += '';
                    }
                    squadHTML += squad.url.length > 0
                        ? ' - <a href=' + squad.url + ' target="blank">Link</a></small></h4>'
                        : '</small></h4>';

                    //Begin preparing table
                    squadHTML += '<table class="table table-striped table-bordered">';

                    squadHTML += '<thead><tr>';
                    squadHTML += '<th width="30%">Name</th>';
                    squadHTML += squad.ships
                        ? '<th class="hidden"></th>'
                        : '<th width="28%">Zetas</th>';
                    squadHTML += '<th width="8%">⭐</th>';
                    squadHTML += squad.ships
                        ? '<th class="hidden"></th>'
                        : '<th width="8%">G</th>';
                    squadHTML += '<th width="8%">L</th>';
                    squadHTML += '<th width="8%">Ready?</th>';
                    squadHTML += '</tr></thead>';

                    //Loop through each unit in squad and calculate display
                    for (let unit of squad.team) {
                        squadHTML += calculateRosterProgress(unit, {
                            ships: (squad.ships || false),
                            rarity: squads[activeTab].rarity,
                            gear_level: squads[activeTab].gear,
                            level: squads[activeTab].level
                        });
                    }

                    squadHTML += '</tbody>';
                    squadHTML += '</table>';
                    phaseHTML += squadHTML + '</div>';

                }

                $activeTab.append(phaseHTML);

            }

        }
        $activeTab.append('<div><tr><td><button type="button" id="clearlocal" class="btn btn-primary">Clear localStorage</button></td></tr></div>');
        //drawCheckboxes();
        calculateTeamReadiness();
        if (location.hash && allycode) {
            var target = location.hash;
            $(window).scrollTop(document.querySelector(target).offsetTop);
        }
        $('#clearlocal').on('click', function() {
            localStorage.clear();
        });
    });
}

function checkStorage() {

    localStorage.getItem('units')
        ? units = JSON.parse(localStorage.getItem('units'))
        : units = null;
    localStorage.getItem('abilitylist')
        ? abilitylist = JSON.parse(localStorage.getItem('abilitylist'))
        : abilitylist = null;
    localStorage.getItem('skillList')
        ? skillList = JSON.parse(localStorage.getItem('skillList'))
        : skillList = null;
    localStorage.getItem('player')
        ? player = JSON.parse(localStorage.getItem('player'))
        : player = null;

    //Clear everything but allyCode from localStorage if the data is out of date
    if (localStorage.getItem('lastupdated')) {
        if (checkIfExpired(localStorage.getItem('lastupdated'), latestVersion)) {
          console.log(localStorage.getItem('lastupdated') + "<" + latestVersion);
            clearStorage();
            console.log("localStorage is outdated.  Clearing...");
        }
    }

    if (!localStorage.getItem('version')) {
        clearStorage();
        console.log("version is not set.");
        localStorage.setItem('version', version);
    } else {
        if (localStorage.getItem('version') != version) {
          console.log("version is too old.");
          clearStorage();
          localStorage.setItem('version', version);
        }
    }
}

function checkPlayer() {
    //Clear the player profile from localStorage every 12 hours
    if (localStorage.getItem('playerlastupdated')) {
        if (Date.now() - localStorage.getItem('playerlastupdated') > 12 * 60 * 60 * 1000) {
            localStorage.removeItem('player');
            localStorage.setItem('playerlastupdated', Date.now());
            player = null;
            console.log("Player Storage Cleared!");
            return false;
        }
    } else {
        console.log('First time user');
        clearStorage();
        localStorage.setItem('playerlastupdated', Date.now());
        player = null;
        return false;
    }

    if (localStorage.getItem('allyCode')) {
        if (localStorage.getItem('allyCode') != allycode) {
            console.log("Allycode is different, resetting...");
            localStorage.setItem('allyCode', allycode);
            player = null;
            if (localStorage.getItem('player')) {
                localStorage.removeItem('player');
            }
            return false;
        }
    }

    console.log("4");
    return true;
}

function checkIfExpired(a, b) {
    if (a < b)
        return true;
    else
        return false;
    }

//HACK: Should really be worked into the drawing routine, this is a quick hack to test out committing to Git, etc.
function drawCheckboxes() {
    //skip tabs that shouldn't have checkboxes.
    if ($('section#results li.active')[0].textContent === 'Events')
        return;
    if ($('section#results li.active')[0].textContent === 'Player Overview')
        return;

    //The purpose of this mod is to make creating teams for the Sith raid easier.
    //This mod can be activated easily.
    //First load the character sheet in your browser.
    //Second, bring up the debugger and select the console tab (F12 in Chrome.)
    //Third paste this post into the console window.
    //It should work on all browsers, but I've only tested in Chrome.
    //It doesn't persist any data, you'll need to write down the team names if you want to remember them.

    //This code adds checkboxes to each Team
    //The scale is to make the checkboxes larger for touch, and the margin makes it further from the text, most important for the header since some of them have links.
    //This could be extended to toggle ALL the characters under it or diabled if there are any unchecked. I left that as an exercise for the reader ;)
    $('<input />', {
        type: 'checkbox',
        class: 'squadcheckbox',
        style: 'transform:scale(1.6);margin-right:20px'
    }).prependTo($('h4'));
    $('h4 input.squadcheckbox').click(function() {
        $($($(this).parent()[0].nextSibling).find('input:checkbox.tooncheckbox')).trigger('click');
    });
    $('table tbody').find('tr').each(function() {
        var current = $(this).find('td:first');
        if (current.attr('class') === 'toonnamecolumn') {
            $('<input />', {
                type: 'checkbox',
                class: 'tooncheckbox',
                style: 'transform:scale(1.6);margin-right:10px'
            }).prependTo($(this).find('td:first'));
        }
    });

    //This code adds linked checkboxes to every character. Clicking a character will toggle ALL instances of that character.
    //This makes it much easier to find out which teams use characters that aren't used yet.
    $('table tbody tr input:checkbox.tooncheckbox').off('click');
    $('table tbody tr').each(function() {
        var row = this;
        $(this).find('input:checkbox.tooncheckbox').click(function() {
            $('[class^="' + $(row).attr('class').replace(/:.*/, "") + '"]').each(function() {
                if (row !== this) {
                    if ($(row).attr('class').substr(0, 3) === 'REY' && $(this).attr('class').substr(0, 3) === 'REY') {
                        if (($(row).attr('class').substr(0, 4) === 'REYJ' && $(this).attr('class').substr(0, 4) === 'REYJ') || ($(row).attr('class').substr(0, 4) !== 'REYJ' && $(this).attr('class').substr(0, 4) !== 'REYJ'))
                            $(this).find('input:checkbox.tooncheckbox').prop("checked", !$(this).find('input:checkbox.tooncheckbox').prop("checked"));
                        }
                    else if ($(row).attr('class').substr(0, 7) === 'KYLOREN' && $(this).attr('class').substr(0, 7) === 'KYLOREN') {
                        if (($(row).attr('class').substr(0, 8) === 'KYLORENU' && $(this).attr('class').substr(0, 8) === 'KYLORENU') || ($(row).attr('class').substr(0, 8) !== 'KYLORENU' && $(this).attr('class').substr(0, 8) !== 'KYLORENU'))
                            $(this).find('input:checkbox.tooncheckbox').prop("checked", !$(this).find('input:checkbox').prop("checked"));

                        }
                    else
                        $(this).find('input:checkbox.tooncheckbox').prop("checked", !$(this).find('input:checkbox.tooncheckbox').prop("checked"));
                    }
                })
        })
    })

    function changeTabs() {
        var tabName = $("#results ul li.active a")[0].innerText;
        var isHeroic = tabName === "Sith raid" || tabName === "Heroic Rancor" || tabName === "Heroic Tank";
        //For each section
        $('table tbody').each(function() {
            var strikeHeader = false;
            //for each row
            $(this).find('tr').each(function() {
                var row = $($(this)[0]);
                $(this).find('td.rarity').each(function() {
                    var rarityElement = $(this);
                    if (rarityElement.length === 1) {
                        var rarity = rarityElement[0].innerText;
                        if (isHeroic) {
                            strikeHeader = strikeHeader || rarity !== "7";
                            row.css("text-decoration", function(_, td) {
                                return rarity !== "7"
                                    ? "line-through"
                                    : "none";
                            });
                        } else {
                            row.css("text-decoration", function(_, td) {
                                return "none";
                            });
                        }
                    } else {
                        //locked characters
                        strikeHeader = true;
                    }
                });
            });
            if (isHeroic)
                $($($($(this)[0].parentNode)[0].parentNode)[0]).find("H4").css("text-decoration", function(_, td) {
                    return strikeHeader
                        ? "line-through"
                        : "none";
                });
            }
        );
    }

    //add in strikethrough for items below level 7 for heroic teams
    $('#results ul li').click(function() {
        changeTabs();
    });
    $(function() {
        changeTabs();
    });
};

$(function() {
    $('input#allycode').blur(function() {
      if (!localStorage.getItem('allyCode')){
        localStorage.setItem('allyCode', $('input#allycode')[0].value);
      }

    });
    $('input#allycode')[0].value = localStorage.allyCode
        ? localStorage.allyCode
        : "";
    $('[name="allycode"]').focus();
})

//Add readiness to each table
function calculateTeamReadiness() {
    var tables = $('div[class*="tablestart"]');
    for (var t = 0; t < tables.length; t++) {
        var success = $(tables[t]).find('.glyphicon-ok');
        var score = success.length;;
        if (score < 5) {
            $(tables[t]).addClass('notready');
        }
    }
}
