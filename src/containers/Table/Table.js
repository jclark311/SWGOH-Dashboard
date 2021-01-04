import React from 'react';

const DataTable = ({ row, cell }) => {
  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th width="30%">Name</th>
          <th width="28%">Zetas</th>
          <th width="8%">⭐</th>
          <th width="8%">G</th>
          <th width="8%">L</th>
          <th width="8%">Ready?</th>
        </tr>
      </thead>
      <tbody>
        <tr className="GRANDADMIRALTHRAWN">
          <td className="toonnamecolumn">Grand Admiral Thrawn</td>
          <td style={{padding: "0px;"}} className="success">
            <table className="table">
              <tbody>
                <tr>
                  <td className="danger leaderskill_GRANDADMIRALTHRAWN">Legendary Strategist</td>
                </tr>
                <tr>
                  <td className="success uniqueskill_GRANDADMIRALTHRAWN01">Ebb and Flow</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="success rarity">7</td>
          <td className="success">12</td>
          <td className="success">85</td>
          <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
        </tr>
        <tr className="EMPERORPALPATINE">
          <td className="toonnamecolumn">Emperor Palpatine</td>
          <td style={{padding: "0px;"}} className="success">
            <table className="table">
              <tbody>
                <tr>
                  <td className="success leaderskill_EMPERORPALPATINE">Emperor of the Galactic Empire</td>
                </tr>
                <tr>
                  <td className="success uniqueskill_EMPERORPALPATINE01">Crackling Doom</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="success rarity">7</td>
          <td className="success">12</td>
          <td className="success">85</td>
          <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
        </tr>
        <tr className="R2D2_LEGENDARY">
          <td className="toonnamecolumn">R2-D2</td>
          <td style={{padding: "0px;"}} className="success">
            <table className="table">
              <tbody>
                <tr>
                  <td className="success uniqueskill_R2D2_LEGENDARY01">Combat Analysis</td>
                </tr>
                <tr>
                  <td className="success uniqueskill_R2D2_LEGENDARY02">Number Crunch</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="success rarity">7</td>
          <td className="success">12</td>
          <td className="success">85</td>
          <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
        </tr>
        <tr className="BB8">
          <td className="toonnamecolumn">BB-8</td>
          <td style={{padding: "0px;"}} className="success">
            <table className="table">
              <tbody>
                <tr>
                  <td className="success uniqueskill_BB801">Roll with the Punches</td>
                </tr>
                <tr>
                  <td className="success uniqueskill_BB802">Self-Preservation Protocol</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="success rarity">7</td>
          <td className="danger">10</td>
          <td className="success">85</td>
          <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
        </tr>
        <tr className="COMMANDERLUKESKYWALKER">
          <td className="toonnamecolumn">Commander Luke Skywalker</td>
          <td style={{padding: "0px;"}} className="success">
            <table className="table">
              <tbody>
                <tr>
                  <td className="success leaderskill_COMMANDERLUKESKYWALKER">Rebel Maneuvers</td>
                </tr>
                <tr>
                  <td className="success uniqueskill_COMMANDERLUKESKYWALKER01">Learn Control</td>
                </tr>
                <tr>
                  <td className="success uniqueskill_COMMANDERLUKESKYWALKER02">It Binds All Things</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="success rarity">7</td>
          <td className="success">12</td>
          <td className="success">85</td>
          <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
        </tr>
        <tr className="REYJEDITRAINING">
          <td className="toonnamecolumn">Rey (Jedi Training)</td>
          <td style={{padding: "0px;"}} className="success">
            <table className="table">
              <tbody>
                <tr>
                  <td className="success leaderskill_REYJEDITRAINING">Inspirational Presence</td>
                </tr>
                <tr>
                  <td className="success uniqueskill_REYJEDITRAINING01">Virtuous Protector</td>
                </tr>
                <tr>
                  <td className="success uniqueskill_REYJEDITRAINING02">Insight</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="success rarity">7</td>
          <td className="success">13</td>
          <td className="success">85</td>
          <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
        </tr>
        <tr className="GRANDMASTERYODA">
          <td className="toonnamecolumn">Grand Master Yoda</td>
          <td style={{padding: "0px;"}} className="success">
            <table className="table">
              <tbody>
                <tr>
                  <td className="danger leaderskill_GRANDMASTERYODA">Grand Master's Guidance</td>
                </tr>
                <tr>
                  <td className="success specialskill_GRANDMASTERYODA03">Battle Meditation</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="success rarity">7</td>
          <td className="success">12</td>
          <td className="success">85</td>
          <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
        </tr>
        <tr className="CHEWBACCALEGENDARY">
          <td className="toonnamecolumn">Chewbacca</td>
          <td style={{padding: "0px;"}} className="success">
            <table className="table">
              <tbody>
                <tr>
                  <td className="success uniqueskill_CHEWBACCALEGENDARY01">Loyal Friend</td>
                </tr>
                <tr>
                  <td className="success uniqueskill_CHEWBACCALEGENDARY02">Raging Wookiee</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="success rarity">7</td>
          <td className="success">12</td>
          <td className="success">85</td>
          <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
        </tr>
        <tr className="C3POLEGENDARY">
          <td className="toonnamecolumn">C-3PO</td>
          <td style={{padding: "0px;"}} className="success">
            <table className="table">
              <tbody>
                <tr>
                  <td className="success specialskill_C3POLEGENDARY01">Oh My Goodness!</td>
                </tr>
                <tr>
                  <td className="success uniqueskill_C3POLEGENDARY02">Wait for Me!</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="success rarity">7</td>
          <td className="success">13</td>
          <td className="success">85</td>
          <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
        </tr>
        <tr className="JEDIKNIGHTREVAN">
          <td className="toonnamecolumn">Jedi Knight Revan</td>
          <td style={{padding: "0px;"}} className="success">
            <table className="table">
              <tbody>
                <tr>
                  <td className="success leaderskill_JEDIKNIGHTREVAN">General</td>
                </tr>
                <tr>
                  <td className="success specialskill_JEDIKNIGHTREVAN02">Direct Focus</td>
                </tr>
                <tr>
                  <td className="success uniqueskill_JEDIKNIGHTREVAN02">Hero</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="success rarity">7</td>
          <td className="success">12</td>
          <td className="success">85</td>
          <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
        </tr>
        <tr className="DARTHREVAN">
          <td className="toonnamecolumn">Darth Revan</td>
          <td style={{padding: "0px;"}} className="success">
            <table className="table">
              <tbody>
                <tr>
                  <td className="success leaderskill_DARTHREVAN">Lord of the Sith</td>
                </tr>
                <tr>
                  <td className="success uniqueskill_DARTHREVAN01">Conqueror</td>
                </tr>
                <tr>
                  <td className="success uniqueskill_DARTHREVAN02">Villain</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="success rarity">7</td>
          <td className="success">13</td>
          <td className="success">85</td>
          <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
        </tr>
        <tr className="DARTHMALAK">
          <td className="toonnamecolumn">Darth Malak</td>
          <td style={{padding: "0px;"}} className="danger">
            <table className="table">
              <tbody>
                <tr>
                  <td className="danger uniqueskill_DARTHMALAK01">Gnawing Terror</td>
                </tr>
                <tr>
                  <td className="danger uniqueskill_DARTHMALAK02">Jaws of Life</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="danger rarity">6</td>
          <td className="danger">11</td>
          <td className="success">85</td>
          <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
        </tr>
        <tr className="PADMEAMIDALA">
          <td className="toonnamecolumn">Padmé Amidala</td>
          <td style={{padding: "0px;"}} className="success">
            <table className="table">
              <tbody>
                <tr>
                  <td className="success leaderskill_PADMEAMIDALA">Unwavering Courage</td>
                </tr>
                <tr>
                  <td className="success uniqueskill_PADMEAMIDALA01">Always a Choice</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="success rarity">7</td>
          <td className="success">13</td>
          <td className="success">85</td>
          <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
        </tr>
      </tbody>
    </table>
  )
}

export default DataTable;
