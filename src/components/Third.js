import React, { Component } from 'react'

 class Third extends Component {
    render() {
      function Djs(props) {
         return <span> <p>{props.name}</p> {props.time}</span>
        

      }
        return (
            <div>
                
                <div className="components">
                    <h3>FESTIVAL SCHEDULE</h3>
                    <p>Relive the moments and the music 2022</p>

                    <table style={{width: '94.4129%', height: '300px'}} border={1}>
        <tbody>
          <tr style={{height: '35px'}}>
            <td className="date" style={{width: '22%', height: '35px'}}>&nbsp; Day 1 <br /> 19 july 2022</td>
            <td style={{width: '19%', height: '35px'}}>&nbsp;
            
            <span>< Djs name="Ellen Allien"  time="20:00-21:00"/></span>
            </td>
            <td style={{width: '19%', height: '35px'}}>&nbsp;
            <span>< Djs name="Insect"  time="21:00-22:00"/></span>
            </td>
            <td style={{width: '19%', height: '35px'}}>&nbsp;
            <span>< Djs name="Paula Temple"  time="21:00-22:00"/></span>
            </td>
            <td  style={{width: '19%', height: '35px'}}>&nbsp;
            <span>< Djs name="E6JOU"  time="21:00-22:00"/></span>
            </td>
          </tr>
          <tr style={{height: '35px'}}>
            <td  className="date" style={{width: '22%', height: '35px'}}>&nbsp; Day 2 <br /> 19 july 2022</td>
            <td colspan="2" style={{width: '19%', height: '35px'}}>&nbsp;
            <span>< Djs name="Pablo Bozzi"  time="21:00-22:00"/></span>
            </td>
            
            <td colspan="2" style={{width: '19%', height: '35px'}}>&nbsp;
            <span>< Djs name="KOZLOV"  time="21:00-22:00"/></span>
            </td>
            
          </tr>
          <tr style={{height: '35px'}}>
            <td className="date" style={{width: '22%', height: '35px'}}>&nbsp;
             Day 3 <br /> 19 july 2022
            
            </td>
            
            <td style={{width: '19%', height: '35px'}}>&nbsp;
            <span>< Djs name="Rorganic"  time="21:00-22:00"/></span>
            </td>
            <td style={{width: '19%', height: '35px'}}>&nbsp;
            <span>< Djs name="Durch"  time="21:00-22:00"/></span>
            </td>
            <td style={{width: '19%', height: '35px'}}>&nbsp;
            <span>< Djs name="MCMLXXXV"  time="21:00-22:00"/></span>
            </td>
            <td  style={{width: '19%', height: '35px'}}>&nbsp;
            <span>< Djs name="Andrew Moore"  time="21:00-22:00"/></span>
            </td>
          </tr>
          <tr style={{height: '14.367px'}}>
            <td className="date" style={{width: '22%', height: '35px'}}>&nbsp; Day 4 <br /> 19 july 2022</td>
            <td style={{width: '19%', height: '35px'}}>&nbsp;
            <span>< Djs name="BICEP"  time="21:00-22:00"/></span>
            </td>
            <td colSpan="2" style={{width: '19%', height: '35px'}}>&nbsp;
            <span>< Djs name="The Blaze"  time="21:00-22:00"/></span>
            </td>
            <td  style={{width: '19%', height: '35px'}}>&nbsp;
            <span>< Djs name="999999999"  time="21:00-22:00"/></span>
            </td>
          </tr>

          <tr style={{height: '14.367px'}}>
            <td className="date" style={{width: '22%', height: '35px'}}>&nbsp; Day 5 <br /> 19 july 2022</td>
            <td style={{width: '19%', height: '35px'}}>&nbsp;
            <span>< Djs name="Hector Oaks "  time="21:00-22:00"/></span>
            
            </td>
            <td style={{width: '19%', height: '35px'}}>&nbsp;
            <span>< Djs name="Tima Tama"  time="21:00-22:00"/></span>
            
            </td>
            <td style={{width: '19%', height: '35px'}}>&nbsp;
            <span>< Djs name="SNTS"  time="21:00-22:00"/></span>
            
            </td>
            <td  style={{width: '19%', height: '35px'}}>&nbsp;
            <span>< Djs name="KAS:ST "  time="21:00-22:00"/></span>
            
            </td>
          </tr>

        </tbody>
      </table>
                </div>
                
            </div>
        )
    }
}

export default Third
