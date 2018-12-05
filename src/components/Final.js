import React from 'react';
import '../index.css';


class Final extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            race:''
        }
    }


    render() {
      return (
        <div className='main'>
          <div className='container'>
            <div className='header'>
              <div className='name'><h1>Wiedzimak</h1></div>
              <div className='race'>
                <div className='row'><span>Class</span><span>Background</span><span>Player</span></div>
                <div className='row'><span>Race</span><span>Alignment</span><span>Exp</span></div>
              </div>
            </div>
            <div className='data'>
              <div className='col'>
                <div className='skills'>
                  <div className='attributes'>
                    <ul>
                      <li>Str</li>
                      <li>Dex</li>
                      <li>Const</li>
                      <li>Int</li>
                      <li>Wis</li>
                      <li>Char</li>
                    </ul>
                  </div>
                  <div className='abilities'>
                    <ul>
                      <li>x</li>
                      <li>x</li>
                      <li>x</li>
                      <li>x</li>
                      <li>x</li>
                      <li>x</li>
                      <li>x</li>
                      <li>x</li>
                      <li>x</li>
                      <li>x</li>
                      <li>x</li>
                      <li>x</li>
                      <li>x</li>
                      <li>x</li>
                      <li>x</li>
                      <li>x</li>
                      <li>x</li>
                      <li>x</li>
                      <li>x</li>
                      <li>x</li>
                      <li>x</li>
                      <li>x</li>
                      <li>x</li>
                    </ul>
                  </div>
                </div>
                <div className='lang'>
                  <ul>
                    <li>Common</li>
                    <li>Elvish</li>
                  </ul>
                </div>
              </div>
              <div className='col'>
                <div className='defense'>
                  <div style={{display:'flex'}}>
                    <div>Armor Class</div>
                    <div>Initiative</div>
                    <div>Speed</div>
                  </div>
                  <div>Current HP</div>
                  <div>Temporary HP</div>
                  <div style={{display:'flex'}}>
                    <div>Hit dice</div>
                    <div>Death Saves</div>
                  </div>
                </div>
                <div className='attack'>jakieś tam ataki</div>
                <div className='items'>miecze i łuki</div>
              </div>
              <div className='col'>
                <div className='personality'>
                  <ul>
                    <li>Personality Traits</li>
                    <li>Ideals</li>
                    <li>Bonds</li>
                    <li>Flaws</li>
                  </ul>
                </div>
                <div className='features'>cośtam cośtam</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

export default Final;
