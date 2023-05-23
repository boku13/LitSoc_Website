import React from 'react'
import { useState } from 'react'
import {teamsNavPanelItems} from '../../data/Teams'
import TeamMembersGen from './TeamMembersGen'

export default function TeamMain() {

    let [displayTeam, setDisplayTeam] = useState('current')
    let Team = teamsNavPanelItems["Team"]
    let Alumni = teamsNavPanelItems["alumni"]

    return (
        <div className='teams-main-body'>
            <div className='teams-nav-panel'>
                {/* <div className='teams-nav-panel-items'> */}
                <div className='teams-nav-panel-items' onClick={()=>setDisplayTeam('current')}>
                    {Team.title}       
                </div>
                {/* </div> */}

                {/* <div className='teams-nav-panel-items teams-nav-alumni-label'> */}
                    <div className='teams-nav-panel-items'>
                        {Alumni.title}
                        <ul className='teams-nav-drop-down-ul'>
                            {
                                Alumni.dropdown.map((item) =>(
                                    <button key= {item.id}className="teams-nav-dropdown-items" tabIndex={item.index} onClick={()=>setDisplayTeam(item.year)}>
                                        {item.year}
                                    </button>
                                ))
                            }
                        </ul>
                    </div>
                {/* </div> */}
            </div>

            <TeamMembersGen displayTeam={displayTeam} />
        </div>
    )
}
